"use client"

import Image from "next/image"
import { User } from "lucide-react"
import { useTranslation } from "@/lib/i18n"

const testimonials = [
  {
    name: "Iryna",
    location: "Ukraine",
    type: "Newcomer",
    variant: "newcomer" as const,
    quote: "I now talk with four Canadians on Haven. I'm so grateful to them for the opportunity to talk and for their patience with my English!",
    image: "/images/iryna.jpg",
  },
  {
    name: "Barb",
    location: "Toronto",
    type: "Canadian supporter",
    variant: "canadian" as const,
    quote: "I had no expectations at all. I've never dealt with refugees before, so I was totally open. I've been surprised by how easy it is to chat with them — it's truly appreciated.",
    image: "/images/barb.jpg",
  },
]

export function Testimonials() {
  const { t } = useTranslation()

  return (
    <section id="testimonials" className="pt-6 pb-12 bg-background">
      <div className="max-w-5xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-card rounded-2xl border border-border overflow-hidden shadow-[var(--shadow-flat)]"
            >
              {/* Header with avatar */}
              <div className={`py-4 px-6 flex flex-col items-center ${
                testimonial.variant === "newcomer" 
                  ? "bg-haven-purple/10" 
                  : "bg-haven-coral/10"
              }`}>
                {testimonial.image ? (
                  <div className="w-32 h-32 md:w-44 md:h-44 rounded-2xl overflow-hidden">
                    <Image
                      src={testimonial.image}
                      alt={`${testimonial.name}'s photo`}
                      width={176}
                      height={176}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ) : (
                  <>
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-3 ${
                      testimonial.variant === "newcomer"
                        ? "bg-haven-purple/20"
                        : "bg-haven-coral/20"
                    }`}>
                      <User className={`w-8 h-8 ${
                        testimonial.variant === "newcomer"
                          ? "text-haven-purple"
                          : "text-haven-coral"
                      }`} />
                    </div>
                    <p className={`text-sm ${
                      testimonial.variant === "newcomer"
                        ? "text-haven-purple"
                        : "text-haven-coral"
                    }`}>
                      {testimonial.name}&apos;s photo
                    </p>
                  </>
                )}
              </div>
              
              {/* Content */}
              <div className="p-6">
                <span className={`inline-block px-3 py-1 rounded-[100px] text-xs font-semibold mb-4 ${
                  testimonial.variant === "newcomer"
                    ? "bg-haven-purple/10 text-haven-purple"
                    : "bg-haven-coral/10 text-haven-coral"
                }`}>
                  {t(testimonial.type)}
                </span>
                
                <p className="font-body text-foreground leading-relaxed mb-6">
                  &ldquo;{t(testimonial.quote)}&rdquo;
                </p>
                
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="font-body text-sm text-muted-foreground">{t("From")} {testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
