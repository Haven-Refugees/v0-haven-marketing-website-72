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
              {t("Haven's founder, Victor Lal, has been helping refugees his whole life — inspired by his own parents, who came to Canada to give their children a better life. Before Haven, Victor")}{" "}
              <a href="https://www.cbc.ca/news/canada/toronto/bike-ride-1.3183839" target="_blank" rel="noopener noreferrer" className="text-[#6B4EFF] underline hover:no-underline">
                {t("biked 2,600 km across Canada")}
              </a>{" "}
              {t("and")}{" "}
              <a href="https://www.thestar.com/news/gta/swim-across-lake-ontario-aims-to-raise-funds-for-syrian-refugees/article_f8b0f39c-5df8-524c-ba12-0df21e3b99b8.html" target="_blank" rel="noopener noreferrer" className="text-[#6B4EFF] underline hover:no-underline">
                {t("swam across Lake Ontario")}
              </a>{" "}
              {t("to raise money for Syrian refugees.")}
            </p>
            <p className="text-[15px] leading-[1.8] text-foreground/80 mb-6">
              {t("When Russia launched its full-scale invasion of Ukraine in February 2022, Victor was")}{" "}
              <a href="https://www.cbc.ca/news/canada/toronto/canadian-man-in-lviv-describes-chaos-in-ukraine-1.6367269" target="_blank" rel="noopener noreferrer" className="text-[#6B4EFF] underline hover:no-underline">
                {t("on the ground by day four")}
              </a>
              {t(". He organized grassroots humanitarian aid while larger organizations were still mobilizing. As more Ukrainians began arriving in Canada, Victor started a Google Sheet — connecting Ukrainian refugees with his friends who could help.")}
            </p>
            <p className="text-[15px] leading-[1.8] text-foreground/80 font-medium">
              {t("That Google Sheet became Haven.")}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
