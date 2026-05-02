"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useTranslation } from "@/lib/i18n"

export function CanadiansHero() {
  const { t } = useTranslation()

  return (
    <section className="relative pt-14 pb-10 bg-[#FDF0EB]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 items-center">
          <div className="space-y-6 lg:pl-16">
            <h1 className="font-sans font-extrabold text-4xl md:text-5xl lg:text-[44px] text-foreground leading-tight">
              {t("Help a refugee in Canada. It takes 30 minutes.")}
            </h1>
            <p className="font-sans font-medium text-xl md:text-[22px] text-muted-foreground leading-relaxed max-w-lg">
              {t("Haven matches you directly with a newcomer for a video call. It's the easiest way to help.")}
            </p>
            <div className="pt-2">
              <Button 
                size="lg" 
                className="text-base px-7 py-6 bg-[#E8725A] hover:bg-[#d4654f] text-white rounded-lg"
                asChild
              >
                <Link href="https://app.findhaven.org">
                  {t("Start helping")}
                </Link>
              </Button>
            </div>
          </div>

          <div className="relative mt-8 w-[101%] -ml-8">
            <div className="relative rounded-3xl overflow-hidden aspect-[3.24/3]">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1%20%286%29-YiOe9xHdauvK3n9GFiEV6cKiQ6B3Cl.png"
                alt="Canadian volunteer ready to help newcomers"
                fill
                className="object-cover object-[center_60%] rounded-3xl"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
