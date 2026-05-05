"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useTranslation } from "@/lib/i18n"

export function HeroSection() {
  const { t } = useTranslation()

  return (
    <section className="relative flex items-center justify-center min-h-[95vh] pt-32 pb-20 overflow-hidden">
      

      <div className="max-w-7xl mx-auto px-6 py-2 grid lg:grid-cols-[1fr_1fr] gap-4 items-stretch">
        <div className="space-y-4 flex flex-col justify-center lg:pl-12">
          <h1 className="font-sans font-extrabold text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight text-balance tracking-tight">
            {t("We help refugees become independent in Canada faster.")}
          </h1>
          
          <p className="font-body font-normal text-xl text-muted-foreground leading-relaxed">
            {t("Newcomers fleeing conflict use Haven to improve their language and connect with Canadians.")}
          </p>

          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <Button size="lg" variant="coral" asChild>
              <Link href="https://app.findhaven.org/?usertype=local">
                {t("I Want to Help")}
              </Link>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <Link href="https://app.findhaven.org/?usertype=newcomer">
                {t("I Need Help")}
              </Link>
            </Button>
          </div>
        </div>

        <div className="relative flex items-center justify-end h-full">
          <img 
            src="/images/hero-stephanie-olena.png" 
            alt={t("Stephanie from Calgary and Olena from Ukraine - a Haven connection")} 
            className="w-full max-w-[800px] h-auto object-contain"
          />
        </div>
      </div>
    </section>
  )
}
