"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useTranslation } from "@/lib/i18n"

const programStructure = [
  {
    image: "/images/icon-classes.png",
    title: "Classes with teachers",
    description: "Individual and small group online classes with professional teachers.",
    scale: "scale-100",
  },
  {
    image: "/images/icon-conversations.png",
    title: "Conversations with Canadians",
    description: "Video calls with Canadian volunteers to practice your language and build confidence.",
    scale: "scale-100",
  },
  {
    image: "/images/icon-homework.png",
    title: "Personalized homework",
    description: "Exercises and materials to keep you learning between classes and conversations.",
    scale: "scale-75",
  },
]

export function HavenLanguageProgram() {
  const { t, link } = useTranslation()

  return (
    <section id="hlp" className="pt-10 pb-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-secondary text-[20px] font-medium uppercase tracking-wider mb-4">
            {t("Haven Language Program")}
          </p>
          <h2 className="font-sans font-bold text-3xl md:text-4xl text-foreground mb-4">
            {t("The fastest way to improve your English in Canada.")}
          </h2>
          <p className="font-sans font-medium text-muted-foreground text-lg leading-relaxed max-w-3xl mx-auto">
            {t("An online, 20-week program combining classes, conversation practice and homework. Classes range from CLB 1 to 8.")}
          </p>
        </div>

        {/* Program Structure */}
        <div className="grid md:grid-cols-3 gap-3 mb-10">
          {programStructure.map((item, index) => (
            <div
              key={index}
              className="bg-background border border-border rounded-xl px-2 pb-3 flex flex-col items-center text-center overflow-hidden"
            >
              <div className="w-[432px] h-60 relative -mt-10 -mb-10">
                <Image
                  src={item.image}
                  alt={t(item.title)}
                  fill
                  className={`object-contain object-center ${item.scale}`}
                />
              </div>
              <h3 className="font-sans font-medium text-foreground mb-1">{t(item.title)}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{t(item.description)}</p>
            </div>
          ))}
        </div>

        {/* Unified Features & CTA Card */}
        <div className="bg-[#EEEAFE] rounded-[16px] p-8 md:p-10">
          {/* Heading */}
          <h3 className="font-sans font-bold text-2xl md:text-3xl text-foreground leading-snug mb-8 text-center">
            {t("We designed Haven to make learning as easy as possible.")}
          </h3>
          
          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-4">
            <div className="flex items-start gap-3">
              <div className="w-7 h-7 bg-[#6B4EFF] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <p className="font-sans font-bold text-foreground">{t("Flexible schedule")}</p>
                <p className="text-muted-foreground text-sm">{t("Study anytime, including evenings and weekends.")}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-7 h-7 bg-[#6B4EFF] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <p className="font-sans font-bold text-foreground">{t("Personalized learning")}</p>
                <p className="text-muted-foreground text-sm">{t("Classes of 1 to 4 students, not 30.")}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-7 h-7 bg-[#6B4EFF] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <p className="font-sans font-bold text-foreground">{t("English for life in Canada")}</p>
                <p className="text-muted-foreground text-sm">{t("Learn the English you will actually use in your day-to-day life.")}</p>
              </div>
            </div>
          </div>

          {/* Centered CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button size="lg" className="text-[15px] bg-[#1A56DB] hover:bg-[#1A56DB]/90 text-white rounded-[10px] py-[14px] px-[32px] min-w-[180px]" asChild>
              <Link href="https://app.findhaven.org">{t("Join the program")}</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-[15px] !bg-transparent border-foreground/30 text-foreground hover:!bg-foreground/5 rounded-[10px] py-[14px] px-[32px] min-w-[180px]" asChild>
              <Link href={link("/hlp")}>{t("Learn more")}</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
