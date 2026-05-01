"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useTranslation } from "@/lib/i18n"

interface CollapsiblePillProps {
  title: string
  description: string
  variant: "secondary" | "accent"
  isExpanded: boolean
  onToggle: () => void
  number?: number
}

function CollapsiblePill({ title, description, variant, isExpanded, onToggle, number }: CollapsiblePillProps) {
  const bgColor = variant === "secondary" ? "bg-white" : "bg-white"
  const borderColor = variant === "secondary" ? "border-secondary/30" : "border-accent/30"
  const chevronBg = variant === "secondary" ? "bg-secondary/20" : "bg-accent/20"
  const chevronColor = variant === "secondary" ? "text-secondary" : "text-accent"

  return (
    <div className={`${bgColor} ${borderColor} border ${isExpanded ? "rounded-2xl" : "rounded-full"} overflow-hidden transition-all`}>
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-4 py-3 text-left"
      >
        <span className="font-medium text-foreground flex items-center gap-2">
          {number && (
            <span className="w-5 h-5 rounded-full bg-secondary text-white text-xs font-semibold flex items-center justify-center flex-shrink-0">
              {number}
            </span>
          )}
          {title}
        </span>
        <div className={`w-7 h-7 rounded-full ${chevronBg} flex items-center justify-center flex-shrink-0`}>
          {isExpanded ? (
            <ChevronUp className={`w-4 h-4 ${chevronColor}`} />
          ) : (
            <ChevronDown className={`w-4 h-4 ${chevronColor}`} />
          )}
        </div>
      </button>
      {isExpanded && (
        <div className="px-4 pb-4 text-muted-foreground text-sm">
          {description}
        </div>
      )}
    </div>
  )
}

