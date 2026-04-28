"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "What level of English do I need to join?",
    answer: "Haven's classes range from CLB 1 to 8 — from complete beginner to upper intermediate. You will be assessed at the start of the program so we can place you in the right class. If your English is very low, some teachers also speak your language so you can follow along comfortably.",
  },
  {
    question: "How much does the program cost?",
    answer: "The Haven Language Program charges a small participation fee of $2.50–$7.50 per class depending on your situation — that's about $5–$15 per week. This is roughly 90% less than the average cost of English classes in Canada. The fee exists to ensure commitment, because our program works best when students show up consistently. Matching with Canadian volunteers is always free.",
  },
  {
    question: "How long is the program and what is the commitment?",
    answer: "The program is 20 weeks. You will need a minimum of 6 hours per week — this includes your classes, conversations with your Canadian volunteers, and individual homework. Please only apply if you can commit to the full program. This is the minimum needed to make real progress in English.",
  },
  {
    question: "When are classes held?",
    answer: "Classes run evenings and weekends so they fit around your work and family schedule. You will be able to choose a schedule that works for you when you apply.",
  },
  {
    question: "What will I learn?",
    answer: "You will develop your speaking, listening, and grammar skills with a focus on real-life English for living in Canada. Lessons cover everyday communication, employment, housing, healthcare, and other practical topics to help you speak confidently in daily situations.",
  },
]

export function HLPFaq() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="font-sans font-bold text-3xl md:text-4xl text-[#26215C] text-center mb-12">
          Frequently asked questions
        </h2>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-white border border-[#E0D9F0] rounded-xl px-6 overflow-hidden data-[state=open]:shadow-lg transition-shadow !border-b"
            >
              <AccordionTrigger className="text-left font-sans font-semibold text-[#26215C] hover:no-underline py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-[#26215C]/70 pb-6 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
