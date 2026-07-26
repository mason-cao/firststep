import { getLeadershipSession } from "@/lib/auth";
import { getActivityEvidence } from "@/lib/db";

export const runtime = "nodejs";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const session = await getLeadershipSession();
  if (!session) return new Response("Unauthorized", { status: 401 });

  const { id } = await params;
  if (!/^HRS-[A-Z0-9]{8}$/.test(id)) {
    return new Response("Invalid report", { status: 400 });
  }

  const evidence = await getActivityEvidence(id);
  if (!evidence) return new Response("Evidence not found", { status: 404 });

  const safeName = evidence.fileName.replace(/["\r\n]/g, "_");
  return new Response(Buffer.from(evidence.bytes), {
    headers: {
      "Content-Type": evidence.mimeType,
      "Content-Length": String(evidence.bytes.byteLength),
      "Content-Disposition": `inline; filename="${safeName}"`,
      "Cache-Control": "private, no-store",
      "X-Content-Type-Options": "nosniff",
    },
  });
}
