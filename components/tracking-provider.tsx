"use client"

import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from "react"
import {
  appendTrackingParamsToUrl,
  captureTrackingParamsFromUrl,
  type TrackingParams,
} from "@/lib/tracking"

interface TrackingContextValue {
  params: TrackingParams
  withTracking: (url: string) => string
}

const TrackingContext = createContext<TrackingContextValue>({
  params: {},
  withTracking: (url) => url,
})

export function TrackingProvider({ children }: { children: ReactNode }) {
  const [params, setParams] = useState<TrackingParams>({})

  useEffect(() => {
    setParams(captureTrackingParamsFromUrl())
  }, [])

  const withTracking = useCallback(
    (url: string) => appendTrackingParamsToUrl(url, params),
    [params],
  )

  return (
    <TrackingContext.Provider value={{ params, withTracking }}>
      {children}
    </TrackingContext.Provider>
  )
}

export function useTracking() {
  return useContext(TrackingContext)
}

export function useTrackingLink() {
  return useContext(TrackingContext).withTracking
}
