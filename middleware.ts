import axios from "axios";
import { NextRequest, NextResponse } from "next/server";
import { getBaseUrl } from "./app/utils/getBaseUrl";

export async function middleware(request: NextRequest) {
  let userId = request.cookies.get("mingle_user_id");
  let accessToken = request.cookies.get("mingle_token");

  if (!userId || !accessToken) {
    return NextResponse.redirect(new URL("auth/login", request.url));
  }

  try {
    let res = await axios.get(`${getBaseUrl()}/user`, {
      headers: {
        Authorization: `Bearer ${accessToken.value}`,
      },
    });
  } catch (error) {
    return NextResponse.redirect(new URL("auth/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/dashboard/:path*",
};
