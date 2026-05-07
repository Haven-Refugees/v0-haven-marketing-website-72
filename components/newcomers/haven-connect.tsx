"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useTranslation } from "@/lib/i18n"

export function HavenConnect() {
  const { t } = useTranslation()

  return (
    <>
      <div className="pb-8 md:pb-10 flex flex-col items-center px-4">
        <p className="font-body text-muted-foreground text-lg sm:text-xl md:text-2xl font-semibold text-center mb-2">
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
      <section id="connect" className="pt-10 pb-12 md:pb-20 bg-haven-purple/10">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <p className="text-haven-purple text-sm font-semibold uppercase tracking-wider mb-3 md:mb-4">
              {t("Haven Connect")}
            </p>
            <h2 className="font-sans font-bold text-2xl sm:text-3xl md:text-4xl text-foreground mb-3 md:mb-4 tracking-tight">
              {t("Meet Canadians who can help you start life in Canada.")}
            </h2>
            <p className="font-body font-normal text-muted-foreground text-base md:text-lg leading-relaxed mb-3 md:mb-4">
              {t("These Canadians are here to help you practice your English or French, give you tips about life in your city, or help you find work in Canada.")}
            </p>
            <p className="font-body font-normal text-muted-foreground text-base md:text-lg leading-relaxed mb-5 md:mb-6">
              {t("It's free and starts with a 30 minute video call.")}
            </p>

            <div className="flex justify-center lg:justify-start">
              <Button size="lg" variant="secondary" asChild>
                <Link href="https://app.findhaven.org/signup">{t("Join Haven")}</Link>
              </Button>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative rounded-xl md:rounded-2xl overflow-hidden aspect-[4/3] shadow-[var(--shadow-card)] max-w-sm mx-auto lg:max-w-none">
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
