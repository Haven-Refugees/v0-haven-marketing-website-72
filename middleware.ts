import { NextRequest, NextResponse } from "next/server"
import { locales, defaultLocale, isValidLocale } from "@/lib/i18n-config"

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Skip static files, API routes, and the PostHog reverse proxy.
  // /ingest/* must NOT get a locale prefix — posthog-js posts events to
  // /ingest/i/v0/e/ (no file extension), and a locale redirect would send
  // them to /en/ingest/... which never reaches PostHog.
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/ingest") ||
    pathname.startsWith("/images") ||
    pathname.includes(".")
  ) {
    return NextResponse.next()
  }

  // Check if the pathname already starts with a locale
  const segments = pathname.split("/")
  const pathnameLocale = segments[1]
  const pathnameHasLocale = isValidLocale(pathnameLocale)

  if (pathnameHasLocale) {
    const requestHeaders = new Headers(request.headers)
    requestHeaders.set("x-locale", pathnameLocale)
    return NextResponse.next({
      request: { headers: requestHeaders },
    })
  }

  // Detect locale from Accept-Language header
  const acceptLanguage = request.headers.get("accept-language") || ""
  const preferredLocale = acceptLanguage
    .split(",")
    .map((lang) => lang.split(";")[0].trim().split("-")[0])
    .find((lang) => isValidLocale(lang))

  const locale = preferredLocale || defaultLocale

  // Redirect to the locale-prefixed path
  const newUrl = new URL(`/${locale}${pathname}`, request.url)
  newUrl.search = request.nextUrl.search
  return NextResponse.redirect(newUrl)
}

export const config = {
  matcher: ["/((?!_next|api|ingest|images|.*\\..*).*)"],
}
