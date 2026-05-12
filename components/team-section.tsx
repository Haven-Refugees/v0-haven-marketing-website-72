"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useTranslation } from "@/lib/i18n"

export function TeamSection() {
  const { t, link } = useTranslation()

  return (
    <section className="pt-12 pb-16 md:pb-24">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <h2 className="font-sans font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-foreground mb-4 md:mb-6 text-balance tracking-tight">
              {t("Canada wins when newcomers become independent faster.")}
            </h2>
            <p className="font-body text-base md:text-xl text-muted-foreground mb-4 leading-relaxed">
              {t("Our team believes that Canada should have a system that helps newcomers learn English and French and integrate into their communities, faster than ever before.")}
            </p>
            <p className="font-body text-base md:text-xl text-muted-foreground mb-6 md:mb-8 leading-relaxed">
              {t("Technology makes that possible at scale, and at a fraction of the current cost. That's good for refugees, good for Canadians, and good for Canada.")}
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-3 md:gap-4">
              <Button asChild variant="primary">
                <Link href={link("/about")}>{t("Our Vision")}</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href={link("/meet-the-team")}>{t("Meet our team")}</Link>
              </Button>
            </div>
          </div>

          <div className="relative order-1 lg:order-2">
            <div className="grid grid-cols-2 gap-3 md:gap-4 max-w-sm mx-auto lg:max-w-none">
              <div className="aspect-square rounded-xl md:rounded-2xl overflow-hidden shadow-[var(--shadow-flat)]">
                <img 
                  src="/images/team-shihab.jpg" 
                  alt="Shihab from Bangladesh" 
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="aspect-square rounded-xl md:rounded-2xl overflow-hidden shadow-[var(--shadow-flat)]">
                <img 
                  src="/images/team-verenice.jpg" 
                  alt="Verenice from Mexico" 
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="aspect-square rounded-xl md:rounded-2xl overflow-hidden shadow-[var(--shadow-flat)]">
                <img 
                  src="/images/team-woman-yellow.jpg" 
                  alt="Newcomer making peace sign" 
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="aspect-square rounded-xl md:rounded-2xl overflow-hidden shadow-[var(--shadow-flat)]">
                <img 
                  src="/images/team-nasina.jpg" 
                  alt="Nasina from Afghanistan" 
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
