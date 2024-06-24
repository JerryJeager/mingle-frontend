import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  let userId = request.cookies.get("user_id");
  let accessToken = request.cookies.get("access_token");

  if ((!userId || !accessToken) && request.url.includes("dashboard")) {
    return NextResponse.redirect(new URL("auth/login", request.url));
  }
  return NextResponse.next();
}
