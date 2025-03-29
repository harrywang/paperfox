import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import { NextRequest } from "next/server";

export default async function middleware(request: NextRequest) {
  // Skip middleware for non-matching paths
  if (!request.url.match(config.matcher[0])) {
    return NextResponse.next();
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