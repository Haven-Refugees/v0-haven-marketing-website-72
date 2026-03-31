import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, ShieldCheck } from "lucide-react"

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
            <ShieldCheck className="w-4 h-4" />
            Haven is a registered Canadian charity
          </div>
          
          <h1 className="font-sans font-black text-5xl md:text-6xl lg:text-7xl text-foreground leading-tight text-balance">
            We help refugees become independent in Canada faster.
          </h1>
          
          <p className="font-sans font-medium text-xl text-muted-foreground max-w-lg leading-relaxed">
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

        <div className="relative flex items-center justify-center">
          <img 
            src="/images/hero-image.png" 
            alt="Stephanie from Calgary and Olena from Ukraine - a Haven connection" 
            className="w-full max-w-lg h-auto"
          />
        </div>
      </div>
    </section>
  )
}
