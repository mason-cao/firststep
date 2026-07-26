import { NextResponse } from "next/server";
import { createActivitySubmission, incrementSubmissionRate } from "@/lib/db";
import { validateActivitySubmission, type FieldErrors } from "@/lib/forms";
import { isSameOrigin, requestFingerprint } from "@/lib/request";

export const runtime = "nodejs";

const maxEvidenceBytes = 5 * 1024 * 1024;
const allowedEvidenceTypes = new Set([
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/heic",
  "image/heif",
  "application/pdf",
]);

export async function POST(request: Request) {
  if (!isSameOrigin(request)) {
    return NextResponse.json({ message: "This submission could not be verified." }, { status: 403 });
  }

  const contentLength = Number(request.headers.get("content-length") || 0);
  if (contentLength > maxEvidenceBytes + 256_000) {
    return NextResponse.json(
      { message: "The evidence file must be 5 MB or smaller." },
      { status: 413 },
    );
  }

  try {
    const formData = await request.formData();
    const website = String(formData.get("website") || "").trim();
    if (website) {
      return NextResponse.json({ ok: true, confirmationId: "HRS-RECEIVED" });
    }

    const input: Record<string, unknown> = {
      memberName: formData.get("memberName"),
      memberEmail: formData.get("memberEmail"),
      activityName: formData.get("activityName"),
      activityDate: formData.get("activityDate"),
      projectType: formData.get("projectType"),
      location: formData.get("location"),
      sponsor: formData.get("sponsor"),
      hours: formData.get("hours"),
      minutes: formData.get("minutes"),
      description: formData.get("description"),
      otherMembers: formData.get("otherMembers"),
      evidenceUrl: formData.get("evidenceUrl"),
      accuracyConfirmed: formData.get("accuracyConfirmed") === "on",
    };

    const validation = validateActivitySubmission(input);
    const fieldErrors: FieldErrors = validation.success ? {} : { ...validation.fieldErrors };
    const evidenceValue = formData.get("evidenceFile");
    const evidenceFile = evidenceValue instanceof File && evidenceValue.size > 0 ? evidenceValue : null;
    const evidenceUrl = String(formData.get("evidenceUrl") || "").trim();

    if (!evidenceFile && !evidenceUrl) {
      fieldErrors.evidenceFile = "Upload a photo or document, or provide an evidence link.";
    }
    if (evidenceFile && evidenceFile.size > maxEvidenceBytes) {
      fieldErrors.evidenceFile = "The evidence file must be 5 MB or smaller.";
    }
    if (evidenceFile && !allowedEvidenceTypes.has(evidenceFile.type)) {
      fieldErrors.evidenceFile = "Upload a JPG, PNG, WebP, HEIC, or PDF file.";
    }

    if (!validation.success || Object.keys(fieldErrors).length > 0) {
      return NextResponse.json(
        { message: "Check the highlighted fields and try again.", fieldErrors },
        { status: 400 },
      );
    }

    const attempts = await incrementSubmissionRate("activity", requestFingerprint(request));
    if (attempts > 20) {
      return NextResponse.json(
        { message: "Too many reports were sent from this connection. Try again in an hour." },
        { status: 429 },
      );
    }

    const evidence = evidenceFile
      ? {
          fileName: evidenceFile.name.replace(/[^a-zA-Z0-9._ -]/g, "_").slice(0, 160),
          mimeType: evidenceFile.type,
          bytes: new Uint8Array(await evidenceFile.arrayBuffer()),
        }
      : { fileName: null, mimeType: null, bytes: null };

    const confirmationId = await createActivitySubmission(validation.data, evidence);
    return NextResponse.json({ ok: true, confirmationId }, { status: 201 });
  } catch (error) {
    console.error("Activity submission failed", error);
    return NextResponse.json(
      { message: "We could not save the report. Please try again shortly." },
      { status: 500 },
    );
  }
}
