"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useTranslation } from "@/lib/i18n"

export function TeamCta() {
  const { t } = useTranslation()

  return (
    <section className="py-20 md:py-24 bg-[#FDF0EB]">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="font-sans font-medium text-[32px] text-foreground mb-4">
          {t("Join us.")}
        </h2>
        <p className="text-foreground/70 text-base mb-8">
          {t("Whether you're a newcomer looking for support or a Canadian ready to help, Haven is for you.")}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            asChild
            className="bg-[#E8725A] hover:bg-[#d4654f] text-white px-7 py-3.5 text-base rounded-[10px]"
          >
            <Link href="https://app.findhaven.org">{t("I want to help")}</Link>
          </Button>
          <Button
            asChild
            className="bg-[#6B4EFF] hover:bg-[#5a3ee6] text-white px-7 py-3.5 text-base rounded-[10px]"
          >
            <Link href="https://app.findhaven.org">{t("I need help")}</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
