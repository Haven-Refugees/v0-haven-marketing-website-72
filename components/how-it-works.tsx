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
    <svg width="100" height="90" viewBox="0 0 80 72" xmlns="http://www.w3.org/2000/svg">
      <path d="M18 24C12 23 7 28 7 36C7 44 12 51 19 52C26 54 31 49 30 42C29 35 25 25 18 24Z" fill="#B8AEE8" opacity="0.9"/>
      <path d="M62 24C68 23 73 28 73 36C73 44 68 51 61 52C54 54 49 49 50 42C51 35 55 25 62 24Z" fill="#E8836A" opacity="0.85"/>
      <circle cx="33" cy="36" r="2.5" fill="#2F54EF" opacity="0.5"/>
      <circle cx="40" cy="36" r="2.5" fill="#2F54EF"/>
      <circle cx="47" cy="36" r="2.5" fill="#2F54EF" opacity="0.5"/>
    </svg>
  )
}

function HelpingIllustration() {
  return (
    <svg width="100" height="90" viewBox="0 0 3045 1948" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2">
      <path fill="none" d="M3044.75 0v1947.2H0V0z"/>
      <path d="M1064.55 1907.32c-37.89 0-218.059-10.125-270.64-19.47-235.071-39.719-426.065-151.089-566.025-348.907-71.14-101.245-134.547-206.384-171.663-324.763-61.088-190.808-56.448-382.395-1.547-573.203 57.995-199.375 168.571-363.704 332.501-489.871C502.391 63.101 635.392 18.709 778.444 13.257c238.164-9.346 469.368 28.816 689.746 121.494 143.826 59.969 252.082 165.887 337.914 295.169 44.849 67.756 88.924 137.07 126.041 209.499 3.866 7.788 17.785 38.941 21.651 49.065 8.506 19.471 17.785 38.941 23.198 59.19 33.25 125.388 54.128 252.334 49.488 383.174-4.639 133.176-46.395 253.113-126.814 355.915-100.524 130.061-228.884 228.97-373.483 304.514-143.826 74.766-298.478 114.485-461.635 116.043" fill="#af77ff" fillRule="nonzero"/>
      <path d="M2072.14 1947.2c-37.89 0-218.059-10.124-270.64-19.47-235.071-39.719-426.065-151.089-566.025-348.906-71.14-101.245-134.547-206.384-171.663-324.763-61.088-190.808-56.448-382.395-1.547-573.204 57.995-199.375 168.571-363.703 332.501-489.87 115.216-88.006 248.216-132.398 391.268-137.849 238.164-9.346 469.368 28.815 689.746 121.494 143.826 59.968 252.082 165.886 337.914 295.168 44.849 67.757 88.924 137.071 126.041 209.5 3.866 7.788 9.279 12.461 16.238 17.134-3.866 11.682 1.547 21.806 5.413 31.931 8.506 19.47 17.785 38.94 23.198 59.189 33.25 125.388 54.128 252.334 49.488 383.174-4.639 133.176-46.395 253.113-126.814 355.916-100.524 130.061-228.884 228.969-373.483 304.514-143.826 74.766-298.478 114.485-461.635 116.042" fill="#ff8b75" fillRule="nonzero"/>
      <path d="M1475.62 137.899c140.136 60.486 246.229 164.912 330.489 292.018 44.896 67.725 89.387 136.835 126.041 209.499 3.916 7.764 17.547 39.035 21.651 49.065 8.045 19.665 17.805 38.935 23.198 59.19 33.375 125.355 54.087 252.332 49.488 383.174-4.681 133.175-46.696 252.878-126.814 355.915-100.903 129.767-228.807 229.118-373.483 304.514a1053 1053 0 0 1-43.335 21.313c-94.639-57.537-177.388-134.839-247.375-233.758-71.14-101.245-134.547-206.384-171.663-324.763-61.088-190.808-56.448-382.395-1.547-573.204 57.995-199.375 168.571-363.703 332.501-489.87 26.069-19.913 53.049-37.592 80.849-53.093" fill="#2557f1" fillRule="nonzero"/>
    </svg>
  )
}

export function HowItWorks() {
  return (
    <section id="how-it-works" className="pt-12 pb-12 bg-card">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-sans font-bold text-4xl md:text-5xl text-foreground mb-4">
            How it works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Sign up, get verified, start connecting. It takes less than 10 minutes.
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
