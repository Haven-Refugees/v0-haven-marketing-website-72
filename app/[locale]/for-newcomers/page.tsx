import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { NewcomersHero } from "@/components/newcomers/hero"
import { ChooseYourPath } from "@/components/newcomers/choose-your-path"
import { HavenLanguageProgram } from "@/components/newcomers/haven-language-program"
import { HavenConnect } from "@/components/newcomers/haven-connect"
import { Eligibility } from "@/components/newcomers/eligibility"
import { NewcomersFaq } from "@/components/newcomers/faq"
import { NewcomersCta } from "@/components/newcomers/cta"

export const metadata = {
  title: 'For Newcomers | Haven',
  description: 'Haven helps newcomers and refugees in Canada practice English and French, build professional networks, and connect with welcoming Canadians.',
}

export default function ForNewcomersPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <NewcomersHero />
        <ChooseYourPath />
        <HavenLanguageProgram />
        <HavenConnect />
        <Eligibility />
        <NewcomersFaq />
        <NewcomersCta />
      </main>
      <Footer />
    </>
  )
}
