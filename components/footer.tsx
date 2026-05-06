"use client"

import Link from "next/link"
import { Instagram, Linkedin, Facebook } from "lucide-react"
import { useTranslation } from "@/lib/i18n"

export function Footer() {
  const { t, link } = useTranslation()

  return (
    <footer className="bg-ink text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-5 gap-12 mb-12">
          {/* Logo and tagline */}
          <div className="md:col-span-2">
            <Link href={link("/")} className="flex items-center mb-4">
              <img 
                src="/images/haven-logo.png" 
                alt="Haven" 
                width={130}
                height={40}
              />
            </Link>
            <p className="font-body text-white/80 max-w-xs leading-relaxed mb-6">
              {t("We help refugees become independent in Canada faster.")}
            </p>
            <div className="flex items-center gap-3">
              <Link 
                href="https://instagram.com/havenrefugees" 
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-white" />
              </Link>
              <Link 
                href="https://linkedin.com/company/havenrefugees" 
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-white" />
              </Link>
              <Link 
                href="https://facebook.com/havenrefugees" 
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-white" />
              </Link>
            </div>
          </div>

          {/* For Newcomers */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white/50 mb-4">{t("For Newcomers")}</h4>
            <nav className="flex flex-col gap-3">
              <Link href={link("/newcomers")} className="font-body text-white/80 hover:text-white transition-colors">
                {t("How We Help")}
              </Link>
              <Link href={link("/hlp")} className="font-body text-white/80 hover:text-white transition-colors">
                {t("Haven Language Program")}
              </Link>
              
            </nav>
          </div>

          {/* For Canadians */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white/50 mb-4">{t("For Canadians")}</h4>
            <nav className="flex flex-col gap-3">
              <Link href={link("/canadians")} className="font-body text-white/80 hover:text-white transition-colors">
                {t("How You Can Help")}
              </Link>
            </nav>
          </div>

          {/* About Haven */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white/50 mb-4">{t("About Haven")}</h4>
            <nav className="flex flex-col gap-3">
              <Link href="https://v0-haven-marketing-website.vercel.app/en/our-vision" className="font-body text-white/80 hover:text-white transition-colors">
                {t("Our Vision")}
              </Link>
              <Link href="https://v0-haven-marketing-website.vercel.app/en/meet-the-team" className="font-body text-white/80 hover:text-white transition-colors">
                {t("Our Team")}
              </Link>
              <Link href="#" className="font-body text-white/80 hover:text-white transition-colors">
                {t("User Agreement")}
              </Link>
              <Link href="#" className="font-body text-white/80 hover:text-white transition-colors">
                {t("Privacy Policy")}
              </Link>
            </nav>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <p className="font-body text-white/50 text-sm">
              © {new Date().getFullYear()} Haven Refugees. {t("All rights reserved.")}
            </p>
            <p className="font-body text-white/50 text-sm">
              {t("Registered Canadian charity")} · CRA #758177547 RR 0001
            </p>
          </div>
          <p className="font-body text-white/50 text-sm">
            {t("Questions?")}{" "}
            <Link href="mailto:info@findhaven.org" className="text-white hover:underline">
              info@findhaven.org
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
