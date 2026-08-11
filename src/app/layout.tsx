import type { Metadata } from 'next'
import { GoogleAnalytics } from '@next/third-parties/google'
import './globals.css'

export const metadata: Metadata = {
  title: 'Media Impact International',
  description: 'Australia\'s Digital Hub — helping churches and ministries reach seekers online, walk with them through the Follow-Up Centre, and connect them to real Christian community.',
  openGraph: {
    title: 'Media Impact International',
    description: 'Australia\'s Digital Hub — outreach, follow-up, and connection to real Christian community.',
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
      <GoogleAnalytics gaId="G-N6NYC7CHL5" />
    </html>
  )
}
