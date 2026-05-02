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
    <section className="py-20 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-sans font-bold text-3xl md:text-4xl text-foreground mb-4">
            {t("Your schedule. Your pace. Just show up.")}
          </h2>
          <p className="font-sans text-muted-foreground text-lg leading-relaxed max-w-xl mx-auto">
            {t("Haven is designed to fit around your life.")}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-7 h-7 bg-[#E8725A] rounded-full flex items-center justify-center">
                  <Check className="w-4 h-4 text-white" strokeWidth={3} />
                </div>
              </div>
              <div>
                <h3 className="font-sans font-bold text-base text-foreground mb-2">
                  {t(feature.title)}
                </h3>
                <p className="font-sans text-muted-foreground text-sm leading-relaxed">
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
