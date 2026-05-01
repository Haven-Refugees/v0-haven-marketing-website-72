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
    question: "How can Haven help me?",
    answer: "Haven can help you in two big ways. First, we can help you improve your English or French. Second, we can help you meet Canadians who want to help you build your life in Canada.\n\nWe have two programs. The Haven Language Program combines classes with professional teachers and conversation practice with Canadian volunteers. It's a great way to improve your English in Canada — we're adding French classes soon.\n\nIf you don't have time for classes, you can also just focus on meeting Canadian volunteers. It's free and you can start today.",
  },
  {
    question: "Is Haven free?",
    answer: "Matching with Canadian volunteers is completely free. The Haven Language Program charges a small participation fee of $2.50–$7.50 per class, depending on your situation — that's about $5–$15 per week. Only the classes are paid, and the other parts of the program are free.\n\nWe have a class fee to make sure that our students are committed. For example, for your individual classes, if you don't show up the teacher will have no one to teach. Haven works best for students who can commit. If you can't commit for now, we recommend joining only for matches with Canadians.",
  },
  {
    question: "Who will I be matched with?",
    answer: "You will be matched with a Canadian volunteer who lives in Canada and wants to help newcomers. All volunteers on Haven are verified before they can connect with anyone. You can browse volunteer profiles and choose who you want to connect with — you're always in control of who you talk to.",
  },
  {
    question: "What if my English or French is very low?",
    answer: "Haven is designed for all levels. If you are a beginner in English, we recommend joining our classes. We will match you with other students at your level, and try to match you with a teacher who speaks your native language. This makes learning English as easy as possible.",
  },
  {
    question: "I've never heard of Haven before, who are you?",
    answer: "Haven is a registered Canadian charity. We believe that newcomers fleeing conflict deserve better support than what currently exists in Canada. We're using technology to build a new national system for getting help. We've helped thousands of newcomers across hundreds of communities in Canada. You can learn more about us on our About page.",
  },
]

export function NewcomersFaq() {
  const { t } = useTranslation()

  return (
    <section className="pt-12 pb-24">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-sans font-bold text-3xl md:text-4xl text-foreground mb-4">
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
