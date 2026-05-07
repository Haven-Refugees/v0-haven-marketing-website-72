import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ReferralAgreementContent } from "@/components/legal/referral-agreement-content"

export const metadata = {
  title: "Referral Agreement | Haven",
  description: "Haven Language Program Referral Program Terms & Conditions",
}

export default function ReferralAgreementPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <ReferralAgreementContent />
      </main>
      <Footer />
    </div>
  )
}
