import Link from "next/link"
import { Button } from "@/components/ui/button"

export function NewcomersCta() {
  return (
    <section className="py-24 bg-primary/5">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="font-sans font-extrabold text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
          Ready to start your journey?
        </h2>
        <p className="font-sans font-medium text-muted-foreground text-lg leading-relaxed max-w-md mx-auto mb-10">
          Join thousands of newcomers who are building their new life in Canada with Haven.
        </p>
        <Button size="lg" className="text-base px-10 py-6" asChild>
          <Link href="https://app.findhaven.org">
            Join Haven
          </Link>
        </Button>
      </div>
    </section>
  )
}
