"use client"

import Link from "next/link"
import Image from "next/image"
import { useTranslation } from "@/lib/i18n"

const teamMembers = [
  {
    name: "Victor Lal",
    initials: "VL",
    role: "Founder, Executive Director",
    linkedin: "https://www.linkedin.com/in/victorlal/",
    image: "/images/team/victor-lal.jpg",
  },
  {
    name: "Alexis Buisson",
    initials: "AB",
    role: "Senior Backend Engineer",
    linkedin: "https://www.linkedin.com/in/alexis-buisson-84b57213b/",
    image: "/images/team/alexis-buisson.jpg",
  },
  {
    name: "Catherine Goncalves",
    initials: "CG",
    role: "Growth Lead",
    linkedin: "https://www.linkedin.com/in/catherine-goncalves/",
  },
  {
    name: "Gagan Sandhu",
    initials: "GS",
    role: "Content Creator",
    linkedin: "https://www.linkedin.com/in/gagan-sandhu-9603792b8/",
  },
  {
    name: "Julian Ilson",
    initials: "JI",
    role: "Head of Product",
    linkedin: "https://www.linkedin.com/in/julianilson/",
  },
  {
    name: "Sofi Galuza",
    initials: "SG",
    role: "Language Program Coordinator",
    linkedin: "https://www.linkedin.com/in/sofi-galuza/",
  },
]

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

export function CoreTeam() {
  const { t } = useTranslation()

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-[900px] mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-12">
          {teamMembers.map((member) => (
            <div key={member.name} className="flex flex-col items-center text-center">
              {member.image ? (
                <div className="w-[120px] h-[120px] rounded-full overflow-hidden mb-4">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={120}
                    height={120}
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : (
                <div className="w-[120px] h-[120px] rounded-full bg-[#D4CCF9] flex items-center justify-center mb-4">
                  <span className="text-[#6B4EFF] text-3xl font-medium">
                    {member.initials}
                  </span>
                </div>
              )}
              <h3 className="text-base font-medium text-foreground mb-1">
                {member.name}
              </h3>
              <p className="text-sm text-muted-foreground mb-3">
                {t(member.role)}
              </p>
              <Link
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-[26px] h-[26px] rounded-full bg-[#F5F5F5] flex items-center justify-center hover:bg-[#EBEBEB] transition-colors"
                aria-label={`${member.name}'s LinkedIn`}
              >
                <LinkedInIcon className="w-3 h-3 text-[#666666]" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
