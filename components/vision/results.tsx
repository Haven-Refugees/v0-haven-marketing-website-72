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
    <section className="py-12 md:py-24 bg-haven-coral/10">
      <div className="max-w-[760px] mx-auto px-4 md:px-6">
        <h2 className="font-sans font-bold text-xl sm:text-2xl md:text-[28px] leading-tight text-foreground mb-4 md:mb-6 tracking-tight">
          {t("It works.")}
        </h2>
        <p className="font-body text-sm md:text-[15px] leading-[1.8] text-foreground/80 mb-6 md:mb-10">
          {t("Haven students improve their language skills faster and at a fraction of the cost of traditional programs. And Haven makes it easier for Canadians to help than any system before it — just a conversation, and a connection that can last a lifetime.")}
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-card rounded-xl md:rounded-2xl p-5 md:p-6 shadow-[var(--shadow-flat)]"
            >
              <p className="font-sans font-bold text-2xl md:text-[32px] text-haven-coral mb-1 md:mb-2">
                {stat.number}
              </p>
              <p className="font-body text-xs md:text-[14px] leading-relaxed text-muted-foreground">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
