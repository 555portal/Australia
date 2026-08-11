import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Reports | MII Australia',
  description: 'Impact reports for MII Australia, coming soon.',
}

export default function ReportsPage() {
  return (
    <>
      <Nav />
      <section className="section coming-soon" style={{ background: 'white' }}>
        <div className="section-inner coming-soon-inner">
          <div className="section-tag">Reports</div>
          <h2>We&rsquo;re building this out.</h2>
          <p className="lead">
            Impact reports for MII Australia are coming soon. Have a question about our numbers
            in the meantime? Reach out at{' '}
            <a href="mailto:australia@mii.global" style={{ color: 'var(--blue)' }}>australia@mii.global</a>.
          </p>
        </div>
      </section>
      <Footer />
    </>
  )
}
