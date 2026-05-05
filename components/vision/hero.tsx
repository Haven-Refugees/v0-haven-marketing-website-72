"use client"

import { useTranslation } from "@/lib/i18n"

export function VisionHero() {
  const { t } = useTranslation()

  return (
    <section className="py-20 md:py-24 bg-card">
      <div className="max-w-[760px] mx-auto px-6 text-center">
        <p className="text-haven-blue uppercase tracking-wider text-sm font-semibold mb-4">
          {t("Our Vision")}
        </p>
        <h1 className="font-sans font-bold text-[40px] leading-tight text-foreground mb-6 text-balance tracking-tight">
          {t("Canada wins when newcomers become independent faster.")}
        </h1>
        <p className="font-body text-[17px] text-muted-foreground">
          {t("We're building the system that makes that possible — and proving it works.")}
        </p>
      </div>
    </section>
  )
}
