"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useTranslation } from "@/lib/i18n"

export function HLPBenefits() {
  const { t } = useTranslation()

  return (
    <section className="py-20 bg-[#F7F6FE]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="font-sans font-bold text-3xl md:text-4xl text-[#26215C] text-center mb-16">
          {t("Why Haven works")}
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-start max-w-4xl mx-auto">
          <div>
            <h3 className="font-sans font-bold text-xl text-[#26215C] mb-3">
              {t("Flexible schedule")}
            </h3>
            <p className="text-[#26215C]/70 leading-relaxed mb-8">
              {t("Classes are evenings and weekends, designed to fit around your work and life. You pick the times that work for you.")}
            </p>

            <h3 className="font-sans font-bold text-xl text-[#26215C] mb-3">
              {t("Small classes, big progress")}
            </h3>
            <p className="text-[#26215C]/70 leading-relaxed mb-8">
              {t("Individual and small group classes mean your teacher actually knows you. That means faster progress and more speaking time.")}
            </p>

            <h3 className="font-sans font-bold text-xl text-[#26215C] mb-3">
              {t("Real conversations with Canadians")}
            </h3>
            <p className="text-[#26215C]/70 leading-relaxed">
              {t("Weekly video calls with Canadian volunteers give you the confidence to use English in real life. This is the part most programs are missing.")}
            </p>
          </div>

          <div className="bg-[#E0D9F0] rounded-2xl p-8">
            <p className="text-[#26215C] text-lg font-medium leading-relaxed mb-4">
              {t("Haven is for newcomers who are serious about improving. Classes have a small fee to make sure students are committed.")}
            </p>
            <p className="text-[#26215C]/70 leading-relaxed mb-6">
              {t("The fee is $2.50–$7.50 per class depending on your situation — roughly 90% less than other English programs. The fee exists to make sure that when students show up. If you can't commit right now, Haven Connect is free and always available.")}
            </p>
          </div>
        </div>

        <div className="text-center mt-12">
          <Button
            asChild
            size="lg"
            className="bg-[#AF75FF] hover:bg-[#AF75FF]/90 text-white px-8 py-6 text-base"
          >
            <Link href="https://app.findhaven.org">{t("Apply for the program")}</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
