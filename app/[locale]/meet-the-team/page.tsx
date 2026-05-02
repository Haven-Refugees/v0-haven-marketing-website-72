import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Linkedin, Mail } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: 'Meet the Team | Haven',
  description: 'Meet the passionate team behind Haven, dedicated to connecting newcomers with welcoming Canadians.',
}

const teamMembers = [
  {
    name: "Team Member",
    role: "Co-Founder & CEO",
    bio: "Passionate about creating meaningful connections between newcomers and Canadians. Dedicated to making Canada a more welcoming place for all.",
    image: "/images/team/placeholder.jpg",
  },
  {
    name: "Team Member",
    role: "Co-Founder & CTO",
    bio: "Building technology that brings people together. Believes in the power of human connection to transform lives and communities.",
    image: "/images/team/placeholder.jpg",
  },
  {
    name: "Team Member",
    role: "Head of Community",
    bio: "Creating spaces where newcomers and Canadians can connect authentically. Committed to fostering inclusive and supportive communities.",
    image: "/images/team/placeholder.jpg",
  },
  {
    name: "Team Member",
    role: "Head of Programs",
    bio: "Designing programs that empower newcomers with language skills and confidence. Focused on creating impactful learning experiences.",
    image: "/images/team/placeholder.jpg",
  },
]

export default function MeetTheTeamPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-24">
        {/* Hero Section */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
              Meet the Team
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              We&apos;re a passionate group dedicated to building bridges between newcomers and Canadians.
            </p>
          </div>
        </section>

        {/* Team Grid */}
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {teamMembers.map((member, index) => (
                <div 
                  key={index} 
                  className="bg-card border border-border rounded-2xl p-8 flex flex-col items-center text-center"
                >
                  <div className="w-32 h-32 bg-muted rounded-full mb-6 flex items-center justify-center">
                    <span className="text-4xl text-muted-foreground">
                      {member.name.split(" ").map(n => n[0]).join("")}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-4">{member.role}</p>
                  <p className="text-muted-foreground mb-6">{member.bio}</p>
                  <div className="flex gap-4">
                    <Link 
                      href="#" 
                      className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary/10 transition-colors"
                      aria-label={`${member.name}'s LinkedIn`}
                    >
                      <Linkedin className="w-5 h-5 text-muted-foreground" />
                    </Link>
                    <Link 
                      href="#" 
                      className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary/10 transition-colors"
                      aria-label={`Email ${member.name}`}
                    >
                      <Mail className="w-5 h-5 text-muted-foreground" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Join Us Section */}
        <section className="py-20 px-6 bg-muted/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">Join Our Team</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              We&apos;re always looking for passionate individuals who share our vision of a more connected Canada. Check out our open positions and join us in making a difference.
            </p>
            <Link 
              href="mailto:careers@findhaven.org"
              className="inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground px-8 py-3 font-medium hover:bg-primary/90 transition-colors"
            >
              View Open Positions
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
