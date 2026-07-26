const pillars = [
  {
    num: '01',
    benefit: 'Train your whole team in digital evangelism',
    title: 'Expert Training in Digital Evangelism',
    body: "A 3-day intensive workshop led by MII's global team of digital ministry specialists. Covering strategy, content, advertising, persona development, and how to reach your specific mission field online.",
  },
  {
    num: '02',
    benefit: 'Get a ready-to-use follow-up platform',
    title: 'Ready-to-Use Follow-Up Platform',
    body: "Your team is onboarded into MII's purpose-built Follow-Up Centre — a platform that helps you receive, prioritise, assign, and respond to seeker conversations so fewer people fall through the cracks.",
  },
  {
    num: '03',
    benefit: 'Connect people with the Gospel to real community',
    title: 'Community Connection & Discipleship',
    body: "With the combination of your digital evangelism efforts and a follow-up platform, people reached with the Gospel are connected to real Christian community through our network of welcoming churches and online small groups — ensuring discipleship leads somewhere lasting.",
  },
]

export default function Pillars() {
  return (
    <section className="pillars" id="pillars">
      <div className="section-inner">
        <div className="section-tag">The Program</div>
        <h2>Three pillars. One integrated pathway.</h2>
        <p className="lead">
          Each component is designed to work together — training, platform, and follow-up — so
          digital outreach leads to real discipleship.
        </p>
        <div className="pillars-grid">
          {pillars.map((p) => (
            <div className="pillar" key={p.num}>
              <div className="pillar-num">{p.num}</div>
              <div className="pillar-benefit">{p.benefit}</div>
              <h3>{p.title}</h3>
              <p>{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
