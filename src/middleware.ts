import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { locales, defaultLocale } from "@/i18n/config";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Root path → rewrite to default locale (no redirect, URL stays clean)
  if (pathname === "/") {
    const url = request.nextUrl.clone();
    url.pathname = `/${defaultLocale}`;
    return NextResponse.rewrite(url);
  }

  // Keep the default-language URL clean: /en/... permanently redirects to /...
  const defaultLocalePath = `/${defaultLocale}`;
  if (pathname === defaultLocalePath || pathname.startsWith(`${defaultLocalePath}/`)) {
    const url = request.nextUrl.clone();
    url.pathname = pathname.slice(defaultLocalePath.length) || "/";
    return NextResponse.redirect(url, 308);
  }

  const hasLocale = locales.some(
    (l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`)
  );
  if (hasLocale) return NextResponse.next();

  // Serve the default language at clean URLs by rewriting internally.
  const url = request.nextUrl.clone();
  url.pathname = `/${defaultLocale}${pathname}`;
  return NextResponse.rewrite(url);
}

export const config = {
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
