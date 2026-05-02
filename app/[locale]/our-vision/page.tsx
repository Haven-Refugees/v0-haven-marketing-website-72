import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Heart, Globe, Users, Sparkles } from "lucide-react"

export const metadata = {
  title: 'Our Vision | Haven',
  description: 'Learn about Haven\'s mission to create meaningful connections between newcomers and Canadians, fostering a more inclusive and welcoming Canada.',
}

export default function OurVisionPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-24">
        {/* Hero Section */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
              Building a More Connected Canada
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              We envision a Canada where every newcomer feels welcomed, supported, and empowered to thrive in their new home.
            </p>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="py-16 px-6 bg-muted/30">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Our Mission</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Haven connects newcomers with welcoming Canadians to practice languages, build meaningful relationships, and create a stronger, more inclusive community.
              </p>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">What We Believe</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-card border border-border rounded-2xl p-8">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Human Connection</h3>
                <p className="text-muted-foreground">
                  We believe that meaningful human connections are the foundation of successful integration. Every conversation, every shared moment, helps build bridges between cultures.
                </p>
              </div>

              <div className="bg-card border border-border rounded-2xl p-8">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Cultural Exchange</h3>
                <p className="text-muted-foreground">
                  Learning is a two-way street. When newcomers and Canadians come together, both sides grow richer in understanding, perspective, and appreciation for diverse backgrounds.
                </p>
              </div>

              <div className="bg-card border border-border rounded-2xl p-8">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Community Strength</h3>
                <p className="text-muted-foreground">
                  Strong communities are built on inclusion. By welcoming newcomers as valued members of our society, we strengthen the fabric of Canadian communities.
                </p>
              </div>

              <div className="bg-card border border-border rounded-2xl p-8">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <Sparkles className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Empowerment</h3>
                <p className="text-muted-foreground">
                  We empower newcomers with the language skills, confidence, and connections they need to pursue their dreams and contribute their unique talents to Canada.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Statement */}
        <section className="py-20 px-6 bg-primary/5">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">Our Impact</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Every day, Haven facilitates conversations that change lives. From first words in a new language to lasting friendships, we&apos;re proud of the connections we help create.
            </p>
            <div className="grid grid-cols-3 gap-8">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">5,000+</div>
                <div className="text-muted-foreground">Connections Made</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">50+</div>
                <div className="text-muted-foreground">Countries Represented</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">10,000+</div>
                <div className="text-muted-foreground">Hours of Practice</div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
