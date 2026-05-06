"use client"

import Image from "next/image"
import { useTranslation } from "@/lib/i18n"

export function CanadiansTestimonial() {
  const { t } = useTranslation()

  return (
    <section className="bg-haven-coral/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Photo */}
          <div className="relative h-[220px] sm:h-[280px] md:h-[320px] lg:min-h-[400px]">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Camila%20Gargantini%20-%20outside_edited-D0tGW1FjpZzqx9HiiGPCjBv3e9OiNY.jpg"
              alt="Camila, a Haven volunteer from Mississauga"
              fill
              className="object-cover object-top"
            />
          </div>

          {/* Quote */}
          <div className="flex items-center p-6 sm:p-8 md:p-10 lg:p-16">
            <div>
              <blockquote className="font-sans font-bold text-xl sm:text-2xl md:text-3xl text-foreground leading-relaxed mb-4 md:mb-6 tracking-tight">
                {t("\"As someone who struggled to learn English myself, I know what a difference it makes to have someone patient to practice with.\"")}
              </blockquote>
              <p className="font-body text-sm md:text-base">
                <span className="font-semibold text-foreground">{t("Camila")}</span>
                <span className="text-muted-foreground">, {t("a Haven volunteer in Mississauga, originally from Brazil")}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
