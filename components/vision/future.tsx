"use client"

import { useTranslation } from "@/lib/i18n"

export function VisionFuture() {
  const { t } = useTranslation()

  return (
    <section className="py-20 md:py-24 bg-[#F0EEFE]">
      <div className="max-w-[760px] mx-auto px-6">
        <h2 className="font-sans font-bold text-[28px] leading-tight text-foreground mb-6">
          {t("Canada can be the world's best country at refugee resettlement. We're building that system.")}
        </h2>
        <p className="text-[15px] leading-[1.8] text-foreground/80">
          {t("Technology makes it possible to help refugees at scale, faster than ever before, at a fraction of the current cost. Haven is proving that a better system exists — one where refugees become independent faster, Canadians can help directly and meaningfully, and Canada becomes stronger for it.")}
        </p>
      </div>
    </section>
  )
}
