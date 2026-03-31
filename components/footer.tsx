import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center mb-4">
              <Image 
                src="/images/haven-logo.png" 
                alt="Haven" 
                width={120} 
                height={40}
                className="h-10 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-background/70 max-w-sm leading-relaxed">
              Haven is a registered Canadian charity that makes it easier for Canadians to help refugees start life in Canada.
            </p>
          </div>

          <div>
            <h4 className="font-medium mb-4">Platform</h4>
            <nav className="flex flex-col gap-3">
              <Link href="https://app.findhaven.org" className="text-background/70 hover:text-background transition-colors">
                Sign up
              </Link>
              <Link href="https://app.findhaven.org" className="text-background/70 hover:text-background transition-colors">
                Log in
              </Link>
              <Link href="#how-it-works" className="text-background/70 hover:text-background transition-colors">
                How it works
              </Link>
            </nav>
          </div>

          <div>
            <h4 className="font-medium mb-4">About</h4>
            <nav className="flex flex-col gap-3">
              <Link href="#faq" className="text-background/70 hover:text-background transition-colors">
                FAQ
              </Link>
              <Link href="mailto:info@findhaven.org" className="text-background/70 hover:text-background transition-colors">
                Contact us
              </Link>
            </nav>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/50 text-sm">
            © {new Date().getFullYear()} Haven Refugees. All rights reserved.
          </p>
          <p className="text-background/50 text-sm">
            Still have a question? Get in touch at{" "}
            <Link href="mailto:info@findhaven.org" className="text-background hover:underline">
              info@findhaven.org
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
