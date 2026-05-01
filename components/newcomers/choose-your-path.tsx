"use client"

import Link from "next/link"
import { useTranslation } from "@/lib/i18n"

export function ChooseYourPath() {
  const { t } = useTranslation()

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="font-sans font-bold text-3xl md:text-4xl text-foreground mb-3">
          {t("Choose the help you need.")}
        </h2>
        <p className="font-sans font-medium text-muted-foreground text-lg mb-12">
          {t("Join for conversations only, or add classes with professional teachers if language is your main focus.")}
        </p>

        <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto">
          {/* Haven Language Program Card */}
          <Link
            href="#hlp"
            className="bg-secondary rounded-2xl p-8 text-left group hover:-translate-y-1 transition-transform"
          >
            <p className="text-secondary-foreground/70 text-xs font-medium uppercase tracking-wider mb-3">
              {t("Haven Language Program")}
            </p>
            <h3 className="font-sans font-bold text-2xl text-secondary-foreground mb-3">
              {t("Conversations and classes")}
            </h3>
            <p className="text-secondary-foreground/70 text-sm leading-relaxed mb-5">
              {t("Online classes with professional teachers, plus weekly conversations with Canadian volunteers. The perfect program if you need to improve your English.")}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="inline-block bg-secondary-foreground/20 text-secondary-foreground text-xs font-medium px-3 py-1 rounded-full">
                {t("From $2.50 a class")}
              </span>
              <span className="inline-block bg-secondary-foreground/20 text-secondary-foreground text-xs font-medium px-3 py-1 rounded-full">
                {t("6+ hours a week")}
              </span>
            </div>
            <span className="block text-secondary-foreground text-sm font-medium">
              {t("Learn more")} &darr;
            </span>
          </Link>

          {/* Haven Connect Card */}
          <Link
            href="#connect"
            className="bg-secondary/10 border border-secondary/20 rounded-2xl p-8 text-left group hover:-translate-y-1 transition-transform"
          >
            <p className="text-secondary text-xs font-medium uppercase tracking-wider mb-3">
              {t("Haven Connect")}
            </p>
            <h3 className="font-sans font-bold text-2xl text-foreground mb-3">
              {t("Just conversations")}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-5">
              {t("Meet Canadian volunteers. Practice your English or French, find local and professional connections, and get help rebuilding your life in Canada.")}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="inline-block bg-secondary/20 text-secondary text-xs font-medium px-3 py-1 rounded-full">
                {t("Free")}
              </span>
              <span className="inline-block bg-secondary/20 text-secondary text-xs font-medium px-3 py-1 rounded-full">
                {t("30 minutes a week")}
              </span>
            </div>
            <span className="block text-secondary text-sm font-medium">
              {t("Learn more")} &darr;
            </span>
          </Link>
        </div>
      </div>
    </section>
  )
}
