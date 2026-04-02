import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "Is Haven safe and trustworthy?",
    answer: "Haven Refugees is a Canadian charity registered with the Canada Revenue Agency. We have already helped thousands of refugees and Canadians match directly. We keep everyone on Haven safe by verifying the IDs of our users. You can do this instantly on the platform, or if you prefer, on a video call with a Haven staff member.",
  },
  {
    question: "I've never done this before. Can I help?",
    answer: "Yes! Helping on Haven is easy. The best way to help is English conversation practice. That means a 30 minute video call where you are speaking to a refugee who is trying to improve their English. Take a look at our conversation guides to get a sense of what you could talk about.",
  },
  {
    question: "How do I start to help?",
    answer: "Create an account, verify your ID, and reach out to a refugee. That's it! Get started by clicking sign-up on our platform.",
  },
]

export function FaqSection() {
  return (
    <section id="faq" className="py-24">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-sans font-bold text-4xl md:text-5xl text-foreground mb-4">
            Frequently Asked Questions
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-card border border-border rounded-xl px-6 data-[state=open]:shadow-lg transition-shadow"
            >
              <AccordionTrigger className="text-left font-medium text-foreground hover:no-underline py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" asChild>
            <Link href="https://app.findhaven.org">See our full FAQ</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
