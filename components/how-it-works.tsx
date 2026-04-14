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
      {/* Top purple oval */}
      <ellipse cx="28" cy="22" rx="16" ry="20" fill="#B8A9E8" />
      {/* Bottom coral oval */}
      <ellipse cx="52" cy="58" rx="16" ry="20" fill="#E8998D" />
      {/* Connecting dots */}
      <circle cx="38" cy="36" r="3" fill="#3B5CE9" />
      <circle cx="42" cy="44" r="2.5" fill="#3B5CE9" />
    </svg>
  )
}

function HelpingIllustration() {
  return (
    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Purple circle - left */}
      <circle cx="28" cy="45" r="24" fill="#B8A9E8" />
      {/* Coral circle - right */}
      <circle cx="52" cy="45" r="24" fill="#E8998D" />
      {/* Blue star burst in center */}
      <path d="M40 30 L42 40 L52 38 L44 44 L52 52 L42 48 L40 58 L38 48 L28 52 L36 44 L28 38 L38 40 Z" fill="#3B5CE9" />
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
