"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useTranslation } from "@/lib/i18n"

export function NewcomersCta() {
  const { t } = useTranslation()

  return (
    <section className="py-24 bg-haven-purple/10">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="font-sans font-bold text-3xl md:text-4xl text-foreground mb-4 tracking-tight">
          {t("Join thousands of newcomers already on Haven.")}
        </h2>
        <p className="font-body font-normal text-muted-foreground text-lg leading-relaxed max-w-md mx-auto mb-10">
          {t("Sign up in less than 10 minutes.")}
        </p>
        <Button size="lg" variant="secondary" asChild>
          <Link href="https://app.findhaven.org/signup">
            {t("Join Haven")}
          </Link>
        </Button>
      </div>
    </section>
  )
}
