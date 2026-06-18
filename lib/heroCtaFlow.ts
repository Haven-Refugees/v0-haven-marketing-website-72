"use client"

import { useEffect, useState } from "react"
import posthog from "posthog-js"

export type HeroUserType = "local" | "newcomer"

/**
 * A/B experiment flag `hero-cta-flow` for where the landing-page hero CTAs send
 * users. Standard experiment variant keys:
 *  - "control" (browse-first, current behavior): app.findhaven.org/?usertype=...
 *    (browse profiles; signup popup appears on "Meet")
 *  - "test" (direct-signup): app.findhaven.org/signup?usertype=...
 *
 * Returns true when the user is in the "test" (direct-signup) arm. Defaults to
 * false (control / current behavior) until flags load, or if PostHog isn't
 * initialized (e.g. NEXT_PUBLIC_POSTHOG_KEY unset) — so the CTA never breaks.
 * Calling getFeatureFlag also logs the experiment exposure ($feature_flag_called).
 */
export function useHeroDirectSignup(): boolean {
  const [directSignup, setDirectSignup] = useState(false)

  useEffect(() => {
    const apply = () => {
      setDirectSignup(posthog.getFeatureFlag("hero-cta-flow") === "test")
    }
    // Flags may not be ready on first render; re-apply when they load.
    const unsubscribe = posthog.onFeatureFlags(apply)
    apply()
    return () => {
      if (typeof unsubscribe === "function") unsubscribe()
    }
  }, [])

  return directSignup
}

/** Builds the app destination for a hero CTA given the active arm. */
export function heroCtaDestination(directSignup: boolean, usertype: HeroUserType): string {
  const base = "https://app.findhaven.org"
  return directSignup
    ? `${base}/signup?usertype=${usertype}`
    : `${base}/?usertype=${usertype}`
}
