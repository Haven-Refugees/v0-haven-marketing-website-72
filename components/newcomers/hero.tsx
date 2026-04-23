import Link from "next/link"
import { Button } from "@/components/ui/button"

export function NewcomersHero() {
  return (
    <section className="relative pt-28 pb-20 bg-primary/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-[44px] text-foreground leading-tight">
              Speak with volunteers. Study with teachers.
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
              Two ways to get help in Canada. Conversations with Canadians, or conversations plus classes. You choose.
            </p>
            <div className="pt-2">
              <Button size="lg" className="text-base px-7 py-6" asChild>
                <Link href="https://app.findhaven.org">
                  Join Haven
                </Link>
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="bg-primary/10 rounded-2xl aspect-[4/5] flex items-center justify-center">
              <span className="text-primary/40 text-sm font-medium uppercase tracking-wider">Image</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
