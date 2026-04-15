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
          <div className="flex flex-col justify-center h-full pt-12">
            <div className="space-y-4">
              <p className="font-sans font-bold text-xl md:text-2xl text-foreground">
                Over 20,000 Canadians and refugees on our platform.
              </p>
              
              <p className="font-sans font-bold text-xl md:text-2xl text-accent">
                More than 1,500 refugees looking for help now.
              </p>
              
              <p className="font-sans text-lg text-muted-foreground">
                Haven is a registered Canadian charity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
