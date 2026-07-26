import { NextResponse } from "next/server";
import { createMemberApplication, incrementSubmissionRate } from "@/lib/db";
import { validateMemberApplication } from "@/lib/forms";
import { isSameOrigin, requestFingerprint } from "@/lib/request";

export const runtime = "nodejs";

export async function POST(request: Request) {
  if (!isSameOrigin(request)) {
    return NextResponse.json({ message: "This submission could not be verified." }, { status: 403 });
  }

  const contentLength = Number(request.headers.get("content-length") || 0);
  if (contentLength > 64_000) {
    return NextResponse.json({ message: "The application is too large." }, { status: 413 });
  }

  try {
    const input = (await request.json()) as Record<string, unknown>;

    if (typeof input.website === "string" && input.website.trim()) {
      return NextResponse.json({ ok: true, confirmationId: "MEM-RECEIVED" });
    }

    const validation = validateMemberApplication(input);
    if (!validation.success) {
      return NextResponse.json(
        { message: "Check the highlighted fields and try again.", fieldErrors: validation.fieldErrors },
        { status: 400 },
      );
    }

    const attempts = await incrementSubmissionRate("member", requestFingerprint(request));
    if (attempts > 5) {
      return NextResponse.json(
        { message: "Too many applications were sent from this connection. Try again in an hour." },
        { status: 429 },
      );
    }

    const confirmationId = await createMemberApplication(validation.data);
    return NextResponse.json({ ok: true, confirmationId }, { status: 201 });
  } catch (error) {
    console.error("Member application failed", error);
    return NextResponse.json(
      { message: "We could not save the application. Please try again shortly." },
      { status: 500 },
    );
  }
}
