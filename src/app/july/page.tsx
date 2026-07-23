import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import FollowUpForm from '@/components/FollowUpForm'

export const metadata: Metadata = {
  title: 'Melbourne Workshop — July 21–23 | MII Australia',
  description: 'Follow Up Centre registration and resources for Melbourne Workshop attendees.',
}

export default function JulyWorkshop() {
  return (
    <>
      <Nav showCta={false} />

      {/* HERO */}
      <section className="workshop-hero" style={{ minHeight: '280px' }}>
        <div className="workshop-hero-bg" />
        <div className="workshop-hero-overlay" />
        <div className="workshop-hero-body" style={{ paddingBottom: '48px' }}>
          <div className="eyebrow">Melbourne, Australia &nbsp;·&nbsp; July 21–23, 2026</div>
          <h1>
            Digital Evangelism<br />
            <span className="accent">Workshop</span>
          </h1>
        </div>
      </section>

      {/* FOLLOW UP CENTRE REGISTRATION */}
      <FollowUpForm />

      {/* RESOURCES — coming soon */}
      <section className="section" style={{ background: 'var(--off-white)' }}>
        <div className="section-inner">
          <div className="section-tag">Resources</div>
          <h2>Summit resources.</h2>
          <p className="lead">
            Slides, transcripts, and other content from the Melbourne Workshop will be shared here
            shortly. Check back soon.
          </p>
        </div>
      </section>

      <Footer />
    </>
  )
}
