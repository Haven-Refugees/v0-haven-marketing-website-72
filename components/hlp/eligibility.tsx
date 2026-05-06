"use client"

import { Check } from "lucide-react"
import { useTranslation } from "@/lib/i18n"

const criteria = [
  "In Canada",
  "Fleeing conflict",
  "18 or older",
]

export function HLPEligibility() {
  const { t } = useTranslation()

  return (
    <section className="py-12 md:py-20 bg-[var(--bg-4)]">
      <div className="max-w-3xl mx-auto px-4 md:px-6 text-center">
        <h2 className="font-sans font-bold text-2xl sm:text-3xl md:text-4xl text-[var(--fg-1)] mb-3 md:mb-4">
          {t("Are you eligible?")}
        </h2>
        <p className="font-body text-[var(--fg-4)] text-base md:text-lg mb-8 md:mb-12">
          {t("Haven is for newcomers fleeing conflict who are living in Canada.")}
        </p>

        <div className="flex flex-wrap justify-center gap-6 md:gap-8 mb-8 md:mb-12">
          {criteria.map((criterion, index) => (
            <div key={index} className="flex flex-col items-center gap-2 md:gap-3">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-[var(--haven-purple)] rounded-full flex items-center justify-center">
                <Check className="w-6 h-6 md:w-8 md:h-8 text-white" strokeWidth={3} />
              </div>
              <span className="font-sans font-semibold text-[var(--fg-1)] text-sm md:text-base">
                {t(criterion)}
              </span>
            </div>
          ))}
        </div>

        <p className="font-body text-[var(--fg-4)] leading-relaxed mb-4 md:mb-6 text-sm md:text-base px-2">
          {t("This includes refugees, refugee claimants, arrivals under Canadian humanitarian programs (such as CUAET holders and evacuees from Gaza), and newcomers from other conflict-affected countries.")}
        </p>
        <p className="font-body text-[var(--fg-5)] italic text-sm md:text-base">
          {t("If you're not sure if you qualify, try signing up — we'll help you figure it out.")}
        </p>
      </div>
    </section>
  )
}
