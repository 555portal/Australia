import Link from 'next/link'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg" />
      <div className="hero-overlay" />
      <div className="hero-body">
        <div className="eyebrow">Australia Kingdom Growth Initiative - 2026 Cohort</div>
        <h1>
          Transform Your<br />
          <span className="accent">Digital Ministry</span><br />
          in One Year.
        </h1>
        <p className="hero-sub">
          A world-class, year-long program equipping Australian churches and ministry organisations
          with the training, technology, and coaching to reach, engage, and disciple people online
          &mdash; at a scale you could never resource alone.
        </p>
        <div className="hero-actions">
          <Link href="#eoi" className="btn-primary">Register Your Interest</Link>
          <Link href="#about" className="btn-ghost">Learn More</Link>
        </div>
      </div>

      <div className="stats-bar">
        <div className="stat">
          <div className="stat-num">1 Year</div>
          <div className="stat-label">Structured Program</div>
        </div>
        <div className="stat">
          <div className="stat-num">3 Pillars</div>
          <div className="stat-label">Training &middot; Platform &middot; Follow-Up</div>
        </div>
        <div className="stat">
          <div className="stat-num">Global</div>
          <div className="stat-label">MII Expertise &amp; Network</div>
        </div>
        <div className="stat">
          <div className="stat-num">Limited</div>
          <div className="stat-label">Places Available</div>
        </div>
      </div>
    </section>
  )
}
