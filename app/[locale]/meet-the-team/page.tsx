import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { TeamHero } from "@/components/team/hero"
import { CoreTeam } from "@/components/team/core-team"
import { Teachers } from "@/components/team/teachers"
import { Supporters } from "@/components/team/supporters"
import { JoinTeam } from "@/components/team/join-team"
import { TeamCta } from "@/components/team/cta"

export const metadata = {
  title: 'Meet the Team | Haven',
  description: 'Meet the passionate team behind Haven, dedicated to connecting newcomers with welcoming Canadians.',
}

export default function MeetTheTeamPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-20">
        <TeamHero />
        <CoreTeam />
        <Teachers />
        <Supporters />
        <JoinTeam />
        <TeamCta />
      </main>
      <Footer />
    </>
  )
}
