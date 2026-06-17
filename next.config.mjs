/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Reverse-proxy PostHog through /ingest to reduce ad-blocker loss
  // (mirrors the app at app.findhaven.org).
  async rewrites() {
    return [
      {
        source: '/ingest/static/:path*',
        destination: 'https://us-assets.i.posthog.com/static/:path*',
      },
      {
        source: '/ingest/:path*',
        destination: 'https://us.i.posthog.com/:path*',
      },
      {
        source: '/ingest/decide',
        destination: 'https://us.i.posthog.com/decide',
      },
    ]
  },
  skipTrailingSlashRedirect: true,
  async redirects() {
    return [
      {
        source: '/partnerships',
        destination: '/language-refugees',
        permanent: true,
      },
      {
        source: '/donate',
        destination: '/for-canadians',
        permanent: true,
      },
      {
        source: '/success',
        destination: '/for-canadians',
        permanent: true,
      },
      {
        source: '/ukrainian-hlp',
        destination: '/uk/language-refugees',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
