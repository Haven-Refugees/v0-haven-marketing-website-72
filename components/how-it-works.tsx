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
      <circle cx="35" cy="45" r="28" fill="#C4B5FD" />
      <rect x="38" y="18" width="28" height="20" rx="10" fill="#3B82F6" />
      <circle cx="52" cy="28" r="3" fill="white" />
    </svg>
  )
}

function MatchIllustration() {
  return (
    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="25" cy="45" rx="18" ry="28" fill="#C4B5FD" />
      <ellipse cx="55" cy="45" rx="18" ry="28" fill="#F9A8A8" />
      <circle cx="40" cy="30" r="3" fill="#3B82F6" />
      <circle cx="40" cy="40" r="2" fill="#3B82F6" />
      <circle cx="40" cy="48" r="1.5" fill="#3B82F6" />
    </svg>
  )
}

function HelpingIllustration() {
  return (
    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="30" cy="45" r="22" fill="#C4B5FD" />
      <circle cx="50" cy="45" r="22" fill="#F9A8A8" />
      <polygon points="40,20 43,30 53,30 45,37 48,47 40,41 32,47 35,37 27,30 37,30" fill="#3B82F6" />
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
