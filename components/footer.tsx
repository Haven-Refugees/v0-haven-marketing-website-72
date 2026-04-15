import Link from "next/link"
import { Instagram, Linkedin, Facebook } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#1e2a3a] text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-5 gap-12 mb-12">
          {/* Logo and tagline */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center mb-4">
              <img 
                src="/images/haven-logo.png" 
                alt="Haven" 
                width={130}
                height={40}
                className="brightness-0 invert"
              />
            </Link>
            <p className="text-gray-400 max-w-xs leading-relaxed mb-6">
              Helping newcomers become independent in Canada. Making it easier for Canadians to help.
            </p>
            <div className="flex items-center gap-3">
              <Link 
                href="https://instagram.com/havenrefugees" 
                className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-gray-600 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-white" />
              </Link>
              <Link 
                href="https://linkedin.com/company/havenrefugees" 
                className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-gray-600 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-white" />
              </Link>
              <Link 
                href="https://facebook.com/havenrefugees" 
                className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-gray-600 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-white" />
              </Link>
            </div>
          </div>

          {/* For Newcomers */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-4">For Newcomers</h4>
            <nav className="flex flex-col gap-3">
              <Link href="#how-haven-helps" className="text-white hover:text-gray-300 transition-colors">
                How we help
              </Link>
              <Link href="#how-haven-helps" className="text-white hover:text-gray-300 transition-colors">
                Haven Language Program
              </Link>
              <Link href="#how-haven-helps" className="text-white hover:text-gray-300 transition-colors">
                Haven Connect
              </Link>
            </nav>
          </div>

          {/* For Canadians */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-4">For Canadians</h4>
            <nav className="flex flex-col gap-3">
              <Link href="#how-haven-helps" className="text-white hover:text-gray-300 transition-colors">
                How you can help
              </Link>
            </nav>
          </div>

          {/* About Haven */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-4">About Haven</h4>
            <nav className="flex flex-col gap-3">
              <Link href="#" className="text-white hover:text-gray-300 transition-colors">
                Our vision
              </Link>
              <Link href="#" className="text-white hover:text-gray-300 transition-colors">
                Our team
              </Link>
              <Link href="#" className="text-white hover:text-gray-300 transition-colors">
                User agreement
              </Link>
              <Link href="#" className="text-white hover:text-gray-300 transition-colors">
                Privacy policy
              </Link>
            </nav>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Haven Refugees. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm">
              Registered Canadian charity · CRA #758177547 RR 0001
            </p>
          </div>
          <p className="text-gray-400 text-sm">
            Questions?{" "}
            <Link href="mailto:info@findhaven.org" className="text-white hover:underline">
              info@findhaven.org
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
