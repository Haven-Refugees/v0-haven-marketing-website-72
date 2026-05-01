import type { Locale } from "./i18n-config"

const dictionaries: Record<string, () => Promise<Record<string, string>>> = {
  fr: () => import("@/messages/fr.json").then((m) => m.default),
  ar: () => import("@/messages/ar.json").then((m) => m.default),
  uk: () => import("@/messages/uk.json").then((m) => m.default),
  es: () => import("@/messages/es.json").then((m) => m.default),
  pt: () => import("@/messages/pt.json").then((m) => m.default),
}

export async function getDictionary(locale: Locale): Promise<Record<string, string>> {
  if (locale === "en") return {}
  const loader = dictionaries[locale]
  if (!loader) return {}
  return loader()
}
