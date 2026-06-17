import posthog from 'posthog-js'

// Sends marketing-site (findhaven.org) analytics to the SAME PostHog project
// as the app (app.findhaven.org), project token NEXT_PUBLIC_POSTHOG_KEY.
//
// Cross-subdomain cookie: findhaven.org and app.findhaven.org share the
// registrable domain findhaven.org, so PostHog stores the distinct_id cookie
// on `.findhaven.org`. A visitor who browses the marketing site and then clicks
// through to app.findhaven.org/signup keeps the same distinct_id — which lets us
// build the true funnel: findhaven.org pageview -> auth:signup_view -> Signup Complete.
const posthogKey = process.env.NEXT_PUBLIC_POSTHOG_KEY

if (posthogKey) {
  posthog.init(posthogKey, {
    api_host: '/ingest',
    ui_host: 'https://us.posthog.com',
    defaults: '2025-05-24',
    capture_exceptions: true,
    cross_subdomain_cookie: true,
    persistence: 'localStorage+cookie',
    debug: process.env.NODE_ENV === 'development',
  })
}
