import "server-only";

import { createHash, createHmac, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";

export const leadershipCookieName = "firststep_leadership";
const sessionLifetimeSeconds = 12 * 60 * 60;

export type LeadershipSession = {
  email: string;
  expiresAt: number;
};

function configuredEmails() {
  return (process.env.LEADERSHIP_EMAILS || "firststepteam2020@gmail.com")
    .split(",")
    .map((value) => value.trim().toLowerCase())
    .filter(Boolean);
}

function authSecret() {
  if (process.env.AUTH_SECRET) return process.env.AUTH_SECRET;
  if (process.env.NODE_ENV !== "production") return "firststep-local-development-secret";
  return null;
}

function digest(value: string) {
  return createHash("sha256").update(value).digest();
}

function secureEqual(left: string, right: string) {
  return timingSafeEqual(digest(left), digest(right));
}

function signature(payload: string, secret: string) {
  return createHmac("sha256", secret).update(payload).digest("base64url");
}

export function leadershipAuthConfigured() {
  return Boolean(process.env.LEADERSHIP_ACCESS_CODE && authSecret());
}

export function verifyLeadershipCredentials(email: string, accessCode: string) {
  const normalizedEmail = email.trim().toLowerCase();
  const configuredCode = process.env.LEADERSHIP_ACCESS_CODE;
  if (!configuredCode || !authSecret()) return false;

  return configuredEmails().includes(normalizedEmail) && secureEqual(accessCode, configuredCode);
}

export function createLeadershipSession(email: string) {
  const secret = authSecret();
  if (!secret) throw new Error("Leadership authentication is not configured.");

  const session: LeadershipSession = {
    email: email.trim().toLowerCase(),
    expiresAt: Math.floor(Date.now() / 1000) + sessionLifetimeSeconds,
  };
  const payload = Buffer.from(JSON.stringify(session)).toString("base64url");
  return `${payload}.${signature(payload, secret)}`;
}

export function verifyLeadershipSession(token: string | undefined | null) {
  if (!token) return null;
  const secret = authSecret();
  if (!secret) return null;

  const [payload, suppliedSignature] = token.split(".");
  if (!payload || !suppliedSignature) return null;
  if (!secureEqual(suppliedSignature, signature(payload, secret))) return null;

  try {
    const session = JSON.parse(Buffer.from(payload, "base64url").toString("utf8")) as LeadershipSession;
    if (
      typeof session.email !== "string" ||
      typeof session.expiresAt !== "number" ||
      session.expiresAt <= Math.floor(Date.now() / 1000) ||
      !configuredEmails().includes(session.email)
    ) {
      return null;
    }
    return session;
  } catch {
    return null;
  }
}

export async function getLeadershipSession() {
  const cookieStore = await cookies();
  return verifyLeadershipSession(cookieStore.get(leadershipCookieName)?.value);
}

export function leadershipCookieOptions() {
  return {
    httpOnly: true,
    sameSite: "lax" as const,
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: sessionLifetimeSeconds,
  };
}
