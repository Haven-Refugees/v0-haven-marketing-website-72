import { BookOpen, Users, FileText } from "lucide-react"

const features = [
  {
    icon: BookOpen,
    title: "Classes with teachers",
    description: "Individual and small group online classes with professional ESL teachers.",
  },
  {
    icon: Users,
    title: "Conversations with Canadians",
    description: "Weekly video calls with Canadian volunteers to practice your language and build real confidence.",
  },
  {
    icon: FileText,
    title: "Personalized homework",
    description: "Materials and exercises from your teacher to keep you improving between sessions.",
  },
]

export function HLPStructure() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-[#AF75FF] text-sm font-semibold uppercase tracking-wider mb-4">
          HAVEN LANGUAGE PROGRAM
        </p>
        <h2 className="font-sans font-bold text-3xl md:text-4xl text-[#26215C] mb-4">
          The fastest way to improve your English in Canada.
        </h2>
        <p className="text-[#26215C]/70 text-lg max-w-3xl mx-auto mb-16">
          An online, 20-week program combining classes, conversation practice and homework. Classes range from CLB 1 to 8.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white border border-[#E0D9F0] rounded-2xl p-8 text-center"
            >
              <div className="w-16 h-16 bg-[#F0EDF9] rounded-full flex items-center justify-center mx-auto mb-6">
                <feature.icon className="w-8 h-8 text-[#AF75FF]" />
              </div>
              <h3 className="font-sans font-bold text-xl text-[#26215C] mb-3">
                {feature.title}
              </h3>
              <p className="text-[#26215C]/70 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
