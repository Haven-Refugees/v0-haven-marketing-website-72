export function SectionTwo() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img 
              src="/images/platform-mockup.png" 
              alt="Haven platform shown on laptop and mobile devices, displaying refugee profiles available for connection" 
              className="w-full h-auto"
            />
          </div>
          <div>
            <h2 className="font-sans font-bold text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight text-balance">
              Join our community of 20,000+ Canadians and refugees.
            </h2>
          </div>
        </div>
      </div>
    </section>
  )
}
