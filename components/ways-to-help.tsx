import { MessageCircle, Briefcase, Users } from "lucide-react"

const ways = [
  {
    icon: MessageCircle,
    title: "Language",
    description: "Help refugees build confidence in English or French through conversation practice. No teaching experience required—just patience and conversation.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Briefcase,
    title: "Network",
    description: "Help refugees explore the Canadian job market by sharing your own professional experience. Your insights can open doors.",
    color: "bg-accent/10 text-accent",
  },
  {
    icon: Users,
    title: "Community",
    description: "Welcome refugees in your city and help them build a local support network. Sometimes a friendly face makes all the difference.",
    color: "bg-primary/10 text-primary",
  },
]

export function WaysToHelp() {
  return (
    <section id="ways-to-help" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-4">
            Ways to help
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose how you want to make a difference in someone&apos;s life
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {ways.map((way, index) => (
            <div 
              key={index}
              className="group bg-card p-8 rounded-2xl border border-border hover:border-primary/50 transition-all hover:shadow-xl"
            >
              <div className={`w-16 h-16 ${way.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <way.icon className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-2xl text-foreground mb-4">
                {way.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {way.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
