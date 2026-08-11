const pillars = [
  {
    num: '01',
    benefit: 'Reach people wherever they already are',
    title: 'Outreach',
    body: "Digital evangelism and genuine connection with seekers — everywhere from social media to radio. This is where the first spark happens, and where your ministry's story starts reaching further than it ever has.",
  },
  {
    num: '02',
    benefit: "The heart of what we bring to Australia",
    title: 'Follow-Up Centre',
    body: "With 12+ years of experience and over 6 million people responded to, MII runs Australia's first online Follow-Up Centre — walking with every seeker who reaches out, so no one who takes that first step online gets left there. From lost, to found, to a faith community near them.",
  },
  {
    num: '03',
    benefit: 'Welcome seekers into real community',
    title: 'Connection',
    body: "Your ministry can opt in to receive seekers straight from the Follow-Up Centre — people new to faith, ready for someone to walk with them. Whether that's Alpha online or in person, or a warm handoff straight into your church, this is where discipleship becomes personal.",
  },
]

export default function Pillars() {
  return (
    <section className="pillars" id="pillars">
      <div className="section-inner">
        <div className="section-tag">How Ministry Partners Engage With Us</div>
        <h2>Three ways in. One shared mission.</h2>
        <p className="lead">
          Outreach, Follow-Up, and Connection work together as one pathway — so the people your
          ministry reaches online don&rsquo;t just hear the gospel, they&rsquo;re walked all the way home.
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
