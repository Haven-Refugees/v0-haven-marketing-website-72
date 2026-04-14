const steps = [
  {
    title: "Create your profile",
    description: "Tell us who you are and how you want to give or receive help. Takes less than 10 minutes.",
    illustration: "profile",
  },
  {
    title: "Find your match",
    description: "Browse verified profiles and reach out. Your first conversation is just 30 minutes on a video call.",
    illustration: "match",
  },
  {
    title: "Keep helping",
    description: "Continue meeting for as long as you want. An old Canadian helps a new Canadian — that's Haven.",
    illustration: "helping",
  },
]

function ProfileIllustration() {
  return (
    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Irregular purple blob */}
      <path d="M5 50 C0 35, 8 20, 25 18 C35 16, 45 22, 50 35 C55 48, 52 62, 40 70 C28 78, 10 68, 5 50 Z" fill="#B8A9E8" />
      {/* Blue speech bubble - rounded rectangle */}
      <rect x="42" y="8" width="32" height="24" rx="8" fill="#3B5CE9" />
      {/* Speech bubble tail */}
      <path d="M48 32 L42 40 L50 32 Z" fill="#3B5CE9" />
      {/* Accent lines */}
      <line x1="76" y1="12" x2="80" y2="8" stroke="#3B5CE9" strokeWidth="2" strokeLinecap="round" />
      <line x1="78" y1="18" x2="82" y2="18" stroke="#3B5CE9" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

function MatchIllustration() {
  return (
    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Left purple egg/blob - tilted */}
      <ellipse cx="18" cy="40" rx="14" ry="22" transform="rotate(-10 18 40)" fill="#B8A9E8" />
      {/* Right coral egg/blob - tilted */}
      <ellipse cx="62" cy="40" rx="14" ry="20" transform="rotate(10 62 40)" fill="#E8998D" />
      {/* Three connecting dots in the middle */}
      <circle cx="34" cy="40" r="4" fill="#3B5CE9" />
      <circle cx="44" cy="40" r="3" fill="#3B5CE9" />
      <circle cx="52" cy="40" r="2" fill="#3B5CE9" />
    </svg>
  )
}

function HelpingIllustration() {
  return (
    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Left purple egg/oval */}
      <ellipse cx="25" cy="40" rx="22" ry="28" fill="#B8A9E8" />
      {/* Right coral egg/oval */}
      <ellipse cx="55" cy="40" rx="22" ry="28" fill="#E8998D" />
      {/* Blue 8-pointed starburst in center */}
      <path d="M40 18 L43 32 L52 22 L46 34 L60 34 L48 40 L60 46 L46 46 L52 58 L43 48 L40 62 L37 48 L28 58 L34 46 L20 46 L32 40 L20 34 L34 34 L28 22 L37 32 Z" fill="#3B5CE9" />
      {/* Small rectangular notch at bottom of star */}
      <rect x="37" y="52" width="6" height="4" fill="#F5F3EE" />
    </svg>
  )
}

export function HowItWorks() {
  return (
    <section id="how-it-works" className="pt-12 pb-24 bg-card">
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
              className="bg-[#F5F3EE] p-8 rounded-2xl"
            >
              <div className="mb-6">
                {step.illustration === "profile" && <ProfileIllustration />}
                {step.illustration === "match" && <MatchIllustration />}
                {step.illustration === "helping" && <HelpingIllustration />}
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
