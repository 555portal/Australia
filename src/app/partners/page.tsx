import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Partner With Us | MII Australia',
  description: 'How churches and ministry organisations partner with MII Australia — what we bring, what your ministry brings, and the journey from click to church.',
}

const miiItems = [
  {
    num: '1',
    title: 'Expert Training in Digital Evangelism',
    body: 'World-class training in digital evangelism, content strategy, persona development, brand voice, AI in ministry, and audience engagement — delivered by global experts.',
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
  'Committed to training',
  'Available for monthly digital coaching sessions',
  '3–20 volunteers or staff for the Follow-Up Centre',
  'Heart for one-on-one discipleship and follow-up',
]

const journey = [
  { step: 'Click', desc: 'Digital engagement' },
  { step: 'Conversation', desc: 'Personal response' },
  { step: 'Care', desc: 'One-on-one support' },
  { step: 'Community', desc: 'Online small groups' },
  { step: 'Church', desc: 'Local integration' },
]

export default function PartnersPage() {
  return (
    <>
      <Nav />
      <section className="section" style={{ background: 'white' }}>
        <div className="section-inner">
          <div className="section-tag">How to Partner</div>
          <h2>What we do together.</h2>
          <p className="lead">
            MII provides the structure, training, platform, and coaching. Your ministry provides
            the people who make follow-up personal.
          </p>

          {/* Scripture */}
          <blockquote className="scripture">
            <p>&ldquo;I planted, Apollos watered, but God made it grow.&rdquo;</p>
            <cite>1 Corinthians 3:6</cite>
          </blockquote>

          {/* 5C Journey Diagram */}
          <div className="journey">
            <div className="journey-label">The discipleship pathway</div>
            <div className="journey-steps">
              {journey.map((j, i) => (
                <div className="journey-step-wrap" key={j.step}>
                  <div className="journey-step">
                    <div className="journey-step-name">{j.step}</div>
                    <div className="journey-step-desc">{j.desc}</div>
                  </div>
                  {i < journey.length - 1 && <div className="journey-arrow">→</div>}
                </div>
              ))}
            </div>
          </div>

          <div className="partnership-grid">
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
                  We ask that your ministry provide <strong>3–20 people</strong> available for online
                  care, conversation, and discipleship support — trained and coordinated by MII.
                </p>
              </div>
              <ul className="ministry-list">
                {ministryItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '56px' }}>
            <Link href="/register" className="btn-submit" style={{ display: 'inline-block', width: 'auto', padding: '18px 52px' }}>
              Register Your Ministry
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
