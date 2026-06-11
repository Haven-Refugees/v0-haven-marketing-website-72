"use client"

import { useCallback, useEffect, useState } from "react"
import { Cookie, X } from "lucide-react"
import { useTranslation } from "@/lib/i18n"
import { Button } from "@/components/ui/button"

type ConsentValue = "all" | "essential" | null

const CONSENT_KEY = "haven-cookie-consent"

function getStoredConsent(): ConsentValue {
  if (typeof window === "undefined") return null
  const stored = localStorage.getItem(CONSENT_KEY)
  if (stored === "all" || stored === "essential") return stored
  return null
}

export function CookieConsent() {
  const { t } = useTranslation()
  const [consent, setConsent] = useState<ConsentValue>(null)
  const [visible, setVisible] = useState(false)
  const [showPreferences, setShowPreferences] = useState(false)
  const [analyticsEnabled, setAnalyticsEnabled] = useState(true)

  useEffect(() => {
    const stored = getStoredConsent()
    setConsent(stored)
    if (!stored) {
      setVisible(true)
    }
  }, [])

  const accept = useCallback((value: ConsentValue) => {
    localStorage.setItem(CONSENT_KEY, value!)
    setConsent(value)
    setVisible(false)
    window.dispatchEvent(new Event("cookie-consent-change"))
  }, [])

  const handleAcceptAll = useCallback(() => accept("all"), [accept])
  const handleRejectNonEssential = useCallback(() => accept("essential"), [accept])

  const handleManagePreferences = useCallback(() => {
    setShowPreferences(true)
  }, [])

  const handleSavePreferences = useCallback(() => {
    accept(analyticsEnabled ? "all" : "essential")
  }, [accept, analyticsEnabled])

  if (!visible || consent) return null

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 p-4 md:p-6">
      <div className="mx-auto max-w-2xl rounded-xl border border-border bg-card shadow-raise p-5 md:p-6">
        {!showPreferences ? (
          <>
            <div className="flex items-start gap-3 mb-4">
              <Cookie className="size-5 text-haven-purple shrink-0 mt-0.5" />
              <div>
                <h3 className="font-sans text-base font-semibold text-foreground mb-1">
                  {t("We use cookies")}
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {t("We use essential cookies to run this site. With your consent, we also use analytics cookies to improve your experience.")}
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 sm:justify-end">
              <Button
                variant="ghost"
                size="sm"
                onClick={handleManagePreferences}
              >
                {t("Manage preferences")}
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={handleRejectNonEssential}
              >
                {t("Reject non-essential")}
              </Button>
              <Button
                variant="primary"
                size="sm"
                onClick={handleAcceptAll}
              >
                {t("Accept all")}
              </Button>
            </div>
          </>
        ) : (
          <>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Cookie className="size-5 text-haven-purple" />
                <h3 className="font-sans text-base font-semibold text-foreground">
                  {t("Manage preferences")}
                </h3>
              </div>
              <button
                onClick={() => setShowPreferences(false)}
                className="p-1 rounded-md hover:bg-muted transition-colors"
                aria-label="Back"
              >
                <X className="size-4 text-muted-foreground" />
              </button>
            </div>
            <div className="space-y-3 mb-4">
              <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                <div>
                  <p className="font-body text-sm font-medium text-foreground">
                    {t("Essential cookies")}
                  </p>
                  <p className="font-body text-xs text-muted-foreground">
                    {t("Required for the website to function properly.")}
                  </p>
                </div>
                <span className="text-xs font-medium text-muted-foreground px-2 py-0.5 rounded bg-muted">
                  {t("Always on")}
                </span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                <div>
                  <p className="font-body text-sm font-medium text-foreground">
                    {t("Analytics cookies")}
                  </p>
                  <p className="font-body text-xs text-muted-foreground">
                    {t("Help us understand how visitors use our site.")}
                  </p>
                </div>
                <button
                  onClick={() => setAnalyticsEnabled(!analyticsEnabled)}
                  className={`relative w-10 h-5 rounded-full transition-colors ${
                    analyticsEnabled ? "bg-haven-blue" : "bg-border"
                  }`}
                  role="switch"
                  aria-checked={analyticsEnabled}
                >
                  <span
                    className={`absolute top-0.5 left-0.5 size-4 rounded-full bg-white transition-transform ${
                      analyticsEnabled ? "translate-x-5" : "translate-x-0"
                    }`}
                  />
                </button>
              </div>
            </div>
            <div className="flex justify-end">
              <Button
                variant="primary"
                size="sm"
                onClick={handleSavePreferences}
              >
                {t("Save preferences")}
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
