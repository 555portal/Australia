import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Resources | MII Australia',
  description: 'Resources for MII Australia ministry partners — coming soon.',
}

export default function ResourcesPage() {
  return (
    <>
      <Nav />
      <section className="section coming-soon" style={{ background: 'white' }}>
        <div className="section-inner coming-soon-inner">
          <div className="section-tag">Resources</div>
          <h2>We&rsquo;re building this out.</h2>
          <p className="lead">
            A library of resources for ministry partners is coming soon. In the meantime, check
            out the presentations and materials from{' '}
            <Link href="/Summit26" style={{ color: 'var(--blue)' }}>Summit 2026</Link>.
          </p>
        </div>
      </section>
      <Footer />
    </>
  )
}
