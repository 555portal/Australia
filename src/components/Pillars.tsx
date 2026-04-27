const pillars = [
  {
    num: '01',
    title: 'Expert Training in Digital Evangelism',
    body: "Hands-on training from MII's global team of digital ministry specialists — covering strategy, content, advertising, and how to reach your specific mission field online.",
  },
  {
    num: '02',
    title: 'Ready-to-Use Follow-Up Platform',
    body: "Your team is onboarded into MII's proven digital hub — a purpose-built platform for one-on-one engagement with seekers and those who respond to the gospel online.",
  },
  {
    num: '03',
    title: 'Community Connection & Discipleship',
    body: 'Seekers are connected to real Christian community through our network of welcoming churches and online small groups, ensuring discipleship leads somewhere lasting.',
  },
]

export default function Pillars() {
  return (
    <section className="pillars" id="pillars">
      <div className="section-inner">
        <div className="section-tag">What You&rsquo;ll Receive</div>
        <h2>Three pillars. One integrated pathway.</h2>
        <p className="lead">
          Each component is designed to work together &mdash; so you&rsquo;re not just learning about
          digital ministry, you&rsquo;re actually doing it, with support every step of the way.
        </p>
        <div className="pillars-grid">
          {pillars.map((p) => (
            <div className="pillar" key={p.num}>
              <div className="pillar-num">{p.num}</div>
              <h3>{p.title}</h3>
              <p>{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
