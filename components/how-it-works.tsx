"use client"

import { useTranslation } from "@/lib/i18n"

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
    title: "Continue to meet",
    description: "Some matches meet once. Others meet for years. Match and meet for as long as you want.",
    illustration: "helping",
  },
]

function ProfileIllustration() {
  return (
    <img 
      src="/images/meeting-icon.png" 
      alt="Meeting illustration" 
      width={160} 
      height={90}
      className="object-contain"
    />
  )
}

function MatchIllustration() {
  return (
    <svg width="100" height="90" viewBox="0 0 4750 3843" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2">
      <path fill="none" d="M4749.12 0v3842.64H0V0z"/>
      <path d="M3009.46 3736.81c109.119 13.156 442.54 1.25 520.733 0 213.874-3.421 916.738-42.387 1078.19-51.161 21.911-1.19 71.418-25.154 15.508-47.105-233.99-91.87-358.405-165.219-404.833-246.577-52.162-91.406-4.308-176.188 32.382-227.675 104.193-147.23 197.061-300.123 251.424-472.269 89.47-277.473 82.675-556.077 2.265-833.55-84.941-289.93-246.894-528.896-486.993-712.367-168.748-127.977-363.545-192.532-573.065-200.46-348.822-13.59-687.452 41.904-1010.23 176.676-210.652 87.206-369.208 241.231-494.92 429.233-65.687 98.531-130.242 199.327-184.604 304.653-5.662 11.326-13.59 18.121-23.783 24.916 5.663 16.988-2.265 31.711-7.928 46.434-12.458 28.314-26.048 56.627-33.976 86.073-48.699 182.339-79.278 366.943-72.482 557.21 6.795 193.664 67.952 368.075 185.736 517.571 147.23 189.134 335.232 332.967 547.017 442.823 210.652 108.724 422.293 176.968 659.551 205.575Z" fill="#ff8b75" fillRule="nonzero"/>
      <path d="M1739.66 2842.12c-109.119 13.157-442.54 1.251-520.733 0-213.874-3.421-916.738-42.386-1078.19-51.16-21.911-1.191-71.418-25.154-15.508-47.105 233.99-91.87 358.405-165.22 404.833-246.578 52.162-91.406 4.308-176.188-32.382-227.674-104.193-147.231-197.061-300.124-251.424-472.27-89.47-277.472-82.675-556.077-2.265-833.549 84.941-289.93 246.894-528.896 486.993-712.368 168.748-127.977 363.545-192.532 573.065-200.459 348.822-13.591 687.452 41.904 1010.23 176.676 210.652 87.206 369.208 241.231 494.92 429.233 65.687 98.531 130.242 199.327 184.604 304.653 5.662 11.325 13.59 18.121 23.783 24.916-5.663 16.988 2.265 31.711 7.928 46.434 12.458 28.313 26.048 56.627 33.976 86.073 48.699 182.339 79.278 366.943 72.482 557.21-6.795 193.664-67.952 368.075-185.736 517.57-147.23 189.135-335.232 332.967-547.017 442.824-210.652 108.723-422.293 176.968-659.551 205.574Z" fill="#af77ff" fillRule="nonzero"/>
    </svg>
  )
}

function HelpingIllustration() {
  return (
    <svg width="100" height="90" viewBox="0 0 3045 1948" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2">
      <path fill="none" d="M3044.75 0v1947.2H0V0z"/>
      <path d="M1064.55 1907.32c-37.89 0-218.059-10.125-270.64-19.47-235.071-39.719-426.065-151.089-566.025-348.907-71.14-101.245-134.547-206.384-171.663-324.763-61.088-190.808-56.448-382.395-1.547-573.203 57.995-199.375 168.571-363.704 332.501-489.871C502.391 63.101 635.392 18.709 778.444 13.257c238.164-9.346 469.368 28.816 689.746 121.494 143.826 59.969 252.082 165.887 337.914 295.169 44.849 67.756 88.924 137.07 126.041 209.499 3.866 7.788 17.785 38.941 21.651 49.065 8.506 19.471 17.785 38.941 23.198 59.19 33.25 125.388 54.128 252.334 49.488 383.174-4.639 133.176-46.395 253.113-126.814 355.915-100.524 130.061-228.884 228.97-373.483 304.514-143.826 74.766-298.478 114.485-461.635 116.043" fill="#af77ff" fillRule="nonzero"/>
      <path d="M2072.14 1947.2c-37.89 0-218.059-10.124-270.64-19.47-235.071-39.719-426.065-151.089-566.025-348.906-71.14-101.245-134.547-206.384-171.663-324.763-61.088-190.808-56.448-382.395-1.547-573.204 57.995-199.375 168.571-363.703 332.501-489.87 115.216-88.006 248.216-132.398 391.268-137.849 238.164-9.346 469.368 28.815 689.746 121.494 143.826 59.968 252.082 165.886 337.914 295.168 44.849 67.757 88.924 137.071 126.041 209.5 3.866 7.788 9.279 12.461 16.238 17.134-3.866 11.682 1.547 21.806 5.413 31.931 8.506 19.47 17.785 38.94 23.198 59.189 33.25 125.388 54.128 252.334 49.488 383.174-4.639 133.176-46.395 253.113-126.814 355.916-100.524 130.061-228.884 228.969-373.483 304.514-143.826 74.766-298.478 114.485-461.635 116.042" fill="#ff8b75" fillRule="nonzero"/>
    </svg>
  )
}

export function HowItWorks() {
  const { t } = useTranslation()

  const illustrations: Record<string, () => JSX.Element> = {
    profile: ProfileIllustration,
    match: MatchIllustration,
    helping: HelpingIllustration,
  }

  return (
    <section id="how-it-works" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-sans font-bold text-4xl md:text-5xl text-foreground mb-4">
            {t("How it works")}
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => {
            const Illustration = illustrations[step.illustration]
            return (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center mb-6 h-[100px]">
                  {Illustration && <Illustration />}
                </div>
                <h3 className="font-sans font-bold text-2xl text-foreground mb-3">
                  {t(step.title)}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t(step.description)}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
