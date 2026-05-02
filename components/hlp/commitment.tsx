"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useTranslation } from "@/lib/i18n"

const checkpoints = [
  {
    title: "2 hours of classes",
    description: "With your professional teacher, online.",
  },
  {
    title: "2 hours of conversation practice",
    description: "With your Canadian volunteers.",
  },
  {
    title: "2+ hours of homework",
    description: "Personalized materials from your teacher.",
  },
]

export function HLPCommitment() {
  const { t } = useTranslation()

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-sans font-bold text-3xl md:text-4xl text-[#26215C] mb-4">
            {t("Give us 20 weeks. We'll change your English.")}
          </h2>
          <p className="text-[#26215C]/70 text-lg max-w-3xl mx-auto">
            {t("Most Haven students see a measurable improvement in their English — at least one CLB level in Speaking or Listening — after completing the 20-week program.")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
          {/* Left - Checkpoints */}
          <div>
            <h3 className="font-sans font-bold text-xl text-[#26215C] mb-8">
              {t("Here's what 20 weeks looks like:")}
            </h3>
            <div className="space-y-6">
              {checkpoints.map((checkpoint, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-8 h-8 bg-[#AF75FF] rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-white rounded-full" />
                  </div>
                  <div>
                    <p className="font-sans font-bold text-[#26215C]">
                      {t(checkpoint.title)}
                    </p>
                    <p className="text-[#26215C]/70">
                      {t(checkpoint.description)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-[#AF75FF] font-semibold mt-8">
              {t("That's 6 hours a week. Less than an hour a day.")}
            </p>
          </div>

          {/* Right - Pricing Card */}
          <div className="bg-[#F7F6FE] rounded-2xl p-8">
            <p className="text-4xl md:text-5xl font-bold text-[#26215C] mb-2">
              $2.50 - $7.50
            </p>
            <p className="text-[#26215C]/70 text-lg mb-4">{t("per class, depending on your situation.")}</p>
            <p className="text-[#26215C] font-semibold mb-6">
              {t("That's only $5 to $15 per week.")}
            </p>
            <p className="text-[#26215C]/60 text-sm leading-relaxed">
              {t("We charge a small fee to ensure commitment — our program works best when students show up. If you can't commit right now, you can still practice your English with volunteers for free.")}
            </p>
          </div>
        </div>

        <div className="text-center mt-12">
          <Button 
            asChild 
            size="lg"
            className="bg-[#2563EB] hover:bg-[#2563EB]/90 text-white px-8 py-6 text-base"
          >
            <Link href="https://app.findhaven.org">{t("Apply for the program")}</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
