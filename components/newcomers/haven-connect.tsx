import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"



export function HavenConnect() {
  return (
    <>
      <div className="max-w-7xl mx-auto px-6 py-12">
        <p className="text-muted-foreground text-base text-center">
          Not interested in classes? No problem. You can still join Haven to match with Canadian volunteers.
        </p>
      </div>
      <section id="connect" className="py-20 bg-secondary/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-secondary text-sm font-semibold uppercase tracking-wider mb-4">
              Haven Connect
            </p>
            <h2 className="font-sans font-bold text-3xl md:text-4xl text-foreground mb-4">
              Meet a volunteer who can help you start life in Canada.
            </h2>
            <p className="font-sans font-medium text-muted-foreground text-lg leading-relaxed mb-4">
              These Canadians are here to help you practice your English or French, give you tips about life in your city, or help you navigate the Canadian job market.
            </p>
            <p className="font-sans font-medium text-muted-foreground text-lg leading-relaxed mb-6">
              Its free and starts with a 30 minute video call.
            </p>

            <Button size="lg" className="text-base px-7" asChild>
              <Link href="https://app.findhaven.org">Join Haven Connect</Link>
            </Button>
          </div>

          <div className="order-first lg:order-last">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
              <Image
                src="/images/haven-connect-hero.jpg"
                alt="Two women high-fiving on a snowy Canadian city street"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}
