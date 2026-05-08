import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HLPHero } from "@/components/hlp/hero"
import { HLPStructure } from "@/components/hlp/structure"
import { HLPCtaBand } from "@/components/hlp/cta-band"
import { HLPTestimonialOlena } from "@/components/hlp/testimonial-olena"
import { HLPProblem } from "@/components/hlp/problem"
import { HLPBenefits } from "@/components/hlp/benefits"
import { HLPTestimonialLidia } from "@/components/hlp/testimonial-lidia"
import { HLPCommitment } from "@/components/hlp/commitment"
import { HLPEligibility } from "@/components/hlp/eligibility"
import { HLPFaq } from "@/components/hlp/faq"
import { HLPFinalCta } from "@/components/hlp/final-cta"

export const dynamic = 'force-dynamic'

export const metadata = {
  title: 'Haven Language Program | Haven',
  description: 'A better way to learn English for newcomers fleeing conflict. Classes with professional teachers. Conversations with Canadians. Built around your schedule.',
}

export default function HavenLanguageProgramPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-[73px]">
        <HLPHero />
        <HLPStructure />
        <HLPCtaBand />
        <HLPTestimonialOlena />
        <HLPProblem />
        <HLPBenefits />
        <HLPTestimonialLidia />
        <HLPCommitment />
        <HLPEligibility />
        <HLPFaq />
        <HLPFinalCta />
      </main>
      <Footer />
    </>
  )
}
