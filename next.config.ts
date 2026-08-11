import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/july',
        destination: '/Summit26',
        permanent: false,
      },
    ]
  },
}

export default nextConfig
