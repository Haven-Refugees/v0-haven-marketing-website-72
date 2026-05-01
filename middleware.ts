import { NextRequest, NextResponse } from "next/server"
import { locales, defaultLocale, isValidLocale } from "@/lib/i18n-config"

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Check if the pathname already starts with a locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  if (pathnameHasLocale) return NextResponse.next()

  // Skip static files and API routes
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/images") ||
    pathname.includes(".") // static files like .png, .svg, etc.
  ) {
    return NextResponse.next()
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
  matcher: ["/((?!_next|api|images|.*\\..*).*)"],
}
