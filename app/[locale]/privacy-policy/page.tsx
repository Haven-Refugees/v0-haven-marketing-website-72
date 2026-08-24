import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PrivacyPolicyContent } from "@/components/legal/privacy-policy-content"
import { PrivacyPolicyContentFr } from "@/components/legal/privacy-policy-content-fr"

export const metadata = {
  title: "Privacy Policy | Haven",
  description: "Haven Privacy Policy - How we collect, use, and protect your personal information.",
}

export default async function PrivacyPolicyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const isFrench = locale === "fr"

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="pt-24 pb-16">
        <div className="container mx-auto max-w-4xl px-4">
          {isFrench ? <PrivacyPolicyContentFr /> : <PrivacyPolicyContent />}
        </div>
      </div>
      <Footer />
    </main>
  )
}
