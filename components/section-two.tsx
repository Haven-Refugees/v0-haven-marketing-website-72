export function SectionTwo() {
  return (
    <section className="pt-8 pb-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img 
              src="/images/platform-mockup.png" 
              alt="Haven platform shown on laptop and mobile devices, displaying refugee profiles available for connection" 
              className="w-full h-auto"
            />
          </div>
          <div className="flex flex-col justify-center h-full">
            <h2 className="font-sans font-bold text-2xl md:text-3xl lg:text-4xl text-foreground leading-tight text-balance mb-8">
              Canada&apos;s fastest growing community of refugees and supporters
            </h2>
            
            <div className="space-y-4">
              <div className="flex items-center gap-6 py-4">
                <span className="font-sans font-bold text-4xl md:text-5xl text-foreground min-w-[140px]">20,000+</span>
                <span className="text-muted-foreground text-lg">Canadians and newcomers on the platform</span>
              </div>
              
              <div className="flex items-center gap-6 py-4">
                <span className="font-sans font-bold text-4xl md:text-5xl text-foreground min-w-[140px]">40+</span>
                <span className="text-muted-foreground text-lg">Cities active across Canada</span>
              </div>
              
              <div className="flex items-center gap-6 py-4 bg-accent/10 rounded-lg px-4 -mx-4">
                <span className="font-sans font-bold text-4xl md:text-5xl text-accent min-w-[140px]">1,476</span>
                <span className="text-accent text-lg">Newcomers waiting for a connection right now</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
