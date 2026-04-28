import Link from "next/link"
import { Button } from "@/components/ui/button"

const checkpoints = [
  {
    title: "2 hours of classes",
    description: "With your professional teacher, online.",
  },
  {
    title: "2 hours of conversation practice",
    description: "With your Canadian volunteer.",
  },
  {
    title: "2 hours of homework",
    description: "Personalized materials from your teacher.",
  },
]

export function HLPCommitment() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-sans font-bold text-3xl md:text-4xl text-[#26215C] mb-4">
            Give us 20 weeks. We&apos;ll change your English.
          </h2>
          <p className="text-[#26215C]/70 text-lg max-w-3xl mx-auto">
            Most Haven students see a measurable improvement in their English — at least one CLB level in Speaking or Listening — after completing the 20-week program.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
          {/* Left - Checkpoints */}
          <div>
            <h3 className="font-sans font-bold text-xl text-[#26215C] mb-8">
              Here&apos;s what 20 weeks looks like:
            </h3>
            <div className="space-y-6">
              {checkpoints.map((checkpoint, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-8 h-8 bg-[#AF75FF] rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-white rounded-full" />
                  </div>
                  <div>
                    <p className="font-sans font-bold text-[#26215C]">
                      {checkpoint.title}
                    </p>
                    <p className="text-[#26215C]/70">
                      {checkpoint.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-[#AF75FF] font-semibold mt-8">
              That&apos;s 6 hours a week. Less than an hour a day.
            </p>
          </div>

          {/* Right - Pricing Card */}
          <div className="bg-[#F7F6FE] rounded-2xl p-8">
            <p className="text-4xl md:text-5xl font-bold text-[#26215C] mb-2">
              $2.50–$7.50
            </p>
            <p className="text-[#26215C]/70 text-lg mb-4">per class</p>
            <p className="text-[#26215C] mb-6">
              That&apos;s $5–$15 per week depending on your situation.
            </p>
            <p className="text-[#26215C]/60 text-sm leading-relaxed">
              We charge a small fee to ensure commitment — our program works best when students show up. If you can&apos;t commit right now, Haven Connect is free and always available.
            </p>
          </div>
        </div>

        <div className="text-center mt-12">
          <Button 
            asChild 
            size="lg"
            className="bg-[#AF75FF] hover:bg-[#AF75FF]/90 text-white px-8 py-6 text-base"
          >
            <Link href="https://app.findhaven.org">Apply for the program</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
