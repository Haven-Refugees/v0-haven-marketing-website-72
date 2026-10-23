"use client"

import { Clock, MessageCircle, Heart } from "lucide-react"
import { useTranslation } from "@/lib/i18n"

const ways = [
  {
    icon: Clock,
    title: "Volunteer on Your Schedule",
    description: "Add your availability and browse times that work for you. Whether you have 30 minutes this week or a few hours this month, you decide when and how often you volunteer.",
  },
  {
    icon: MessageCircle,
    title: "No Teaching Experience Needed",
    description: "Not sure what to talk about? Haven has conversation guides with topics and questions to help keep things flowing. No lesson plans or preparation needed.",
  },
  {
    icon: Heart,
    title: "Small Conversations, Big Impact",
    description: "A simple 30-minute chat can help a newcomer practice their English, build confidence, and feel more at home in Canada. It's a small commitment that can make a real difference.",
  },
]

export function WaysToHelp() {
  const { t } = useTranslation()

  return (
    <section className="py-12 md:py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="font-sans font-bold text-2xl sm:text-3xl md:text-4xl text-foreground tracking-tight">
            {t("Helping Is Easier Than You Think")}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-fr gap-5 md:gap-6 max-w-5xl mx-auto items-stretch pt-2 md:pt-4">
          {ways.map((way, index) => (
            <div
              key={index}
              className="relative h-full bg-card rounded-xl md:rounded-2xl p-5 md:p-6 border-2 border-border shadow-[var(--shadow-flat)]"
            >
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
