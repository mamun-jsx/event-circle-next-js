import { NextRequest, NextResponse } from "next/server";
import { getAuthUser } from "./lib/current.auth";

export async function proxy(request: NextRequest) {

  const user = await getAuthUser();
  const { pathname } = request.nextUrl;

  // 1. Protection for dashboard routes
  if (pathname.startsWith("/dashboard") && !user?.token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // 2. Protection for login/register pages
  if (user?.token && (pathname === "/login" || pathname === "/register")) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
