"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useTranslation } from "@/lib/i18n"
import { useTrackingLink } from "@/components/tracking-provider"

export function SectionCanadians() {
  const { t } = useTranslation()
  const withTracking = useTrackingLink()

  return (
    <section className="py-12 md:py-20 bg-haven-coral/10">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center max-w-5xl mx-auto">
          {/* Left - Image */}
          <div className="rounded-2xl h-[280px] sm:h-[350px] md:h-[400px] overflow-hidden shadow-[var(--shadow-card)] order-1">
            <img 
              src="/images/canadians-hero.png" 
              alt={t("Canadian volunteer smiling")}
              className="w-full h-full object-cover object-top"
            />
          </div>

          {/* Right - Content */}
          <div className="max-w-lg order-2 text-center lg:text-left mx-auto lg:mx-0">
            <span className="text-haven-coral font-semibold text-sm tracking-wider uppercase mb-4 block">
              {t("For Canadians")}
            </span>
            <h2 className="font-sans font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[2.5rem] text-foreground leading-tight mb-4 md:mb-6 tracking-tight">
              {t("Help a refugee in just 30 minutes.")}
            </h2>
            <p className="font-body text-muted-foreground text-base md:text-lg mb-4 leading-relaxed">
              {t("Haven connects you directly with a refugee. Helping is easy — it's a conversation to practice their English or French, local tips about life in your city, or advice for navigating the Canadian job market.")}
            </p>
            <p className="font-body text-muted-foreground text-base md:text-lg mb-6 md:mb-8 leading-relaxed">
              {t("You pick your schedule. You pick how you help. No training required — just show up.")}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6">
              <Button size="lg" variant="coral" asChild>
                <Link href={withTracking("https://app.findhaven.org/signup")}>{t("Join Haven")}</Link>
              </Button>
              <Link href="https://v0-haven-marketing-website.vercel.app/en/for-canadians" className="font-body text-muted-foreground hover:text-foreground underline underline-offset-4">
                {t("Learn more")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
