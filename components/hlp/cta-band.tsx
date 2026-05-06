"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ShieldCheck } from "lucide-react"
import { useTranslation } from "@/lib/i18n"

export function HLPCtaBand() {
  const { t } = useTranslation()

  return (
    <section className="pb-12 md:pb-20 bg-[var(--bg-1)]">
      <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
        <h2 className="font-sans font-bold text-xl sm:text-2xl md:text-3xl text-[var(--fg-1)] mb-5 md:mb-6">
          {t("Start improving your English today.")}
        </h2>
        <Button
          asChild
          size="lg"
          className="bg-[var(--haven-blue)] hover:bg-[var(--haven-blue)]/90 text-white px-8 py-6 text-base mb-5 md:mb-6 rounded-[100px]"
        >
          <Link href="https://app.findhaven.org">{t("Join Haven now")}</Link>
        </Button>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 font-body text-[var(--fg-4)] text-xs md:text-sm px-4">
          <ShieldCheck className="w-4 h-4 shrink-0" />
          <span className="text-center">
            {t("Haven is a registered Canadian charity · Check us out on")}{" "}
            <Link
              href="https://www.canadahelps.org/en/charities/haven-refugees/"
              className="underline hover:text-[var(--fg-1)]"
              target="_blank"
              rel="noopener noreferrer"
            >
              CanadaHelps
            </Link>
          </span>
        </div>
      </div>
    </section>
  )
}
