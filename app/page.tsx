import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { SectionTwo } from "@/components/section-two"
import { SectionThree } from "@/components/section-three"
import { HowItWorks } from "@/components/how-it-works"

import { Testimonials } from "@/components/testimonials"
import { TeamSection } from "@/components/team-section"
import { FaqSection } from "@/components/faq-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <SectionTwo />
        <SectionThree />
        <HowItWorks />
        <Testimonials />
        <TeamSection />
        <FaqSection />
      </main>
      <Footer />
    </>
  )
}
