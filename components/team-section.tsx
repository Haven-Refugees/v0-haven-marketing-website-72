import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function TeamSection() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6 text-balance">
              Meet the team behind Haven
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              We are a team of Canadians and newcomers who care about improving the Canadian resettlement system for those fleeing conflict.
            </p>
            <Button size="lg" variant="outline" asChild>
              <Link href="https://app.findhaven.org">
                Learn more about Haven
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div 
                  key={i}
                  className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center"
                >
                  <div className="w-16 h-16 bg-card rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-2xl">
                      {["👩‍💼", "👨‍💻", "👩‍🎓", "👨‍🏫"][i - 1]}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
