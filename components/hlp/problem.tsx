"use client"

import { useTranslation } from "@/lib/i18n"

export function HLPProblem() {
  const { t } = useTranslation()

  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="font-sans font-bold text-3xl md:text-4xl text-[#26215C] mb-6">
          {t("Most English programs weren't built for you.")}
        </h2>
        <p className="text-[#26215C]/70 text-lg leading-relaxed">
          {t("Classes of 20–30 students mean your teacher barely knows your name. Schedules are fixed and inconvenient — often during work hours or late at night. And you rarely get to practice with real Canadians, which is the only way to build real confidence.")}
        </p>
      </div>
    </section>
  )
}
