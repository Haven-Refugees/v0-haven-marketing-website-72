"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface CollapsiblePillProps {
  title: string
  description: string
  variant: "secondary" | "accent"
  isExpanded: boolean
  onToggle: () => void
}

function CollapsiblePill({ title, description, variant, isExpanded, onToggle }: CollapsiblePillProps) {
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
        <span className="font-medium text-foreground">{title}</span>
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

  const togglePill = (id: string) => {
    setExpandedPills(prev => ({ ...prev, [id]: !prev[id] }))
  }

  const languageProgramFeatures = [
    { id: "classes", title: "Classes with teachers", description: "Individual and small group online ESL classes with professional teachers." },
    { id: "chats", title: "Chats with volunteers", description: "Practice conversational English with friendly Canadian volunteers." },
    { id: "study", title: "Individual study", description: "Self-paced learning materials and exercises to improve on your own time." },
  ]

  const newcomerMatchingFeatures = [
    { id: "n-language", title: "Language", description: "Get help improving your English or French skills through conversation practice." },
    { id: "n-community", title: "Community", description: "Connect with Canadians who share your interests and values." },
    { id: "n-network", title: "Network", description: "Build professional connections to help advance your career in Canada." },
  ]

  const canadianMatchingFeatures = [
    { id: "c-language", title: "Language", description: "Help newcomers practice their English or French conversation skills." },
    { id: "c-community", title: "Community", description: "Welcome newcomers into your community and share Canadian culture." },
    { id: "c-network", title: "Network", description: "Share your professional network and career advice with newcomers." },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-sans font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            How Haven helps
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            We help all newcomers fleeing conflict who are now in Canada — including refugees, 
            refugee claimants, and all other Canadian humanitarian programs like CUAET.
          </p>
        </div>

        {/* Column Headers */}
        <div className="grid md:grid-cols-3 gap-6 mb-4">
          <div>
            <h3 className="text-sm font-semibold text-secondary uppercase tracking-wide">
              For Newcomers
            </h3>
          </div>
          <div></div>
          <div>
            <h3 className="text-sm font-semibold text-accent uppercase tracking-wide">
              For Canadians
            </h3>
          </div>
        </div>

        {/* Three cards in a row */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Haven Language Program Card */}
          <div className="bg-secondary/10 border border-secondary/20 rounded-2xl p-6 flex flex-col">
            <h4 className="font-sans font-bold text-xl text-foreground mb-2">
              Haven Language Program
            </h4>
            <p className="text-muted-foreground mb-4">
              The best way for a newcomer to improve their English — and soon, French!
            </p>
            <div className="border-t border-secondary/20 pt-4 space-y-2 flex-grow">
              {languageProgramFeatures.map((feature) => (
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
            <Button variant="outline" className="mt-6 w-fit" asChild>
              <Link href="https://app.findhaven.org">Learn more</Link>
            </Button>
          </div>

          {/* Haven Matching Card - Newcomers */}
          <div className="bg-secondary/10 border border-secondary/20 rounded-2xl p-6 flex flex-col">
            <h4 className="font-sans font-bold text-xl text-foreground mb-2">
              Haven Matching
            </h4>
            <p className="text-muted-foreground mb-4">
              The best way to meet Canadians who want to help.
            </p>
            <div className="border-t border-secondary/20 pt-4 space-y-2 flex-grow">
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
            <Button variant="outline" className="mt-6 w-fit" asChild>
              <Link href="https://app.findhaven.org">Learn more</Link>
            </Button>
          </div>

          {/* Haven Matching Card - Canadians */}
          <div className="bg-accent/10 border border-accent/20 rounded-2xl p-6 flex flex-col">
            <h4 className="font-sans font-bold text-xl text-foreground mb-2">
              Haven Matching
            </h4>
            <p className="text-muted-foreground mb-4">
              The best way to help newcomers in Canada.
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
            <Button variant="outline" className="mt-6 w-fit" asChild>
              <Link href="https://app.findhaven.org">Learn more</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
