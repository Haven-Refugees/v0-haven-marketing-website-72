"use client"

import Image from "next/image"
import { useTranslation } from "@/lib/i18n"

export function VisionFounder() {
  const { t } = useTranslation()

  return (
    <section className="bg-white">
      <div className="grid md:grid-cols-2 min-h-[520px]">
        {/* Image Column */}
        <div className="relative h-[400px] md:h-auto">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Victor%20with%20Refugee-rkCImXc8fjnSAFlbtwYPVDjZmZlwCT.jpg"
            alt="Victor Lal helping a newcomer at a Haven outreach event"
            fill
            className="object-cover object-center"
          />
        </div>
        
        {/* Content Column */}
        <div className="flex items-center p-8 md:p-14">
          <div className="max-w-lg">
            <h2 className="font-sans font-bold text-[28px] leading-tight text-foreground mb-6">
              {t("Haven was built out of necessity.")}
            </h2>
            <p className="text-[15px] leading-[1.8] text-foreground/80 mb-6">
              {t("Haven's founder Victor started helping refugees in 2016 with the Syrian crisis — with a")}{" "}
              <a href="https://www.cbc.ca/news/canada/toronto/bike-ride-1.3183839" target="_blank" rel="noopener noreferrer" className="text-[#6B4EFF] underline hover:no-underline">
                {t("2,600 km bike ride from Toronto to St. John's")}
              </a>{" "}
              {t("and a")}{" "}
              <a href="https://www.thestar.com/news/gta/swim-across-lake-ontario-aims-to-raise-funds-for-syrian-refugees/article_f8b0f39c-5df8-524c-ba12-0df21e3b99b8.html" target="_blank" rel="noopener noreferrer" className="text-[#6B4EFF] underline hover:no-underline">
                {t("52 km swim across Lake Ontario")}
              </a>{" "}
              {t("to sponsor Syrian families.")}
            </p>
            <p className="text-[15px] leading-[1.8] text-foreground/80 mb-6">
              {t("When Russia launched its full-scale invasion of Ukraine in February 2022, Victor was")}{" "}
              <a href="https://www.cbc.ca/news/canada/toronto/canadian-man-in-lviv-describes-chaos-in-ukraine-1.6367269" target="_blank" rel="noopener noreferrer" className="text-[#6B4EFF] underline hover:no-underline">
                {t("on the ground on day four")}
              </a>
              {t(". As Ukrainians began arriving in Canada, he started connecting them with Canadians who could help — in the big ways and the small ones. He set up a Google Sheet to do it.")}
            </p>
            <p className="text-[15px] leading-[1.8] text-foreground/80 font-medium">
              {t("That Google Sheet became Haven. Since 2022, our team has been helping refugees from across the world become independent in Canada — and making it easier for Canadians to help.")}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
