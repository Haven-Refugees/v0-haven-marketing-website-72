"use client"

import { useTranslation } from "@/lib/i18n"

export function VisionHero() {
  const { t } = useTranslation()

  return (
    <section className="pt-24 pb-12 md:pt-32 md:pb-16">
      <div className="max-w-[760px] mx-auto px-4 md:px-6 text-center">
        <p className="text-haven-blue uppercase tracking-wider text-xs md:text-sm font-semibold mb-3 md:mb-4">
          {t("Our Vision")}
        </p>
        <h1 className="font-sans font-bold text-2xl sm:text-3xl md:text-[40px] leading-tight text-foreground mb-4 md:mb-6 text-balance tracking-tight">
          {t("Canada wins when newcomers become independent faster.")}
        </h1>
        <p className="font-body text-sm md:text-[17px] text-muted-foreground">
          {t("We're building the system that makes that possible — and proving it works.")}
        </p>
      </div>
    </section>
  )
}
