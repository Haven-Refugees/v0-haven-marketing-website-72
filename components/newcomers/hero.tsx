"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useTranslation } from "@/lib/i18n"
import { useTrackingLink } from "@/components/tracking-provider"

export function NewcomersHero() {
  const { t } = useTranslation()
  const withTracking = useTrackingLink()

  return (
    <section className="relative pt-24 md:pt-14 pb-10 bg-haven-purple/10">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-8 md:gap-12 items-center">
          <div className="space-y-4 md:space-y-6 lg:pl-16 text-center lg:text-left order-2 lg:order-1">
            <h1 className="font-sans font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-[38px] text-foreground leading-tight tracking-tight">
              {t("Better English or French.")} {t("Build your life in Canada.")}
            </h1>
            <p className="font-body font-normal text-base sm:text-lg md:text-xl lg:text-[22px] text-muted-foreground leading-relaxed max-w-lg mx-auto lg:mx-0">
              {t("Haven connects you with Canadian volunteers and teachers who are here to help.")}
            </p>
            <div className="pt-2 flex justify-center lg:justify-start">
              <Button size="lg" variant="secondary" asChild>
                <Link href={withTracking("https://app.findhaven.org")}>
                  {t("Join Haven")}
                </Link>
              </Button>
            </div>
          </div>

          <div className="relative mt-0 md:mt-8 w-full lg:w-[101%] ml-0 order-1 lg:order-2">
            <div className="relative rounded-2xl overflow-hidden aspect-[3.24/3] shadow-[var(--shadow-card)] max-w-sm mx-auto lg:max-w-none">
              <Image
                src="/images/newcomers-hero.png"
                alt={t("A joyful woman celebrating with arms raised in a city street")}
                fill
                className="object-cover object-[center_60%] rounded-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
