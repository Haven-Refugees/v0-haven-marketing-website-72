import Link from "next/link"

export function ChooseYourPath() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="font-sans font-extrabold text-3xl md:text-4xl text-foreground mb-3">
          Choose your path
        </h2>
        <p className="font-sans font-medium text-muted-foreground text-lg mb-12">
          Both programs are free or nearly free. Start with what feels right.
        </p>

        <div className="grid md:grid-cols-2 gap-5 max-w-3xl mx-auto">
          {/* Haven Language Program Card */}
          <Link 
            href="#hlp" 
            className="bg-foreground rounded-2xl p-8 text-left group hover:-translate-y-1 transition-transform"
          >
            <p className="text-primary/60 text-xs font-medium uppercase tracking-wider mb-3">
              Haven Language Program
            </p>
            <h3 className="font-sans font-extrabold text-2xl text-background mb-3">
              Conversations and classes
            </h3>
            <p className="text-background/60 text-sm leading-relaxed mb-5">
              Structured classes with professional teachers, plus weekly conversations with Canadian volunteers. The fastest way to improve your English in Canada.
            </p>
            <span className="inline-block bg-primary/20 text-primary/80 text-xs font-medium px-3 py-1 rounded-full mb-4">
              From $2.50/class · 20 weeks
            </span>
            <span className="block text-primary/70 text-sm font-medium">
              Learn more &darr;
            </span>
          </Link>

          {/* Haven Connect Card */}
          <Link 
            href="#connect" 
            className="bg-primary/5 border border-primary/10 rounded-2xl p-8 text-left group hover:-translate-y-1 transition-transform"
          >
            <p className="text-primary text-xs font-medium uppercase tracking-wider mb-3">
              Haven Connect
            </p>
            <h3 className="font-sans font-extrabold text-2xl text-foreground mb-3">
              Just conversations
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-5">
              Meet Canadian volunteers. Practice your English or French, find local and professional connections, and get help rebuilding your life in Canada.
            </p>
            <span className="inline-block bg-primary/10 text-primary text-xs font-medium px-3 py-1 rounded-full mb-4">
              Free · Start today
            </span>
            <span className="block text-primary text-sm font-medium">
              Learn more &darr;
            </span>
          </Link>
        </div>
      </div>
    </section>
  )
}
