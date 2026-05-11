"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useTranslation } from "@/lib/i18n"
import { useTrackingLink } from "@/components/tracking-provider"

export function HLPHero() {
  const { t } = useTranslation()
  const withTracking = useTrackingLink()

  return (
    <section className="relative pt-4 pb-10 bg-white -mt-[73px] pt-[calc(73px+1rem)]">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-center">
          {/* Image - Left */}
          <div className="order-1 md:order-1">
            <div className="rounded-xl md:rounded-[16px] overflow-hidden aspect-[3.3/3] max-w-sm mx-auto md:max-w-none">
              <Image
                src="/images/hlp-hero.jpg"
                alt="Haven Language Program participant"
                width={600}
                height={500}
                className="w-full h-full object-cover"
                style={{ objectPosition: "center 15%" }}
                priority
              />
            </div>
          </div>

          {/* Content - Right */}
          <div className="order-2 md:order-2 text-center md:text-left">
            <h1 className="font-sans font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-[38px] text-[var(--fg-1)] mb-4 md:mb-6 leading-tight tracking-tight text-balance">
              {t("A better way to learn English for newcomers fleeing conflict.")}
            </h1>
            <p className="font-body text-[var(--fg-4)] text-base sm:text-lg md:text-xl mb-6 md:mb-8 leading-relaxed">
              {t("Classes with professional teachers. Conversations with Canadians. Built around your schedule.")}
            </p>
            <div className="flex justify-center md:justify-start">
              <Button
                asChild
                size="lg"
                className="bg-[var(--haven-blue)] hover:bg-[var(--haven-blue)]/90 text-white px-8 py-6 text-base rounded-[100px]"
              >
                <Link href={withTracking("https://app.findhaven.org/signup")}>{t("Join Haven")}</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
