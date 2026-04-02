import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, ShieldCheck } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative flex items-center justify-center pt-20 pb-8 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 left-10 w-56 h-56 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-6 py-4 grid lg:grid-cols-2 gap-6 items-center">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 rounded-full text-primary text-xs font-medium">
            <ShieldCheck className="w-3.5 h-3.5" />
            Haven is a registered Canadian charity
          </div>
          
          <h1 className="font-sans font-black text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight text-balance">
            We help refugees become independent in Canada faster.
          </h1>
          
          <p className="font-sans font-medium text-base text-muted-foreground max-w-md leading-relaxed">
            Newcomers connect with Canadians for help with language, employment, and community.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <Button size="default" className="text-sm px-5 py-4" asChild>
              <Link href="https://app.findhaven.org">
                Visit the platform
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button size="default" variant="outline" className="text-sm px-5 py-4" asChild>
              <Link href="#how-it-works">
                Learn how it works
              </Link>
            </Button>
          </div>
        </div>

        <div className="relative flex items-center justify-center">
          <img 
            src="/images/hero-image.png" 
            alt="Stephanie from Calgary and Olena from Ukraine - a Haven connection" 
            className="w-full max-w-xs h-auto"
          />
        </div>
      </div>
    </section>
  )
}
