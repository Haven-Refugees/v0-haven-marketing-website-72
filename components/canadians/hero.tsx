"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useTranslation } from "@/lib/i18n"

export function CanadiansHero() {
  const { t } = useTranslation()

  return (
    <section className="relative pt-24 pb-16 md:pb-24 bg-[#FDF0EB]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 lg:pl-8">
            <span className="text-[#E8725A] text-sm font-semibold uppercase tracking-wide">
              {t("For Canadians")}
            </span>
            <h1 className="font-sans font-extrabold text-4xl md:text-5xl lg:text-[44px] text-foreground leading-tight">
              {t("Help a refugee in Canada. It takes 30 minutes.")}
            </h1>
            <p className="font-sans text-lg text-muted-foreground leading-relaxed max-w-lg">
              {t("Haven matches you directly with a newcomer for a video call. It's the easiest way to help.")}
            </p>
            <div className="pt-2">
              <Button 
                size="lg" 
                className="text-base px-8 py-6 bg-[#E8725A] hover:bg-[#d4654f] text-white rounded-lg"
                asChild
              >
                <Link href="https://app.findhaven.org">
                  {t("Start helping")}
                </Link>
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="bg-[#d4a896] rounded-2xl aspect-[4/3] flex items-center justify-center">
              <span className="text-[#8b6b5c] text-sm font-medium">
                [ Photo of Canadian volunteer ]
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
