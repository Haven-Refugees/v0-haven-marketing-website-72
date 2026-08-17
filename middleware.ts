import { NextRequest, NextResponse } from "next/server"
import { locales, defaultLocale, isValidLocale } from "@/lib/i18n-config"

const FBC_COOKIE_NAME = "haven_fbc"
const FBC_COOKIE_MAX_AGE_SECONDS = 90 * 24 * 60 * 60

/**
 * Real fbclids run ~100-200 chars. The cap is not about correctness — Next
 * URL-encodes the cookie value, so a crafted fbclid can't inject attributes —
 * it's that anything under the browser's ~4096-byte cookie limit gets accepted
 * and then sent on every request to findhaven.org and app.findhaven.org for
 * the next 90 days. A single crafted link would otherwise buy a visitor three
 * months of bloated request headers.
 */
const FBCLID_MAX_LENGTH = 512

/**
 * NOT `request.nextUrl.hostname` — behind a proxy that stays the internal
 * origin, so the Domain attribute would be dropped on findhaven.org itself and
 * the cookie would be invisible to app.findhaven.org.
 */
function getRequestHost(request: NextRequest): string {
  const raw =
    request.headers.get("x-forwarded-host") ?? request.headers.get("host") ?? ""
  // Strip any port, e.g. "findhaven.org:443" or "localhost:3001".
  return raw.split(":")[0].trim().toLowerCase()
}

/**
 * Exact-suffix host check. A bare `endsWith("findhaven.org")` would also match
 * an attacker-registered `notfindhaven.org`.
 */
function isHavenHost(host: string): boolean {
  return host === "findhaven.org" || host.endsWith(".findhaven.org")
}

/**
 * Persists the Meta click ID so the app can attribute the eventual signup
 * server-side. This cookie is the entire pre-signup store — `fbclid` is
 * deliberately NOT also added to TRACKING_PARAM_NAMES.
 *
 * NOT named `_fbc`: Meta's pixel sets its own host-scoped `_fbc` here, and two
 * same-named cookies with different scopes arrive in one Cookie header with no
 * way to tell them apart.
 */
function persistFbclid(
  request: NextRequest,
  response: NextResponse,
): NextResponse {
  const fbclid = request.nextUrl.searchParams.get("fbclid")
  if (!fbclid || fbclid.length > FBCLID_MAX_LENGTH) return response

  // Only overwrite when the click ID actually changed, so a locale redirect
  // (which re-enters this middleware) doesn't rewrite the timestamp.
  const existing = request.cookies.get(FBC_COOKIE_NAME)?.value
  const storedFbclid = existing ? existing.split(".").slice(3).join(".") : null
  if (storedFbclid === fbclid) return response

  const host = getRequestHost(request)

  // Milliseconds, not seconds, and the fbclid's case preserved — both are
  // load-bearing for Meta's matching.
  response.cookies.set(FBC_COOKIE_NAME, `fb.1.${Date.now()}.${fbclid}`, {
    // Present = shared with app.findhaven.org, which is where it's read.
    // Omitted elsewhere because browsers silently reject a Domain that isn't a
    // suffix of the request host, making this unverifiable on previews.
    ...(isHavenHost(host) ? { domain: "findhaven.org" } : {}),
    path: "/",
    maxAge: FBC_COOKIE_MAX_AGE_SECONDS,
    httpOnly: true,
    secure: true,
    // "lax", not "strict": the visitor arrives by cross-site top-level
    // navigation from Facebook, which "strict" would drop.
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
  // Set the cookie here too: an ad click lands on `findhaven.org/?fbclid=...`
  // with no locale, so this redirect is the first response of the visit.
  return persistFbclid(request, NextResponse.redirect(newUrl))
}

export const config = {
  matcher: ["/((?!_next|api|ingest|images|.*\\..*).*)"],
}
