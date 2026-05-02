"use client"

import Image from "next/image"
import { useTranslation } from "@/lib/i18n"

export function HLPTestimonialLidia() {
  const { t } = useTranslation()

  return (
    <section className="relative min-h-[500px]">
      <div className="grid md:grid-cols-[40%_60%] h-full min-h-[500px]">
        {/* Left - Photo */}
        <div className="relative min-h-[500px] md:min-h-full order-2 md:order-1">
          <Image
            src="/images/lidia.jpg"
            alt="Lidia, Haven Teacher"
            fill
            className="object-cover object-top"
          />
        </div>

        {/* Right - Quote */}
        <div className="bg-[#F0EDF9] p-8 md:p-10 lg:p-12 flex flex-col justify-center order-1 md:order-2">
          <blockquote className="text-[#26215C] text-xl md:text-2xl lg:text-3xl font-bold leading-snug mb-4">
            &ldquo;{t("My classes are focused on topics that actually matter to newcomers. I love to see the big improvements students make after 20 weeks.")}&rdquo;
          </blockquote>
          <p className="font-sans text-[#26215C] text-base">
            {t("Lidia, a Haven teacher in Montreal")}
          </p>
        </div>
      </div>
    </section>
  )
}
