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
    <section className="py-20 bg-muted/50">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="font-sans font-extrabold text-3xl md:text-4xl text-foreground mb-10 text-center">
          Frequently asked questions
        </h2>

        <div className="space-y-0">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="border-b border-border py-6"
            >
              <h3 className="font-medium text-foreground mb-3">{faq.question}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
