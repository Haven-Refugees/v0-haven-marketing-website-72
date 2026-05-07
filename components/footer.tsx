"use client"

import Link from "next/link"
import { Instagram, Linkedin, Facebook } from "lucide-react"
import { useTranslation } from "@/lib/i18n"

export function Footer() {
  const { t, link } = useTranslation()

  return (
    <footer className="bg-ink text-white py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-12 mb-8 md:mb-12">
          {/* Logo and tagline */}
          <div className="col-span-2 md:col-span-2">
            <Link href={link("/")} className="flex items-center justify-center md:justify-start mb-4">
              <img 
                src="/images/haven-logo.png" 
                alt="Haven" 
                width={130}
                height={40}
              />
            </Link>
            <p className="font-body text-white/80 max-w-xs leading-relaxed mb-6 text-center md:text-left mx-auto md:mx-0 text-sm md:text-base">
              {t("We help refugees become independent in Canada faster.")}
            </p>
            <div className="flex items-center justify-center md:justify-start gap-3">
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
                href="https://www.facebook.com/people/Haven-Refugees/100091991002682/" 
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-white" />
              </Link>
            </div>
          </div>

          {/* For Newcomers */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white/50 mb-3 md:mb-4">{t("For Newcomers")}</h4>
            <nav className="flex flex-col gap-2 md:gap-3">
              <Link href={link("/newcomers")} className="font-body text-white/80 hover:text-white transition-colors text-sm md:text-base">
                {t("How We Help")}
              </Link>
              <Link href={link("/hlp")} className="font-body text-white/80 hover:text-white transition-colors text-sm md:text-base">
                {t("Haven Language Program")}
              </Link>
              
            </nav>
          </div>

          {/* For Canadians */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white/50 mb-3 md:mb-4">{t("For Canadians")}</h4>
            <nav className="flex flex-col gap-2 md:gap-3">
              <Link href={link("/canadians")} className="font-body text-white/80 hover:text-white transition-colors text-sm md:text-base">
                {t("How You Can Help")}
              </Link>
            </nav>
          </div>

          {/* About Haven */}
          <div className="col-span-2 md:col-span-1">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white/50 mb-3 md:mb-4">{t("About Haven")}</h4>
            <nav className="flex flex-col gap-2 md:gap-3">
              <Link href="https://v0-haven-marketing-website.vercel.app/en/our-vision" className="font-body text-white/80 hover:text-white transition-colors text-sm md:text-base">
                {t("Our Vision")}
              </Link>
              <Link href="https://v0-haven-marketing-website.vercel.app/en/meet-the-team" className="font-body text-white/80 hover:text-white transition-colors text-sm md:text-base">
                {t("Our Team")}
              </Link>
              <Link href="#" className="font-body text-white/80 hover:text-white transition-colors text-sm md:text-base">
                {t("User Agreement")}
              </Link>
              <Link href="#" className="font-body text-white/80 hover:text-white transition-colors text-sm md:text-base">
                {t("Privacy Policy")}
              </Link>
            </nav>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center md:items-center gap-4 text-center md:text-left">
          <div>
            <p className="font-body text-white/50 text-xs md:text-sm">
              © {new Date().getFullYear()} Haven Refugees. {t("All rights reserved.")}
            </p>
            <p className="font-body text-white/50 text-xs md:text-sm">
              {t("Registered Canadian charity")} · CRA #758177547 RR 0001
            </p>
          </div>
          <p className="font-body text-white/50 text-xs md:text-sm">
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
