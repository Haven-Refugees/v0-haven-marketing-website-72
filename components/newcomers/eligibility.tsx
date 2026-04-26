import { Check } from "lucide-react"

const eligibilityChecks = [
  { label: "In Canada" },
  { label: "Fleeing conflict" },
  { label: "18 or older" },
]

export function Eligibility() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="font-sans font-bold text-3xl md:text-4xl text-foreground mb-3">
          Are you eligible?
        </h2>
        <p className="font-sans font-medium text-muted-foreground text-lg mb-12">
          Haven is for newcomers fleeing conflict who are living in Canada.
        </p>

        {/* Eligibility Checks */}
        <div className="flex justify-center gap-12 mb-10">
          {eligibilityChecks.map((check) => (
            <div key={check.label} className="flex flex-col items-center gap-3">
              <div className="w-14 h-14 bg-secondary rounded-full flex items-center justify-center">
                <Check className="w-6 h-6 text-secondary-foreground" />
              </div>
              <p className="text-foreground font-medium">{check.label}</p>
            </div>
          ))}
        </div>

        {/* Details */}
        <p className="text-muted-foreground text-sm leading-relaxed max-w-2xl mx-auto mb-4">
          This includes refugees, refugee claimants, arrivals under Canadian humanitarian programs (such as CUAET holders and evacuees from Gaza), and newcomers from other conflict-affected countries.
        </p>
        <p className="text-muted-foreground text-sm italic">
          If you&apos;re not sure if you qualify, try signing up — we&apos;ll help you figure it out.
        </p>
      </div>
    </section>
  )
}
