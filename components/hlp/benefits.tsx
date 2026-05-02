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
    <section className="py-20 bg-[#F7F6FE]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="font-sans font-bold text-3xl md:text-4xl text-[#26215C] text-center mb-16">
          {t("We designed Haven to make learning as easy as possible.")}
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4">
                <benefit.icon className="w-10 h-10 text-[#AF75FF]" />
              </div>
              <h3 className="font-sans font-bold text-xl text-[#26215C] mb-3">
                {benefit.title}
              </h3>
              <p className="text-[#26215C]/70 leading-relaxed">
                {benefit.text}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            asChild
            size="lg"
            className="bg-[#AF75FF] hover:bg-[#AF75FF]/90 text-white px-8 py-6 text-base"
          >
            <Link href="https://app.findhaven.org">{t("Apply for the program")}</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
