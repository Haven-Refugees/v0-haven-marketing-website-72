import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { UserAgreementContentFr } from "@/components/legal/user-agreement-content-fr"

export const metadata = {
  title: "Contrat de licence d'utilisation | Haven Refugees",
  description: "Contrat de licence d'utilisation de Haven Refugees",
}

export default function UserAgreementFrPage() {
  return (
    &lt;div className="min-h-screen flex flex-col bg-background"&gt;
      &lt;Header /&gt;
      &lt;main className="flex-1 container mx-auto px-4 py-12 md:py-16"&gt;
        &lt;h1 className="text-3xl md:text-4xl font-heading font-bold mb-8"&gt;
          Contrat de licence d&apos;utilisation - Haven Refugees
        &lt;/h1&gt;
        &lt;UserAgreementContentFr /&gt;
      &lt;/main&gt;
      &lt;Footer /&gt;
    &lt;/div&gt;
  )
}
