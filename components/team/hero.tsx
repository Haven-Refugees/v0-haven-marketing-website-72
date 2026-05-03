"use client"

import { useTranslation } from "@/lib/i18n"

export function TeamHero() {
  const { t } = useTranslation()

  return (
    <section className="py-20 md:py-24 bg-white">
      <div className="max-w-[760px] mx-auto px-6 text-center">
        <p className="text-[#6B4EFF] uppercase tracking-wider text-sm font-medium mb-4">
          {t("MEET THE TEAM")}
        </p>
        <h1 className="font-sans font-medium text-[40px] leading-tight text-foreground mb-6 text-balance">
          {t("The people building Haven.")}
        </h1>
        <p className="text-[17px] text-muted-foreground max-w-[600px] mx-auto">
          {t("A small team with a big mission — building the system that helps refugees become independent in Canada faster.")}
        </p>
      </div>
    </section>
  )
}
