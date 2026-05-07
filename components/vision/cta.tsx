"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useTranslation } from "@/lib/i18n"

export function VisionCta() {
  const { t } = useTranslation()

  return (
    <section className="py-12 md:py-24 bg-card">
      <div className="max-w-3xl mx-auto px-4 md:px-6 text-center">
        <h2 className="font-sans font-bold text-2xl sm:text-[28px] md:text-[32px] text-foreground mb-3 md:mb-4 tracking-tight">
          {t("Be part of Haven")}
        </h2>
        <p className="font-body text-muted-foreground text-sm md:text-base mb-6 md:mb-8">
          {t("Whether you're a newcomer looking for support or a Canadian ready to help, Haven is for you.")}
        </p>
        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
          <Button
            asChild
            size="lg"
            variant="coral"
          >
            <Link href="https://app.findhaven.org/signup">{t("I Want to Help")}</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="secondary"
          >
            <Link href="https://app.findhaven.org/signup">{t("I Need Help")}</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
