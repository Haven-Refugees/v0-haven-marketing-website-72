"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useTranslation } from "@/lib/i18n"
import { useTrackingLink } from "@/components/tracking-provider"

const CANADA_WORDS = /(Canada|Canadá|كندا|کانادا|Канаді)/

function HighlightCanada({ text }: { text: string }) {
  return (
    <>
      {text.split(CANADA_WORDS).map((part, i) =>
        CANADA_WORDS.test(part) ? (
          <span key={i} className="text-haven-coral">
            {part}
          </span>
        ) : (
          part
        ),
      )}
    </>
  )
}

export function NewcomersHero() {
  const { t } = useTranslation()
  const withTracking = useTrackingLink()

  return (
    <section className="relative pt-24 md:pt-16 pb-14 md:pb-16 bg-haven-purple/10">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-8 md:gap-12 items-center">
          <div className="space-y-4 md:space-y-6 lg:pl-16 text-center lg:text-left order-2 lg:order-1">
            <h1 className="font-sans font-extrabold text-3xl sm:text-4xl lg:text-[44px] text-foreground leading-[1.15] tracking-tight text-balance">
              {t("Better English or French.")}{" "}
              <HighlightCanada text={t("Build your life in Canada.")} />
            </h1>
            <p className="font-body font-normal text-base sm:text-lg md:text-xl lg:text-[22px] text-muted-foreground leading-relaxed max-w-lg mx-auto lg:mx-0">
              {t("Haven connects you with Canadian volunteers and teachers who are here to help.")}
            </p>
            <div className="pt-2 flex justify-center lg:justify-start">
              <Button size="lg" variant="secondary" asChild>
                <Link href={withTracking("https://app.findhaven.org/signup")}>
                  {t("Join Haven")}
                </Link>
              </Button>
            </div>
          </div>

          <div className="relative mt-0 md:mt-8 w-full lg:w-[101%] ml-0 order-1 lg:order-2">
            <div className="relative max-w-sm mx-auto lg:max-w-none">
              <div
                aria-hidden="true"
                className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 w-3/4 h-3/4 rounded-[2rem] md:rounded-[2.5rem] bg-haven-coral-soft rotate-[-4deg]"
              />
              <div
                aria-hidden="true"
                className="absolute -top-5 -right-3 md:-top-7 md:-right-4 size-20 md:size-28 rounded-full bg-haven-purple"
              />
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
      </div>
    </section>
  )
}
