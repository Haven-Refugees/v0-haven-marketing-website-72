import { notFound } from "next/navigation"
import { isValidLocale, rtlLocales, type Locale } from "@/lib/i18n"
import { getDictionary } from "@/lib/get-dictionary"
import { TranslationProvider } from "@/lib/i18n"

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  if (!isValidLocale(locale)) {
    notFound()
  }

  const dictionary = await getDictionary(locale as Locale)

  return (
    <TranslationProvider locale={locale as Locale} dictionary={dictionary}>
      {children}
    </TranslationProvider>
  )
}
