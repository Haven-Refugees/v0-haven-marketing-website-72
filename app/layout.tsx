import type { Metadata } from 'next'
import { DM_Sans, DM_Serif_Display, Montserrat } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { headers } from 'next/headers'
import { defaultLocale, rtlLocales, isValidLocale, type Locale } from '@/lib/i18n-config'
import './globals.css'

const dmSans = DM_Sans({ 
  subsets: ["latin"],
  variable: '--font-dm-sans',
});

const dmSerif = DM_Serif_Display({ 
  weight: '400',
  subsets: ["latin"],
  variable: '--font-dm-serif',
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: '--font-montserrat',
});

export const metadata: Metadata = {
  title: 'Haven | Refugee Resettlement Canada',
  description: 'Haven is a registered Canadian charity that makes it easier for Canadians to help refugees start life in Canada through language practice, networking, and community building.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const headersList = await headers()
  const localeHeader = headersList.get("x-locale") || ""
  const locale: Locale = isValidLocale(localeHeader) ? localeHeader : defaultLocale
  const dir = rtlLocales.includes(locale) ? "rtl" : "ltr"

  return (
    <html lang={locale} dir={dir} className="bg-background">
      <body className={`${dmSans.variable} ${dmSerif.variable} ${montserrat.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