export function SectionThree() {
  const [expandedPills, setExpandedPills] = useState<Record<string, boolean>>({})
  const { t } = useTranslation()

  const togglePill = (id: string) => {
    setExpandedPills(prev => ({ ...prev, [id]: !prev[id] }))
  }

  const languageProgramFeatures = [
    { id: "chats", title: t("Matching"), description: t("Practice conversational English with friendly Canadian volunteers.") },
    { id: "classes", title: t("Classes"), description: t("Individual and small group online ESL classes with professional teachers.") },
    { id: "study", title: t("Homework"), description: t("Self-paced learning materials and exercises to improve on your own time.") },
  ]

  const newcomerMatchingFeatures = [
    { id: "n-matching", title: t("Matching"), description: t("Practice your English or French, meet people in your community, and find work in Canada.") },
  ]

  const canadianMatchingFeatures = [
    { id: "c-language", title: t("Language"), description: t("Help newcomers practice their English or French conversation skills.") },
    { id: "c-community", title: t("Community"), description: t("Welcome newcomers into your community and share Canadian culture.") },
    { id: "c-network", title: t("Network"), description: t("Share your professional network and career advice with newcomers.") },
  ]

  return (
    <section className="pt-12 pb-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-sans font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            {t("How Haven helps")}
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            {t("We have two programs: Haven Language Program and Haven Connect. Both help newcomers improve their English and meet Canadians. The difference is commitment - and results.")}
          </p>
        </div>

        {/* Column Headers */}
        <div className="grid md:grid-cols-3 gap-6 mb-4">
          <div>
            <h3 className="text-sm font-semibold text-secondary uppercase tracking-wide">
              {t("For Newcomers")}
            </h3>
          </div>
          <div></div>
          <div>
            <h3 className="text-sm font-semibold text-accent uppercase tracking-wide">
              {t("For Canadians")}
            </h3>
          </div>
        </div>

        {/* Three cards in a row */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Haven Language Program Card */}
          <div className="bg-secondary/10 border border-secondary/20 rounded-2xl p-6 flex flex-col">
            <span className="inline-flex items-center gap-1.5 w-fit bg-secondary text-white text-xs font-semibold px-3 py-1.5 rounded-full mb-3">
              <Clock className="w-3.5 h-3.5" />
              {t("6+ hours per week")}
            </span>
            <h4 className="font-sans font-bold text-xl text-foreground mb-2">
              {t("Haven Language Program")}
            </h4>
            <p className="text-muted-foreground mb-4">
              {t("The best way for a newcomer to improve their English — and soon, French!")}
            </p>
            <div className="border-t border-secondary/20 pt-4 space-y-2 flex-grow">
              {languageProgramFeatures.map((feature, index) => (
                <CollapsiblePill
                  key={feature.id}
                  title={feature.title}
                  description={feature.description}
                  variant="secondary"
                  isExpanded={expandedPills[feature.id] || false}
                  onToggle={() => togglePill(feature.id)}
                  number={index + 1}
                />
              ))}
            </div>
            <Button variant="outline" className="mt-6 w-fit hover:bg-secondary/10 hover:text-secondary hover:border-secondary" asChild>
              <Link href="https://app.findhaven.org">{t("Learn more")}</Link>
            </Button>
          </div>

          {/* Haven Connect Card - Newcomers */}
          <div className="bg-secondary/10 border border-secondary/20 rounded-2xl p-6 flex flex-col">
            <span className="inline-flex items-center gap-1.5 w-fit bg-secondary text-white text-xs font-semibold px-3 py-1.5 rounded-full mb-3">
              <Clock className="w-3.5 h-3.5" />
              {t("As little as 30 minutes a week")}
            </span>
            <h4 className="font-sans font-bold text-xl text-foreground mb-2">
              {t("Haven Connect")}
            </h4>
            <p className="text-muted-foreground mb-4">
              {t("The best way to meet Canadians who can help.")}
            </p>
            <div className="border-t border-secondary/20 pt-4 space-y-2">
              {newcomerMatchingFeatures.map((feature) => (
                <CollapsiblePill
                  key={feature.id}
                  title={feature.title}
                  description={feature.description}
                  variant="secondary"
                  isExpanded={expandedPills[feature.id] || false}
                  onToggle={() => togglePill(feature.id)}
                />
              ))}
            </div>
            
            {/* Info box */}
            <div className="bg-secondary/10 border border-secondary/20 rounded-2xl p-5 mt-4 flex-grow">
              <p className="text-foreground">
                <span className="font-bold text-secondary">{t("No classes. No homework.")}</span>{" "}
                {t("Just real conversations with Canadian volunteers.")}
              </p>
            </div>
            
            <Button variant="outline" className="mt-6 w-fit hover:bg-secondary/10 hover:text-secondary hover:border-secondary" asChild>
              <Link href="https://app.findhaven.org">{t("Learn more")}</Link>
            </Button>
          </div>

          {/* Haven Connect Card - Canadians */}
          <div className="bg-accent/10 border border-accent/20 rounded-2xl p-6 flex flex-col">
            <span className="inline-flex items-center gap-1.5 w-fit bg-accent text-white text-xs font-semibold px-3 py-1.5 rounded-full mb-3">
              <Clock className="w-3.5 h-3.5" />
              {t("You pick your schedule")}
            </span>
            <h4 className="font-sans font-bold text-xl text-foreground mb-2">
              {t("Haven Connect")}
            </h4>
            <p className="text-muted-foreground mb-4">
              {t("The best way to help newcomers in Canada.")}
            </p>
            <div className="border-t border-accent/20 pt-4 space-y-2 flex-grow">
              {canadianMatchingFeatures.map((feature) => (
                <CollapsiblePill
                  key={feature.id}
                  title={feature.title}
                  description={feature.description}
                  variant="accent"
                  isExpanded={expandedPills[feature.id] || false}
                  onToggle={() => togglePill(feature.id)}
                />
              ))}
            </div>
            <Button variant="outline" className="mt-6 w-fit hover:bg-accent/10 hover:text-accent hover:border-accent" asChild>
              <Link href="https://app.findhaven.org">{t("Learn more")}</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
