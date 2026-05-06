"use client"

import Link from "next/link"
import { Clock, Users, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTranslation } from "@/lib/i18n"

export function HLPBenefits() {
  const { t } = useTranslation()

  const benefits = [
    {
      icon: Clock,
      title: t("Flexible schedule"),
      text: t("Classes run evenings and weekends to fit around your life."),
    },
    {
      icon: Users,
      title: t("Personalized learning"),
      text: t("Classes of 1 to 4 students — your teacher knows your goals."),
    },
    {
      icon: MessageCircle,
      title: t("English for life in Canada"),
      text: t("Learn practical English through classes and real conversations with Canadians."),
    },
  ]

  return (
    <section className="pt-10 md:pt-12 pb-12 md:pb-20 bg-[var(--bg-1)]">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <h2 className="font-sans font-bold text-2xl sm:text-3xl md:text-4xl text-[var(--fg-1)] text-center mb-10 md:mb-16">
          {t("We designed Haven to make learning as easy as possible.")}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-8 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-3 md:mb-4">
                <benefit.icon className="w-8 h-8 md:w-10 md:h-10 text-[var(--haven-purple)]" />
              </div>
              <h3 className="font-sans font-bold text-lg md:text-xl text-[var(--fg-1)] mb-2 md:mb-3">
                {benefit.title}
              </h3>
              <p className="font-body text-[var(--fg-4)] leading-relaxed text-sm md:text-base">
                {benefit.text}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10 md:mt-12">
          <Button
            asChild
            size="lg"
            className="bg-[var(--haven-blue)] hover:bg-[var(--haven-blue)]/90 text-white px-8 py-6 text-base rounded-[100px]"
          >
            <Link href="https://app.findhaven.org">{t("Apply for the program")}</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
