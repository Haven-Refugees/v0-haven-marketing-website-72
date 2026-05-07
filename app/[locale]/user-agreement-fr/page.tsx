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
      <main className="flex-1 container mx-auto px-4 py-12 md:py-16">
        <h1 className="text-3xl md:text-4xl font-heading font-bold mb-8">
          Contrat de licence d&apos;utilisation - Haven Refugees
        </h1>
        <UserAgreementContentFr />
      </main>
      <Footer />
    </div>
  )
}
