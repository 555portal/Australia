import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import SpeakersSection from '@/components/SpeakersSection'
import WorkshopForm from '@/components/WorkshopForm'

export const metadata: Metadata = {
  title: 'Melbourne Workshop — July 21–23 | MII Australia',
  description: '3-day intensive workshop in Melbourne, July 21–23 2026. World-class training in digital evangelism, content strategy, and audience engagement delivered by global experts.',
}

const agenda = [
  {
    tag: 'Evening',
    date: 'Tuesday 21st',
    title: 'Opening Dinner',
    desc: 'Gather with ministry leaders from across Australia for an evening of connection, vision, and inspiration as we launch the Melbourne workshop. A chance to meet your cohort and hear the heart behind the program.',
  },
  {
    tag: 'Full Day',
    date: 'Wednesday 22nd',
    title: 'Full Day Workshop',
    desc: 'Immersive training covering digital evangelism strategy, content creation, persona development, brand voice, and AI in ministry — led by our global expert faculty. Practical, hands-on, and built for your ministry context.',
  },
  {
    tag: 'Full Day + Evening',
    date: 'Thursday 23rd',
    title: 'Full Day Workshop & Closing Dinner',
    desc: 'Continuing the intensive workshop focused on audience engagement, follow-up systems, and practical implementation planning. Conclude with a closing dinner to celebrate your ministry\'s next steps and send you home equipped to act.',
  },
]

const miiItems = [
  {
    num: '1',
    title: '3-Day Intensive Workshop',
    body: 'World-class training in digital evangelism, content strategy, persona development, brand voice, AI in ministry, and audience engagement — delivered by global experts in Melbourne July 21–23.',
  },
  {
    num: '2',
    title: 'Monthly Coaching with Your Digital Team',
    body: "Ongoing one-on-one coaching with MII's senior strategists to implement, measure, and optimise your digital outreach throughout the year.",
  },
  {
    num: '3',
    title: 'Follow-Up Centre Platform & Training',
    body: "Full access to MII's purpose-built follow-up software, plus complete training for your team on best practices, processes, and how to move people from first contact to faith and community.",
  },
]

const ministryItems = [
  'Committed to the full 3-day workshop',
  'Available for monthly digital coaching sessions',
  '3–20 volunteers or staff for the Follow-Up Centre',
  'Heart for one-on-one discipleship and follow-up',
]

