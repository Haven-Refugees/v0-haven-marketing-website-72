"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useTranslation } from "@/lib/i18n"

export function TeamCta() {
  const { t } = useTranslation()

  return (
    <section className="py-20 md:py-24 bg-card">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="font-sans font-bold text-[32px] text-foreground mb-4 tracking-tight">
          {t("Be Part of Haven")}
        </h2>
        <p className="font-body text-muted-foreground text-base mb-8">
          {t("Whether you're a newcomer looking for support or a Canadian ready to help, Haven is for you.")}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
