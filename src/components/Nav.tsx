import Image from 'next/image'
import Link from 'next/link'

export default function Nav({ showCta = true }: { showCta?: boolean }) {
  return (
    <nav>
      <a href="https://australia.mii.global" className="logo">
        <Image src="/logo.png" alt="MII" height={44} width={140} priority />
      </a>
      {showCta && <Link href="/july" className="nav-cta">July Summit</Link>}
    </nav>
  )
}
