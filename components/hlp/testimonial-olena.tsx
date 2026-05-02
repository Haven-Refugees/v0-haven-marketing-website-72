"use client"

import Image from "next/image"
import { useTranslation } from "@/lib/i18n"

export function HLPTestimonialOlena() {
  const { t } = useTranslation()

  return (
    <section className="relative min-h-[500px]">
      <div className="grid md:grid-cols-[60%_40%] h-full min-h-[500px] items-stretch">
        {/* Left - Quote */}
        <div className="bg-[#F0EDF9] p-8 md:p-10 lg:p-12 flex flex-col justify-center min-h-[500px]">
          <blockquote className="text-[#26215C] text-xl md:text-2xl lg:text-3xl font-bold leading-snug mb-4">
            &ldquo;{t("This program has truly made a difference for me. It gave me a clear and consistent system for studying English. Most importantly, I overcame my fear of speaking.")}&rdquo;
          </blockquote>
          <p className="font-sans text-[#26215C] text-base">
            {t("Olena, a Haven student from Ukraine")}
          </p>
        </div>

        {/* Right - Photo */}
        <div className="relative min-h-[500px] md:min-h-full">
          <Image
            src="/images/olena.jpg"
            alt="Olena, Haven student from Ukraine"
            fill
            className="object-cover object-top"
          />
        </div>
      </div>
    </section>
  )
}
