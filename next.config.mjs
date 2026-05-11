/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
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
