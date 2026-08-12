import { NextRequest, NextResponse } from "next/server"
import { locales, defaultLocale, isValidLocale } from "@/lib/i18n-config"

const FBC_COOKIE_NAME = "haven_fbc"
const FBC_COOKIE_MAX_AGE_SECONDS = 90 * 24 * 60 * 60

/**
 * The host the browser actually asked for.
 *
 * NOT `request.nextUrl.hostname` — behind a proxy that stays the internal
 * origin (`localhost`), so the Domain attribute below would be dropped on
 * findhaven.org itself, leaving the cookie host-scoped and invisible to
 * app.findhaven.org. Vercel sets `x-forwarded-host`; `host` is the fallback.
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
 * Persist the Meta click ID (`fbclid`) from an ad landing so the app can
 * attribute the eventual signup server-side via the Conversions API.
 *
 * The cookie is the entire pre-signup store — there is deliberately no
 * database record and no second mechanism. `fbclid` is intentionally NOT added
 * to TRACKING_PARAM_NAMES in lib/tracking.ts.
 *
 * Deliberately NOT named `_fbc`: Meta's own pixel sets a host-scoped `_fbc` on
 * findhaven.org, and two same-named cookies with different scopes both arrive
 * in a single Cookie header with no way to tell which is which.
 *
 * The value format is Meta's: `fb.1.<unix-milliseconds>.<fbclid>`.
 * Milliseconds, not seconds, and the fbclid's case is preserved — both are
 * load-bearing for Meta's matching.
 */
function persistFbclid(
  request: NextRequest,
  response: NextResponse,
): NextResponse {
  const fbclid = request.nextUrl.searchParams.get("fbclid")
  if (!fbclid) return response

  // Only overwrite when the click ID actually changed, so a locale redirect
  // (which re-enters this middleware) doesn't rewrite the timestamp.
  const existing = request.cookies.get(FBC_COOKIE_NAME)?.value
  const storedFbclid = existing ? existing.split(".").slice(3).join(".") : null
  if (storedFbclid === fbclid) return response

  const host = getRequestHost(request)

  response.cookies.set(FBC_COOKIE_NAME, `fb.1.${Date.now()}.${fbclid}`, {
    // Share with app.findhaven.org, which is where the cookie is read. The
    // leading dot is legacy and ignored by browsers; `findhaven.org` already
    // covers subdomains. What matters is whether the attribute is present at
    // all — omitted, the cookie is host-only and invisible to the app.
    //
    // Omitted off findhaven.org because a browser silently rejects a Domain
    // that isn't a suffix of the request host, which would make this
    // unverifiable on `*.vercel.app` preview deploys and on localhost.
    ...(isHavenHost(host) ? { domain: "findhaven.org" } : {}),
    path: "/",
    maxAge: FBC_COOKIE_MAX_AGE_SECONDS,
    // Server-read only; no client script needs it.
    httpOnly: true,
    secure: true,
    // Must be "lax", not "strict": the visitor arrives by a cross-site
    // top-level navigation from Facebook, which "strict" would drop.
    // findhaven.org -> app.findhaven.org is same-site, so "lax" still sends it.
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
