import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { UserAgreementContent } from "@/components/legal/user-agreement-content"

export const dynamic = 'force-dynamic'

export const metadata = {
  title: 'User Agreement | Haven',
  description: 'Haven Refugees End-User License Agreement - Terms and conditions governing the use of the Haven platform.',
}

export default function UserAgreementPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <UserAgreementContent />
      </main>
      <Footer />
    </>
  )
}
