import Image from 'next/image'
import Link from 'next/link'

export default function Nav() {
  return (
    <nav>
      <div className="logo">
        <Image src="/logo.png" alt="MII" height={44} width={140} priority />
      </div>
      <Link href="#eoi" className="nav-cta">Express Interest</Link>
    </nav>
  )
}
