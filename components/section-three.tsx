import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function SectionThree() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
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

        {/* Two columns */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* FOR NEWCOMERS */}
          <div>
            <h3 className="text-sm font-semibold text-secondary uppercase tracking-wide mb-4">
              For Newcomers
            </h3>
            <div className="space-y-4">
              {/* Haven Language Program Card */}
              <div className="bg-secondary/10 border border-secondary/20 rounded-2xl p-6">
                <h4 className="font-sans font-bold text-xl text-foreground mb-2">
                  Haven Language Program
                </h4>
                <p className="text-muted-foreground mb-4">
                  The best way for a newcomer to improve their English — and soon, French!
                </p>
                <div className="border-t border-secondary/20 pt-4 space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center">
                      <Check className="w-3.5 h-3.5 text-secondary" />
                    </div>
                    <span className="text-foreground">Classes with teachers</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center">
                      <Check className="w-3.5 h-3.5 text-secondary" />
                    </div>
                    <span className="text-foreground">Chats with volunteers</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center">
                      <Check className="w-3.5 h-3.5 text-secondary" />
                    </div>
                    <span className="text-foreground">Individual study</span>
                  </div>
                </div>
                <Button variant="outline" className="mt-6" asChild>
                  <Link href="https://app.findhaven.org">Learn more</Link>
                </Button>
              </div>

              {/* Haven Matching Card - Newcomers */}
              <div className="bg-secondary/10 border border-secondary/20 rounded-2xl p-6">
                <h4 className="font-sans font-bold text-xl text-foreground mb-2">
                  Haven Matching
                </h4>
                <p className="text-muted-foreground mb-4">
                  The best way to meet Canadians who want to help.
                </p>
                <div className="border-t border-secondary/20 pt-4 space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center">
                      <Check className="w-3.5 h-3.5 text-secondary" />
                    </div>
                    <span className="text-foreground">Language</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center">
                      <Check className="w-3.5 h-3.5 text-secondary" />
                    </div>
                    <span className="text-foreground">Community</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center">
                      <Check className="w-3.5 h-3.5 text-secondary" />
                    </div>
                    <span className="text-foreground">Network</span>
                  </div>
                </div>
                <Button variant="outline" className="mt-6" asChild>
                  <Link href="https://app.findhaven.org">Learn more</Link>
                </Button>
              </div>
            </div>
          </div>

          {/* FOR CANADIANS */}
          <div>
            <h3 className="text-sm font-semibold text-accent uppercase tracking-wide mb-4">
              For Canadians
            </h3>
            <div className="space-y-4">
              {/* Haven Matching Card - Canadians */}
              <div className="bg-accent/10 border border-accent/20 rounded-2xl p-6">
                <h4 className="font-sans font-bold text-xl text-foreground mb-2">
                  Haven Matching
                </h4>
                <p className="text-muted-foreground mb-4">
                  The best way to help newcomers in Canada.
                </p>
                <div className="border-t border-accent/20 pt-4 space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center">
                      <Check className="w-3.5 h-3.5 text-accent" />
                    </div>
                    <span className="text-foreground">Language</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center">
                      <Check className="w-3.5 h-3.5 text-accent" />
                    </div>
                    <span className="text-foreground">Community</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center">
                      <Check className="w-3.5 h-3.5 text-accent" />
                    </div>
                    <span className="text-foreground">Network</span>
                  </div>
                </div>
                <Button variant="outline" className="mt-6" asChild>
                  <Link href="https://app.findhaven.org">Learn more</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
