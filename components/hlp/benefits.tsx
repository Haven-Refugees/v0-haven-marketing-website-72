import { Clock, User, MessageCircle } from "lucide-react"

const benefits = [
  {
    icon: Clock,
    title: "Flexible schedule",
    description: "Classes run evenings and weekends to fit around your life.",
  },
  {
    icon: User,
    title: "Personalized learning",
    description: "Classes of 1 to 4 students — your teacher knows your goals.",
  },
  {
    icon: MessageCircle,
    title: "English for life in Canada",
    description: "Learn practical English through classes and real conversations with Canadians.",
  },
]

export function HLPBenefits() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="font-sans font-bold text-3xl md:text-4xl text-[#26215C] mb-16">
          We designed Haven to make learning as easy as possible.
        </h2>

        <div className="grid md:grid-cols-3 gap-12">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-[#F0EDF9] rounded-full flex items-center justify-center mx-auto mb-6">
                <benefit.icon className="w-8 h-8 text-[#AF75FF]" />
              </div>
              <h3 className="font-sans font-bold text-xl text-[#26215C] mb-3">
                {benefit.title}
              </h3>
              <p className="text-[#26215C]/70 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
