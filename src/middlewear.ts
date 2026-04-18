import { NextRequest, NextResponse } from "next/server";
import { getAuthUser } from "./lib/current.auth";

export async function middleware(request: NextRequest) {
  const user = await getAuthUser();
  const { pathname } = request.nextUrl;

  // Define protected routes
  const isProtectedRoute =
    pathname.startsWith("/dashboard") ||
    pathname.startsWith("/my-tickets") ||
    pathname.startsWith("/my-reviews");

  // 1. Redirect to login if accessing protected route without session
  if (isProtectedRoute && !user?.token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // 2. Redirect logged-in users away from Login/Register to their correct dashboard
  if (user?.token && (pathname === "/login" || pathname === "/register")) {
    const target =
      user.role === "ADMIN" ? "/dashboard/admin" : "/dashboard/user";
    return NextResponse.redirect(new URL(target, request.url));
  }

  // 3. Handle base "/dashboard" access to prevent empty pages or loops
  if (user?.token && pathname === "/dashboard") {
    const target =
      user.role === "ADMIN" ? "/dashboard/admin" : "/dashboard/user";
    return NextResponse.redirect(new URL(target, request.url));
  }

  // 4. Role-Based Access Control (RBAC)
  if (user?.token) {
    if (user.role === "USER" && pathname.startsWith("/dashboard/admin")) {
      return NextResponse.redirect(new URL("/dashboard/user", request.url));
    }
    if (user.role === "ADMIN" && pathname.startsWith("/dashboard/user")) {
      return NextResponse.redirect(new URL("/dashboard/admin", request.url));
    }
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
