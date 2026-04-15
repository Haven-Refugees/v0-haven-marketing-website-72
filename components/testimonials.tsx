"use client"

import { User } from "lucide-react"
import Image from "next/image"

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
  return (
    <section id="testimonials" className="pt-12 pb-12 bg-background">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-sans font-bold text-3xl md:text-4xl lg:text-5xl text-foreground">
            Normal Canadians helping people who had to leave home.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-background rounded-2xl border border-border overflow-hidden"
            >
              {/* Header with avatar */}
              <div className={`py-8 px-6 flex flex-col items-center ${
                testimonial.variant === "newcomer" 
                  ? "bg-secondary/10" 
                  : "bg-accent/10"
              }`}>
                {testimonial.image ? (
                  <div className="w-36 h-36 rounded-2xl overflow-hidden">
                    <Image
                      src={testimonial.image}
                      alt={`${testimonial.name}'s photo`}
                      width={144}
                      height={144}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ) : (
                  <>
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-3 ${
                      testimonial.variant === "newcomer"
                        ? "bg-secondary/20"
                        : "bg-accent/20"
                    }`}>
                      <User className={`w-8 h-8 ${
                        testimonial.variant === "newcomer"
                          ? "text-secondary"
                          : "text-accent"
                      }`} />
                    </div>
                    <p className={`text-sm ${
                      testimonial.variant === "newcomer"
                        ? "text-secondary"
                        : "text-accent"
                    }`}>
                      {testimonial.name}&apos;s photo
                    </p>
                  </>
                )}
              </div>
              
              {/* Content */}
              <div className="p-6">
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-4 ${
                  testimonial.variant === "newcomer"
                    ? "bg-secondary/10 text-secondary"
                    : "bg-accent/10 text-accent"
                }`}>
                  {testimonial.type}
                </span>
                
                <p className="text-foreground italic leading-relaxed mb-6">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                
                <div>
                  <p className="font-bold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">From {testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
