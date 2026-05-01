"use client"

import { useTranslation, locales, localeNames, type Locale } from "@/lib/i18n"
import { Globe } from "lucide-react"
import { useState, useRef, useEffect } from "react"
import { usePathname } from "next/navigation"

export function LanguageSwitcher() {
  const { locale } = useTranslation()
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  function switchLocale(newLocale: Locale) {
    const pathWithoutLocale = pathname.replace(`/${locale}`, "") || "/"
    window.location.href = `/${newLocale}${pathWithoutLocale}`
  }

  return (
    <div className="relative" ref={ref}>
      <button
        className="flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors"
        onClick={() => setOpen(!open)}
        aria-label="Language"
      >
        <Globe className="w-5 h-5" />
        <span className="text-sm uppercase">{locale}</span>
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-2 bg-background border border-border rounded-lg shadow-lg py-1 min-w-[160px] z-50">
          {locales.map((loc) => (
            <button
              key={loc}
              onClick={() => {
                switchLocale(loc)
                setOpen(false)
              }}
              className={`w-full text-left px-4 py-2 text-sm hover:bg-muted transition-colors ${
                loc === locale ? "font-semibold text-foreground" : "text-muted-foreground"
              }`}
            >
              {localeNames[loc]}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
