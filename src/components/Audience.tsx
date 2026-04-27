const cards = [
  {
    title: 'Churches',
    body: "Bringing greater intentionality to existing evangelism efforts, this program gives your team the tools and support to see real gospel impact online.",
    items: [
      'Reach beyond your existing congregation',
      'Turn digital content into a discipleship pathway',
      'Train volunteers for one-on-one follow up',
      'Build lasting infrastructure, not just campaigns',
    ],
  },
  {
    title: 'Ministry Organisations',
    body: 'Your mission is already clear. This program gives you the digital infrastructure to extend your reach, respond to those who engage, and connect them with local Christian community.',
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
        <div className="section-tag">Who Should Apply</div>
        <h2>Built for Australian ministries<br />ready to go further.</h2>
        <p className="lead">
          Places are limited and subject to a brief assessment to ensure the program is the right
          fit for your organisation and context.
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
      </div>
      </div>
    </section>
  )
}
