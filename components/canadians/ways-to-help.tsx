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
    <section className="py-20 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-sans font-bold text-3xl md:text-4xl text-foreground mb-4">
            {t("Helping is easier than you think.")}
          </h2>
          <p className="font-sans text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
            {t("You don't need any special skills or experience. Here are three ways Canadians help on Haven.")}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto items-start pt-4">
          {ways.map((way, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl p-6 border-2 ${
                way.popular ? "border-[#E8725A]" : "border-gray-200"
              }`}
            >
              {way.popular && (
                <span className="absolute -top-0 left-6 -translate-y-1/2 bg-[#FDF0EB] text-[#E8725A] text-xs font-medium px-3 py-1 rounded-full">
                  {t("Most popular")}
                </span>
              )}
              
              <div>
                <div className="w-10 h-10 bg-[#FDF0EB] rounded-lg flex items-center justify-center mb-4">
                  <way.icon className="w-5 h-5 text-[#E8725A]" />
                </div>
                
                <h3 className="font-sans font-bold text-lg text-foreground mb-3">
                  {t(way.title)}
                </h3>
                <p className="font-sans text-muted-foreground text-sm leading-relaxed">
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
