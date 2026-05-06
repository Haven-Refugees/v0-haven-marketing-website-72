"use client"

import { useTranslation } from "@/lib/i18n"

export function HLPProblem() {
  const { t } = useTranslation()

  return (
    <section className="pt-20 pb-12 bg-[var(--bg-1)]">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="font-sans font-bold text-3xl md:text-4xl text-[var(--fg-1)] mb-6">
          {t("Most English programs weren't built for you.")}
        </h2>
        <p className="text-[var(--fg-4)] text-lg leading-relaxed">
          {t("Classes of 20–30 students mean your teacher barely knows your name. Schedules conflict with work and family. And you rarely get to practice with real Canadians — the only way to build real confidence.")}
        </p>
      </div>
    </section>
  )
}
