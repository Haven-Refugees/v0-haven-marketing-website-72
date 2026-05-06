"use client"

import { Check } from "lucide-react"
import { useTranslation } from "@/lib/i18n"

const features = [
  {
    title: "Pick your availability",
    description: "Set the days and times that work for you. No fixed schedule required.",
  },
  {
    title: "Choose how you help",
    description: "Match with someone whose needs fit what you're comfortable offering.",
  },
  {
    title: "No long-term commitment",
    description: "Some matches meet once. Others meet for years. You decide what works.",
  },
]

export function YourSchedule() {
  const { t } = useTranslation()

  return (
    <section className="py-12 md:py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="font-sans font-bold text-2xl sm:text-3xl md:text-4xl text-foreground mb-3 md:mb-4 tracking-tight">
            {t("Your Schedule. Your Pace. Just Show Up.")}
          </h2>
          <p className="font-body text-muted-foreground text-base md:text-lg leading-relaxed max-w-xl mx-auto">
            {t("Haven is designed to fit around your life.")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="flex gap-3 md:gap-4">
              <div className="flex-shrink-0">
                <div className="w-6 h-6 md:w-7 md:h-7 bg-haven-coral rounded-full flex items-center justify-center">
                  <Check className="w-3.5 h-3.5 md:w-4 md:h-4 text-white" strokeWidth={3} />
                </div>
              </div>
              <div>
                <h3 className="font-sans font-semibold text-sm md:text-base text-foreground mb-1 md:mb-2 tracking-tight">
                  {t(feature.title)}
                </h3>
                <p className="font-body text-muted-foreground text-xs md:text-sm leading-relaxed">
                  {t(feature.description)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
