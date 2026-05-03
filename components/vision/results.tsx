"use client"

import { useTranslation } from "@/lib/i18n"

export function VisionResults() {
  const { t } = useTranslation()

  const stats = [
    {
      number: "5,000+",
      description: t("matches between refugees and Canadian volunteers"),
    },
    {
      number: "1,000+",
      description: t("refugees have participated in our full language program"),
    },
    {
      number: "2×",
      description: t("faster English improvement than traditional programs, for far less cost"),
    },
  ]

  return (
    <section className="py-20 md:py-24 bg-[#FDF0EB]">
      <div className="max-w-[760px] mx-auto px-6">
        <h2 className="font-sans font-medium text-[28px] leading-tight text-foreground mb-6">
          {t("It works.")}
        </h2>
        <p className="text-[15px] leading-[1.8] text-foreground/80 mb-10">
          {t("Haven students improve their language skills faster and at a fraction of the cost of traditional programs. And Haven makes it easier for Canadians to help than any system before it — just a conversation, and a connection that can last a lifetime.")}
        </p>
        
        <div className="grid md:grid-cols-3 gap-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6"
            >
              <p className="font-sans font-medium text-[32px] text-[#E8725A] mb-2">
                {stat.number}
              </p>
              <p className="text-[14px] leading-relaxed text-muted-foreground">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
