import Image from 'next/image'
import Link from 'next/link'

export default function Nav({
  showCta = true,
  ctaLabel = 'Summit Resources',
  ctaHref = '/july',
}: {
  showCta?: boolean
  ctaLabel?: string
  ctaHref?: string
}) {
  return (
    <nav>
      <a href="https://australia.mii.global" className="logo">
        <Image src="/logo.png" alt="MII" height={44} width={140} priority />
      </a>
      {showCta && <Link href={ctaHref} className="nav-cta">{ctaLabel}</Link>}
    </nav>
  )
}
