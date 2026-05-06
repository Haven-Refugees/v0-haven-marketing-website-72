"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ShieldCheck } from "lucide-react"
import { useTranslation } from "@/lib/i18n"

export function HLPCtaBand() {
  const { t } = useTranslation()

  return (
    <section className="pb-20 bg-[var(--bg-1)]">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="font-sans font-bold text-2xl md:text-3xl text-[var(--fg-1)] mb-6">
          {t("Start improving your English today.")}
        </h2>
        <Button
          asChild
          size="lg"
          className="bg-[var(--haven-blue)] hover:bg-[var(--haven-blue)]/90 text-white px-8 py-6 text-base mb-6 rounded-[100px]"
        >
          <Link href="https://app.findhaven.org">{t("Join Haven now")}</Link>
        </Button>
        <div className="flex items-center justify-center gap-2 font-body text-[var(--fg-4)] text-sm">
          <ShieldCheck className="w-4 h-4" />
          <span>
            {t("Haven is a registered Canadian charity · Check us out on")}{" "}
            <Link
              href="https://canadahelps.org"
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
