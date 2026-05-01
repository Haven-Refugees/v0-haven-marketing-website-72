"use client"

import { useTranslation } from "@/lib/i18n"

const testimonials = [
  {
    tag: "Haven Connect",
    quote: "My Canadian helped me practice for job interviews. After two months, I got my first job in Canada. I'm so grateful for the support.",
    name: "Maria",
    from: "From Colombia",
  },
  {
    tag: "Haven Language Program",
    quote: "The combination of classes and conversation practice is perfect. My teacher knows exactly what I need, and talking to Canadians gives me confidence.",
    name: "Ahmed",
    from: "From Syria",
  },
]

export function NewcomersTestimonials() {
  const { t } = useTranslation()

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="font-sans font-bold text-3xl md:text-4xl text-foreground mb-12">
          {t("What newcomers say")}
        </h2>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-secondary/10 rounded-2xl overflow-hidden text-left"
            >
              {/* Photo placeholder */}
              <div className="bg-secondary/20 h-48 flex items-center justify-center">
                <span className="text-secondary/40 text-xs font-medium uppercase tracking-wider">Photo</span>
              </div>

              {/* Content */}
              <div className="p-6">
                <span className="inline-block bg-secondary/20 text-secondary text-xs font-medium px-3 py-1 rounded-full mb-4">
                  {t(testimonial.tag)}
                </span>
                <p className="text-muted-foreground text-sm leading-relaxed italic mb-4">
                  &ldquo;{t(testimonial.quote)}&rdquo;
                </p>
                <p className="font-medium text-foreground text-sm">{testimonial.name}</p>
                <p className="text-muted-foreground text-xs">{t(testimonial.from)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
