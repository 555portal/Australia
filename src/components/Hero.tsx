import Link from 'next/link'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg" />
      <div className="hero-overlay" />
      <div className="hero-body">
        <div className="eyebrow">Media Impact International · Australia</div>
        <h1>
          Digital<br />
          <span className="accent">Missions Hub</span>
        </h1>
        <p className="hero-sub">
          People are already searching for hope online. We help your ministry reach them,
          walk with them through Australia&rsquo;s first online Follow-Up Centre, and connect
          them to a real, local Christian community.
        </p>
        <div className="hero-actions">
          <Link href="/register" className="btn-primary">Register Your Ministry</Link>
          <Link href="#pillars" className="btn-ghost">See How It Works</Link>
        </div>
      </div>

      <div className="stats-bar">
        <div className="stat">
          <div className="stat-num">12+ Years</div>
          <div className="stat-label">Global Digital Ministry Experience</div>
        </div>
        <div className="stat">
          <div className="stat-num">6M+</div>
          <div className="stat-label">People Responded To</div>
        </div>
        <div className="stat">
          <div className="stat-num">1st</div>
          <div className="stat-label">Online Follow-Up Centre in Australia</div>
        </div>
        <div className="stat">
          <div className="stat-num">Open</div>
          <div className="stat-label">Ongoing Partnership · No Cohort Dates</div>
        </div>
      </div>
    </section>
  )
}
