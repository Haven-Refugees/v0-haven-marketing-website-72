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
        source: '/irc',
        destination: 'https://www.findhaven.org/en/language-refugees?utm_campaign=referral&utm_source=irc&utm_medium=website',
        permanent: false,
      },
      {
        source: '/irc/signup',
        destination: 'https://app.findhaven.org/signup?usertype=refugee&utm_campaign=referral&utm_source=irc&utm_medium=website',
        permanent: false,
      },
      {
        source: '/irc/refer',
        destination: 'https://docs.google.com/forms/d/e/1FAIpQLScmRPuqjkuJRQediBKlex0Yc_TWb4hNLNWnrnIjKpLEt7X6Jw/viewform?usp=pp_url&entry.485285477=Islamic+Relief+Canada+%28IRC%29',
        permanent: false,
      },
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
        source: '/lepont/refer',
        destination: 'https://docs.google.com/forms/d/e/1FAIpQLSehllWRLju39rj3kB32o-xqHALxE5PizF0pWc02KsGpQCXuUw/viewform?usp=pp_url&entry.485285477=Le+Pont',
        permanent: false,
      },
      {
        source: '/lepont',
        destination: 'https://www.findhaven.org/en/language-refugees?utm_campaign=referral&utm_source=lepont&utm_medium=website',
        permanent: false,
      },
      {
        source: '/lepont/signup',
        destination: 'https://app.findhaven.org/signup?usertype=refugee&utm_campaign=referral&utm_source=lepont&utm_medium=website',
        permanent: false,
      },
      {
        source: '/f4pf/refer',
        destination: 'https://docs.google.com/forms/d/e/1FAIpQLScFtrkojEEqYtEXt6cGGjbKxzLqa7aqknCS0054SFILjqXO-A/viewform?usp=pp_url&entry.485285477=Foundation+for+a+Path+Forward+(F4PF)',
        permanent: false,
      },
      {
        source: '/f4pf',
        destination: 'https://www.findhaven.org/en/language-refugees?utm_campaign=referral&utm_source=f4pf&utm_medium=website',
        permanent: false,
      },
      {
        source: '/f4pf/signup',
        destination: 'https://app.findhaven.org/signup?usertype=refugee&utm_campaign=referral&utm_source=f4pf&utm_medium=website',
        permanent: false,
      },
      {
        source: '/lef/refer',
        destination: 'https://docs.google.com/forms/d/e/1FAIpQLSf8ljuqY5PpPQJf5D6d2EnH5v5iHWIV3-1mrHSvzQZEZSRI1Q/viewform?usp=pp_url&entry.485285477=The+Learning+Enrichment+Foundation+(LEF)',
        permanent: false,
      },
      {
        source: '/lef',
        destination: 'https://www.findhaven.org/en/language-refugees?utm_campaign=referral&utm_source=lef&utm_medium=website',
        permanent: false,
      },
      {
        source: '/lef/signup',
        destination: 'https://app.findhaven.org/signup?usertype=refugee&utm_campaign=referral&utm_source=lef&utm_medium=website',
        permanent: false,
      },
      {
        source: '/isans/refer',
        destination: 'https://docs.google.com/forms/d/e/1FAIpQLSeSfRmM5r_yw6rjU-Ri306il7K5RXYaoOKl-3CKclt4FzSrJw/viewform?usp=pp_url&entry.485285477=Immigrant+Services+Association+of+Nova+Scotia+(ISANS)',
        permanent: false,
      },
      {
        source: '/isans',
        destination: 'https://www.findhaven.org/en/language-refugees?utm_campaign=referral&utm_source=isans&utm_medium=website',
        permanent: false,
      },
      {
        source: '/isans/signup',
        destination: 'https://app.findhaven.org/signup?usertype=refugee&utm_campaign=referral&utm_source=isans&utm_medium=website',
        permanent: false,
      },
      {
        source: '/newbornlander/refer',
        destination: 'https://docs.google.com/forms/d/e/1FAIpQLSfBkzGyiCgs8zWfux49uBWKdyxf-biAFO-Xg7YuBol5hqSDiw/viewform?usp=pp_url&entry.485285477=Newbornlander',
        permanent: false,
      },
      {
        source: '/newbornlander',
        destination: 'https://www.findhaven.org/en/language-refugees?utm_campaign=referral&utm_source=newbornlander&utm_medium=website',
        permanent: false,
      },
      {
        source: '/newbornlander/signup',
        destination: 'https://app.findhaven.org/signup?usertype=refugee&utm_campaign=referral&utm_source=newbornlander&utm_medium=website',
        permanent: false,
      },
      {
        source: '/isc',
        destination: 'https://www.findhaven.org/en/language-refugees?utm_campaign=referral&utm_source=isc&utm_medium=website',
        permanent: false,
      },
      {
        source: '/isc/signup',
        destination: 'https://app.findhaven.org/signup?usertype=refugee&utm_campaign=referral&utm_source=isc&utm_medium=website',
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
