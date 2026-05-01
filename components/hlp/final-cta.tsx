"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useTranslation } from "@/lib/i18n"

export function HLPFinalCta() {
  const { t } = useTranslation()

  return (
    <section className="py-20 bg-[#F0EDF9]">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="font-sans font-bold text-3xl md:text-4xl text-[#26215C] mb-4">
          {t("Start improving your English today.")}
        </h2>
        <p className="text-[#26215C]/70 text-lg mb-8">
          {t("Sign up in less than 10 minutes.")}
        </p>
        <Button
          asChild
          size="lg"
          className="bg-[#2457F1] hover:bg-[#2457F1]/90 text-white px-8 py-6 text-base"
        >
          <Link href="https://app.findhaven.org">{t("Apply for the program")}</Link>
        </Button>
      </div>
    </section>
  )
}
