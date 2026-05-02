import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { getTranslation } from "@/lib/i18n"
import { MessageCircle, Users, Calendar, Award, Clock, Video } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const { t } = getTranslation(locale)
  return {
    title: t("Haven Language Program") + " | Haven",
    description: t("Improve your English or French through conversation practice with Canadian volunteers. Join the Haven Language Program today."),
  }
}

export default async function LanguageProgramPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const { t, link } = getTranslation(locale)

  const features = [
    {
      icon: MessageCircle,
      title: t("Conversation Practice"),
      description: t("Practice speaking with native speakers in relaxed, supportive sessions focused on real-world communication."),
    },
    {
      icon: Users,
      title: t("Small Group Sessions"),
      description: t("Join small groups of 3-5 learners for interactive discussions on topics that matter to you."),
    },
    {
      icon: Video,
      title: t("Online & In-Person"),
      description: t("Choose between virtual sessions from home or in-person meetups in your community."),
    },
    {
      icon: Calendar,
      title: t("Flexible Scheduling"),
      description: t("Sessions available mornings, evenings, and weekends to fit your busy schedule."),
    },
    {
      icon: Award,
      title: t("Progress Tracking"),
      description: t("Set goals, track your improvement, and celebrate milestones along your language journey."),
    },
    {
      icon: Clock,
      title: t("Self-Paced Learning"),
      description: t("Access supplementary materials and exercises to practice between sessions at your own pace."),
    },
  ]

  const levels = [
    {
      level: t("Beginner"),
      description: t("For those just starting their English or French journey. Focus on basic vocabulary, simple conversations, and building confidence."),
      topics: [t("Introductions"), t("Daily routines"), t("Shopping"), t("Directions")],
    },
    {
      level: t("Intermediate"),
      description: t("For learners who can hold basic conversations. Expand vocabulary, improve grammar, and tackle more complex topics."),
      topics: [t("Workplace communication"), t("Healthcare"), t("Banking"), t("Social situations")],
    },
    {
      level: t("Advanced"),
      description: t("For confident speakers looking to refine their skills. Focus on nuance, professional language, and cultural fluency."),
      topics: [t("Professional presentations"), t("Negotiations"), t("Academic discussions"), t("Canadian culture")],
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              {t("Free for all Haven members")}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              {t("Haven Language Program")}
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed text-balance mb-8">
              {t("Learn English or French through meaningful conversations with Canadian volunteers. Build language skills and friendships at the same time.")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="https://app.findhaven.org">{t("Join the Program")}</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="https://app.findhaven.org">{t("Become a Volunteer")}</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-16 px-6 bg-muted/30">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground text-center mb-4">
              {t("Program Features")}
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              {t("Our language program is designed to help you succeed with flexible, supportive learning options.")}
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="bg-background rounded-xl p-6 border border-border hover:border-primary/50 transition-colors"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Levels Section */}
        <section className="py-20 px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground text-center mb-4">
              {t("Find Your Level")}
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              {t("We offer sessions for all proficiency levels. Not sure where you fit? We will help you find the right starting point.")}
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {levels.map((item, index) => (
                <div 
                  key={index}
                  className="bg-muted/30 rounded-xl p-6 border border-border"
                >
                  <h3 className="text-2xl font-bold text-foreground mb-3">
                    {item.level}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {item.description}
                  </p>
                  <div>
                    <p className="text-sm font-medium text-foreground mb-2">{t("Topics include:")}</p>
                    <ul className="space-y-1">
                      {item.topics.map((topic, topicIndex) => (
                        <li key={topicIndex} className="text-sm text-muted-foreground flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-6 bg-primary/5">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { value: "500+", label: t("Active Learners") },
                { value: "200+", label: t("Volunteer Tutors") },
                { value: "15+", label: t("Languages Represented") },
                { value: "4.9/5", label: t("Learner Satisfaction") },
              ].map((stat, index) => (
                <div key={index}>
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              {t("Start Your Language Journey Today")}
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              {t("Join the Haven Language Program and connect with supportive volunteers who are excited to help you succeed.")}
            </p>
            <Button size="lg" asChild>
              <Link href="https://app.findhaven.org">{t("Get Started")}</Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
