"use client"

import Link from "next/link"
import { useTranslation } from "@/lib/i18n"

export function ChooseYourPath() {
  const { t } = useTranslation()

  return (
    <section className="py-12 md:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
        <h2 className="font-sans font-bold text-2xl sm:text-3xl md:text-4xl text-foreground mb-3 tracking-tight">
          {t("Choose the help you need")}
        </h2>
        <p className="font-body font-normal text-muted-foreground text-base md:text-lg mb-8 md:mb-12 px-2">
          {t("Join for conversations only, or add classes with professional teachers if language is your main focus.")}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 max-w-4xl mx-auto">
          {/* Haven Language Program Card */}
          <Link
            href="#hlp"
            className="bg-haven-purple rounded-xl md:rounded-2xl p-6 md:p-8 text-left group hover:-translate-y-1 transition-transform shadow-[var(--shadow-card)]"
          >
            <p className="text-white/70 text-xs font-semibold uppercase tracking-wider mb-2 md:mb-3">
              {t("Haven Language Program")}
            </p>
            <h3 className="font-sans font-bold text-xl md:text-2xl text-white mb-2 md:mb-3 tracking-tight">
              {t("Conversations and classes")}
            </h3>
            <p className="font-body text-white/70 text-sm leading-relaxed mb-4 md:mb-5">
              {t("Online classes with professional teachers, plus weekly conversations with Canadian volunteers. The perfect program if you need to improve your English.")}
            </p>
            <div className="flex flex-wrap gap-2 mb-3 md:mb-4">
              <span className="inline-block bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-[100px]">
                {t("From $2.50 a Class")}
              </span>
              <span className="inline-block bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-[100px]">
                {t("6+ Hours a Week")}
              </span>
            </div>
            <span className="block text-white text-sm font-semibold">
              {t("Learn More")} &darr;
            </span>
          </Link>

          {/* Haven Connect Card */}
          <Link
            href="#connect"
            className="bg-haven-purple/10 border border-haven-purple/20 rounded-xl md:rounded-2xl p-6 md:p-8 text-left group hover:-translate-y-1 transition-transform"
          >
            <p className="text-haven-purple text-xs font-semibold uppercase tracking-wider mb-2 md:mb-3">
              {t("Haven Connect")}
            </p>
            <h3 className="font-sans font-bold text-xl md:text-2xl text-foreground mb-2 md:mb-3 tracking-tight">
              {t("Just conversations")}
            </h3>
            <p className="font-body text-muted-foreground text-sm leading-relaxed mb-4 md:mb-5">
              {t("Meet Canadian volunteers. Practice your English or French, find local and professional connections, and get help rebuilding your life in Canada.")}
            </p>
            <div className="flex flex-wrap gap-2 mb-3 md:mb-4">
              <span className="inline-block bg-haven-purple/20 text-haven-purple text-xs font-semibold px-3 py-1 rounded-[100px]">
                {t("Free")}
              </span>
              <span className="inline-block bg-haven-purple/20 text-haven-purple text-xs font-semibold px-3 py-1 rounded-[100px]">
                {t("30 Minutes a Week")}
              </span>
            </div>
            <span className="block text-haven-purple text-sm font-semibold">
              {t("Learn More")} &darr;
            </span>
          </Link>
        </div>
      </div>
    </section>
  )
}
