"use client"

import { createContext, useContext, type ReactNode } from "react"
import { defaultLocale } from "./i18n-config"
import type { Locale } from "./i18n-config"

export { locales, defaultLocale, localeNames, rtlLocales, isValidLocale } from "./i18n-config"
export type { Locale } from "./i18n-config"

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
