"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { useTranslation } from "@/lib/i18n"

const faqs = [
  {
    question: "Who is eligible to get help on Haven?",
    answer: "We help all newcomers fleeing conflict who are now in Canada — including refugees, refugee claimants, and all other Canadian humanitarian programs like CUAET. Unfortunately we are not able to help other immigrants in Canada, or refugees who are not in Canada.",
  },
  {
    question: "How does Haven keep its users safe?",
    answer: "All Canadian supporters on Haven verify their identity before reaching out. Newcomers can verify too. We recommend it — and most do.",
  },
  {
    question: "Is Haven all online?",
    answer: "Haven is primarily an online platform. For Haven Connect, all connections start with video calls through the Haven app — but if both people are comfortable and local, many choose to meet in person too. For the Haven Language Program, all classes and learning are fully online.",
  },
]

export function FaqSection() {
  const { t } = useTranslation()

  return (
    <section id="faq" className="pt-12 pb-24">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-sans font-bold text-4xl md:text-5xl text-foreground mb-4">
            {t("Frequently Asked Questions")}
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
                {t(faq.question)}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                {t(faq.answer)}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" asChild>
            <Link href="https://app.findhaven.org">{t("See our full FAQ")}</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
