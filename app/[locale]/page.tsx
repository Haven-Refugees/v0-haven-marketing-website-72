import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { SectionThree } from "@/components/section-three"
import { SectionNewcomers } from "@/components/section-newcomers"
import { SectionCanadians } from "@/components/section-canadians"
import { SectionCommunity } from "@/components/section-community"
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
        <SectionNewcomers />
        <SectionCanadians />
        <SectionCommunity />
        <Testimonials />
        <TeamSection />
        <FaqSection />
        <SectionThree />
      </main>
      <Footer />
    </>
  )
}
