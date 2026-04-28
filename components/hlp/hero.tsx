import Link from "next/link"
import { Button } from "@/components/ui/button"

export function HLPHero() {
  return (
    <section className="bg-[#F0EDF9] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image - Left */}
          <div className="order-2 md:order-1">
            <div className="bg-[#E0D9F0] rounded-2xl aspect-[4/5] flex items-center justify-center">
              <span className="text-[#AF75FF]/50 text-sm font-medium uppercase tracking-wider">
                Photo
              </span>
            </div>
          </div>

          {/* Content - Right */}
          <div className="order-1 md:order-2">
            <h1 className="font-sans font-bold text-3xl md:text-4xl lg:text-5xl text-[#26215C] mb-6 leading-tight text-balance">
              A better way to learn English for newcomers fleeing conflict.
            </h1>
            <p className="text-[#26215C]/80 text-lg md:text-xl mb-8 leading-relaxed">
              Classes with professional teachers. Conversations with Canadians. Built around your schedule.
            </p>
            <Button 
              asChild 
              size="lg"
              className="bg-[#2457F1] hover:bg-[#2457F1]/90 text-white px-8 py-6 text-base"
            >
              <Link href="https://app.findhaven.org">Join Haven</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
