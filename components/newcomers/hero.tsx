"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useTranslation } from "@/lib/i18n"

export function NewcomersHero() {
  const { t } = useTranslation()

  return (
    <section className="relative pt-14 pb-10 bg-haven-purple/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 items-center">
          <div className="space-y-6 lg:pl-16">
            <h1 className="font-sans font-extrabold text-3xl md:text-4xl lg:text-[40px] text-foreground leading-tight tracking-tight">
              {t("Improve your English or French.")}<br />{t("Build your life in Canada.")}
            </h1>
            <p className="font-body font-normal text-xl md:text-[22px] text-muted-foreground leading-relaxed max-w-lg">
              {t("Haven connects you with Canadian volunteers and teachers who are here to help.")}
            </p>
            <div className="pt-2">
              <Button size="lg" variant="secondary" asChild>
                <Link href="https://app.findhaven.org">
                  {t("Join Haven")}
                </Link>
              </Button>
            </div>
          </div>

          <div className="relative mt-8 w-[101%] -ml-8">
            <div className="relative rounded-2xl overflow-hidden aspect-[3.24/3] shadow-[var(--shadow-card)]">
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
