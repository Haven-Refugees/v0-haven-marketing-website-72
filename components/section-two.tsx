import { CheckCircle } from "lucide-react"

export function SectionTwo() {
  return (
    <section className="pt-8 pb-8 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-[3fr_2fr] gap-8 items-center">
          <div className="relative">
            <img 
              src="/images/platform-mockup.png" 
              alt="Haven platform shown on laptop and mobile devices, displaying refugee profiles available for connection" 
              className="w-full h-auto"
            />
          </div>
          <div className="flex flex-col justify-center h-full">
            {/* Section label */}
            <p className="text-sm font-semibold uppercase tracking-wide text-muted-foreground mb-2">
              The Platform
            </p>
            
            {/* Main heading */}
            <h2 className="font-sans font-bold text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight mb-8">
              Where old Canadians meet new ones.
            </h2>
            
            {/* Stats cards */}
            <div className="space-y-3">
              <div className="bg-muted/50 rounded-lg px-5 py-4 flex items-center gap-6">
                <span className="font-sans font-bold text-3xl text-foreground min-w-[100px]">20,000+</span>
                <span className="text-muted-foreground">Canadians and newcomers on the platform</span>
              </div>
              
              <div className="bg-muted/50 rounded-lg px-5 py-4 flex items-center gap-6">
                <span className="font-sans font-bold text-3xl text-foreground min-w-[100px]">100+</span>
                <span className="text-muted-foreground">Cities active across Canada</span>
              </div>
              
              <div className="bg-accent/10 rounded-lg px-5 py-4 flex items-center gap-6">
                <span className="font-sans font-bold text-3xl text-accent min-w-[100px]">1,500+</span>
                <span className="text-accent">Newcomers looking for help right now</span>
              </div>
            </div>
            
            {/* Charity info */}
            <div className="mt-4 bg-muted/50 rounded-lg px-5 py-4 flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
              <p className="text-sm text-foreground">
                <span className="font-semibold">Registered Canadian charity</span>
                <span className="text-muted-foreground"> · CRA #758177547 RR 0001</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
