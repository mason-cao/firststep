import { NextResponse } from "next/server";
import { leadershipCookieName } from "@/lib/auth";
import { isSameOrigin } from "@/lib/request";

export async function POST(request: Request) {
  if (!isSameOrigin(request)) {
    return new NextResponse("Forbidden", { status: 403 });
  }

  const response = NextResponse.redirect(new URL("/leadership/login", request.url), 303);
  response.cookies.set(leadershipCookieName, "", { path: "/", maxAge: 0 });
  return response;
}
