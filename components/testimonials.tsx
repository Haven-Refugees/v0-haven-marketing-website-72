"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    name: "Camila",
    location: "Mississauga",
    type: "Canadian",
    quote: "As a non-native English speaker who struggled to learn the language, I am happy to be able to support refugees in their journey to build a life in Canada. Language is at the core of what makes us human, and making myself available to others to practice has been my chance to give back and to build community.",
  },
  {
    name: "Iryna",
    location: "Ukraine",
    type: "Refugee",
    quote: "I now talk with four Canadians on Haven. I'm so grateful to them for the opportunity to talk and for their patience with my English!",
  },
  {
    name: "Barb",
    location: "Toronto",
    type: "Canadian",
    quote: "I had no expectations at all when getting involved with Haven. I've never really helped people learn English before, and I've never dealt with refugees, so I was totally open. I've been surprised by how easy it is to chat with them — it's truly appreciated.",
  },
]

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)

  const next = () => setActiveIndex((prev) => (prev + 1) % testimonials.length)
  const prev = () => setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  return (
    <section id="testimonials" className="py-24 bg-card">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-4">
            What our users say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Refugees rebuilding. Canadians reaching out. These are the voices behind the Haven community.
          </p>
        </div>

        {/* Desktop view - show all cards */}
        <div className="hidden md:grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-background p-8 rounded-2xl border border-border relative"
            >
              <Quote className="w-10 h-10 text-primary/20 absolute top-6 right-6" />
              <div className="mb-6">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <span className="font-serif text-xl text-primary">
                    {testimonial.name[0]}
                  </span>
                </div>
                <h3 className="font-serif text-xl text-foreground">{testimonial.name}</h3>
                <p className="text-sm text-muted-foreground">
                  From {testimonial.location} · {testimonial.type}
                </p>
              </div>
              <p className="text-muted-foreground leading-relaxed italic">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
            </div>
          ))}
        </div>

        {/* Mobile view - carousel */}
        <div className="md:hidden">
          <div className="bg-background p-8 rounded-2xl border border-border relative">
            <Quote className="w-10 h-10 text-primary/20 absolute top-6 right-6" />
            <div className="mb-6">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <span className="font-serif text-xl text-primary">
                  {testimonials[activeIndex].name[0]}
                </span>
              </div>
              <h3 className="font-serif text-xl text-foreground">{testimonials[activeIndex].name}</h3>
              <p className="text-sm text-muted-foreground">
                From {testimonials[activeIndex].location} · {testimonials[activeIndex].type}
              </p>
            </div>
            <p className="text-muted-foreground leading-relaxed italic">
              &ldquo;{testimonials[activeIndex].quote}&rdquo;
            </p>
          </div>

          <div className="flex items-center justify-center gap-4 mt-6">
            <Button variant="outline" size="icon" onClick={prev}>
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === activeIndex ? "bg-primary" : "bg-border"
                  }`}
                />
              ))}
            </div>
            <Button variant="outline" size="icon" onClick={next}>
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
