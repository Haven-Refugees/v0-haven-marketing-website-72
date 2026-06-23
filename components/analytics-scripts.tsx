"use client"

import Script from "next/script"
import { useEffect, useState } from "react"

const CONSENT_KEY = "haven-cookie-consent"

/**
 * GTM + Google Consent Mode v2 — always rendered so GA/Ads tags are
 * detected by Google's tag validator regardless of cookie consent.
 * Actual data collection only starts after the visitor grants consent.
 */
export function GoogleTagManager() {
  return (
    <>
      {/* Consent-mode defaults (must run before gtm.js) */}
      <Script id="gtm-consent-defaults" strategy="beforeInteractive">{`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('consent', 'default', {
          ad_storage:        'denied',
          ad_user_data:      'denied',
          ad_personalization: 'denied',
          analytics_storage: 'denied',
          wait_for_update:   500
        });
      `}</Script>

      {/* Google Tag Manager */}
      <Script id="gtm" strategy="afterInteractive">{`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-5BPLZSV');
      `}</Script>

      {/* Google Tag Manager (noscript) */}
      <noscript>
        <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5BPLZSV"
          height="0" width="0" style={{display: "none", visibility: "hidden"}} />
      </noscript>
    </>
  )
}

/**
 * Facebook Pixel with consent mode — always rendered so the pixel is
 * detected, but tracking is revoked until the visitor grants consent.
 */
export function FacebookPixel() {
  return (
    <>
      <Script id="facebook-pixel" strategy="afterInteractive">{`
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('consent', 'revoke');
        fbq('init', '795925732829678');
        fbq('track', 'PageView');
      `}</Script>
      <noscript>
        <img height="1" width="1" style={{display: "none"}}
          src="https://www.facebook.com/tr?id=795925732829678&ev=PageView&noscript=1"
        />
      </noscript>
    </>
  )
}

/** Scripts with no consent API — loaded only after consent. */
export function ConsentGatedScripts() {
  const [allowed, setAllowed] = useState(false)

  useEffect(() => {
    const check = () => {
      setAllowed(localStorage.getItem(CONSENT_KEY) === "all")
    }
    check()

    const onConsent = () => check()
    window.addEventListener("cookie-consent-change", onConsent)
    return () => window.removeEventListener("cookie-consent-change", onConsent)
  }, [])

  if (!allowed) return null

  return (
    <>
      {/* GrowSurf - Campaign kstoaf */}
      <Script id="growsurf-kstoaf" strategy="afterInteractive">{`
        (function(g,r,s,f){g.grsfSettings={campaignId:"kstoaf",version:"2.0.0"};s=r.getElementsByTagName("head")[0];f=r.createElement("script");f.async=1;f.src="https://app.growsurf.com/growsurf.js"+"?v="+g.grsfSettings.version;f.setAttribute("grsf-campaign", g.grsfSettings.campaignId);!g.grsfInit?s.appendChild(f):"";})(window,document);
      `}</Script>
    </>
  )
}
