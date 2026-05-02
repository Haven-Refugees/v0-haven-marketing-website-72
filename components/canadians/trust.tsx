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
    title: "20,000+ members",
    description: "Newcomers from 50+ countries, now in 500+ communities across Canada.",
    link: null,
  },
]

export function Trust() {
  const { t } = useTranslation()

  return (
    <section className="py-20 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="font-sans font-bold text-3xl md:text-4xl text-foreground">
            {t("Connect with confidence.")}
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto text-center">
          {trustItems.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-14 h-14 flex items-center justify-center mb-5">
                <Image 
                  src={item.iconSrc} 
                  alt={item.title} 
                  width={56} 
                  height={56} 
                  className="object-contain"
                />
              </div>
              <h3 className="font-sans font-bold text-base text-foreground mb-3">
                {t(item.title)}
              </h3>
              <p className="font-sans text-muted-foreground text-sm leading-relaxed max-w-xs">
                {t(item.description)}
                {item.link && (
                  <>
                    {" "}
                    <Link 
                      href={item.link.href} 
                      className="text-[#E8725A] underline hover:text-[#d4654f]"
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
