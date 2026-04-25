import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Calendar, Users, BookOpen } from "lucide-react"

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

const specialFeatures = [
  {
    icon: Calendar,
    title: "Flexible schedule",
    description: "Classes run evenings and weekends. Haven fits around your life, not the other way around.",
  },
  {
    icon: Users,
    title: "Personalized learning",
    description: "Small groups mean your teacher knows your level and your goals. You're not just a student in a class of 30.",
  },
  {
    icon: BookOpen,
    title: "Practice with Canadians",
    description: "Every week you meet a real Canadian volunteer. No textbook can give you that.",
  },
]



export function HavenLanguageProgram() {
  return (
    <section id="hlp" className="py-20 bg-background">
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

        {/* What Makes Haven Special */}
        <div className="text-center mb-16">
          <h3 className="font-sans font-bold text-2xl md:text-3xl text-foreground mb-10">
            What makes Haven special?
          </h3>
          <div className="grid md:grid-cols-3 gap-10">
            {specialFeatures.map((feature, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-20 h-20 bg-secondary/10 rounded-xl flex items-center justify-center mb-5">
                  <feature.icon className="w-8 h-8 text-secondary" />
                </div>
                <h4 className="font-sans font-medium text-foreground mb-2">{feature.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed max-w-[220px]">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-wrap items-center gap-4">
          <Button size="lg" className="text-base px-7" asChild>
            <Link href="/hlp">Apply for the program</Link>
          </Button>
          <button className="text-muted-foreground text-sm underline hover:text-foreground transition-colors">
            Learn more about the program details
          </button>
        </div>
      </div>
    </section>
  )
}
