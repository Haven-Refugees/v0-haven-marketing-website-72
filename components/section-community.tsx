"use client"

import Link from "next/link"
import { useTranslation } from "@/lib/i18n"

function StarburstIcon() {
  return (
    <img 
      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/March%202026%20Website%20Work%20%2810%29-MGkBOB05hRHs0TI5KYQ64IPFwVzQlt.png" 
      alt="Maple leaf icon" 
      width={72} 
      height={72}
      className="object-contain"
    />
  )
}

function IdVerificationIcon() {
  return (
    <img 
      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/March%202026%20Website%20Work%20%288%29-FVSuJq2OCO1rrilUDKSucMSj97sQRQ.png" 
      alt="ID verification icon" 
      width={84} 
      height={72}
      className="object-contain"
    />
  )
}

function CharityBadgeIcon() {
  return (
    <img 
      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/March%202026%20Website%20Work%20%289%29-bBvvvDBRCn130yH2QWsY5IdAxtkuci.png" 
      alt="Charity badge icon" 
      width={72} 
      height={72}
      className="object-contain"
    />
  )
}

export function SectionCommunity() {
  const { t } = useTranslation()

  return (
    <section className="pt-4 pb-12 md:pb-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center text-foreground mb-2 max-w-3xl mx-auto leading-tight tracking-tight px-2">
          {t("Where newcomers and Canadians meet.")}
        </h2>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-8 max-w-5xl mx-auto">
          {/* Card 1 - Users */}
          <div className="text-center">
            <div className="flex justify-center items-center h-[80px] md:h-[120px] mb-3 md:mb-4">
              <StarburstIcon />
            </div>
            <h3 className="text-lg md:text-xl font-bold text-foreground mb-2 tracking-tight">
              {t("20,000+ Users in Canada")}
            </h3>
            <p className="font-body text-muted-foreground leading-relaxed text-sm md:text-base">
              {t("Newcomers from 50+ countries, now in 500+ communities across Canada.")}
            </p>
          </div>

          {/* Card 2 - Verification */}
          <div className="text-center">
            <div className="flex justify-center items-center h-[80px] md:h-[120px] mb-3 md:mb-4">
              <IdVerificationIcon />
            </div>
            <h3 className="text-lg md:text-xl font-bold text-foreground mb-2 tracking-tight">
              {t("Connect With Confidence")}
            </h3>
            <p className="font-body text-muted-foreground leading-relaxed text-sm md:text-base">
              {t("We use ID verification so you always know who you're connecting with.")}
            </p>
          </div>

          {/* Card 3 - Charity */}
          <div className="text-center">
            <div className="flex justify-center items-center h-[80px] md:h-[120px] mb-3 md:mb-4">
              <CharityBadgeIcon />
            </div>
            <h3 className="text-lg md:text-xl font-bold text-foreground mb-2 tracking-tight">
              {t("Registered Canadian Charity")}
            </h3>
            <p className="font-body text-muted-foreground leading-relaxed text-sm md:text-base">
              {t("Haven is registered with the CRA. Check us out on")}{" "}
              <Link href="https://www.canadahelps.org/en/charities/haven-refugees/" className="text-haven-blue underline hover:text-haven-blue/80">
                CanadaHelps
              </Link>.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
