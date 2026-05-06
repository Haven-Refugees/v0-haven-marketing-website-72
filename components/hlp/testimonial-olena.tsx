"use client"

import Image from "next/image"
import { useTranslation } from "@/lib/i18n"

export function HLPTestimonialOlena() {
  const { t } = useTranslation()

  return (
    <section className="relative">
      <div className="grid grid-cols-1 md:grid-cols-[60%_40%] h-full items-stretch">
        {/* Left - Quote */}
        <div className="bg-[var(--bg-4)] p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col justify-center min-h-[280px] md:min-h-[500px] order-2 md:order-1">
          <blockquote className="text-[var(--fg-1)] text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold leading-snug mb-3 md:mb-4">
            &ldquo;{t("This program has truly made a difference for me. It gave me a clear and consistent system for studying English. Most importantly, I overcame my fear of speaking.")}&rdquo;
          </blockquote>
          <p className="font-sans text-[var(--fg-3)] text-sm md:text-base">
            {t("Olena, a Haven student from Ukraine")}
          </p>
        </div>

        {/* Right - Photo */}
        <div className="relative h-[250px] md:h-auto md:min-h-[500px] order-1 md:order-2">
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
