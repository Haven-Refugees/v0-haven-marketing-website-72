"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useTranslation } from "@/lib/i18n"

export function CanadiansFinalCta() {
  const { t } = useTranslation()

  return (
    <section className="py-20 md:py-24 bg-[#FDF0EB]">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="font-sans font-bold text-3xl md:text-4xl text-foreground mb-4">
          {t("Start helping in less than 10 minutes.")}
        </h2>
        <p className="font-sans text-muted-foreground text-lg leading-relaxed max-w-xl mx-auto mb-8">
          {t("Sign up, get matched, and have your first conversation this week.")}
        </p>
        <Button 
          size="lg" 
          className="text-base px-10 py-6 bg-[#E8725A] hover:bg-[#d4654f] text-white rounded-lg mb-6"
          asChild
        >
          <Link href="https://app.findhaven.org">
            {t("Start helping")}
          </Link>
        </Button>
        <p className="font-sans text-muted-foreground text-sm">
          {t("Haven is a registered Canadian charity")} · {t("Check us out on CanadaHelps")}
        </p>
      </div>
    </section>
  )
}
