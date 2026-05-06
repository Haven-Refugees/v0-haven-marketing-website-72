"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useTranslation } from "@/lib/i18n"
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

  return (
    <section className="py-20 bg-[var(--bg-1)]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-sans font-bold text-3xl md:text-4xl text-[var(--fg-1)] mb-4">
            {t("Give us 20 weeks. We'll change your English.")}
          </h2>
          <p className="text-[var(--fg-4)] text-lg max-w-3xl mx-auto">
            {t("Most Haven students see a measurable improvement in their English — at least one CLB level in Speaking or Listening — after completing the 20-week program.")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
          {/* Left - Checkpoints */}
          <div>
            <h3 className="font-sans font-bold text-xl text-[var(--fg-1)] mb-8">
              {t("Here's what 20 weeks looks like:")}
            </h3>
            <div className="space-y-6">
              {checkpoints.map((checkpoint, index) => {
                const Icon = checkpoint.icon
                return (
                  <div key={index} className="flex gap-4">
                    <div className="w-10 h-10 bg-[var(--bg-4)] rounded-[8px] flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-[var(--haven-purple)]" />
                    </div>
                    <div>
                      <p className="font-sans font-bold text-[var(--fg-1)]">
                        {t(checkpoint.title)}
                      </p>
                      <p className="text-[var(--fg-4)]">
                        {t(checkpoint.description)}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
            <p className="text-[var(--haven-purple)] font-semibold mt-8">
              {t("That's 6 hours a week. Less than an hour a day.")}
            </p>
          </div>

          {/* Right - Pricing Card */}
          <div className="bg-[var(--bg-4)] rounded-[16px] p-8 border border-[var(--border)] shadow-[var(--shadow-flat)]">
            <p className="text-4xl md:text-5xl font-bold text-[var(--fg-1)] mb-2">
              $2.50 - $7.50
            </p>
            <p className="text-[var(--fg-4)] text-lg mb-4">{t("per class, depending on your situation.")}</p>
            <p className="text-[var(--fg-1)] font-semibold mb-6">
              {t("That's only $5 to $15 per week.")}
            </p>
            <p className="text-[var(--fg-5)] text-sm leading-relaxed">
              {t("We charge a small fee to ensure commitment — our program works best when students show up. If you can't commit right now, you can still practice your English with volunteers for free.")}
            </p>
          </div>
        </div>

        <div className="text-center mt-12">
          <Button 
            asChild 
            size="lg"
            className="bg-[var(--haven-blue)] hover:bg-[var(--haven-blue)]/90 text-white px-8 py-6 text-base rounded-[100px]"
          >
            <Link href="https://app.findhaven.org">{t("Apply for the program")}</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
