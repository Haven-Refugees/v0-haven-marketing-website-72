import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { UccPage } from "@/components/ucc-page"

export const metadata: Metadata = {
  title: "Ukrainian Language Program | Haven x UCC",
  description: "Improve your English in Canada with Haven and the Ukrainian Canadian Congress.",
}

export default async function UccRoute({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  if (locale !== "en" && locale !== "uk") notFound()

  return <UccPage initialLanguage={locale} />
}
