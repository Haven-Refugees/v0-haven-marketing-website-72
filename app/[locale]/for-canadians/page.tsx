import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CanadiansHero } from "@/components/canadians/hero"
import { WaysToHelp } from "@/components/canadians/ways-to-help"
import { HowItWorks } from "@/components/canadians/how-it-works"
import { YourSchedule } from "@/components/canadians/your-schedule"
import { CanadiansTestimonial } from "@/components/canadians/testimonial"
import { Trust } from "@/components/canadians/trust"
import { CanadiansFinalCta } from "@/components/canadians/final-cta"

export const metadata = {
  title: 'For Canadians | Haven',
  description: 'Help a refugee in Canada. Haven matches you directly with a newcomer for a video call. It takes just 30 minutes to make a difference.',
}

export default function ForCanadiansPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <CanadiansHero />
        <WaysToHelp />
        <HowItWorks />
        <YourSchedule />
        <CanadiansTestimonial />
        <Trust />
        <CanadiansFinalCta />
      </main>
      <Footer />
    </>
  )
}
