"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useTranslation } from "@/lib/i18n"

export function HLPFinalCta() {
  const { t } = useTranslation()

  return (
    <section className="py-20 bg-[var(--bg-4)]">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="font-sans font-bold text-3xl md:text-4xl text-[var(--fg-1)] mb-4">
          {t("Start improving your English today.")}
        </h2>
        <p className="text-[var(--fg-4)] text-lg mb-8">
          {t("Sign up in less than 10 minutes.")}
        </p>
        <Button
          asChild
          size="lg"
          className="bg-[var(--haven-blue)] hover:bg-[var(--haven-blue)]/90 text-white px-8 py-6 text-base rounded-[100px]"
        >
          <Link href="https://app.findhaven.org">{t("Apply for the program")}</Link>
        </Button>
      </div>
    </section>
  )
}
