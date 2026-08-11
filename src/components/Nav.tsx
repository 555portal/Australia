'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const links = [
  { label: 'Home', href: '/' },
  { label: 'Resources', href: '/resources' },
  { label: 'Reports', href: '/reports' },
  { label: 'Partners', href: '/partners' },
  { label: 'Summit 2026 Recap', href: '/Summit26' },
  { label: 'FAQ', href: '/faq' },
]

export default function Nav({
  showCta = true,
  ctaLabel = 'Register',
  ctaHref = '/register',
}: {
  showCta?: boolean
  ctaLabel?: string
  ctaHref?: string
}) {
  const [open, setOpen] = useState(false)

  return (
    <nav>
      <a href="https://australia.mii.global" className="logo">
        <Image src="/logo.png" alt="MII" height={44} width={140} priority />
      </a>

      <div className="nav-links">
        {links.map((l) => (
          <Link key={l.href} href={l.href} className="nav-link">{l.label}</Link>
        ))}
        {showCta && <Link href={ctaHref} className="nav-cta">{ctaLabel}</Link>}
      </div>

      <button
        type="button"
        className={`nav-toggle${open ? ' nav-toggle--open' : ''}`}
        aria-label="Toggle menu"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
      >
        <span />
        <span />
        <span />
      </button>

      {open && (
        <div className="nav-mobile-menu">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="nav-mobile-link" onClick={() => setOpen(false)}>
              {l.label}
            </Link>
          ))}
          {showCta && (
            <Link href={ctaHref} className="nav-cta nav-mobile-cta" onClick={() => setOpen(false)}>
              {ctaLabel}
            </Link>
          )}
        </div>
      )}
    </nav>
  )
}
