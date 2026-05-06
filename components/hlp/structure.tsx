"use client"

import { BookOpen, Users, FileText } from "lucide-react"
import { useTranslation } from "@/lib/i18n"

const features = [
  {
    icon: BookOpen,
    title: "Classes with teachers",
    description: "Individual and small group online classes with professional ESL teachers.",
  },
  {
    icon: Users,
    title: "Conversations with Canadians",
    description: "Weekly video calls with Canadian volunteers to practice your language and build real confidence.",
  },
  {
    icon: FileText,
    title: "Personalized homework",
    description: "Materials and exercises from your teacher to keep you improving between sessions.",
  },
]

export function HLPStructure() {
  const { t } = useTranslation()

  return (
    <section className="py-12 md:py-20 bg-[var(--bg-1)]">
      <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
        <p className="text-[var(--haven-purple)] text-sm font-semibold uppercase tracking-wider mb-3 md:mb-4">
          {t("HAVEN LANGUAGE PROGRAM")}
        </p>
        <h2 className="font-sans font-bold text-2xl sm:text-3xl md:text-4xl text-[var(--fg-1)] mb-3 md:mb-4">
          {t("The fastest way to improve your English in Canada.")}
        </h2>
        <p className="font-body text-[var(--fg-4)] text-base md:text-lg max-w-3xl mx-auto mb-10 md:mb-16 px-2">
          {t("An online, 20-week program combining classes, conversation practice and homework. Classes range from CLB 1 to 8.")}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-[var(--bg-2)] border border-[var(--border)] rounded-xl md:rounded-[16px] p-5 md:p-8 text-center shadow-[var(--shadow-flat)]"
            >
              <div className="w-12 h-12 md:w-16 md:h-16 bg-[var(--bg-4)] rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
                <feature.icon className="w-6 h-6 md:w-8 md:h-8 text-[var(--haven-purple)]" />
              </div>
              <h3 className="font-sans font-bold text-lg md:text-xl text-[var(--fg-1)] mb-2 md:mb-3">
                {t(feature.title)}
              </h3>
              <p className="font-body text-[var(--fg-4)] leading-relaxed text-sm md:text-base">
                {t(feature.description)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
