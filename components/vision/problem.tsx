"use client"

import { useTranslation } from "@/lib/i18n"

export function VisionProblem() {
  const { t } = useTranslation()

  return (
    <section className="py-12 md:py-24 bg-haven-purple/10">
      <div className="max-w-[760px] mx-auto px-4 md:px-6">
        <h2 className="font-sans font-bold text-xl sm:text-2xl md:text-[28px] leading-tight text-foreground mb-4 md:mb-6 tracking-tight">
          {t("The current system wasn't built for speed.")}
        </h2>
        <p className="font-body text-sm md:text-[15px] leading-[1.8] text-foreground/80">
          {t("Most newcomers arrive in Canada ready to work, learn, and contribute. But the programs designed to help them are slow, expensive, and hard to access. Language classes have long waitlists and large class sizes. Canadians who want to help don't have an easy way to get involved. The result is that newcomers take far longer than necessary to become independent — and that's bad for everyone.")}
        </p>
      </div>
    </section>
  )
}
