"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from "lucide-react"
import { useState } from "react"
import { useTranslation } from "@/lib/i18n"
import { LanguageSwitcher } from "@/components/language-switcher"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [aboutOpen, setAboutOpen] = useState(false)
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
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger asChild className="h-auto p-0 bg-transparent text-muted-foreground hover:text-foreground hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent data-[state=open]:hover:bg-transparent data-[state=open]:focus:bg-transparent data-[state=open]:text-foreground font-normal text-base">
                  <Link href={link("/our-vision")}>
                    {t("About Haven")}
                  </Link>
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="w-48 p-2">
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          href={link("/our-vision")}
                          className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">{t("Our Vision")}</div>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          href={link("/meet-the-team")}
                          className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">{t("Meet the Team")}</div>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
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
            <div>
              <button
                onClick={() => setAboutOpen(!aboutOpen)}
                className="flex items-center justify-between w-full text-muted-foreground hover:text-foreground transition-colors py-2"
              >
                {t("About Haven")}
                <ChevronDown className={`w-4 h-4 transition-transform ${aboutOpen ? "rotate-180" : ""}`} />
              </button>
              {aboutOpen && (
                <div className="pl-4 flex flex-col gap-2 mt-2">
                  <Link
                    href={link("/our-vision")}
                    className="text-muted-foreground hover:text-foreground transition-colors py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {t("Our Vision")}
                  </Link>
                  <Link
                    href={link("/meet-the-team")}
                    className="text-muted-foreground hover:text-foreground transition-colors py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {t("Meet the Team")}
                  </Link>
                </div>
              )}
            </div>
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
