import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calendar, Users, BookOpen, GraduationCap, MessageCircle, ClipboardList } from "lucide-react"

const programStructure = [
  {
    icon: GraduationCap,
    title: "Classes with teachers",
    description: "Individual and small group online classes with professional teachers.",
  },
  {
    icon: MessageCircle,
    title: "Conversations with Canadians",
    description: "1-on-1 video calls with Canadian volunteers to practice your language and build your confidence.",
  },
  {
    icon: ClipboardList,
    title: "Personalized homework",
    description: "Materials from your teacher to keep you learning between classes and conversations.",
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

const commitmentStats = [
  {
    value: "20",
    label: "weeks in the program",
  },
  {
    value: "6+",
    label: "hours per week minimum",
  },
  {
    value: "$5–$15",
    sublabel: "per week",
    note: "That's just $2.50–$7.50 per class, depending on your situation.",
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
            A 20-week program combining classes with professional teachers, conversation practice with Canadian volunteers, and personalized homework materials. Classes range from CLB 1 to 8.
          </p>
        </div>

        {/* Program Structure */}
        <div className="grid md:grid-cols-3 gap-4 mb-16">
          {programStructure.map((item, index) => (
            <div 
              key={index}
              className="bg-muted/50 border border-border rounded-2xl p-7"
            >
              <div className="w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center mb-4">
                <item.icon className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="font-sans font-medium text-foreground mb-2">{item.title}</h3>
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

        {/* Commitment Section */}
        <h3 className="font-sans font-bold text-2xl md:text-3xl text-foreground mb-7">
          Haven works because our students are committed.
        </h3>
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          {commitmentStats.map((stat, index) => (
            <div 
              key={index}
              className="bg-muted/50 border border-border rounded-xl p-5"
            >
              <p className="font-serif text-3xl text-secondary mb-1">
                {stat.value}
                {stat.sublabel && <span className="text-xl ml-1">{stat.sublabel}</span>}
              </p>
              <p className="text-muted-foreground text-sm">{stat.label}</p>
              {stat.note && (
                <p className="text-muted-foreground/60 text-xs mt-2 leading-relaxed">{stat.note}</p>
              )}
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="bg-muted/50 border-l-4 border-secondary rounded-lg p-5 mb-8">
          <p className="text-muted-foreground text-sm leading-relaxed">
            Haven works because its members show up. Please only apply if you can commit to the full program — this is the minimum needed to make real progress in English.
          </p>
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
