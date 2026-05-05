"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useTranslation } from "@/lib/i18n"

export function HavenConnect() {
  const { t } = useTranslation()

  return (
    <>
      <div className="pb-10 flex flex-col items-center">
        <p className="font-body text-muted-foreground text-2xl font-normal text-center mb-2">
          {t("Just want to meet Canadians? It's free and takes 30 minutes a week.")}
        </p>
        <svg
          className="w-5 h-5 text-haven-blue animate-bounce"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
      <section id="connect" className="pt-10 pb-20 bg-haven-purple/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-haven-purple text-sm font-semibold uppercase tracking-wider mb-4">
              {t("Haven Connect")}
            </p>
            <h2 className="font-sans font-bold text-3xl md:text-4xl text-foreground mb-4 tracking-tight">
              {t("Meet Canadians who can help you start life in Canada.")}
            </h2>
            <p className="font-body font-normal text-muted-foreground text-lg leading-relaxed mb-4">
              {t("These Canadians are here to help you practice your English or French, give you tips about life in your city, or help you navigate the Canadian job market.")}
            </p>
            <p className="font-body font-normal text-muted-foreground text-lg leading-relaxed mb-6">
              {t("It's free and starts with a 30 minute video call.")}
            </p>

            <Button size="lg" variant="secondary" asChild>
              <Link href="https://app.findhaven.org/signup">{t("Join Haven")}</Link>
            </Button>
          </div>

          <div className="order-first lg:order-last">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-[var(--shadow-card)]">
              <Image
                src="/images/haven-connect-hero.jpg"
                alt={t("Two women high-fiving on a snowy Canadian city street")}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}
