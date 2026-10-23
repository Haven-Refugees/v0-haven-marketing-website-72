"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useTranslation } from "@/lib/i18n"
import { useTrackingLink } from "@/components/tracking-provider"

export function CanadiansHero() {
  const { t } = useTranslation()
  const withTracking = useTrackingLink()

  return (
    <section className="relative pt-24 md:pt-24 pb-14 md:pb-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-10 md:gap-14 lg:gap-16 items-center">
          <div className="flex flex-col gap-4 md:gap-5 lg:pl-12 text-center lg:text-left order-2 lg:order-1">
            <h1 className="font-sans font-extrabold text-3xl sm:text-4xl lg:text-[44px] text-foreground leading-[1.15] tracking-tight text-balance">
              {t("Help a refugee practice English or French.")}{" "}
              <span className="block mt-1">
                {t("It takes just")}{" "}
                <span className="text-haven-purple whitespace-nowrap">{t("30 minutes")}</span>.
              </span>
            </h1>
            <p className="font-body font-normal text-base sm:text-lg md:text-xl text-foreground/75 leading-relaxed max-w-md mx-auto lg:mx-0 text-pretty">
              {t("Connect with a newcomer in Canada for a friendly video call. No teaching experience needed.")}
            </p>
            <div className="pt-2 flex justify-center lg:justify-start">
              <Button
                size="lg"
                variant="coral"
                className="transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_20px_-6px_var(--haven-coral)] motion-reduce:transition-none motion-reduce:hover:translate-y-0"
                asChild
              >
                <Link href={withTracking("https://app.findhaven.org/signup")}>
                  {t("Start Helping")}
                </Link>
              </Button>
            </div>
          </div>

          <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-none mx-auto order-1 lg:order-2 mt-4 lg:mt-0">
            <div
              aria-hidden="true"
              className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 w-3/4 h-3/4 rounded-[2rem] md:rounded-[2.5rem] bg-haven-coral-soft rotate-[-4deg]"
            />
            <div
              aria-hidden="true"
              className="absolute -top-5 -right-3 md:-top-7 md:-right-4 size-20 md:size-28 rounded-full bg-haven-purple"
            />
            <div className="relative rounded-2xl md:rounded-3xl overflow-hidden aspect-[3.24/3]">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1%20%286%29-YiOe9xHdauvK3n9GFiEV6cKiQ6B3Cl.png"
                alt="Canadian volunteer ready to help newcomers"
                fill
                sizes="(min-width: 1024px) 560px, (min-width: 640px) 448px, 384px"
                className="object-cover object-[center_60%]"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
