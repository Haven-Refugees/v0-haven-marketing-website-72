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
        source: '/tbb/signup',
        destination: 'https://app.findhaven.org/signup?usertype=refugee&utm_campaign=referral&utm_source=tbb&utm_medium=website',
        permanent: false,
      },
      {
        source: '/tbb',
        destination: 'https://www.findhaven.org/en/language-refugees?utm_campaign=referral&utm_source=tbb&utm_medium=website',
        permanent: false,
      },
      {
        source: '/tbb/refer',
        destination: 'https://docs.google.com/forms/d/e/1FAIpQLSfMB2bFLajqI6m0sECV_vHvVpQYN-UYqYlSarklb3EfNYCffQ/viewform?usp=pp_url&entry.485285477=Talent+Beyond+Boundaries+(TBB)',
        permanent: false,
      },
      {
        source: '/refer/reception-house',
        destination: 'https://docs.google.com/forms/d/e/1FAIpQLSe69UuHkO1SyCNrPfB3ooc2Gx5t2sTQJe5MxB9zYVF31AVLYw/viewform?usp=pp_url&entry.485285477=Reception+House+Waterloo+Region',
        permanent: false,
      },
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
