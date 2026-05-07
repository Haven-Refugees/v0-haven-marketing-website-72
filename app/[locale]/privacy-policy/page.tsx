import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PrivacyPolicyContent } from "@/components/legal/privacy-policy-content"

export const metadata = {
  title: "Privacy Policy | Haven",
  description: "Haven Privacy Policy - How we collect, use, and protect your personal information.",
}

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <PrivacyPolicyContent />
        </div>
      </div>
      <Footer />
    </main>
  )
}
