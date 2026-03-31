export function SupportersSection() {
  return (
    <section className="py-20 bg-card border-y border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
            Our supporters
          </h2>
          <p className="text-lg text-muted-foreground">
            As a registered Canadian charity, we are funded by Canadians and foundations.
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-12">
          {[1, 2, 3, 4].map((i) => (
            <div 
              key={i}
              className="w-32 h-12 bg-muted rounded-lg flex items-center justify-center text-muted-foreground font-medium"
            >
              Partner {i}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
