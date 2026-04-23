import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata = {
  title: 'For Newcomers | Haven',
  description: 'Haven helps newcomers and refugees in Canada practice English and French, build professional networks, and connect with welcoming Canadians.',
}

export default function ForNewcomersPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      {/* Page content goes here */}
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="font-serif text-4xl md:text-5xl text-foreground">
            For Newcomers
          </h1>
          <p className="text-muted-foreground mt-4 text-lg">
            Your content starts here.
          </p>
        </div>
      </div>

      <Footer />
    </main>
  )
}
