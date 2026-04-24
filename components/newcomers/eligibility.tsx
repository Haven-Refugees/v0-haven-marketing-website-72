import { Check } from "lucide-react"

const eligibilityChecks = [
  { label: "In Canada" },
  { label: "Fleeing conflict" },
  { label: "18 or older" },
]

export function Eligibility() {
  return (
    <section className="py-20 bg-foreground">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="font-sans font-extrabold text-3xl md:text-4xl text-background mb-3">
          Are you eligible?
        </h2>
        <p className="font-sans font-medium text-background/60 text-lg mb-12">
          Haven is for newcomers fleeing conflict who are living in Canada.
        </p>

        {/* Eligibility Checks */}
        <div className="flex justify-center gap-12 mb-10">
          {eligibilityChecks.map((check) => (
            <div key={check.label} className="flex flex-col items-center gap-3">
              <div className="w-14 h-14 bg-primary/30 rounded-full flex items-center justify-center">
                <Check className="w-6 h-6 text-primary/70" />
              </div>
              <p className="text-background font-medium">{check.label}</p>
            </div>
          ))}
        </div>

        {/* Details */}
        <p className="text-background/60 text-sm leading-relaxed max-w-2xl mx-auto mb-4">
          This includes refugees, refugee claimants, arrivals under Canadian humanitarian programs (such as CUAET holders and evacuees from Gaza), and newcomers from other conflict-affected countries.
        </p>
        <p className="text-primary/60 text-sm italic">
          If you&apos;re not sure if you qualify, try signing up — we&apos;ll help you figure it out.
        </p>
      </div>
    </section>
  )
}
