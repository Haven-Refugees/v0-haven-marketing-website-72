export const locales = ["en", "fr", "ar", "uk", "es", "fa"] as const
export type Locale = (typeof locales)[number]
export const defaultLocale: Locale = "en"

export const localeNames: Record<Locale, string> = {
  en: "English",
  fr: "Français",
  ar: "العربية",
  uk: "Українська",
  es: "Español",
  fa: "فارسی",
}

export const rtlLocales: Locale[] = ["ar", "fa"]

export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale)
}
