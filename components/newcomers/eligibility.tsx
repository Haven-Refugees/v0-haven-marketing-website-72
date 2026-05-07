"use client"

import { Check } from "lucide-react"
import { useTranslation } from "@/lib/i18n"

const eligibilityChecks = [
  { label: "In Canada" },
  { label: "Fleeing conflict" },
  { label: "18 or older" },
]

export function Eligibility() {
  const { t } = useTranslation()

  return (
    <section className="py-12 md:py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
        <h2 className="font-sans font-bold text-2xl sm:text-3xl md:text-4xl text-foreground mb-3 tracking-tight">
          {t("Are you eligible?")}
        </h2>
        <p className="font-body font-normal text-muted-foreground text-base md:text-lg mb-8 md:mb-12">
          {t("Haven is for newcomers fleeing conflict who are living in Canada.")}
        </p>

        <div className="flex flex-wrap justify-center gap-6 md:gap-10 mb-8 md:mb-12">
          {eligibilityChecks.map((check, index) => (
            <div key={index} className="flex flex-col items-center gap-2 md:gap-3">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-haven-purple rounded-full flex items-center justify-center">
                <Check className="w-5 h-5 md:w-6 md:h-6 text-white" />
              </div>
              <p className="text-foreground font-semibold text-sm md:text-base">{t(check.label)}</p>
            </div>
          ))}
        </div>

        {/* Details */}
        <p className="font-body text-muted-foreground text-xs md:text-sm leading-relaxed max-w-2xl mx-auto mb-4 px-2">
          {t("This includes refugees, refugee claimants, arrivals under Canadian humanitarian programs (such as CUAET holders and evacuees from Gaza), and newcomers from other conflict-affected countries.")}
        </p>
        <p className="font-body text-muted-foreground text-xs md:text-sm italic">
          {t("If you're not sure if you qualify, try signing up — we'll help you figure it out.")}
        </p>
      </div>
    </section>
  )
}
