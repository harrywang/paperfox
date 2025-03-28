/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: '2mb',
    },
  },
  eslint: {
    // Only check our application code
    dirs: ['app', 'components', 'lib', 'types', 'prisma'],
  },
}

module.exports = nextConfig 