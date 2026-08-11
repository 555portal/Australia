import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import FaqAccordion from '@/components/FaqAccordion'

export const metadata: Metadata = {
  title: 'FAQ | MII Australia',
  description: 'Answers to common questions about partnering with MII Australia and the Follow-Up Centre.',
}

export default function FaqPage() {
  return (
    <>
      <Nav />
      <section className="section" style={{ background: 'white' }}>
        <div className="section-inner">
          <div className="section-tag">FAQ</div>
          <h2>Questions, answered.</h2>
          <p className="lead">
            Everything you need to know about partnering with MII Australia. Can&rsquo;t find what
            you&rsquo;re looking for? Reach out at{' '}
            <a href="mailto:australia@mii.global" style={{ color: 'var(--blue)' }}>australia@mii.global</a>.
          </p>
          <FaqAccordion />
        </div>
      </section>
      <Footer />
    </>
  )
}
