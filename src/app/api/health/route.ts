import { checkDatabaseHealth } from "@/lib/db";

export const runtime = "nodejs";

export async function GET() {
  try {
    await checkDatabaseHealth();
    return Response.json({ status: "ok" });
  } catch (error) {
    console.error("Health check failed", error);
    return Response.json({ status: "unavailable" }, { status: 503 });
  }
}
