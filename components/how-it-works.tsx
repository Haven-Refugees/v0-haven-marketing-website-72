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
    <svg width="100" height="90" viewBox="0 0 80 72" xmlns="http://www.w3.org/2000/svg">
      <path d="M32 16C20 14 8 22 8 36C8 50 20 62 34 62C48 66 60 54 58 40C56 26 46 18 32 16Z" fill="#B8AEE8" opacity="0.9"/>
      <rect x="42" y="2" width="32" height="22" rx="8" fill="#2F54EF"/>
      <path d="M46 24L40 32L54 24Z" fill="#2F54EF"/>
      <line x1="76" y1="4" x2="79" y2="2" stroke="#2F54EF" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="77" y1="10" x2="80" y2="10" stroke="#2F54EF" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="76" y1="16" x2="79" y2="18" stroke="#2F54EF" strokeWidth="1.5" strokeLinecap="round"/>
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
      {/* Blue maple leaf in center */}
      <path d="M40 15 L42 22 L48 18 L46 25 L54 24 L48 30 L56 32 L48 36 L52 42 L44 40 L44 48 L40 44 L36 48 L36 40 L28 42 L32 36 L24 32 L32 30 L26 24 L34 25 L32 18 L38 22 Z M38 48 L38 60 L40 62 L42 60 L42 48 Z" fill="#3B5CE9" />
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
