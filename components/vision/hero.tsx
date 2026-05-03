"use client"

import { useTranslation } from "@/lib/i18n"

export function VisionHero() {
  const { t } = useTranslation()

  return (
    <section className="py-20 md:py-24 bg-white">
      <div className="max-w-[760px] mx-auto px-6 text-center">
        <p className="text-[#6B4EFF] uppercase tracking-wider text-sm font-medium mb-4">
          {t("OUR VISION")}
        </p>
        <h1 className="font-sans font-bold text-[40px] leading-tight text-foreground mb-6 text-balance">
          {t("Canada wins when newcomers become independent faster.")}
        </h1>
        <p className="text-[17px] text-muted-foreground">
          {t("We're building the system that makes that possible — and proving it works.")}
        </p>
      </div>
    </section>
  )
}
