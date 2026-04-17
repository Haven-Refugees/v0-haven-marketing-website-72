import Link from "next/link"
import { CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function SectionProfiles() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-[1fr_1fr] gap-12 items-center">
          {/* Profile Cards */}
          <div className="flex gap-4">
            {/* Barb A Card */}
            <div className="flex-1 border border-border rounded-xl overflow-hidden bg-card">
              <div className="bg-accent/30 h-32 flex items-center justify-center">
                <span className="text-4xl font-bold text-accent">BA</span>
              </div>
              <div className="p-4">
                <h4 className="font-bold text-lg text-foreground">Barb A</h4>
                <p className="text-sm text-muted-foreground mb-2">Toronto</p>
                <span className="inline-block px-2 py-0.5 text-xs font-medium border border-border rounded-full mb-3">
                  Community
                </span>
                <p className="text-sm text-muted-foreground mb-4">
                  Wants to welcome newcomers in Toronto
                </p>
                <div className="space-y-2">
                  <Button variant="outline" className="w-full justify-center">
                    Ask for Help
                  </Button>
                  <Button variant="outline" className="w-full justify-center">
                    See Profile
                  </Button>
                </div>
              </div>
            </div>

            {/* Oksana K Card */}
            <div className="flex-1 border border-border rounded-xl overflow-hidden bg-card">
              <div className="bg-secondary/30 h-32 flex items-center justify-center">
                <span className="text-4xl font-bold text-secondary">OK</span>
              </div>
              <div className="p-4">
                <h4 className="font-bold text-lg text-foreground">Oksana K</h4>
                <p className="text-sm text-muted-foreground mb-2">Ottawa</p>
                <span className="inline-block px-2 py-0.5 text-xs font-medium border border-border rounded-full mb-3">
                  Language
                </span>
                <p className="text-sm text-muted-foreground mb-4">
                  Needs help practicing her English
                </p>
                <div className="space-y-2">
                  <Button variant="outline" className="w-full justify-center">
                    Offer Help
                  </Button>
                  <Button variant="outline" className="w-full justify-center">
                    See Profile
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div>
            <h2 className="font-sans font-bold text-[1.6rem] md:text-[2rem] lg:text-[2.4rem] text-foreground leading-tight mb-8">
              Where old Canadians meet new ones.
            </h2>

            {/* Stats */}
            <div className="flex gap-4 mb-6">
              <div className="flex-1 bg-accent/10 rounded-lg p-4">
                <p className="text-2xl font-bold text-accent">1,000+</p>
                <p className="text-sm text-accent">Canadians ready to help</p>
              </div>
              <div className="flex-1 bg-secondary/10 rounded-lg p-4">
                <p className="text-2xl font-bold text-secondary">1,500+</p>
                <p className="text-sm text-secondary">Newcomers looking for help</p>
              </div>
            </div>

            {/* CTA Button */}
            <Button size="lg" className="mb-6 bg-primary hover:bg-primary/90 text-white" asChild>
              <Link href="https://app.findhaven.org">
                Visit the platform
              </Link>
            </Button>

            {/* Charity Note */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <CheckCircle className="w-5 h-5 text-secondary" />
              <span>Haven is a registered Canadian charity with the CRA</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
