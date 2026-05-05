"use client"

import Link from "next/link"
import { useTranslation } from "@/lib/i18n"

export function ChooseYourPath() {
  const { t } = useTranslation()

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="font-sans font-bold text-3xl md:text-4xl text-foreground mb-3 tracking-tight">
          {t("Choose the Help You Need")}
        </h2>
        <p className="font-body font-normal text-muted-foreground text-lg mb-12">
          {t("Join for conversations only, or add classes with professional teachers if language is your main focus.")}
        </p>

        <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto">
          {/* Haven Language Program Card */}
          <Link
            href="#hlp"
            className="bg-haven-purple rounded-2xl p-8 text-left group hover:-translate-y-1 transition-transform shadow-[var(--shadow-card)]"
          >
            <p className="text-white/70 text-xs font-semibold uppercase tracking-wider mb-3">
              {t("Haven Language Program")}
            </p>
            <h3 className="font-sans font-bold text-2xl text-white mb-3 tracking-tight">
              {t("Conversations and Classes")}
            </h3>
            <p className="font-body text-white/70 text-sm leading-relaxed mb-5">
              {t("Online classes with professional teachers, plus weekly conversations with Canadian volunteers. The perfect program if you need to improve your English.")}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
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
            className="bg-haven-purple/10 border border-haven-purple/20 rounded-2xl p-8 text-left group hover:-translate-y-1 transition-transform"
          >
            <p className="text-haven-purple text-xs font-semibold uppercase tracking-wider mb-3">
              {t("Haven Connect")}
            </p>
            <h3 className="font-sans font-bold text-2xl text-foreground mb-3 tracking-tight">
              {t("Just Conversations")}
            </h3>
            <p className="font-body text-muted-foreground text-sm leading-relaxed mb-5">
              {t("Meet Canadian volunteers. Practice your English or French, find local and professional connections, and get help rebuilding your life in Canada.")}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
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
