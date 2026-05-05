"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useTranslation } from "@/lib/i18n"

export function SectionCanadians() {
  const { t } = useTranslation()

  return (
    <section className="py-20 bg-haven-coral/10">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          {/* Left - Image */}
          <div className="rounded-2xl h-[400px] overflow-hidden shadow-[var(--shadow-card)]">
            <img 
              src="/images/canadians-hero.png" 
              alt={t("Canadian volunteer smiling")}
              className="w-full h-full object-cover object-top"
            />
          </div>

          {/* Right - Content */}
          <div className="max-w-lg">
            <span className="text-haven-coral font-semibold text-sm tracking-wider uppercase mb-4 block">
              {t("For Canadians")}
            </span>
            <h2 className="font-sans font-bold text-3xl md:text-4xl lg:text-[2.5rem] text-foreground leading-tight mb-6 tracking-tight">
              {t("Help a refugee in just 30 minutes.")}
            </h2>
            <p className="font-body text-muted-foreground text-lg mb-4 leading-relaxed">
              {t("Haven connects you directly with a refugee. Helping is easy — it's a conversation to practice their English or French, local tips about life in your city, or advice for navigating the Canadian job market.")}
            </p>
            <p className="font-body text-muted-foreground text-lg mb-8 leading-relaxed">
              {t("You pick your schedule. You pick how you help. No training required — just show up.")}
            </p>
            <div className="flex items-center gap-6">
              <Button size="lg" variant="coral" asChild>
                <Link href="https://app.findhaven.org/signup">{t("Join Haven")}</Link>
              </Button>
              <Link href="https://v0-haven-marketing-website.vercel.app/en/for-canadians" className="font-body text-haven-coral hover:underline font-medium underline">
                {t("Learn More")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
