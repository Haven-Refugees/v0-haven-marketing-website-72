"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useTranslation } from "@/lib/i18n"

export function RefugeeCta() {
  const { t, link } = useTranslation()

  return (
    <section className="py-20 bg-secondary/10">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="font-sans font-bold text-3xl md:text-4xl text-foreground mb-4">
          {t("Are you a refugee or a person in Canada because of conflict?")}
        </h2>
        <p className="text-muted-foreground text-lg mb-8 leading-relaxed max-w-2xl mx-auto">
          {t("Haven can help you improve your English or French, meet Canadians in your community, and build your professional network.")}
        </p>
        <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white" asChild>
          <Link href={link("/for-newcomers")}>{t("Learn more about Haven")}</Link>
        </Button>
      </div>
    </section>
  )
}
