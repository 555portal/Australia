import Link from 'next/link'

export default function Partnership() {
  return (
    <section className="partnership-teaser" id="partnership">
      <div className="section-inner">
        <div className="section-tag">Your Role in the Mission</div>
        <h2>What we do together.</h2>
        <p className="lead">
          MII provides the structure, training, platform, and coaching. Your ministry provides
          the people who make follow-up personal, from that first click, all the way home to
          a local church.
        </p>
        <Link href="/partners" className="btn-primary">See How Partnership Works</Link>
      </div>
    </section>
  )
}
