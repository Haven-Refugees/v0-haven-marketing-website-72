"use client"

export const TRACKING_PARAM_NAMES = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
  "grsf",
] as const

export type TrackingParamName = (typeof TRACKING_PARAM_NAMES)[number]
export type TrackingParams = Partial<Record<TrackingParamName, string>>

const TRACKING_STORAGE_KEY = "haven_tracking_params"

function isBrowser(): boolean {
  return typeof window !== "undefined"
}

export function extractTrackingParamsFromSearch(search: string): TrackingParams {
  const params = new URLSearchParams(search)
  const result: TrackingParams = {}
  for (const name of TRACKING_PARAM_NAMES) {
    const value = params.get(name)
    if (value) {
      result[name] = value
    }
  }
  return result
}

export function getStoredTrackingParams(): TrackingParams {
  if (!isBrowser()) return {}
  try {
    const raw = window.sessionStorage.getItem(TRACKING_STORAGE_KEY)
    if (!raw) return {}
    const parsed: unknown = JSON.parse(raw)
    if (typeof parsed !== "object" || parsed === null) return {}
    const result: TrackingParams = {}
    for (const name of TRACKING_PARAM_NAMES) {
      const value = (parsed as Record<string, unknown>)[name]
      if (typeof value === "string" && value) {
        result[name] = value
      }
    }
    return result
  } catch {
    return {}
  }
}

export function captureTrackingParamsFromUrl(): TrackingParams {
  if (!isBrowser()) return {}
  const stored = getStoredTrackingParams()
  const fromUrl = extractTrackingParamsFromSearch(window.location.search)
  if (Object.keys(fromUrl).length === 0) {
    return stored
  }
  const merged: TrackingParams = { ...stored, ...fromUrl }
  try {
    window.sessionStorage.setItem(TRACKING_STORAGE_KEY, JSON.stringify(merged))
  } catch {
    // sessionStorage may be unavailable (e.g. private browsing); ignore.
  }
  return merged
}

export function appendTrackingParamsToUrl(url: string, params: TrackingParams): string {
  if (!url) return url
  const entries = Object.entries(params).filter(([, value]) => Boolean(value)) as Array<
    [TrackingParamName, string]
  >
  if (entries.length === 0) return url
  try {
    const isAbsolute = /^https?:\/\//i.test(url)
    const base = "https://placeholder.invalid"
    const parsed = new URL(url, isAbsolute ? undefined : base)
    for (const [key, value] of entries) {
      if (!parsed.searchParams.has(key)) {
        parsed.searchParams.set(key, value)
      }
    }
    if (isAbsolute) {
      return parsed.toString()
    }
    return `${parsed.pathname}${parsed.search}${parsed.hash}`
  } catch {
    return url
  }
}
