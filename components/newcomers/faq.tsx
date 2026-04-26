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
    question: "Is Haven free?",
    answer: "Haven Connect is completely free. The Haven Language Program costs between $5–$15 per week (that's $2.50–$7.50 per class), depending on your situation. We work with you to find a price that fits your budget.",
  },
  {
    question: "How do I get started?",
    answer: "Create an account on our platform, verify your ID, and you're ready to go. For Haven Connect, you can browse Canadian volunteers and reach out right away. For the Haven Language Program, you'll complete a short application and placement assessment.",
  },
  {
    question: "What if my English is very basic?",
    answer: "That's okay! The Haven Language Program accepts students from CLB 1 to 8. Our teachers are experienced in working with beginners, and our Canadian volunteers are patient and understanding.",
  },
  {
    question: "Can I do both programs?",
    answer: "The Haven Language Program already includes weekly conversations with Canadian volunteers, so you get the best of both. If you're in Haven Connect and want to add classes, you can apply for the Language Program at any time.",
  },
  {
    question: "What if I need to stop or take a break?",
    answer: "Life happens. For Haven Connect, there's no commitment—you can pause or stop whenever you need to. The Haven Language Program does require a 20-week commitment to see real results, but we understand emergencies and will work with you.",
  },
]

export function NewcomersFaq() {
  return (
    <section className="pt-12 pb-24">
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
              className="bg-card border border-border rounded-xl px-6 overflow-hidden data-[state=open]:shadow-lg transition-shadow !border-b"
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
