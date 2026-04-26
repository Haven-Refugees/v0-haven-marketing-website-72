import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"


const programStructure = [
  {
    image: "/images/icon-classes.png",
    title: "Classes with teachers",
    description: "Individual and small group online classes with professional teachers.",
    scale: "scale-100",
  },
  {
    image: "/images/icon-conversations.png",
    title: "Conversations with Canadians",
    description: "Video calls with Canadian volunteers to practice your language and build confidence.",
    scale: "scale-100",
  },
  {
    image: "/images/icon-homework.png",
    title: "Personalized homework",
    description: "Exercises and materials to keep you learning between classes and conversations.",
    scale: "scale-75",
  },
]





export function HavenLanguageProgram() {
  return (
    <section id="hlp" className="pt-10 pb-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-secondary text-[20px] font-medium uppercase tracking-wider mb-4">
            Haven Language Program
          </p>
          <h2 className="font-sans font-bold text-3xl md:text-4xl text-foreground mb-4">
            The fastest way to improve your English in Canada.
          </h2>
          <p className="font-sans font-medium text-muted-foreground text-lg leading-relaxed max-w-3xl mx-auto">
            An online, 20-week program combining classes, conversation practice and homework. Classes range from CLB 1 to 8.
          </p>
        </div>

        {/* Program Structure */}
        <div className="grid md:grid-cols-3 gap-3 mb-16">
          {programStructure.map((item, index) => (
            <div 
              key={index}
              className="bg-background border border-border rounded-xl px-2 pb-3 flex flex-col items-center text-center overflow-hidden"
            >
              <div className="w-[432px] h-60 relative -mt-10 -mb-10">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className={`object-contain object-center ${item.scale}`}
                />
              </div>
              <h3 className="font-sans font-medium text-foreground mb-1">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Why Haven CTA Cards */}
        <div className="flex flex-col gap-4">
          {/* Top Card - Features */}
          <div className="bg-secondary/10 rounded-3xl p-8 md:p-10">
            <h3 className="font-sans font-bold text-2xl md:text-3xl text-foreground leading-snug mb-8 text-center">
              We designed Haven to make learning as easy as possible.
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex items-start gap-3">
                <div className="w-7 h-7 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="font-sans font-semibold text-foreground">Flexible schedule</p>
                  <p className="text-muted-foreground text-sm">Study anytime, including evenings and weekends.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-7 h-7 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="font-sans font-semibold text-foreground">Personalized learning</p>
                  <p className="text-muted-foreground text-sm">Classes of 1 to 4 students, not 30.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-7 h-7 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="font-sans font-semibold text-foreground">Real-world communication</p>
                  <p className="text-muted-foreground text-sm">Learn by actually speaking with Canadians, not just in the classroom.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Card - CTA */}
          <div className="bg-[#2457F1] rounded-3xl py-6 px-8 flex flex-col justify-center items-center text-center">
            <h3 className="font-sans font-bold text-2xl md:text-3xl text-white leading-snug mb-4">
              Start improving your English today.
            </h3>
            <div className="flex flex-col items-center">
              <Button size="lg" className="text-base py-6 w-full bg-white text-[#2457F1] hover:bg-white/90" asChild>
                <Link href="https://app.findhaven.org">Join Haven now</Link>
              </Button>
              <Link 
                href="#hlp-details" 
                className="text-white text-sm underline hover:text-white/80 transition-colors mt-3"
              >
                Learn more about the program
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
