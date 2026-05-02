"use client"

import { useTranslation } from "@/lib/i18n"

const steps = [
  {
    number: 1,
    title: "Create your profile",
    description: "Tell us about yourself and how you'd like to help. Takes less than 10 minutes.",
  },
  {
    number: 2,
    title: "Get matched",
    description: "Browse newcomer profiles and reach out to someone whose goals match what you can offer.",
  },
  {
    number: 3,
    title: "Have a conversation",
    description: "Your first meeting is just 30 minutes on a video call.",
  },
]

export function HowItWorks() {
  const { t } = useTranslation()

  return (
    <section className="py-20 md:py-24 bg-[#F0EEFE]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="font-sans font-bold text-3xl md:text-4xl text-foreground mb-4">
            {t("Three steps to your first conversation.")}
          </h2>
          <p className="font-sans text-muted-foreground text-lg leading-relaxed max-w-xl mx-auto">
            {t("From sign-up to your first match in under 10 minutes.")}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto text-center">
          {steps.map((step) => (
            <div key={step.number} className="flex flex-col items-center">
              <div className="w-12 h-12 bg-[#6B4EFF] rounded-full flex items-center justify-center mb-5">
                <span className="text-white font-bold text-lg">{step.number}</span>
              </div>
              <h3 className="font-sans font-bold text-lg text-foreground mb-3">
                {t(step.title)}
              </h3>
              <p className="font-sans text-muted-foreground text-sm leading-relaxed">
                {t(step.description)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
