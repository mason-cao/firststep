import { NextResponse } from "next/server";
import { getLeadershipSession } from "@/lib/auth";
import { reviewActivitySubmission } from "@/lib/db";
import { isSameOrigin } from "@/lib/request";

export const runtime = "nodejs";

export async function POST(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const session = await getLeadershipSession();
  if (!session) {
    return NextResponse.redirect(new URL("/leadership/login", request.url), 303);
  }
  if (!isSameOrigin(request)) {
    return new NextResponse("Forbidden", { status: 403 });
  }

  const { id } = await params;
  if (!/^HRS-[A-Z0-9]{8}$/.test(id)) {
    return new NextResponse("Invalid report", { status: 400 });
  }

  const formData = await request.formData();
  const status = String(formData.get("status") || "");
  const reviewNote = String(formData.get("reviewNote") || "").trim().slice(0, 1000) || null;
  if (status !== "approved" && status !== "rejected") {
    return new NextResponse("Invalid review status", { status: 400 });
  }
  if (status === "rejected" && !reviewNote) {
    const url = new URL("/leadership", request.url);
    url.searchParams.set("error", "rejection-note");
    url.hash = id;
    return NextResponse.redirect(url, 303);
  }

  const updated = await reviewActivitySubmission(id, status, session.email, reviewNote);
  if (!updated) return new NextResponse("Report not found", { status: 404 });

  const url = new URL("/leadership", request.url);
  url.searchParams.set("reviewed", id);
  url.hash = "hours";
  return NextResponse.redirect(url, 303);
}
