import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { SectionTwo } from "@/components/section-two"
import { HowItWorks } from "@/components/how-it-works"
import { WaysToHelp } from "@/components/ways-to-help"
import { Testimonials } from "@/components/testimonials"
import { TeamSection } from "@/components/team-section"
import { SupportersSection } from "@/components/supporters-section"
import { FaqSection } from "@/components/faq-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <SectionTwo />
        <HowItWorks />
        <WaysToHelp />
        <Testimonials />
        <TeamSection />
        <SupportersSection />
        <FaqSection />
      </main>
      <Footer />
    </>
  )
}
