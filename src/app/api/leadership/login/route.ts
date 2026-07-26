import { NextResponse } from "next/server";
import {
  createLeadershipSession,
  leadershipAuthConfigured,
  leadershipCookieName,
  leadershipCookieOptions,
  verifyLeadershipCredentials,
} from "@/lib/auth";
import { requestFingerprint } from "@/lib/request";

export const runtime = "nodejs";

const attempts = new Map<string, { count: number; resetAt: number }>();

function loginAllowed(fingerprint: string) {
  const now = Date.now();
  const existing = attempts.get(fingerprint);
  if (!existing || existing.resetAt <= now) {
    attempts.set(fingerprint, { count: 1, resetAt: now + 15 * 60 * 1000 });
    return true;
  }
  existing.count += 1;
  return existing.count <= 8;
}

function loginRedirect(request: Request, error?: string) {
  const url = new URL("/leadership/login", request.url);
  if (error) url.searchParams.set("error", error);
  return NextResponse.redirect(url, 303);
}

export async function POST(request: Request) {
  if (!leadershipAuthConfigured()) {
    return loginRedirect(request, "configuration");
  }

  if (!loginAllowed(requestFingerprint(request))) {
    return loginRedirect(request, "rate-limit");
  }

  const formData = await request.formData();
  const email = String(formData.get("email") || "").trim().toLowerCase();
  const accessCode = String(formData.get("accessCode") || "");

  if (!verifyLeadershipCredentials(email, accessCode)) {
    return loginRedirect(request, "invalid");
  }

  attempts.delete(requestFingerprint(request));
  const response = NextResponse.redirect(new URL("/leadership", request.url), 303);
  response.cookies.set(
    leadershipCookieName,
    createLeadershipSession(email),
    leadershipCookieOptions(),
  );
  return response;
}
