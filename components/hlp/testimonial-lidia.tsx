"use client"

import Image from "next/image"
import { useTranslation } from "@/lib/i18n"

export function HLPTestimonialLidia() {
  const { t } = useTranslation()

  return (
    <section className="relative">
      <div className="grid grid-cols-1 md:grid-cols-[40%_60%] h-full items-stretch">
        {/* Left - Photo */}
        <div className="relative h-[250px] md:h-auto md:min-h-[500px] order-1 md:order-1">
          <Image
            src="/images/lidia.jpg"
            alt="Lidia, Haven Teacher"
            fill
            className="object-cover object-top"
          />
        </div>

        {/* Right - Quote */}
        <div className="bg-[var(--bg-4)] p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col justify-center order-2 md:order-2 min-h-[280px] md:min-h-[500px]">
          <blockquote className="text-[var(--fg-1)] text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold leading-snug mb-3 md:mb-4">
            &ldquo;{t("My classes are focused on topics that actually matter to newcomers. I love to see the big improvements students make after 20 weeks.")}&rdquo;
          </blockquote>
          <p className="font-sans text-[var(--fg-3)] text-sm md:text-base">
            {t("Lidia, a Haven teacher in Montreal")}
          </p>
        </div>
      </div>
    </section>
  )
}
