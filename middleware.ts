import { NextRequest, NextResponse } from "next/server";
type WithGeo = NextRequest & {
  geo?: {
    city?: string;
    country?: string;
    region?: string;
  };
};

// Routes to exclude from middleware
const PUBLIC_FILE = /\.(.*)$/;
const AUTH_WHITELIST = ["/login", "/register", "/api/public"];

export function middleware(request: NextRequest) {
  const req = request as WithGeo;
  const { pathname } = req.nextUrl;

  if (
    PUBLIC_FILE.test(pathname) ||
    AUTH_WHITELIST.some((path) => pathname.startsWith(path))
  ) {
    return NextResponse.next();
  }

  const res = NextResponse.next();

  const isLoggedIn = req.cookies.get("token")?.value;

  if (!isLoggedIn) {
    const loginUrl = new URL("/login", req.url);
    loginUrl.searchParams.set("redirect", pathname);
    return NextResponse.redirect(loginUrl);
  }

  const locale = req.cookies.get("locale")?.value || "en";
  const theme = req.cookies.get("theme")?.value || "light";

  res.headers.set("x-user-locale", locale);
  res.headers.set("x-user-theme", theme);

  const country = req.geo?.country || "US";

  if (country !== "US" && pathname === "/") {
    return NextResponse.redirect(new URL(`/${country.toLowerCase()}`, req.url));
  }

  return res;
}

// Apply middleware only to these routes
export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|api/public).*)"],
};
