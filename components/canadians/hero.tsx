"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useTranslation } from "@/lib/i18n"

export function CanadiansHero() {
  const { t } = useTranslation()

  return (
    <section className="relative pt-14 pb-10 bg-haven-coral/10">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-6 md:gap-12 items-center">
          <div className="space-y-4 md:space-y-6 lg:pl-16 text-center lg:text-left order-2 lg:order-1">
            <h1 className="font-sans font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-[38px] text-foreground leading-tight tracking-tight">
              {t("Help a refugee in Canada.")}<br />{t("It takes 30 minutes.")}
            </h1>
            <p className="font-body font-normal text-base sm:text-lg md:text-xl lg:text-[22px] text-muted-foreground leading-relaxed max-w-lg mx-auto lg:mx-0">
              {t("Haven matches you directly with a newcomer for a video call. It's the easiest way to help.")}
            </p>
            <div className="pt-2 flex justify-center lg:justify-start">
              <Button 
                size="lg" 
                variant="coral"
                asChild
              >
                <Link href="https://app.findhaven.org/signup">
                  {t("Start Helping")}
                </Link>
              </Button>
            </div>
          </div>

          <div className="relative mt-0 md:mt-8 w-full lg:w-[101%] ml-0 order-1 lg:order-2">
            <div className="relative rounded-xl md:rounded-2xl overflow-hidden aspect-[3.24/3] shadow-[var(--shadow-card)] max-w-sm mx-auto lg:max-w-none">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1%20%286%29-YiOe9xHdauvK3n9GFiEV6cKiQ6B3Cl.png"
                alt="Canadian volunteer ready to help newcomers"
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
