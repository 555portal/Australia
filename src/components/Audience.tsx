import Link from 'next/link'

const cards = [
  {
    title: 'Churches',
    body: "You're already reaching people — this brings greater intentionality to it, giving your team the tools and support to see real gospel impact online, and real people show up in community.",
    items: [
      'Reach beyond your existing congregation',
      'Turn digital content into a discipleship pathway',
      'Train volunteers for one-on-one follow up',
      'Build lasting infrastructure, not just campaigns',
    ],
  },
  {
    title: 'Ministry Organisations',
    body: 'Your mission is already clear. We give you the digital infrastructure to extend your reach, respond personally to those who engage, and connect them with local Christian community.',
    items: [
      'Amplify your existing mission online',
      'Build scalable follow-up infrastructure',
      'Achieve measurable discipleship outcomes',
      'Access world-class expertise and global networks',
    ],
  },
]

export default function Audience() {
  return (
    <section className="section" id="audience" style={{ position: 'relative', overflow: 'hidden' }}>
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: "url('/audience-bg.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center 40%',
        opacity: 0.18,
        zIndex: 0,
      }} />
      <div style={{ position: 'relative', zIndex: 1 }}>
      <div className="section-inner">
        <div className="section-tag">Who We Work With</div>
        <h2>Built for Australian ministries<br />ready to go further.</h2>
        <p className="lead">
          MII partners with churches and ministry organisations committed to turning digital reach
          into lasting discipleship.
        </p>
        <div className="audience-grid">
          {cards.map((card) => (
            <div className="audience-card" key={card.title}>
              <h3>{card.title}</h3>
              <p>{card.body}</p>
              <ul className="check-list">
                {card.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="lead" style={{ marginTop: '40px' }}>
          Curious what partnering actually looks like day to day?{' '}
          <Link href="/partners" style={{ color: 'var(--blue)', fontWeight: 600 }}>
            See how it works →
          </Link>
        </p>
      </div>
      </div>
    </section>
  )
}
