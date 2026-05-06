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
    <section className="py-12 md:py-24 bg-haven-coral/10">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-8 md:mb-14">
          <h2 className="font-sans font-bold text-2xl sm:text-3xl md:text-4xl text-foreground mb-3 md:mb-4 tracking-tight">
            {t("Three Steps to Your First Conversation")}
          </h2>
          <p className="font-body text-muted-foreground text-base md:text-lg leading-relaxed max-w-xl mx-auto">
            {t("From sign-up to your first match in under 10 minutes.")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-8 max-w-4xl mx-auto text-center">
          {steps.map((step) => (
            <div key={step.number} className="flex flex-col items-center">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-haven-coral rounded-full flex items-center justify-center mb-4 md:mb-5">
                <span className="text-white font-bold text-base md:text-lg">{step.number}</span>
              </div>
              <h3 className="font-sans font-bold text-base md:text-lg text-foreground mb-2 md:mb-3 tracking-tight">
                {t(step.title)}
              </h3>
              <p className="font-body text-muted-foreground text-sm leading-relaxed">
                {t(step.description)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
