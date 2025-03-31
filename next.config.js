/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.vectorlogo.zone',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.worldvectorlogo.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'wikipedia.org',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'seaborn.pydata.org',
        pathname: '/**',
      }
    ],
  },
}

module.exports = nextConfig 