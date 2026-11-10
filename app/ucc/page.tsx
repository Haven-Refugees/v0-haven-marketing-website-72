import { redirect } from "next/navigation"

export default async function UccRoute({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
  const params = await searchParams
  const language = params.lang === "uk" ? "uk" : "en"
  const query = new URLSearchParams()

  for (const [key, value] of Object.entries(params)) {
    if (key === "lang" || value === undefined) continue
    if (Array.isArray(value)) {
      value.forEach((item) => query.append(key, item))
    } else {
      query.set(key, value)
    }
  }

  redirect(`/${language}/ucc${query.toString() ? `?${query.toString()}` : ""}`)
}
