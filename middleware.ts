import { NextRequest, NextResponse } from "next/server"
import { locales, defaultLocale, isValidLocale } from "@/lib/i18n-config"

const FBC_COOKIE_NAME = "haven_fbc"
const FBC_COOKIE_MAX_AGE_SECONDS = 90 * 24 * 60 * 60

const FBCLID_MAX_LENGTH = 512

function getRequestHost(request: NextRequest): string {
  const raw =
    request.headers.get("x-forwarded-host") ?? request.headers.get("host") ?? ""
  return raw.split(":")[0].trim().toLowerCase()
}

function isHavenHostExactly(host: string): boolean {
  return host === "findhaven.org" || host.endsWith(".findhaven.org")
}

function persistFbclid(
  request: NextRequest,
  response: NextResponse,
): NextResponse {
  const fbclid = request.nextUrl.searchParams.get("fbclid")
  if (!fbclid || fbclid.length > FBCLID_MAX_LENGTH) return response

  const existing = request.cookies.get(FBC_COOKIE_NAME)?.value
  const storedFbclid = existing ? existing.split(".").slice(3).join(".") : null
  if (storedFbclid === fbclid) return response

  const host = getRequestHost(request)

  response.cookies.set(FBC_COOKIE_NAME, `fb.1.${Date.now()}.${fbclid}`, {
    ...(isHavenHostExactly(host) ? { domain: "findhaven.org" } : {}),
    path: "/",
    maxAge: FBC_COOKIE_MAX_AGE_SECONDS,
    httpOnly: true,
    secure: true,
    sameSite: "lax",
  })

  return response
}

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
    return persistFbclid(
      request,
      NextResponse.next({
        request: { headers: requestHeaders },
      }),
    )
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
  return persistFbclid(request, NextResponse.redirect(newUrl))
}

export const config = {
  matcher: ["/((?!_next|api|ingest|images|.*\\..*).*)"],
}
