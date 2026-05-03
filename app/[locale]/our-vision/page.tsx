import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { VisionHero } from "@/components/vision/hero"
import { VisionProblem } from "@/components/vision/problem"
import { VisionApproach } from "@/components/vision/approach"
import { VisionResults } from "@/components/vision/results"
import { VisionFounder } from "@/components/vision/founder"
import { VisionFuture } from "@/components/vision/future"
import { VisionCta } from "@/components/vision/cta"

export const dynamic = 'force-dynamic'

export const metadata = {
  title: 'Our Vision | Haven',
  description: 'Canada wins when newcomers become independent faster. Haven is building the system that makes that possible — and proving it works.',
}

export default function OurVisionPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-24">
        <VisionHero />
        <VisionProblem />
        <VisionApproach />
        <VisionResults />
        <VisionFounder />
        <VisionFuture />
        <VisionCta />
      </main>
      <Footer />
    </>
  )
}
