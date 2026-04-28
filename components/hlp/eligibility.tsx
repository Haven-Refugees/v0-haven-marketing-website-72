import { Check } from "lucide-react"

const criteria = [
  "In Canada",
  "Fleeing conflict",
  "18 or older",
]

export function HLPEligibility() {
  return (
    <section className="py-20 bg-[#F7F6FE]">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="font-sans font-bold text-3xl md:text-4xl text-[#26215C] mb-4">
          Are you eligible?
        </h2>
        <p className="text-[#26215C]/70 text-lg mb-12">
          Haven is for newcomers fleeing conflict who are living in Canada.
        </p>

        <div className="flex flex-wrap justify-center gap-8 mb-12">
          {criteria.map((criterion, index) => (
            <div key={index} className="flex flex-col items-center gap-3">
              <div className="w-16 h-16 bg-[#AF75FF] rounded-full flex items-center justify-center">
                <Check className="w-8 h-8 text-white" strokeWidth={3} />
              </div>
              <span className="font-sans font-semibold text-[#26215C]">
                {criterion}
              </span>
            </div>
          ))}
        </div>

        <p className="text-[#26215C]/70 leading-relaxed mb-6">
          This includes refugees, refugee claimants, arrivals under Canadian humanitarian programs (such as CUAET holders and evacuees from Gaza), and newcomers from other conflict-affected countries.
        </p>
        <p className="text-[#26215C]/60 italic">
          If you&apos;re not sure if you qualify, try signing up — we&apos;ll help you figure it out.
        </p>
      </div>
    </section>
  )
}
