"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import { useTranslation } from "@/lib/i18n"
import { LanguageSwitcher } from "@/components/language-switcher"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { t, link } = useTranslation()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href={link("/")} className="flex items-center">
          <img 
            src="/images/haven-logo.png" 
            alt="Haven" 
            width={130}
            height={40}
          />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link href={link("/for-newcomers")} className="text-muted-foreground hover:text-foreground transition-colors">
            {t("For Newcomers")}
          </Link>
          <Link href={link("/for-canadians")} className="text-muted-foreground hover:text-foreground transition-colors">
            {t("For Canadians")}
          </Link>
          <Link href={link("/about")} className="text-muted-foreground hover:text-foreground transition-colors">
            {t("About Haven")}
          </Link>
          <LanguageSwitcher />
          <Button variant="ghost" asChild>
            <Link href="https://app.findhaven.org">{t("Log in")}</Link>
          </Button>
          <Button asChild>
            <Link href="https://app.findhaven.org">{t("Join Haven")}</Link>
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
              href={link("/for-newcomers")} 
              className="text-muted-foreground hover:text-foreground transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t("For Newcomers")}
            </Link>
            <Link 
              href={link("/for-canadians")} 
              className="text-muted-foreground hover:text-foreground transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t("For Canadians")}
            </Link>
            <Link 
              href={link("/about")} 
              className="text-muted-foreground hover:text-foreground transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t("About Haven")}
            </Link>
            <div className="py-2">
              <LanguageSwitcher />
            </div>
            <div className="flex flex-col gap-3 pt-4 border-t border-border">
              <Button variant="outline" asChild className="w-full">
                <Link href="https://app.findhaven.org">{t("Log in")}</Link>
              </Button>
              <Button asChild className="w-full">
                <Link href="https://app.findhaven.org">{t("Join Haven")}</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
