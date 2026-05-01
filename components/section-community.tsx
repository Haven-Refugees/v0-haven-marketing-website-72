"use client"

import Link from "next/link"
import { useTranslation } from "@/lib/i18n"

function StarburstIcon() {
  return (
    <img 
      src="/images/maple-leaf-icon.svg" 
      alt="Maple leaf icon" 
      width={240} 
      height={240}
      className="object-contain"
    />
  )
}

function IdVerificationIcon() {
  return (
    <img 
      src="/images/id-verification-icon.svg" 
      alt="ID verification icon" 
      width={240} 
      height={240}
      className="object-contain"
    />
  )
}

function CharityBadgeIcon() {
  return (
    <img 
      src="/images/charity-badge-icon.svg" 
      alt="Charity badge icon" 
      width={240} 
      height={240}
      className="object-contain"
    />
  )
}

export function SectionCommunity() {
  const { t } = useTranslation()

  return (
    <section className="pt-10 pb-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-foreground mb-2 max-w-3xl mx-auto leading-tight">
          {t("Haven is where old Canadians meet new ones.")}
        </h2>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Card 1 - Users */}
          <div className="text-center">
            <div className="flex justify-center items-end h-[140px] mb-4">
              <StarburstIcon />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">
              {t("20,000+ users in Canada")}
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {t("Newcomers from 50+ countries, now in 500+ communities across Canada.")}
            </p>
          </div>

          {/* Card 2 - Verification */}
          <div className="text-center">
            <div className="flex justify-center items-end h-[140px] mb-4">
              <IdVerificationIcon />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">
              {t("Connect with confidence.")}
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {t("We use ID verification so you always know who you're connecting with.")}
            </p>
          </div>

          {/* Card 3 - Charity */}
          <div className="text-center">
            <div className="flex justify-center items-end h-[140px] mb-4">
              <CharityBadgeIcon />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">
              {t("Registered Canadian charity")}
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {t("Haven is registered with the CRA. Check us out on")}{" "}
              <Link href="https://www.canadahelps.org/en/charities/haven-refugees/" className="text-primary underline hover:text-primary/80">
                CanadaHelps
              </Link>.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
