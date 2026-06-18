"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useTranslation } from "@/lib/i18n"
import { useTrackingLink } from "@/components/tracking-provider"
import { useHeroDirectSignup, heroCtaDestination } from "@/lib/heroCtaFlow"

export function HeroSection() {
  const { t } = useTranslation()
  const withTracking = useTrackingLink()
  const directSignup = useHeroDirectSignup()

  return (
    <section className="relative pt-28 md:pt-36 pb-16 md:pb-24 overflow-hidden bg-white">
      

      <div className="max-w-7xl mx-auto px-4 md:px-6 py-2 grid lg:grid-cols-[1fr_1fr] gap-6 md:gap-4 items-stretch">
        <div className="space-y-4 flex flex-col justify-center lg:pl-12 text-center lg:text-left order-2 lg:order-1">
          <h1 className="font-sans font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight text-balance tracking-tight">
            {t("We help refugees become independent in Canada faster.")}
          </h1>
          
          <p className="font-body font-normal text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
            {t("Newcomers fleeing conflict use Haven to improve their language and connect with Canadians.")}
          </p>

          <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
            <Button size="lg" variant="coral" asChild>
              <Link href={withTracking(heroCtaDestination(directSignup, "local"))}>
                {t("I Want to Help")}
              </Link>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <Link href={withTracking(heroCtaDestination(directSignup, "newcomer"))}>
                {t("I Need Help")}
              </Link>
            </Button>
          </div>
        </div>

        <div className="relative flex items-center justify-center lg:justify-end h-full order-1 lg:order-2">
          <img 
            src="/images/hero-stephanie-olena.png" 
            alt={t("Stephanie from Calgary and Olena from Ukraine - a Haven connection")} 
            className="w-full max-w-[340px] sm:max-w-[420px] md:max-w-[500px] lg:max-w-[800px] h-auto object-contain"
          />
        </div>
      </div>
    </section>
  )
}
