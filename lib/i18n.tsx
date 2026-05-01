"use client"

import { createContext, useContext, type ReactNode } from "react"

export const locales = ["en", "fr", "ar", "uk", "es", "pt"] as const
export type Locale = (typeof locales)[number]
export const defaultLocale: Locale = "en"

export const localeNames: Record<Locale, string> = {
  en: "English",
  fr: "Français",
  ar: "العربية",
  uk: "Українська",
  es: "Español",
  pt: "Português",
}

export const rtlLocales: Locale[] = ["ar"]

export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale)
}

type Dictionary = Record<string, string>

interface TranslationContextValue {
  locale: Locale
  t: (key: string) => string
  link: (path: string) => string
}

const TranslationContext = createContext<TranslationContextValue>({
  locale: defaultLocale,
  t: (key) => key,
  link: (path) => path,
})

export function TranslationProvider({
  locale,
  dictionary,
  children,
}: {
  locale: Locale
  dictionary: Dictionary
  children: ReactNode
}) {
  const t = (key: string): string => {
    if (locale === defaultLocale) return key
    return dictionary[key] || key
  }

  const link = (path: string): string => {
    if (path.startsWith("http")) return path
    const cleanPath = path.startsWith("/") ? path : `/${path}`
    return `/${locale}${cleanPath}`
  }

  return (
    <TranslationContext.Provider value={{ locale, t, link }}>
      {children}
    </TranslationContext.Provider>
  )
}

export function useTranslation() {
  return useContext(TranslationContext)
}
