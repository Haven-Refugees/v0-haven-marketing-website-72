import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ShieldCheck } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative flex items-center justify-center min-h-[90vh] pt-28 pb-16 overflow-hidden">
      

      <div className="max-w-7xl mx-auto px-6 py-2 grid lg:grid-cols-[3fr_2fr] gap-4 items-stretch">
        <div className="space-y-4 flex flex-col justify-center lg:pl-12">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 rounded-full text-primary text-xs font-medium w-fit">
            <ShieldCheck className="w-3.5 h-3.5" />
            Haven is a registered Canadian charity
          </span>
          
          <h1 className="font-sans font-black text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight text-balance">
            We help refugees become independent in Canada faster.
          </h1>
          
          <p className="font-sans font-medium text-xl text-muted-foreground max-w-lg leading-relaxed">
            Newcomers connect with Canadians for help with language, employment, and community.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <Button size="lg" className="text-base px-8 py-6 bg-secondary hover:bg-secondary/90 text-secondary-foreground" asChild>
              <Link href="https://app.findhaven.org">
                I need help
              </Link>
            </Button>
            <Button size="lg" className="text-base px-8 py-6 bg-accent hover:bg-accent/90 text-accent-foreground" asChild>
              <Link href="https://app.findhaven.org">
                I want to help
              </Link>
            </Button>
          </div>
        </div>

        <div className="relative flex items-center justify-start h-full -ml-12">
          <img 
            src="/images/hero-image.png" 
            alt="Stephanie from Calgary and Olena from Ukraine - a Haven connection" 
            className="h-full max-h-[600px] w-auto object-contain"
          />
        </div>
      </div>
    </section>
  )
}
