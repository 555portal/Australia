import Image from 'next/image'

export default function Footer() {
  return (
    <footer>
      <Image src="/logo.png" alt="MII" height={32} width={100} />
      <div className="footer-right">
        <a href="https://mii.global" target="_blank" rel="noopener noreferrer">mii.global</a>
        <a href="mailto:australia@mii.global">australia@mii.global</a>
      </div>
    </footer>
  )
}
