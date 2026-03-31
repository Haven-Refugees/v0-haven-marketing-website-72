import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function RefugeeCta() {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl mb-6 text-balance">
            Are you a refugee or a person in Canada because of conflict?
          </h2>
          <p className="text-lg opacity-90 mb-8 leading-relaxed">
            Haven can help you improve your English or French, meet Canadians in your community, and build your professional network.
          </p>
          <Button 
            size="lg" 
            variant="secondary" 
            className="text-lg px-8 py-6"
            asChild
          >
            <Link href="https://app.findhaven.org">
              Learn more about Haven
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
