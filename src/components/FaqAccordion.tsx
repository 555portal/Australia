'use client'

import { useState } from 'react'

const faqs = [
  {
    q: 'What is the Follow-Up Centre?',
    a: "It's Australia's first online Follow-Up Centre, a platform MII built and coordinates, where people who respond to digital evangelism (social media, radio, and more) are met by a real person, not left to a chatbot or a dead end. Ministry partners provide trained volunteers who do online responding and walk seekers toward real community.",
  },
  {
    q: 'Who can partner with MII?',
    a: 'Any Australian church or ministry organisation committed to reaching people online and following up with them well. We work with congregations of every size, plus parachurch and mission organisations already doing digital outreach.',
  },
  {
    q: 'What does our ministry need to provide?',
    a: "It depends how you're involved: your ministry can take part in Outreach, Follow-Up, or Connection, or all three. For Follow-Up specifically, that means people (we call them Online Responders, or Echo Users) ready for online responding and discipleship support. MII trains and coordinates them; your ministry just provides the people who care.",
  },
  {
    q: 'What training and support do we get?',
    a: "Expert training in digital evangelism: strategy, content, advertising, persona development, AI in ministry, and audience engagement, plus ongoing monthly coaching with MII's senior strategists, and full access to the Follow-Up Centre platform itself.",
  },
  {
    q: 'Is there a cohort we need to wait for, or a deadline to apply by?',
    a: "No, partnering with MII is open and ongoing. There's no cohort intake or limited-places model; your ministry can be onboarded whenever you're ready.",
  },
  {
    q: 'What does the journey actually look like for a seeker?',
    a: 'Click → Conversation → Care → Community → Church. It starts with digital engagement, moves into a real one-on-one conversation and ongoing care, and from there into online small groups and, ultimately, a local church.',
  },
  {
    q: 'What happens to people once they come to faith?',
    a: "If your ministry opts in to Connection, new believers from the Follow-Up Centre can be introduced to Alpha (online or in person) or handed straight to your church. The journey doesn't end at a digital conversation, it ends in belonging.",
  },
  {
    q: 'How is this different from just running our own social media or ads?',
    a: "Reach is only half the equation. MII's edge is the follow-up: 12+ years of experience and over 6 million people responded to, with the infrastructure to make sure the people your outreach reaches don't fall through the cracks.",
  },
  {
    q: 'How do we get started?',
    a: 'Register your ministry through our registration page. From there, MII’s team will be in touch to onboard you into the Follow-Up Centre and get your Online Responders trained.',
  },
]

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <div className="faq-list">
      {faqs.map((item, i) => {
        const isOpen = openIndex === i
        return (
          <div className={`faq-item${isOpen ? ' faq-item--open' : ''}`} key={item.q}>
            <button
              type="button"
              className="faq-question"
              aria-expanded={isOpen}
              onClick={() => setOpenIndex(isOpen ? null : i)}
            >
              <span>{item.q}</span>
              <span className="faq-icon">+</span>
            </button>
            {isOpen && <div className="faq-answer">{item.a}</div>}
          </div>
        )
      })}
    </div>
  )
}
