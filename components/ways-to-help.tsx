"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MessageSquare, Globe, Briefcase } from "lucide-react"
import { useTranslation } from "@/lib/i18n"

const helpOptions = [
  {
    icon: MessageSquare,
    title: "Language practice",
    description: "Practice English or French conversation with a newcomer through video calls.",
  },
  {
    icon: Globe,
    title: "Community integration",
    description: "Help a newcomer navigate life in your city — from transit to groceries to finding a doctor.",
  },
  {
    icon: Briefcase,
    title: "Career support",
    description: "Share your professional network and help a newcomer find work in Canada.",
  },
]

export function WaysToHelp() {
  const { t } = useTranslation()

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-sans font-bold text-4xl md:text-5xl text-foreground mb-4">
            {t("Ways to help")}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t("Choose how you want to make a difference in someone's life")}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {helpOptions.map((option, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <option.icon className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-sans font-bold text-xl text-foreground mb-3">
                {t(option.title)}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {t(option.description)}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-white" asChild>
            <Link href="https://app.findhaven.org">{t("I want to help")}</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
