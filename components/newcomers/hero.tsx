import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function NewcomersHero() {
  return (
    <section className="relative pt-14 pb-10 bg-primary/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 items-center">
          <div className="space-y-6 lg:pl-16">
            <h1 className="font-sans font-extrabold text-4xl md:text-5xl lg:text-[44px] text-foreground leading-tight">
              Speak with volunteers. Study with teachers.
            </h1>
            <p className="font-sans font-medium text-lg text-muted-foreground leading-relaxed max-w-lg">
              Two ways to get help in Canada. Conversations with Canadians, or conversations plus classes. You choose.
            </p>
            <div className="pt-2">
              <Button size="lg" className="text-base px-7 py-6" asChild>
                <Link href="https://app.findhaven.org">
                  Get help now
                </Link>
              </Button>
            </div>
          </div>

          <div className="relative mt-8 w-[101%] -ml-8">
            <div className="relative rounded-3xl overflow-hidden aspect-[3.24/3]">
              <Image
                src="/images/newcomers-hero.png"
                alt="A joyful woman celebrating with arms raised in a city street"
                fill
                className="object-cover object-[center_60%] rounded-3xl"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
