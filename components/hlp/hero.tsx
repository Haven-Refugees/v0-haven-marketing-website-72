"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useTranslation } from "@/lib/i18n"

export function HLPHero() {
  const { t } = useTranslation()

  return (
    <section className="relative pt-10 pb-20 bg-[#F0EDF9]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image - Left */}
          <div className="order-2 md:order-1">
            <div className="rounded-2xl overflow-hidden aspect-[3.3/3]">
              <Image
                src="/images/hlp-hero.jpg"
                alt="Haven Language Program participant"
                width={600}
                height={500}
                className="w-full h-full object-cover"
                style={{ objectPosition: "center 15%" }}
                priority
              />
            </div>
          </div>

          {/* Content - Right */}
          <div className="order-1 md:order-2">
            <h1 className="font-sans font-bold text-3xl md:text-4xl lg:text-5xl text-[#26215C] mb-6 leading-tight text-balance">
              {t("A better way to learn English for newcomers fleeing conflict.")}
            </h1>
            <p className="text-[#26215C]/80 text-lg md:text-xl mb-8 leading-relaxed">
              {t("Classes with professional teachers. Conversations with Canadians. Built around your schedule.")}
            </p>
            <Button
              asChild
              size="lg"
              className="bg-[#2457F1] hover:bg-[#2457F1]/90 text-white px-8 py-6 text-base"
            >
              <Link href="https://app.findhaven.org">{t("Join Haven")}</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
