import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Australia Kingdom Growth Initiative — MII',
  description: 'A world-class, year-long program equipping Australian churches and parachurch organisations with the training, technology, and coaching to reach, engage, and disciple people online.',
  openGraph: {
    title: 'Australia Kingdom Growth Initiative — MII',
    description: 'Transform your digital ministry in one year. Register your expression of interest for the 2026 cohort.',
    url: 'https://mii.global',
    siteName: 'Media Impact International',
    images: [{ url: '/hero.jpg', width: 1280, height: 853 }],
    locale: 'en_AU',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
