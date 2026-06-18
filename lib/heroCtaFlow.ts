"use client"

import { useEffect, useState } from "react"
import posthog from "posthog-js"

export type HeroCtaFlow = "browse-first" | "direct-signup"

export type HeroUserType = "local" | "newcomer"

/**
 * A/B experiment flag for where the landing-page hero CTAs send users:
 *  - "browse-first" (control): app.findhaven.org/?usertype=...  (browse profiles,
 *    sign-up popup appears on "Meet")
 *  - "direct-signup" (variant): app.findhaven.org/signup?usertype=...
 *
 * Defaults to "browse-first" (current behavior) until flags load, or if PostHog
 * isn't initialized (e.g. NEXT_PUBLIC_POSTHOG_KEY unset) — so the CTA never breaks.
 * Calling getFeatureFlag also logs the experiment exposure ($feature_flag_called).
 */
export function useHeroCtaFlow(): HeroCtaFlow {
  const [flow, setFlow] = useState<HeroCtaFlow>("browse-first")

  useEffect(() => {
    const apply = () => {
      const variant = posthog.getFeatureFlag("hero-cta-flow")
      if (variant === "direct-signup" || variant === "browse-first") {
        setFlow(variant)
      }
    }
    // Flags may not be ready on first render; re-apply when they load.
    const unsubscribe = posthog.onFeatureFlags(apply)
    apply()
    return () => {
      if (typeof unsubscribe === "function") unsubscribe()
    }
  }, [])

  return flow
}

/** Builds the app destination for a given hero CTA under the active flow. */
export function heroCtaDestination(flow: HeroCtaFlow, usertype: HeroUserType): string {
  const base = "https://app.findhaven.org"
  return flow === "direct-signup"
    ? `${base}/signup?usertype=${usertype}`
    : `${base}/?usertype=${usertype}`
}
