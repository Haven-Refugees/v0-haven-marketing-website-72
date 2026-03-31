import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            Join 17,000+ Canadians and refugees
          </div>
          
          <h1 className="font-[family-name:var(--font-montserrat)] font-black text-5xl md:text-6xl lg:text-7xl text-foreground leading-tight text-balance">
            We help refugees become independent in Canada faster.
          </h1>
          
          <p className="font-[family-name:var(--font-montserrat)] font-medium text-xl text-muted-foreground max-w-lg leading-relaxed">
            Newcomers connect with Canadians for help with language, employment, and community.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="text-lg px-8 py-6" asChild>
              <Link href="https://app.findhaven.org">
                Visit the platform
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6" asChild>
              <Link href="#how-it-works">
                Learn how it works
              </Link>
            </Button>
          </div>
        </div>

        <div className="relative">
          <div className="relative aspect-square max-w-lg mx-auto">
            {/* Main image container */}
            <div className="absolute inset-4 bg-card rounded-3xl shadow-2xl overflow-hidden border border-border">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-24 h-24 bg-primary/20 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <p className="font-serif text-2xl text-foreground">Building bridges,<br />one connection at a time</p>
                </div>
              </div>
            </div>
            
            {/* Floating cards */}
            <div className="absolute -top-4 -right-4 bg-card p-4 rounded-2xl shadow-lg border border-border animate-float">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                  <span className="text-lg">🌍</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">Global Community</p>
                  <p className="text-xs text-muted-foreground">From 50+ countries</p>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-card p-4 rounded-2xl shadow-lg border border-border animate-float-delayed">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center">
                  <span className="text-lg">💬</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">Language Support</p>
                  <p className="text-xs text-muted-foreground">English & French</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
