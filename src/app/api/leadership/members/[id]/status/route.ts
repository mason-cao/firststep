import { NextResponse } from "next/server";
import { getLeadershipSession } from "@/lib/auth";
import { updateMemberApplicationStatus, type MemberApplicationRecord } from "@/lib/db";
import { isSameOrigin } from "@/lib/request";

export const runtime = "nodejs";

const allowedStatuses: MemberApplicationRecord["status"][] = [
  "new",
  "contacted",
  "active",
  "archived",
];

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
  if (!/^MEM-[A-Z0-9]{8}$/.test(id)) {
    return new NextResponse("Invalid application", { status: 400 });
  }

  const formData = await request.formData();
  const status = String(formData.get("status") || "") as MemberApplicationRecord["status"];
  if (!allowedStatuses.includes(status)) {
    return new NextResponse("Invalid member status", { status: 400 });
  }

  const updated = await updateMemberApplicationStatus(id, status, session.email);
  if (!updated) return new NextResponse("Application not found", { status: 404 });

  const url = new URL("/leadership", request.url);
  url.searchParams.set("memberUpdated", id);
  url.hash = "members";
  return NextResponse.redirect(url, 303);
}
