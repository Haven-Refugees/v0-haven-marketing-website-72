import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function TeamSection() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-sans font-bold text-4xl md:text-5xl text-foreground mb-6 text-balance">
              Canada wins when newcomers become independent faster.
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              We believe Canada should have a system that helps newcomers learn English and French and integrate into their communities, faster than ever before. Technology makes that possible at scale, and at a fraction of the current cost. That&apos;s good for refugees, good for Canadians, and good for Canada.
            </p>
            <Link href="https://app.findhaven.org" className="text-foreground hover:text-primary inline-flex items-center gap-1 font-medium">
              Read more about our vision and team
              <ArrowRight className="w-4 h-4" />
            </Link>
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
