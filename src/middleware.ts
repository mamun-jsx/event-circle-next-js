import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

function decodeRoleFromToken(token: string): string | null {
  try {
    const payloadBase64Url = token.split('.')[1];
    if (!payloadBase64Url) return null;
    
    // Fix Base64Url encoding issues
    let base64 = payloadBase64Url.replace(/-/g, '+').replace(/_/g, '/');
    const pad = base64.length % 4;
    if (pad) {
      if (pad === 1) return null;
      base64 += new Array(5 - pad).join('=');
    }
    
    const decodedJson = atob(base64);
    const payload = JSON.parse(decodedJson);
    return payload?.role || null;
  } catch (error) {
    return null;
  }
}

export function middleware(request: NextRequest) {
  const authToken = request.cookies.get('auth-token')?.value;
  const userRole = authToken ? decodeRoleFromToken(authToken) : null;

  const isAuthRoute = request.nextUrl.pathname.startsWith('/login') || request.nextUrl.pathname.startsWith('/register');
  const isDashboardRoute = request.nextUrl.pathname.startsWith('/dashboard');

  // If user is logged in and tries to access login/register, redirect to dashboard
  if (isAuthRoute && authToken) {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  // If user is not logged in and tries to access dashboard, redirect to login
  if (isDashboardRoute && !authToken) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // Role-based protection for dashboard routes
  if (isDashboardRoute && authToken && userRole) {
    const isAdminRoute = ['/dashboard/add-events', '/dashboard/manage-events', '/dashboard/all-users', '/dashboard/all-tickets'].some(route => request.nextUrl.pathname.startsWith(route));
    const isUserRoute = ['/dashboard/buy-events', '/dashboard/my-tickets'].some(route => request.nextUrl.pathname.startsWith(route));

    if (isAdminRoute && userRole !== 'ADMIN') {
      return NextResponse.redirect(new URL('/dashboard', request.url));
    }

    if (isUserRoute && userRole !== 'USER') {
      return NextResponse.redirect(new URL('/dashboard', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*', '/login', '/register'],
};
