import type { Metadata } from "next"
import { redirect } from "next/navigation"
import { UccPage } from "@/components/ucc-page"
import type { Locale } from "@/lib/i18n-config"

const pageMetadata = {
  en: {
    title: "Improve Your English with Haven | Haven x UCC",
    description: "Improve your English in Canada with Haven and the Ukrainian Canadian Congress.",
  },
  uk: {
    title: "Покращуйте англійську з Haven | Haven x UCC",
    description: "Покращуйте англійську в Канаді разом із Haven і Конгресом українців Канади.",
  },
} as const

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const language = locale === "uk" ? "uk" : "en"
  return {
    ...pageMetadata[language],
    alternates: {
      canonical: `/${language}/ucc`,
      languages: {
        en: "/en/ucc",
        uk: "/uk/ucc",
        "x-default": "/en/ucc",
      },
    },
  }
}

export default async function UccRoute({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  if (locale !== "en" && locale !== "uk") redirect("/en/ucc")
  return <UccPage locale={locale as Extract<Locale, "en" | "uk">} />
}
