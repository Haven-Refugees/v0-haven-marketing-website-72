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
    <section className="py-20 bg-[var(--bg-4)]">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="font-sans font-bold text-3xl md:text-4xl text-[var(--fg-1)] mb-4">
          {t("Are you eligible?")}
        </h2>
        <p className="font-body text-[var(--fg-4)] text-lg mb-12">
          {t("Haven is for newcomers fleeing conflict who are living in Canada.")}
        </p>

        <div className="flex flex-wrap justify-center gap-8 mb-12">
          {criteria.map((criterion, index) => (
            <div key={index} className="flex flex-col items-center gap-3">
              <div className="w-16 h-16 bg-[var(--haven-purple)] rounded-full flex items-center justify-center">
                <Check className="w-8 h-8 text-white" strokeWidth={3} />
              </div>
              <span className="font-sans font-semibold text-[var(--fg-1)]">
                {t(criterion)}
              </span>
            </div>
          ))}
        </div>

        <p className="font-body text-[var(--fg-4)] leading-relaxed mb-6">
          {t("This includes refugees, refugee claimants, arrivals under Canadian humanitarian programs (such as CUAET holders and evacuees from Gaza), and newcomers from other conflict-affected countries.")}
        </p>
        <p className="font-body text-[var(--fg-5)] italic">
          {t("If you're not sure if you qualify, try signing up — we'll help you figure it out.")}
        </p>
      </div>
    </section>
  )
}
