"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useTranslation } from "@/lib/i18n"

export function SectionNewcomers() {
  const { t } = useTranslation()

  return (
    <section className="py-12 md:py-20 bg-haven-purple/10">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center max-w-5xl mx-auto">
          {/* Left Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <p className="text-haven-purple font-semibold uppercase tracking-wide text-sm mb-4">
              {t("For Newcomers")}
            </p>
            <h2 className="font-sans font-bold text-2xl sm:text-3xl md:text-4xl text-foreground leading-tight mb-4 md:mb-6 tracking-tight">
              {t("Speak with Canadian volunteers. Study with professional teachers.")}
            </h2>
            <p className="font-body text-muted-foreground text-base md:text-lg mb-4 leading-relaxed">
              {t("Haven matches you with Canadian volunteers to help you practice English or French, meet people in your community, and find work in Canada.")}
            </p>
            <p className="font-body text-muted-foreground text-base md:text-lg mb-6 md:mb-8 leading-relaxed">
              {t("Join for conversations only, or add classes with professional teachers if language is your main focus.")}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6">
              <Button size="lg" variant="secondary" asChild>
                <Link href="https://app.findhaven.org/signup">{t("Join Haven")}</Link>
              </Button>
              <Link 
                href="https://v0-haven-marketing-website.vercel.app/en/for-newcomers" 
                className="font-body text-muted-foreground hover:text-foreground underline underline-offset-4"
              >
                {t("Learn More")}
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center order-1 lg:order-2">
            <div className="w-full h-[280px] sm:h-[350px] md:h-[400px] rounded-2xl overflow-hidden shadow-[var(--shadow-card)]">
              <img 
                src="/images/newcomers-hero.png" 
                alt={t("Happy newcomer celebrating in a city")}
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
