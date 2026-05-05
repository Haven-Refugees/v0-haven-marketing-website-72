"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useTranslation } from "@/lib/i18n"

export function CanadiansFinalCta() {
  const { t } = useTranslation()

  return (
    <section className="py-20 md:py-24 bg-haven-coral/10">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="font-sans font-bold text-3xl md:text-4xl text-foreground mb-4 tracking-tight">
          {t("Start Helping in Less Than 10 Minutes")}
        </h2>
        <p className="font-body text-muted-foreground text-lg leading-relaxed max-w-xl mx-auto mb-8">
          {t("Sign up, get matched, and have your first conversation this week.")}
        </p>
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
    </section>
  )
}
