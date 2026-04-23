import Image from "next/image"
import { CheckCircle } from "lucide-react"

export function SectionTwo() {
  return (
    <section className="pt-8 pb-4 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-[3fr_2fr] gap-8 items-center">
          {/* Platform Screenshot */}
          <div className="relative">
            <Image
              src="/images/platform-mockup.png"
              alt="Haven platform showing user profiles and matching interface"
              width={800}
              height={600}
              className="w-full h-auto"
              priority
            />
          </div>

          {/* Right Side Content */}
          <div className="flex flex-col justify-center h-full pt-12">
            {/* Main heading */}
            <h2 className="font-sans font-bold text-2xl md:text-3xl lg:text-4xl text-foreground leading-tight mb-8">
              Where old Canadians meet new ones.
            </h2>
            
            {/* Stats cards */}
            <div className="space-y-3 mb-6">
              <div className="bg-muted/50 border border-border rounded-lg px-5 py-4 flex items-center gap-4">
                <span className="font-sans font-bold text-2xl md:text-3xl text-foreground min-w-[100px]">20,000+</span>
                <span className="text-muted-foreground">Canadians and newcomers on the platform</span>
              </div>
              
              <div className="bg-muted/50 border border-border rounded-lg px-5 py-4 flex items-center gap-4">
                <span className="font-sans font-bold text-2xl md:text-3xl text-foreground min-w-[100px]">100+</span>
                <span className="text-muted-foreground">Cities active across Canada</span>
              </div>
              
              <div className="bg-accent/10 border border-accent/20 rounded-lg px-5 py-4 flex items-center gap-4">
                <span className="font-sans font-bold text-2xl md:text-3xl text-accent min-w-[100px]">1,500+</span>
                <span className="text-accent">Newcomers looking for help right now</span>
              </div>
            </div>
            
            {/* Charity info */}
            <div className="flex items-center gap-3 bg-muted/50 border border-border rounded-lg px-5 py-4">
              <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
              <p className="text-sm text-foreground">
                Haven is a registered Canadian charity with the CRA
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
