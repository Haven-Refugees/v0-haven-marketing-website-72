import { Globe, Monitor, Calendar } from "lucide-react"

const steps = [
  {
    icon: Globe,
    title: "Canadians and refugees connect directly",
    description: "Use the Haven platform to find and connect with someone who matches your interests and availability.",
  },
  {
    icon: Monitor,
    title: "You choose who you help and how",
    description: "Helping starts with a 30 minute video call. It's simple, flexible, and entirely on your terms.",
  },
  {
    icon: Calendar,
    title: "Continue at your own pace",
    description: "Keep helping whenever you can, online or in-person. Take a break if you get busy—no pressure!",
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-card">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-sans font-bold text-4xl md:text-5xl text-foreground mb-4">
            How it works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Getting started with Haven is simple and rewarding
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="relative bg-background p-8 rounded-2xl border border-border hover:shadow-lg transition-shadow"
            >
              <div className="absolute -top-4 left-8 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm">
                {index + 1}
              </div>
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                <step.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-sans font-bold text-xl text-foreground mb-3">
                {step.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
