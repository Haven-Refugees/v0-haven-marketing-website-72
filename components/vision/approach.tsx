"use client"

import { useTranslation } from "@/lib/i18n"

export function VisionApproach() {
  const { t } = useTranslation()

  return (
    <section className="py-20 md:py-24 bg-white">
      <div className="max-w-[760px] mx-auto px-6">
        <h2 className="font-sans font-medium text-[28px] leading-tight text-foreground mb-6">
          {t("Refugees don't need charity. They need opportunity, language, and community.")}
        </h2>
        <p className="text-[15px] leading-[1.8] text-foreground/80 mb-6">
          {t("Haven bridges two unmet needs at once: refugees who want to become independent Canadians, and Canadians who want to do something meaningful about global crises but don't know where to start. By focusing on language as the path to independence and direct human connection as the path to belonging, Haven consistently outperforms larger, better-funded programs.")}
        </p>
        <p className="text-[15px] leading-[1.8] text-foreground/80">
          {t("When a newcomer improves their English and connects with a Canadian, they don't just feel more welcome — they find jobs faster, build networks sooner, and become contributing members of their communities. That's good for refugees, good for Canadians, and good for Canada.")}
        </p>
      </div>
    </section>
  )
}
