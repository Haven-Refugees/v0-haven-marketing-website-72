"use client"

import Image from "next/image"
import { useTranslation } from "@/lib/i18n"

export function VisionFounder() {
  const { t } = useTranslation()

  return (
    <section className="bg-card">
      <div className="grid grid-cols-1 md:grid-cols-2 md:min-h-[520px]">
        {/* Image Column */}
        <div className="flex p-8 sm:p-10 md:p-14 md:pr-6">
          <div className="relative w-full h-[250px] sm:h-[300px] md:h-auto">
            <div
              aria-hidden="true"
              className="absolute -bottom-6 -right-6 md:-bottom-8 md:-right-4 w-1/2 h-3/5 rounded-[55%_45%_60%_40%/40%_60%_40%_60%] bg-haven-coral-soft rotate-6"
            />
            <div
              aria-hidden="true"
              className="absolute -top-6 -left-6 md:-top-8 md:-left-8 size-24 md:size-32 rounded-full bg-haven-purple/35"
            />
            <div
              aria-hidden="true"
              className="absolute -bottom-5 left-12 md:-bottom-6 md:left-16 size-10 md:size-12 rounded-full bg-haven-purple"
            />
            <div className="relative h-full rounded-2xl md:rounded-3xl overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Victor%20with%20Refugee-rkCImXc8fjnSAFlbtwYPVDjZmZlwCT.jpg"
                alt="Victor Lal helping a newcomer at a Haven outreach event"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
        
        {/* Content Column */}
        <div className="flex items-center p-5 sm:p-6 md:p-14">
          <div className="max-w-lg">
            <h2 className="font-sans font-bold text-xl sm:text-2xl md:text-[28px] leading-tight text-foreground mb-4 md:mb-6 tracking-tight">
              {t("Haven was built out of necessity.")}
            </h2>
            <p className="font-body text-sm md:text-[15px] leading-[1.8] text-foreground/80 mb-4 md:mb-6">
              {t("Haven's founder Victor started helping refugees in 2016 with the Syrian crisis — with a")}{" "}
              <a href="https://westerngazette.ca/culture/victor-lal-determined-to-aid-syrian-refugees/article_8e8df4c6-b9f2-11e8-a196-73e10aea4393.html" target="_blank" rel="noopener noreferrer" className="text-haven-blue underline hover:no-underline">
                {t("2,600 km bike ride from Toronto to St. John's")}
              </a>{" "}
              {t("and a")}{" "}
              <a href="https://globalnews.ca/news/4303199/western-university-student-to-take-on-lake-ontario-in-fundraising-effort-for-syrian-refugees/" target="_blank" rel="noopener noreferrer" className="text-haven-blue underline hover:no-underline">
                {t("52 km swim across Lake Ontario")}
              </a>{" "}
              {t("to sponsor Syrian families.")}
            </p>
            <p className="font-body text-sm md:text-[15px] leading-[1.8] text-foreground/80 mb-4 md:mb-6">
              {t("When Russia launched its full-scale invasion of Ukraine in February 2022, Victor was")}{" "}
              <a href="https://www.cbc.ca/news/canada/toronto/toronto-victor-lal-ukraine-poland-1.6396963" target="_blank" rel="noopener noreferrer" className="text-haven-blue underline hover:no-underline">
                {t("on the ground on day four")}
              </a>
              {t(". As Ukrainians began arriving in Canada, he started connecting them with Canadians who could help — in the big ways and the small ones. He set up a Google Sheet to do it.")}
            </p>
            <p className="font-body text-sm md:text-[15px] leading-[1.8] text-foreground/80 font-medium">
              {t("That Google Sheet became Haven. Since 2022, our team has been helping refugees from across the world become independent in Canada — and making it easier for Canadians to help.")}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
