"use client"

import Link from "next/link"
import { useTranslation } from "@/lib/i18n"

const openPositions = [
  {
    title: "ESL Teacher",
    department: "Haven Language Program",
    location: "Remote · Canada",
    type: "Part-time",
    applyUrl: "https://www.linkedin.com/company/find-haven/jobs/",
  },
]

export function JoinTeam() {
  const { t } = useTranslation()

  return (
    <section className="py-16 md:py-20 bg-[#F0EEFE]">
      <div className="max-w-[900px] mx-auto px-6">
        <h2 className="font-serif font-normal italic text-[32px] text-foreground mb-4">
          {t("Join our team.")}
        </h2>
        <p className="text-[17px] text-muted-foreground max-w-[600px] mb-10">
          {t("We're a small team doing meaningful work. If you believe in what we're building, we'd love to hear from you.")}
        </p>

        <div className="space-y-4">
          {openPositions.map((position) => (
            <div
              key={position.title}
              className="bg-white border border-border rounded-xl p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6"
            >
              <div>
                <span className="inline-block px-3 py-1 bg-[#F0EEFE] text-[#6B4EFF] text-xs font-medium rounded-full mb-3">
                  {t("Open position")}
                </span>
                <h3 className="text-xl font-medium text-foreground mb-1">
                  {position.title}
                </h3>
                <p className="text-[15px] text-muted-foreground mb-2">
                  {position.department}
                </p>
                <div className="flex items-center gap-4 text-[13px] text-muted-foreground">
                  <span>{position.location}</span>
                  <span>{position.type}</span>
                </div>
              </div>
              <Link
                href={position.applyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-[#6B4EFF] hover:bg-[#5a3ee6] text-white px-6 py-3 text-base font-medium rounded-lg transition-colors whitespace-nowrap"
              >
                {t("Apply on LinkedIn")}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
