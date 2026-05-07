"use client"

import Link from "next/link"
import { useTranslation } from "@/lib/i18n"

const supporters = [
  {
    name: "Northpine Foundation",
    logo: "/images/supporters/northpine.png",
    url: "https://northpinefoundation.ca/",
  },
  {
    name: "Calgary Foundation",
    logo: "/images/supporters/calgary-foundation.png",
    url: "https://calgaryfoundation.org/",
  },
  {
    name: "Metcalf Foundation",
    logo: "/images/supporters/metcalf.png",
    url: "https://metcalffoundation.com/",
  },
]

export function Supporters() {
  const { t } = useTranslation()

  return (
    <section className="py-12 md:py-20 bg-card">
      <div className="max-w-[900px] mx-auto px-4 md:px-6 text-center">
        <h2 className="font-sans font-bold text-2xl sm:text-[28px] md:text-[32px] text-foreground mb-3 md:mb-4 tracking-tight">
          {t("Our supporters")}
        </h2>
        <p className="font-body text-sm md:text-[17px] text-muted-foreground max-w-[600px] mx-auto mb-8 md:mb-12">
          {t("Haven is funded by Canadian foundations who believe in building a better system for refugees.")}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8">
          {supporters.map((supporter) => (
            <Link
              key={supporter.name}
              href={supporter.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center p-6 md:p-8 border border-border rounded-xl md:rounded-2xl hover:border-haven-blue/30 transition-colors min-h-[80px] md:min-h-[100px] shadow-[var(--shadow-flat)]"
            >
              <img
                src={supporter.logo}
                alt={supporter.name}
                className="max-h-8 md:max-h-10 w-auto object-contain"
              />
            </Link>
          ))}
        </div>

        <p className="font-body text-xs md:text-sm text-muted-foreground">
          {t("And other generous donors across Canada.")}
        </p>
      </div>
    </section>
  )
}
