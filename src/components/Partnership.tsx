const miiItems = [
  {
    num: '1',
    title: '4-Day Intensive Workshop',
    body: 'World-class training in digital evangelism, content strategy, persona development, brand voice, AI in ministry, and audience engagement — delivered by global experts.',
  },
  {
    num: '2',
    title: 'Monthly Coaching with Your Digital Team',
    body: "Ongoing one-on-one coaching with MII's senior strategists to implement, measure, and optimise your digital outreach throughout the year.",
  },
  {
    num: '3',
    title: 'Follow-up Centre Platform & Training',
    body: "Full access to MII's purpose-built follow-up software, plus complete training for your team on best practices, processes, and how to move people from first contact to faith and community.",
  },
]

const ministryItems = [
  'Committed to the full 4-day workshop',
  'Available for monthly digital coaching sessions',
  '3–20 volunteers or staff for the Follow-up Centre',
  'Heart for one-on-one discipleship and follow-up',
]

export default function Partnership() {
  return (
    <section className="section" id="partnership" style={{ background: 'white' }}>
      <div className="section-inner">
        <div className="section-tag">Your Role in the Mission</div>
        <h2>What we do together.</h2>
        <p className="lead">
          The Follow-up Centre is where this program delivers its greatest Kingdom impact. MII
          provides everything — the training, coordination, platform, and software. Your ministry
          brings the people.
        </p>

        <div className="partnership-grid">
          <div className="partnership-mii">
            <div className="partnership-tag">MII Provides</div>
            <h3>Everything you need<br />to do this well.</h3>
            <ul className="mii-items">
              {miiItems.map((item) => (
                <li className="mii-item" key={item.num}>
                  <span className="mii-item-num">{item.num}</span>
                  <span>
                    <strong>{item.title}</strong>
                    {item.body}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="partnership-ministry">
            <div className="partnership-tag">Your Ministry Brings</div>
            <h3>The people who make<br />it personal.</h3>
            <p className="ministry-desc">
              The Follow-up Centre is where the gospel moves from a digital response to a real
              relationship. MII will coordinate and run the platform — your role is to staff it
              with people who care.
            </p>
            <div className="ministry-callout">
              <div className="ministry-callout-title">FOLLOW-UP CENTRE VOLUNTEERS / STAFF</div>
              <p>
                We ask that your ministry provide <strong>3–20 people</strong> available for online
                counselling, conversation, and discipleship support — trained and coordinated by MII.
              </p>
            </div>
            <ul className="ministry-list">
              {ministryItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
