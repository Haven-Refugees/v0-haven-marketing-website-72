import Link from "next/link"
import { Button } from "@/components/ui/button"

export function TeamSection() {
  return (
    <section className="pt-12 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-sans font-bold text-4xl md:text-5xl text-foreground mb-6 text-balance">
              Canada wins when newcomers become independent faster.
            </h2>
            <p className="text-xl text-muted-foreground mb-4 leading-relaxed">
              Our team believes that Canada should have a system that helps newcomers learn English and French and integrate into their communities, faster than ever before.
            </p>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Technology makes that possible at scale, and at a fraction of the current cost. That&apos;s good for refugees, good for Canadians, and good for Canada.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild className="bg-primary hover:bg-primary/90 text-white">
                <Link href="https://app.findhaven.org">Our vision</Link>
              </Button>
              <Button asChild variant="outline" className="border-foreground/20 hover:bg-foreground/5">
                <Link href="https://app.findhaven.org">Meet our team</Link>
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl overflow-hidden">
                <img 
                  src="/images/team-shihab.jpg" 
                  alt="Shihab from Bangladesh" 
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl overflow-hidden">
                <img 
                  src="/images/team-verenice.jpg" 
                  alt="Verenice from Mexico" 
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl overflow-hidden">
                <img 
                  src="/images/team-woman-yellow.jpg" 
                  alt="Newcomer making peace sign" 
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl overflow-hidden">
                <img 
                  src="/images/team-nasina.jpg" 
                  alt="Nasina from Afghanistan" 
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
