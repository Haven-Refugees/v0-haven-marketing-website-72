"use client"

import { useTranslation } from "@/lib/i18n"

export function TeamHero() {
  const { t } = useTranslation()

  return (
    <section className="pt-12 pb-3 md:pt-16 md:pb-4 bg-card">
      <div className="max-w-[760px] mx-auto px-6 text-center">
        <p className="text-haven-blue uppercase tracking-wider text-sm font-semibold mb-4">
          {t("Meet The Team")}
        </p>
        <h1 className="font-sans font-bold text-[40px] leading-tight text-foreground mb-6 text-balance tracking-tight">
          {t("The people building Haven.")}
        </h1>
        <p className="font-body text-[17px] text-muted-foreground max-w-[600px] mx-auto">
          {t("A small team with a big mission — building the system that helps refugees become independent in Canada faster.")}
        </p>
      </div>
    </section>
  )
}
