"use client"

import Image from "next/image"
import { useTranslation } from "@/lib/i18n"

export function HLPTestimonialOlena() {
  const { t } = useTranslation()

  return (
    <section className="relative">
      <div className="grid md:grid-cols-2 min-h-[400px]">
        {/* Left - Quote */}
        <div className="bg-[#F0EDF9] p-12 md:p-16 lg:p-20 flex flex-col justify-center">
          <span className="inline-block bg-[#AF75FF]/20 text-[#AF75FF] text-xs font-semibold px-4 py-1.5 rounded-full mb-6 w-fit">
            {t("Haven student")}
          </span>
          <blockquote className="text-[#26215C] text-2xl md:text-3xl lg:text-4xl font-bold leading-snug mb-8">
            &ldquo;{t("This program has truly made a difference for me. It gave me a clear and consistent system for studying English. Most importantly, I overcame my fear of speaking.")}&rdquo;
          </blockquote>
          <div>
            <p className="font-sans font-bold text-[#26215C] text-lg">Olena</p>
            <p className="text-[#26215C]/60">{t("Ukraine")}</p>
          </div>
        </div>

        {/* Right - Photo */}
        <div className="relative min-h-[250px] md:min-h-full">
          <Image
            src="/images/olena.jpg"
            alt="Olena, Haven student from Ukraine"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  )
}
