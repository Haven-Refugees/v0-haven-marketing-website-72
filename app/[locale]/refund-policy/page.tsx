import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { RefundPolicyContent } from "@/components/legal/refund-policy-content"

export const metadata = {
  title: "Refund Policy | Haven",
  description: "Haven Language Program Refund Policy",
}

export default function RefundPolicyPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <RefundPolicyContent />
      <Footer />
    </main>
  )
}
