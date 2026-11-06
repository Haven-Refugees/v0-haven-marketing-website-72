import type { Metadata } from "next"
import { UccPage } from "@/components/ucc-page"

export const metadata: Metadata = {
  title: "Ukrainian Language Program | Haven x UCC",
  description: "Improve your English in Canada with Haven and the Ukrainian Canadian Congress.",
}

export default function UkrainianUccRoute() {
  return <UccPage initialLanguage="uk" />
}
