import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { UserAgreementContentFr } from "@/components/legal/user-agreement-content-fr"

export const metadata = {
  title: "Contrat de licence d'utilisation | Haven Refugees",
  description: "Contrat de licence d'utilisation de Haven Refugees",
}

export default function UserAgreementFrPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        <UserAgreementContentFr />
      </main>
      <Footer />
    </div>
  )
}
