import type { Metadata } from 'next'
import { Inter, Montserrat, Roboto_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import Script from 'next/script'
import { headers } from 'next/headers'
import { defaultLocale, rtlLocales, isValidLocale, type Locale } from '@/lib/i18n-config'
import { TrackingProvider } from '@/components/tracking-provider'
import { CookieConsent } from '@/components/cookie-consent'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: '--font-montserrat',
});

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: '--font-roboto-mono',
});

export const metadata: Metadata = {
  title: 'Haven | Refugee Resettlement Canada',
  description: 'Haven is a registered Canadian charity that makes it easier for Canadians to help refugees start life in Canada through language practice, networking, and community building.',
  generator: 'v0.app',
  icons: {
    icon: '/favicon.ico',
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
      <head>
        {/* Facebook Pixel */}
        <Script id="facebook-pixel" strategy="afterInteractive">{`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '795925732829678');
          fbq('track', 'PageView');
        `}</Script>
        <noscript>
          <img height="1" width="1" style={{display: 'none'}}
            src="https://www.facebook.com/tr?id=795925732829678&ev=PageView&noscript=1"
          />
        </noscript>

        {/* Google Tag Manager */}
        <Script id="gtm" strategy="afterInteractive">{`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-5BPLZSV');
        `}</Script>

        {/* GrowSurf - Campaign kstoaf */}
        <Script id="growsurf-kstoaf" strategy="afterInteractive">{`
          (function(g,r,s,f){g.grsfSettings={campaignId:"kstoaf",version:"2.0.0"};s=r.getElementsByTagName("head")[0];f=r.createElement("script");f.async=1;f.src="https://app.growsurf.com/growsurf.js"+"?v="+g.grsfSettings.version;f.setAttribute("grsf-campaign", g.grsfSettings.campaignId);!g.grsfInit?s.appendChild(f):"";})(window,document);
        `}</Script>
      </head>
      <body className={`${inter.variable} ${montserrat.variable} ${robotoMono.variable} font-sans antialiased`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5BPLZSV"
            height="0" width="0" style={{display: 'none', visibility: 'hidden'}} />
        </noscript>
        <TrackingProvider>
          {children}
          <CookieConsent />
        </TrackingProvider>
        <Analytics />
      </body>
    </html>
  )
}
