import Link from "next/link"
import { Shield, Award } from "lucide-react"

function StarburstIcon() {
  return (
    <img 
      src="/images/maple-leaf-icon.svg" 
      alt="Maple leaf icon" 
      width={256} 
      height={256}
      className="object-contain"
    />
  )
}

function IdVerificationIcon() {
  return (
    <img 
      src="/images/id-verification-icon.svg" 
      alt="ID verification icon" 
      width={256} 
      height={256}
      className="object-contain"
    />
  )
}

function CharityBadgeIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="18" r="14" stroke="#2557F1" strokeWidth="2" fill="none"/>
      <path d="M16 32L12 46L24 40L36 46L32 32" stroke="#2557F1" strokeWidth="2" fill="none"/>
      <rect x="18" y="12" width="12" height="14" rx="2" stroke="#2557F1" strokeWidth="2" fill="none"/>
      <circle cx="24" cy="16" r="2" fill="#2557F1"/>
      <rect x="21" y="20" width="6" height="4" rx="1" fill="#2557F1"/>
    </svg>
  )
}

export function SectionCommunity() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-foreground mb-16 max-w-3xl mx-auto leading-tight">
          Haven is a community of Canadians helping new Canadians.
        </h2>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Card 1 - Users */}
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <StarburstIcon />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">
              20,000+ users in Canada
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Newcomers from 50+ countries, now in 500+ communities across Canada.
            </p>
          </div>

          {/* Card 2 - Verification */}
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <IdVerificationIcon />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">
              Connect with confidence.
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              We use ID verification so that you always know who you&apos;re connecting with.
            </p>
          </div>

          {/* Card 3 - Charity */}
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <CharityBadgeIcon />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">
              Registered Canadian charity
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Haven is registered with the CRA. Check out our details with{" "}
              <Link href="https://www.canadahelps.org/en/charities/haven-refugees/" className="text-primary underline hover:text-primary/80">
                CanadaHelps here
              </Link>.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
