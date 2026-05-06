"use client"

import { useTranslation } from "@/lib/i18n"
import Link from "next/link"
import Image from "next/image"

const trustItems = [
  {
    iconSrc: "/images/icons/id-verification.png",
    title: "ID verification",
    description: "We use ID verification so you always know who you're connecting with. You can see who's verified before you reach out.",
    link: null,
  },
  {
    iconSrc: "/images/icons/registered-charity.png",
    title: "Registered Canadian charity",
    description: "Haven is registered with the CRA. Check us out on",
    link: { text: "CanadaHelps", href: "https://www.canadahelps.org/en/charities/haven-refugees/" },
  },
  {
    iconSrc: "/images/icons/members.png",
    title: "20,000+ users",
    description: "Newcomers from 50+ countries, now in 500+ communities across Canada.",
    link: null,
  },
]

export function Trust() {
  const { t } = useTranslation()

  return (
    <section className="py-12 md:py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-8 md:mb-14">
          <h2 className="font-sans font-bold text-2xl sm:text-3xl md:text-4xl text-foreground tracking-tight">
            {t("Connect With Confidence")}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-8 max-w-5xl mx-auto text-center">
          {trustItems.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-[60px] h-[60px] md:w-[84px] md:h-[84px] flex items-center justify-center mb-4 md:mb-5">
                <Image 
                  src={item.iconSrc} 
                  alt={item.title} 
                  width={84} 
                  height={84} 
                  className="object-contain w-full h-full"
                />
              </div>
              <h3 className="font-sans font-semibold text-sm md:text-base text-foreground mb-2 md:mb-3 tracking-tight">
                {t(item.title)}
              </h3>
              <p className="font-body text-muted-foreground text-xs md:text-sm leading-relaxed max-w-xs">
                {t(item.description)}
                {item.link && (
                  <>
                    {" "}
                    <Link 
                      href={item.link.href} 
                      className="text-haven-blue underline hover:text-haven-blue/80"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {t(item.link.text)}
                    </Link>
                    .
                  </>
                )}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
