"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Globe } from "lucide-react"
import { useState } from "react"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <img 
            src="/images/haven-logo.png" 
            alt="Haven" 
            width={130}
            height={40}
          />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link href="/for-newcomers" className="text-muted-foreground hover:text-foreground transition-colors">
            For Newcomers
          </Link>
          <Link href="/for-canadians" className="text-muted-foreground hover:text-foreground transition-colors">
            For Canadians
          </Link>
          <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
            About Haven
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <button className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Language">
            <Globe className="w-5 h-5" />
          </button>
          <Button variant="ghost" asChild>
            <Link href="https://app.findhaven.org">Log in</Link>
          </Button>
          <Button asChild>
            <Link href="https://app.findhaven.org">Join Haven</Link>
          </Button>
        </div>

        <button
          className="md:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <nav className="flex flex-col p-6 gap-4">
            <Link 
              href="/for-newcomers" 
              className="text-muted-foreground hover:text-foreground transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              For Newcomers
            </Link>
            <Link 
              href="/for-canadians" 
              className="text-muted-foreground hover:text-foreground transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              For Canadians
            </Link>
            <Link 
              href="/about" 
              className="text-muted-foreground hover:text-foreground transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              About Haven
            </Link>
            <div className="flex flex-col gap-3 pt-4 border-t border-border">
              <Button variant="outline" asChild className="w-full">
                <Link href="https://app.findhaven.org">Log in</Link>
              </Button>
              <Button asChild className="w-full">
                <Link href="https://app.findhaven.org">Join Haven</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