export default function JulyWorkshop() {
  return (
    <>
      <Nav />

      {/* HERO */}
      <section className="workshop-hero">
        <div className="workshop-hero-bg" />
        <div className="workshop-hero-overlay" />
        <div className="workshop-hero-body">
          <div className="eyebrow">Melbourne, Australia — July 21–23, 2026</div>
          <h1>
            Digital Evangelism<br />
            <span className="accent">Workshop</span>
          </h1>
          <p className="hero-sub">
            World-class training in digital evangelism, content strategy, and audience
            engagement — delivered by global experts for Australian ministry leaders.
          </p>
          <div className="hero-actions">
            <a href="/#eoi" className="btn-primary">Register Your Interest</a>
            <a href="#agenda" className="btn-ghost">View Program</a>
          </div>
        </div>
        <div className="workshop-hero-stats">
          <div className="stat">
            <div className="stat-num">3 Days</div>
            <div className="stat-label">Intensive Training</div>
          </div>
          <div className="stat">
            <div className="stat-num">July 21–23</div>
            <div className="stat-label">Melbourne, Australia</div>
          </div>
          <div className="stat">
            <div className="stat-num">4</div>
            <div className="stat-label">Global Expert Speakers</div>
          </div>
          <div className="stat">
            <div className="stat-num">Limited</div>
            <div className="stat-label">Places Available</div>
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="section workshop-overview-section" style={{ position: 'relative', overflow: 'hidden' }}>
        <div className="workshop-section-bg" style={{ backgroundImage: "url('/audience-bg.jpg')" }} />
        <div className="section-inner">
          <div className="section-tag">About the Workshop</div>
          <h2>Built for Australian ministry leaders.</h2>
          <p className="lead">
            The Melbourne Workshop is a focused, intensive 3-day experience bringing together
            church and parachurch leaders from across Australia to be equipped by some of the
            world&rsquo;s leading voices in digital ministry. Whether you&rsquo;re just starting your
            digital journey or looking to sharpen your strategy, this workshop is designed to
            transform how your organisation reaches and disciples people online.
          </p>
        </div>
      </section>

      {/* MII PROVIDES / YOUR MINISTRY BRINGS */}
      <section className="section" style={{ background: 'var(--off-white)' }}>
        <div className="section-inner">
          <div className="section-tag">Your Role in the Mission</div>
          <h2>What we do together.</h2>
          <p className="lead">
            MII provides the structure, training, platform, and coaching. Your ministry provides
            the people who make follow-up personal.
          </p>
          <div className="partnership-grid" style={{ marginTop: '48px' }}>
            <div className="partnership-mii">
              <div className="partnership-tag">MII Provides</div>
              <h3>The structure, training,<br />and platform.</h3>
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
                The Follow-Up Centre is where the gospel moves from a digital response to a real
                relationship. MII coordinates and runs the platform — your role is to staff it
                with people who care.
              </p>
              <div className="ministry-callout">
                <div className="ministry-callout-title">FOLLOW-UP CENTRE VOLUNTEERS / STAFF</div>
                <p>
                  We ask that your ministry provide <strong>3–20 people</strong> available for
                  online counselling, conversation, and discipleship support — trained and
                  coordinated by MII.
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

      {/* AGENDA */}
      <section className="section agenda-section" id="agenda" style={{ position: 'relative', overflow: 'hidden' }}>
        <div className="workshop-section-bg" style={{ backgroundImage: "url('/stats-bg.jpg')", opacity: 0.15 }} />
        <div className="section-inner">
          <div className="section-tag">Program</div>
          <h2>Three days. Lifelong impact.</h2>
          <p className="lead">
            Each day is intentionally designed — building on the last to give your team a
            complete, integrated framework for digital ministry.
          </p>
          <div className="agenda-grid">
            {agenda.map((item) => (
              <div className="agenda-item" key={item.date}>
                <div className="agenda-tag">{item.tag}</div>
                <div className="agenda-date">{item.date}</div>
                <div className="agenda-title">{item.title}</div>
                <p className="agenda-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SPEAKERS */}
      <SpeakersSection />

      {/* LOGISTICS */}
      <section className="section" style={{ position: 'relative', overflow: 'hidden', background: 'white' }}>
        <div className="workshop-section-bg" style={{ backgroundImage: "url('/hero.jpg')", opacity: 0.06 }} />
        <div className="section-inner">
          <div className="section-tag">Logistics</div>
          <h2>Plan your attendance.</h2>
          <p className="lead">
            Everything you need to know about attending the Melbourne Workshop.
          </p>
          <div className="logistics-grid">
            <div className="logistics-card">
              <div className="logistics-icon">📍</div>
              <div className="logistics-label">Location</div>
              <div className="logistics-value">Melbourne, Australia</div>
              <p className="logistics-desc">
                The workshop will be held in Melbourne. Full address details will be shared with
                registered participants upon confirmation.
              </p>
            </div>
            <div className="logistics-card">
              <div className="logistics-icon">🏛️</div>
              <div className="logistics-label">Venue</div>
              <div className="logistics-value">To Be Announced</div>
              <p className="logistics-desc">
                Venue details will be confirmed and shared with registered participants closer to
                the event date.
              </p>
            </div>
            <div className="logistics-card">
              <div className="logistics-icon">📅</div>
              <div className="logistics-label">Dates</div>
              <div className="logistics-value">July 21–23, 2026</div>
              <p className="logistics-desc">
                Opening dinner Tuesday evening. Full workshop days Wednesday and Thursday.
                Closing dinner Thursday evening.
              </p>
            </div>
            <div className="logistics-card">
              <div className="logistics-icon">✉️</div>
              <div className="logistics-label">Register</div>
              <div className="logistics-value">Express Your Interest</div>
              <p className="logistics-desc">
                Places are limited. Register your expression of interest to secure your spot
                and receive updates as they become available.
              </p>
              <a href="/#eoi" className="btn-primary" style={{ marginTop: '20px', display: 'inline-block', fontSize: '11px', padding: '12px 22px' }}>
                Register Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* WORKSHOP REGISTRATION FORM */}
      <WorkshopForm />

      <Footer />
    </>
  )
}
