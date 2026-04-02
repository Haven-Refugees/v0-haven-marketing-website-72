import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ShieldCheck } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative flex items-center justify-center min-h-[calc(100vh-40px)] pt-28 pb-16 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 left-10 w-56 h-56 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-6 py-2 grid lg:grid-cols-[7fr_3fr] gap-8 items-stretch">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 rounded-full text-primary text-xs font-medium">
            <ShieldCheck className="w-3.5 h-3.5" />
            Haven is a registered Canadian charity
          </div>
          
          <h1 className="font-sans font-black text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight text-balance">
            We help refugees become independent in Canada faster.
          </h1>
          
          <p className="font-sans font-medium text-xl text-muted-foreground max-w-lg leading-relaxed">
            Newcomers connect with Canadians for help with language, employment, and community.
          </p>

          <div className="pt-2">
            <Button size="lg" className="text-base px-8 py-6" asChild>
              <Link href="https://app.findhaven.org">
                Visit the platform
              </Link>
            </Button>
          </div>
        </div>

        <div className="relative flex items-center justify-center h-full">
          <img 
            src="/images/hero-image.png" 
            alt="Stephanie from Calgary and Olena from Ukraine - a Haven connection" 
            className="h-full max-h-[400px] w-auto object-contain"
          />
        </div>
      </div>
    </section>
  )
}
