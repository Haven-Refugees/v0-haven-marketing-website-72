"use client"

import Image from "next/image"
import { useTranslation } from "@/lib/i18n"

export function HLPTestimonialLidia() {
  const { t } = useTranslation()

  return (
    <section className="relative">
      <div className="grid md:grid-cols-2">
        {/* Left - Photo */}
        <div className="relative min-h-[200px] md:min-h-[350px] order-2 md:order-1">
          <Image
            src="/images/lidia.jpg"
            alt="Lidia, Haven Teacher"
            fill
            className="object-cover object-top"
          />
        </div>

        {/* Right - Quote */}
        <div className="bg-[#F0EDF9] p-8 md:p-10 lg:p-12 flex flex-col justify-center order-1 md:order-2">
          <span className="inline-block bg-[#AF75FF]/20 text-[#AF75FF] text-xs font-semibold px-4 py-1.5 rounded-full mb-4 w-fit">
            {t("Haven teacher")}
          </span>
          <blockquote className="text-[#26215C] text-xl md:text-2xl lg:text-3xl font-bold leading-snug mb-4">
            &ldquo;{t("My classes are focused on topics that actually matter to newcomers. I love to see the big improvements students make after 20 weeks.")}&rdquo;
          </blockquote>
          <div>
            <p className="font-sans font-bold text-[#26215C] text-base">Lidia</p>
            <p className="text-[#26215C]/60 text-sm">{t("Haven Teacher")}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
