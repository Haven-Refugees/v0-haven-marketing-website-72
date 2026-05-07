"use client"

import Link from "next/link"
import { useTranslation } from "@/lib/i18n"

const openPositions = [
  {
    title: "ESL Teacher",
    department: "Haven Language Program",
    location: "Remote · Canada",
    type: "Part-time",
    applyUrl: "https://www.linkedin.com/jobs/view/4410714563",
  },
]

export function JoinTeam() {
  const { t } = useTranslation()

  return (
    <section className="py-12 md:py-20 bg-haven-purple/10">
      <div className="max-w-[900px] mx-auto px-4 md:px-6">
        <h2 className="font-sans font-bold text-2xl sm:text-[28px] md:text-[32px] text-foreground mb-3 md:mb-4 text-center tracking-tight">
          {t("Join Our Team")}
        </h2>
        <p className="font-body text-sm md:text-[17px] text-muted-foreground max-w-[600px] mx-auto mb-6 md:mb-10 text-center">
          {t("We're a small team doing meaningful work. If you believe in what we're building, we'd love to hear from you.")}
        </p>

        <div className="space-y-3 md:space-y-4">
          {openPositions.map((position) => (
            <div
              key={position.title}
              className="bg-card border border-border rounded-xl md:rounded-2xl p-5 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-6 shadow-[var(--shadow-flat)]"
            >
              <div>
                <span className="inline-block px-2.5 md:px-3 py-1 bg-haven-purple/10 text-haven-purple text-xs font-semibold rounded-[100px] mb-2 md:mb-3">
                  {t("Open Position")}
                </span>
                <h3 className="text-lg md:text-xl font-semibold text-foreground mb-1">
                  {position.title}
                </h3>
                <p className="font-body text-sm md:text-[15px] text-muted-foreground mb-1 md:mb-2">
                  {position.department}
                </p>
                <div className="font-body flex flex-wrap items-center gap-2 md:gap-4 text-xs md:text-[13px] text-muted-foreground">
                  <span>{position.location}</span>
                  <span>{position.type}</span>
                </div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Link
                  href={position.applyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-haven-blue hover:bg-haven-blue/90 text-white px-5 md:px-6 py-2.5 md:py-3 text-sm md:text-base font-semibold rounded-[100px] transition-colors whitespace-nowrap"
                >
                  {t("Apply on LinkedIn")}
                </Link>
                <p className="font-body text-xs text-muted-foreground text-center max-w-[200px]">
                  {t("Ignore the \"No longer accepting applications\" flag on LinkedIn")}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
