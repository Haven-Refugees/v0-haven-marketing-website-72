"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useTranslation } from "@/lib/i18n"

export function SectionNewcomers() {
  const { t } = useTranslation()

  return (
    <section className="py-20 bg-secondary/10">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          {/* Left Content */}
          <div>
            <p className="text-secondary font-medium uppercase tracking-wide text-sm mb-4">
              {t("For Newcomers")}
            </p>
            <h2 className="font-sans font-bold text-3xl md:text-4xl text-foreground leading-tight mb-6">
              {t("Speak with Canadian volunteers. Study with professional teachers.")}
            </h2>
            <p className="text-muted-foreground text-lg mb-4 leading-relaxed">
              {t("Haven matches you with Canadian volunteers to help you practice English or French, meet people in your community, and find work in Canada.")}
            </p>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              {t("Join for conversations only, or add classes with professional teachers if language is your main focus.")}
            </p>
            <div className="flex items-center gap-6">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white" asChild>
                <Link href="https://app.findhaven.org">{t("I need help")}</Link>
              </Button>
              <Link 
                href="https://app.findhaven.org" 
                className="text-muted-foreground hover:text-foreground underline underline-offset-4"
              >
                {t("Learn more")}
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center">
            <div className="w-full h-[400px] rounded-3xl overflow-hidden">
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
