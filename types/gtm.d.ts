/* eslint-disable @typescript-eslint/no-explicit-any */
interface Window {
  dataLayer: any[]
  fbq: (...args: any[]) => void
}
