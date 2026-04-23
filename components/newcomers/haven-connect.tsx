import Link from "next/link"
import { Button } from "@/components/ui/button"

const pills = ["Free", "30 min a week", "Start today", "You pick your match"]

export function HavenConnect() {
  return (
    <section id="connect" className="py-20 bg-primary/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-primary text-xs font-medium uppercase tracking-wider mb-4">
              Haven Connect
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
              Meet a Canadian volunteer who can help you start life in Canada.
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              Haven matches you directly with a Canadian volunteer. Once you&apos;re signed up, you can browse profiles and reach out today.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Your Canadian can help you practice English or French, give you tips about life in your city, or help you navigate the Canadian job market. You pick who you talk to and what you need help with.
            </p>

            {/* Pills */}
            <div className="flex flex-wrap gap-2 mb-6">
              {pills.map((pill) => (
                <span 
                  key={pill}
                  className="bg-primary/10 text-primary text-sm font-medium px-4 py-1.5 rounded-full"
                >
                  {pill}
                </span>
              ))}
            </div>

            <p className="text-muted-foreground text-sm mb-6">
              It&apos;s free. There are no classes and no homework. Just show up to your weekly call.
            </p>

            <Button size="lg" className="text-base px-7" asChild>
              <Link href="https://app.findhaven.org">Join Haven Connect</Link>
            </Button>
          </div>

          <div className="order-first lg:order-last">
            <div className="bg-primary/10 rounded-2xl aspect-[4/5] flex items-center justify-center">
              <span className="text-primary/40 text-sm font-medium uppercase tracking-wider">Image</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
