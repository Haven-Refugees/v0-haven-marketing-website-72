import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { UserAgreementContent } from "@/components/legal/user-agreement-content"
import { UserAgreementContentFr } from "@/components/legal/user-agreement-content-fr"

export const dynamic = 'force-dynamic'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params

  if (locale === "fr") {
    return {
      title: "Contrat de licence d'utilisation | Haven",
      description:
        "Contrat de licence d'utilisateur final de Haven Refugees / Haven Refugies - Modalités régissant l'utilisation de la plateforme Haven.",
    }
  }

  return {
    title: 'User Agreement | Haven',
    description: 'Haven Refugees End-User License Agreement - Terms and conditions governing the use of the Haven platform.',
  }
}

export default async function UserAgreementPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const isFrench = locale === "fr"

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        {isFrench ? <UserAgreementContentFr /> : <UserAgreementContent />}
      </main>
      <Footer />
    </>
  )
}
