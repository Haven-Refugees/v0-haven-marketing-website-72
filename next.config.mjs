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
    ]
  },
}

export default nextConfig
