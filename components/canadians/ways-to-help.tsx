"use client"

import { MessageCircle, Clock, FileText } from "lucide-react"
import { useTranslation } from "@/lib/i18n"

const ways = [
  {
    icon: MessageCircle,
    title: "Practice English or French",
    description: "Have a casual conversation with a newcomer. Some are also taking professional classes on Haven, so your conversations are part of a bigger learning journey.",
    popular: true,
  },
  {
    icon: Clock,
    title: "Be their local connection",
    description: "Share more about your city. The things you take for granted are exactly what newcomers need to know to feel at home.",
    popular: false,
  },
  {
    icon: FileText,
    title: "Help with their job search",
    description: "Share advice about your industry or how hiring works in Canada. Your professional experience is incredibly valuable to someone starting over.",
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

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
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
              
              <div className={`${way.popular ? "mt-2" : "mt-7"}`}>
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
