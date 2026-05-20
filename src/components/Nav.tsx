import Image from 'next/image'
import Link from 'next/link'

export default function Nav() {
  return (
    <nav>
      <a href="https://australia.mii.global" className="logo">
        <Image src="/logo.png" alt="MII" height={44} width={140} priority />
      </a>
      <Link href="#eoi" className="nav-cta">Express Interest</Link>
    </nav>
  )
}
