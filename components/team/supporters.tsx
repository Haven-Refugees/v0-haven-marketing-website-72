"use client"

import Link from "next/link"
import { useTranslation } from "@/lib/i18n"

const supporters = [
  {
    name: "Northpine Foundation",
    logo: "/images/supporters/northpine.jpg",
    url: "https://northpine.ca",
  },
  {
    name: "Calgary Foundation",
    logo: "/images/supporters/calgary-foundation.jpg",
    url: "https://calgaryfoundation.org",
  },
  {
    name: "Metcalf Foundation",
    logo: "/images/supporters/metcalf.jpg",
    url: "https://metcalffoundation.com",
  },
]

export function Supporters() {
  const { t } = useTranslation()

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-[900px] mx-auto px-6 text-center">
        <h2 className="font-sans font-bold italic text-[32px] text-foreground mb-4">
          {t("Our supporters.")}
        </h2>
        <p className="text-[17px] text-muted-foreground max-w-[600px] mx-auto mb-12">
          {t("Haven is funded by Canadian foundations who believe in building a better system for refugees.")}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
          {supporters.map((supporter) => (
            <Link
              key={supporter.name}
              href={supporter.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center p-8 border border-border rounded-xl hover:border-[#6B4EFF]/30 transition-colors min-h-[100px]"
            >
              <img
                src={supporter.logo}
                alt={supporter.name}
                className="max-h-10 w-auto object-contain"
              />
            </Link>
          ))}
        </div>

        <p className="text-sm text-muted-foreground">
          {t("And generous donors across Canada.")}
        </p>
      </div>
    </section>
  )
}
