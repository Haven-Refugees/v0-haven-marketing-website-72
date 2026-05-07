"use client"

import Image from "next/image"
import { useTranslation } from "@/lib/i18n"

export function VisionApproach() {
  const { t } = useTranslation()

  return (
    <section className="py-12 md:py-24 bg-card">
      <div className="max-w-[1000px] mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-12">
          <div className="md:flex-shrink-0">
            <Image
              src="/images/shihab-from-bangladesh.jpg"
              alt="Shihab from Bangladesh"
              width={320}
              height={480}
              className="rounded-lg object-cover w-full md:w-[320px] h-auto"
            />
          </div>
          <div className="md:flex-1">
            <h2 className="font-sans font-bold text-xl sm:text-2xl md:text-[28px] leading-tight text-foreground mb-4 md:mb-6 tracking-tight">
              {t("Refugees don't just need charity. They need opportunity, language, and community.")}
            </h2>
            <p className="font-body text-sm md:text-[15px] leading-[1.8] text-foreground/80 mb-4 md:mb-6">
              {t("Haven bridges two unmet needs at once: refugees who want to become independent Canadians, and Canadians who want to do something meaningful about global crises but don't know where to start. By focusing on language as the path to independence and direct human connection as the path to belonging, Haven consistently outperforms larger, better-funded programs.")}
            </p>
            <p className="font-body text-sm md:text-[15px] leading-[1.8] text-foreground/80">
              {t("When a newcomer improves their English and connects with a Canadian, they don't just feel more welcome — they find jobs faster, build networks sooner, and become contributing members of their communities. That's good for refugees, good for Canadians, and good for Canada.")}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
