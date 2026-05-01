"use client"

import Image from "next/image"
import { useTranslation } from "@/lib/i18n"

export function HLPTestimonialOlena() {
  const { t } = useTranslation()

  return (
    <section className="relative">
      <div className="grid md:grid-cols-2">
        {/* Left - Quote */}
        <div className="bg-[#F0EDF9] p-8 md:p-10 lg:p-12 flex flex-col justify-center">
          <blockquote className="text-[#26215C] text-xl md:text-2xl lg:text-3xl font-bold leading-snug mb-4">
            &ldquo;{t("This program has truly made a difference for me. It gave me a clear and consistent system for studying English. Most importantly, I overcame my fear of speaking.")}&rdquo;
          </blockquote>
          <div>
            <p className="font-sans font-bold text-[#26215C] text-base">Olena</p>
            <p className="text-[#26215C]/60 text-sm">{t("Ukraine")}</p>
          </div>
        </div>

        {/* Right - Photo */}
        <div className="relative min-h-[200px] md:min-h-[350px]">
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
