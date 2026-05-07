"use client"

import { MessageCircle, Clock, FileText } from "lucide-react"
import { useTranslation } from "@/lib/i18n"

const ways = [
  {
    icon: MessageCircle,
    title: "Practice English or French",
    description: "Classroom learning only goes so far. What really builds confidence is conversation — and that's something you can offer just by showing up.",
    popular: true,
  },
  {
    icon: Clock,
    title: "Be their local connection",
    description: "Imagine moving to a new city without knowing a single person. Where to go, what to do, how things work — you already know it all.",
    popular: false,
  },
  {
    icon: FileText,
    title: "Offer career advice",
    description: "The things that feel obvious to you — how resumes work, what interviews are like — can be exactly what a newcomer needs.",
    popular: false,
  },
]

export function WaysToHelp() {
  const { t } = useTranslation()

  return (
    <section className="py-12 md:py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="font-sans font-bold text-2xl sm:text-3xl md:text-4xl text-foreground mb-3 md:mb-4 tracking-tight">
            {t("Helping is easier than you think")}
          </h2>
          <p className="font-body text-muted-foreground text-base md:text-lg leading-relaxed max-w-2xl mx-auto px-2">
            {t("You don't need any special skills or experience. Here are three ways Canadians help on Haven.")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 max-w-5xl mx-auto items-start pt-2 md:pt-4">
          {ways.map((way, index) => (
            <div
              key={index}
              className={`relative bg-card rounded-xl md:rounded-2xl p-5 md:p-6 border-2 shadow-[var(--shadow-flat)] ${
                way.popular ? "border-haven-coral" : "border-border"
              }`}
            >
              {way.popular && (
                <span className="absolute -top-0 left-5 md:left-6 -translate-y-1/2 z-10 bg-[#FCEAE6] text-haven-coral text-xs font-semibold px-3 py-1 rounded-[100px]">
                  {t("Most Popular")}
                </span>
              )}
              
              <div>
                <div className="w-9 h-9 md:w-10 md:h-10 bg-haven-coral/10 rounded-lg md:rounded-xl flex items-center justify-center mb-3 md:mb-4">
                  <way.icon className="w-4 h-4 md:w-5 md:h-5 text-haven-coral" />
                </div>
                
                <h3 className="font-sans font-bold text-base md:text-lg text-foreground mb-2 md:mb-3 tracking-tight">
                  {t(way.title)}
                </h3>
                <p className="font-body text-muted-foreground text-sm leading-relaxed">
                  {t(way.description)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
