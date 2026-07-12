'use client'

import { useState } from 'react'
import Image from 'next/image'

const speakers = [
  {
    initials: 'NR',
    photo: '/speakers/nick-runyon.jpeg',
    name: 'Nick Runyon',
    role: 'Senior Coach & Online Evangelism Advisor, MII',
    bio: 'Nick built performing sales teams and developed metric-based marketing strategies as a member of an ecommerce startup in the early 2000s. Nick then moved from business to ministry, applying online metrics and analysis to online missions as the COO of Global Media Outreach, leading the organization to reach 1.24 billion people with the Gospel between 2008 and 2014. Nick then joined Christian Vision, a UK-based charity with a vision to reach a billion people with the Gospel, as the North America Regional Director. Reporting to Lord Robert Edmiston and the Executive Trustees of CV, Nick and his team turned a passion for locally connecting people reached through online evangelism efforts into CVOutreach.com. In 2018, CV Outreach connected over 30,000 people into local fellowships around the world. Nick now leads Media Tractor, a marketing agency he founded in 2015. Nick has been a trusted MII partner since the beginning, serving MII as a Senior Coach and Online Evangelism Advisor.',
  },
  {
    initials: 'NL',
    photo: '/speakers/natchi-lazarus.jpeg',
    name: 'Natchi Lazarus',
    role: 'Senior Coach, International Media & AI Strategy, MII',
    bio: 'Natchi is a senior coach who oversees international media and AI strategies, along with key India initiatives. He is the author of two books: The Connected Church, and Spirit-led Intelligence. His first book is currently used as a textbook in media studies programs at Christian universities and theological seminaries internationally. His latest book, Spirit-led Intelligence, addresses the critical questions of the Body of Christ related to AI, and offers a Biblical framework on how to live with AI and other future technology. He has 20+ years of international marketing and media experience working with some of the most impactful churches and ministries globally.',
  },
  {
    initials: 'JK',
    photo: '/speakers/jay-kranda.jpeg',
    name: 'Jay Kranda',
    role: 'Online Pastor, Saddleback Church',
    bio: 'As the Online Pastor of Saddleback Church, which was founded by Rick Warren, Jay oversees a weekly online crowd of 20,000 people and an online community of 3,000 small groups. He is passionate about the power of online outreach for today\'s church, co-authoring the free e-book State of the Online Church and writing regularly on the subject at JayKranda.com. He has earned a B.A. in Christian Education from Biola University and an M.A. from the Talbot School of Theology. Jay resides in Southern California with his wife, Jody, and their three children.',
  },
  {
    initials: 'DH',
    photo: '/speakers/daniel-hall.jpeg',
    name: 'Daniel Hall',
    role: 'Digital Ministry Specialist, MII',
    bio: 'Daniel Hall is a digital ministry specialist with extensive experience helping churches grow their online presence and impact. He brings practical expertise in content strategy, audience development, and digital outreach — helping ministries turn clicks into conversations.',
  },
]

export default function SpeakersSection() {
  const [active, setActive] = useState<string | null>(null)
  const activeSpeaker = speakers.find((s) => s.name === active) ?? null

  return (
    <section className="section speakers-section">
      <div className="section-inner">
        <div className="section-tag">Faculty</div>
        <h2>Industry leading Coaches.</h2>
        <p className="lead">
          Our faculty bring decades of frontline digital ministry experience from around the
          globe. Hover over a speaker to read their bio.
        </p>

        <div className="speakers-grid-wrap">
        <div className="speakers-grid">
          {speakers.map((speaker) => (
            <div
              key={speaker.name}
              className={`speaker-card${active === speaker.name ? ' speaker-card--active' : ''}`}
              onMouseEnter={() => setActive(speaker.name)}
              onMouseLeave={() => setActive(null)}
            >
              <div className="speaker-avatar">
                <Image
                  src={speaker.photo}
                  alt={speaker.name}
                  width={96}
                  height={96}
                  className="speaker-photo"
                />
              </div>
              <div className="speaker-name">{speaker.name}</div>
              <div className="speaker-role">{speaker.role}</div>
            </div>
          ))}
        </div>
        </div>

        <div className="speaker-bio-panel">
          {activeSpeaker ? (
            <div className="speaker-bio-content" key={activeSpeaker.name}>
              <div className="speaker-bio-header">
                <span className="speaker-bio-name">{activeSpeaker.name}</span>
                <span className="speaker-bio-role">{activeSpeaker.role}</span>
              </div>
              <p className="speaker-bio-text">{activeSpeaker.bio}</p>
            </div>
          ) : (
            <p className="speaker-bio-hint">Hover over a speaker to read their bio.</p>
          )}
        </div>
      </div>
    </section>
  )
}
