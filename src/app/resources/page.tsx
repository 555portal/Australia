import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Resources | MII Australia',
  description: 'Resources for MII Australia ministry partners: Summit 2026 presentations and the MII Podcast.',
}

const items = [
  {
    title: 'Summit 2026 Recap',
    body: 'Presentations and photos from the Digital Pathways Summit, Australia’s first event of its kind, covering digital evangelism, content strategy, and follow-up.',
    href: '/Summit26',
    cta: 'View the recap',
    external: false,
  },
  {
    title: 'MII Podcast',
    body: 'Conversations from the MII team on digital evangelism, follow-up, and reaching people online. A great place to go deeper between sessions.',
    href: 'https://www.mii.global/podcast',
    cta: 'Listen now',
    external: true,
  },
]

export default function ResourcesPage() {
  return (
    <>
      <Nav />
      <section className="section" style={{ background: 'white' }}>
        <div className="section-inner">
          <div className="section-tag">Resources</div>
          <h2>Resources for your ministry.</h2>
          <p className="lead">
            A growing collection of resources to help your ministry reach people online and
            follow up well.
          </p>
          <div className="audience-grid">
            {items.map((item) => (
              <div className="audience-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
                {item.external ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: 'var(--blue)', fontWeight: 600 }}
                  >
                    {item.cta} →
                  </a>
                ) : (
                  <Link href={item.href} style={{ color: 'var(--blue)', fontWeight: 600 }}>
                    {item.cta} →
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
