import { CheckCircle } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function SectionTwo() {
  return (
    <section className="pt-8 pb-4 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-[1fr_1fr] gap-12 items-center">
          {/* Profile Cards */}
          <div className="flex gap-4">
            {/* Canadian Profile Card */}
            <div className="flex-1 bg-card border border-border rounded-xl overflow-hidden">
              <div className="bg-accent/30 h-32 flex items-center justify-center">
                <span className="text-4xl font-bold text-accent">BA</span>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg text-foreground">Barb A</h3>
                <p className="text-sm text-muted-foreground mb-2">Toronto</p>
                <span className="inline-block px-2 py-0.5 bg-accent/10 text-accent text-xs font-medium rounded-full mb-2">
                  Community
                </span>
                <p className="text-sm text-foreground mb-4">
                  Wants to welcome newcomers in Toronto
                </p>
                <div className="space-y-2">
                  <Button variant="outline" className="w-full justify-center" size="sm">
                    Ask for Help
                  </Button>
                  <Button variant="outline" className="w-full justify-center" size="sm">
                    See Profile
                  </Button>
                </div>
              </div>
            </div>

            {/* Newcomer Profile Card */}
            <div className="flex-1 bg-card border border-border rounded-xl overflow-hidden">
              <div className="bg-secondary/30 h-32 flex items-center justify-center">
                <span className="text-4xl font-bold text-secondary">OK</span>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg text-foreground">Oksana K</h3>
                <p className="text-sm text-muted-foreground mb-2">Ottawa</p>
                <span className="inline-block px-2 py-0.5 bg-secondary/10 text-secondary text-xs font-medium rounded-full mb-2">
                  Language
                </span>
                <p className="text-sm text-foreground mb-4">
                  Needs help practicing her English
                </p>
                <div className="space-y-2">
                  <Button variant="outline" className="w-full justify-center" size="sm">
                    Offer Help
                  </Button>
                  <Button variant="outline" className="w-full justify-center" size="sm">
                    See Profile
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side Content */}
          <div className="flex flex-col justify-center">
            {/* Main heading */}
            <h2 className="font-sans font-bold text-2xl md:text-3xl lg:text-4xl text-foreground leading-tight mb-8">
              Where old Canadians meet new ones.
            </h2>
            
            {/* Stats cards */}
            <div className="flex gap-4 mb-6">
              <div className="flex-1 bg-accent/10 border border-accent/20 rounded-lg px-5 py-4">
                <span className="block font-sans font-bold text-3xl text-accent">18,500+</span>
                <span className="text-sm text-accent">Canadians ready to help</span>
              </div>
              
              <div className="flex-1 bg-secondary/10 border border-secondary/20 rounded-lg px-5 py-4">
                <span className="block font-sans font-bold text-3xl text-secondary">1,500+</span>
                <span className="text-sm text-secondary">Newcomers looking for help</span>
              </div>
            </div>

            {/* CTA Button */}
            <Button variant="outline" className="w-fit mb-6" asChild>
              <Link href="https://app.findhaven.org">
                See who needs help
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            
            {/* Charity info */}
            <div className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
              <p className="text-sm text-muted-foreground">
                Haven is a registered Canadian charity with the CRA
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
