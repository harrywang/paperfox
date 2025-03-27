import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import { NextRequest } from "next/server";

// Check if setup is needed
async function checkSetup() {
  try {
    const response = await fetch(new URL("/api/setup/check", process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"));
    const data = await response.json();
    return data.needsSetup;
  } catch (error) {
    console.error("Error checking setup status:", error);
    return false;
  }
}

export default async function middleware(request: NextRequest) {
  // Skip middleware for non-matching paths
  if (!request.url.match(config.matcher[0])) {
    return NextResponse.next();
  }

  // Check if setup is needed
  const needsSetup = await checkSetup();
  
  // If setup is needed and not on setup page, redirect to setup
  if (needsSetup && !request.url.includes("/setup")) {
    return NextResponse.redirect(new URL("/setup", request.url));
  }

  // If setup is not needed and on setup page, redirect to home
  if (!needsSetup && request.url.includes("/setup")) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  // Check authentication for dashboard routes
  if (request.url.includes("/dashboard")) {
    const token = await getToken({ req: request });
    
    if (!token) {
      const signInUrl = new URL("/signin", request.url);
      signInUrl.searchParams.set("callbackUrl", request.url);
      return NextResponse.redirect(signInUrl);
    }
  }

  // For all other routes, allow access
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
     * - paperfox-logo.svg (logo file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico|paperfox-logo.svg).*)",
  ],
}; 