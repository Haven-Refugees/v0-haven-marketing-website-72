import Link from "next/link"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative flex items-center justify-center min-h-[90vh] pt-28 pb-16 overflow-hidden">
      

      <div className="max-w-7xl mx-auto px-6 py-2 grid lg:grid-cols-[1fr_1fr] gap-4 items-stretch">
        <div className="space-y-4 flex flex-col justify-center lg:pl-12">
          <h1 className="font-sans font-extrabold text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight text-balance">
            We help refugees become independent in Canada faster.
          </h1>
          
          <p className="font-sans font-medium text-xl text-muted-foreground leading-relaxed">
            Newcomers fleeing conflict use Haven to improve their language and connect with Canadians.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <Button size="lg" className="text-base px-8 py-6 bg-accent hover:bg-accent/90 text-accent-foreground" asChild>
              <Link href="https://app.findhaven.org">
                I want to help
              </Link>
            </Button>
            <Button size="lg" className="text-base px-8 py-6 bg-secondary hover:bg-secondary/90 text-secondary-foreground" asChild>
              <Link href="https://app.findhaven.org">
                I need help
              </Link>
            </Button>
          </div>
        </div>

        <div className="relative flex items-center justify-end h-full">
          <img 
            src="/images/hero-stephanie-olena.png" 
            alt="Stephanie from Calgary and Olena from Ukraine - a Haven connection" 
            className="w-full max-w-[660px] h-auto object-contain"
          />
        </div>
      </div>
    </section>
  )
}
