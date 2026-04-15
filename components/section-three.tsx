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

  const togglePill = (id: string) => {
    setExpandedPills(prev => ({ ...prev, [id]: !prev[id] }))
  }

  const languageProgramFeatures = [
    { id: "chats", title: "Matching", description: "Practice conversational English with friendly Canadian volunteers." },
    { id: "classes", title: "Classes", description: "Individual and small group online ESL classes with professional teachers." },
    { id: "study", title: "Homework", description: "Self-paced learning materials and exercises to improve on your own time." },
  ]

  const newcomerMatchingFeatures = [
    { id: "n-matching", title: "Matching", description: "Get help improving your English or French skills through conversation practice." },
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
              <Link href="https://app.findhaven.org">Learn more</Link>
            </Button>
          </div>

          {/* Haven Connect Card - Newcomers */}
          <div className="bg-secondary/10 border border-secondary/20 rounded-2xl p-6 flex flex-col">
            <h4 className="font-sans font-bold text-xl text-foreground mb-2">
              Haven Connect
            </h4>
            <p className="text-muted-foreground mb-4">
              The best way to meet Canadians who can help.
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
            <div className="bg-secondary/20 rounded-2xl p-5 mt-4 flex-grow">
              <p className="text-foreground mb-3">
                <span className="font-bold italic">No classes. No homework.</span>{" "}
                Just real conversations with Canadian volunteers.
              </p>
              <ul className="space-y-2 text-sm text-foreground">
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 rounded-full bg-secondary mt-1.5 flex-shrink-0"></span>
                  Practice your English or French
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 rounded-full bg-secondary mt-1.5 flex-shrink-0"></span>
                  Meet people in your community
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 rounded-full bg-secondary mt-1.5 flex-shrink-0"></span>
                  Find work in Canada
                </li>
              </ul>
            </div>
            
            <Button variant="outline" className="mt-6 w-fit hover:bg-secondary/10 hover:text-secondary hover:border-secondary" asChild>
              <Link href="https://app.findhaven.org">Find a Canadian match</Link>
            </Button>
          </div>

          {/* Haven Connect Card - Canadians */}
          <div className="bg-accent/10 border border-accent/20 rounded-2xl p-6 flex flex-col">
            <h4 className="font-sans font-bold text-xl text-foreground mb-2">
              Haven Connect
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
            <Button variant="outline" className="mt-6 w-fit hover:bg-accent/10 hover:text-accent hover:border-accent" asChild>
              <Link href="https://app.findhaven.org">Learn more</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
