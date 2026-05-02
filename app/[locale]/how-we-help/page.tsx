import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { getTranslation } from "@/lib/i18n"
import { Users, Home, Briefcase, Heart, BookOpen, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const { t } = getTranslation(locale)
  return {
    title: t("How We Help") + " | Haven",
    description: t("Discover how Haven supports newcomers in building a new life in Canada through community connections, resources, and guidance."),
  }
}

export default async function HowWeHelpPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const { t, link } = getTranslation(locale)

  const services = [
    {
      icon: Users,
      title: t("Community Matching"),
      description: t("We connect newcomers with welcoming Canadian hosts who provide friendship, guidance, and a sense of belonging from day one."),
    },
    {
      icon: Home,
      title: t("Settlement Support"),
      description: t("Navigate the complexities of settling in Canada with our comprehensive resources and one-on-one guidance."),
    },
    {
      icon: Briefcase,
      title: t("Career Guidance"),
      description: t("Access job search support, resume building workshops, and connections to Canadian employers who value diverse perspectives."),
    },
    {
      icon: BookOpen,
      title: t("Language Learning"),
      description: t("Improve your English or French through our language program with conversation partners and structured learning."),
    },
    {
      icon: Heart,
      title: t("Emotional Support"),
      description: t("Join support groups and connect with others who understand the journey of starting fresh in a new country."),
    },
    {
      icon: Globe,
      title: t("Cultural Exchange"),
      description: t("Participate in cultural events that celebrate diversity and help you share your heritage while learning about Canadian traditions."),
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              {t("How We Help Newcomers Thrive")}
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed text-balance">
              {t("At Haven, we believe that everyone deserves a warm welcome. Our programs and services are designed to help you build connections, find opportunities, and create a fulfilling life in Canada.")}
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 px-6 bg-muted/30">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">
              {t("Our Services")}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div 
                  key={index}
                  className="bg-background rounded-xl p-6 border border-border hover:border-primary/50 transition-colors"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">
              {t("How It Works")}
            </h2>
            <div className="space-y-8">
              {[
                {
                  step: "1",
                  title: t("Create Your Profile"),
                  description: t("Sign up and tell us about yourself, your background, interests, and what kind of support you are looking for."),
                },
                {
                  step: "2",
                  title: t("Get Matched"),
                  description: t("Our team carefully matches you with Canadian hosts and resources based on your needs, location, and interests."),
                },
                {
                  step: "3",
                  title: t("Build Connections"),
                  description: t("Meet your matches, attend events, and start building your Canadian community with ongoing support from Haven."),
                },
              ].map((item, index) => (
                <div key={index} className="flex gap-6 items-start">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-primary-foreground font-bold">{item.step}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6 bg-primary/5">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              {t("Ready to Get Started?")}
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              {t("Join thousands of newcomers who have found community, support, and friendship through Haven.")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="https://app.findhaven.org">{t("Join Haven")}</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href={link("/language-program")}>{t("Explore Language Program")}</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
