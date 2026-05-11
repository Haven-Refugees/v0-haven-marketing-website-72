"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useTranslation } from "@/lib/i18n"
import { useTrackingLink } from "@/components/tracking-provider"
import { Monitor, MessageSquare, BookOpen } from "lucide-react"

const checkpoints = [
  {
    title: "2 hours of classes",
    description: "With your professional teacher, online.",
    icon: Monitor,
  },
  {
    title: "2 hours of conversation practice",
    description: "With your Canadian volunteers.",
    icon: MessageSquare,
  },
  {
    title: "2+ hours of homework",
    description: "Personalized materials from your teacher.",
    icon: BookOpen,
  },
]

export function HLPCommitment() {
  const { t } = useTranslation()
  const withTracking = useTrackingLink()

  return (
    <section className="py-12 md:py-20 bg-[var(--bg-1)]">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="font-sans font-bold text-2xl sm:text-3xl md:text-4xl text-[var(--fg-1)] mb-3 md:mb-4">
            {t("Give us 20 weeks. We'll change your English.")}
          </h2>
          <p className="font-body text-[var(--fg-4)] text-base md:text-lg max-w-3xl mx-auto px-2">
            {t("Most Haven students see a measurable improvement in their English — at least one CLB level in Speaking or Listening — after completing the 20-week program.")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start max-w-5xl mx-auto">
          {/* Left - Checkpoints */}
          <div>
            <h3 className="font-sans font-bold text-lg md:text-xl text-[var(--fg-1)] mb-5 md:mb-8">
              {t("Here's what 20 weeks looks like:")}
            </h3>
            <div className="space-y-5 md:space-y-6">
              {checkpoints.map((checkpoint, index) => {
                const Icon = checkpoint.icon
                return (
                  <div key={index} className="flex gap-3 md:gap-4">
                    <div className="w-9 h-9 md:w-10 md:h-10 bg-[var(--bg-4)] rounded-lg flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4 md:w-5 md:h-5 text-[var(--haven-purple)]" />
                    </div>
                    <div>
                      <p className="font-sans font-bold text-[var(--fg-1)] text-sm md:text-base">
                        {t(checkpoint.title)}
                      </p>
                      <p className="font-body text-[var(--fg-4)] text-sm md:text-base">
                        {t(checkpoint.description)}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
            <p className="text-[var(--haven-purple)] font-semibold mt-6 md:mt-8 text-sm md:text-base">
              {t("That's 6 hours a week. Less than an hour a day.")}
            </p>
          </div>

          {/* Right - Pricing Card */}
          <div className="bg-[var(--bg-4)] rounded-xl md:rounded-[16px] p-5 md:p-8 border border-[var(--border)] shadow-[var(--shadow-flat)]">
            <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--fg-1)] mb-2">
              $2.50 - $7.50
            </p>
            <p className="font-body text-[var(--fg-4)] text-base md:text-lg mb-3 md:mb-4">{t("per class, depending on your situation.")}</p>
            <p className="text-[var(--fg-1)] font-semibold mb-4 md:mb-6 text-sm md:text-base">
              {t("That's only $5 to $15 per week.")}
            </p>
            <p className="font-body text-[var(--fg-5)] text-xs md:text-sm leading-relaxed">
              {t("We charge a small fee to ensure commitment — our program works best when students show up. If you can't commit right now, you can still practice your English with volunteers for free.")}
            </p>
          </div>
        </div>

        <div className="text-center mt-10 md:mt-12">
          <Button 
            asChild 
            size="lg"
            className="bg-[var(--haven-blue)] hover:bg-[var(--haven-blue)]/90 text-white px-8 py-6 text-base rounded-[100px]"
          >
            <Link href={withTracking("https://app.findhaven.org")}>{t("Apply for the program")}</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
