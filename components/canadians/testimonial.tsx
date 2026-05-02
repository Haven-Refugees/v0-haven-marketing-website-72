"use client"

import { useTranslation } from "@/lib/i18n"

export function CanadiansTestimonial() {
  const { t } = useTranslation()

  return (
    <section className="bg-[#FDF0EB]">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2">
          {/* Photo placeholder */}
          <div className="bg-[#e8c4b8] min-h-[300px] lg:min-h-[400px] flex items-center justify-center">
            <span className="text-[#b08070] text-sm font-medium">
              [ Photo of Camila ]
            </span>
          </div>

          {/* Quote */}
          <div className="flex items-center p-10 lg:p-16">
            <div>
              <blockquote className="font-serif italic text-2xl md:text-3xl text-foreground leading-relaxed mb-6">
                {t("\"As someone who struggled to learn English myself, I know what a difference it makes to have someone patient to practice with.\"")}
              </blockquote>
              <p className="font-sans">
                <span className="font-bold text-foreground">{t("Camila")}</span>
                <span className="text-muted-foreground">, {t("from Mississauga")}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
