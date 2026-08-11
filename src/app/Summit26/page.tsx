import type { Metadata } from 'next'
import Image from 'next/image'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Melbourne Workshop — July 21–23 | MII Australia',
  description: 'Photos and resources from the Melbourne Digital Pathways Summit.',
}

const resources = [
  { speaker: 'Natchi Lazarus', title: 'Digital Pathways to Disciples', file: '01-natchi-digital-pathways.pptx' },
  { speaker: 'Jay Kranda', title: 'The Online Church', file: '02-jay-online-church.pptx' },
  { speaker: 'Natchi Lazarus', title: 'Foundations & the Future', file: '03-natchi-foundations-future.pptx' },
  { speaker: 'Daniel Hall', title: 'How to Talk to Strangers', file: '04-daniel-how-to-talk-to-strangers.pptx' },
  { speaker: 'Nick Runyon', title: 'Content that Connects', file: '05-content-that-connects.pptx' },
  { speaker: 'Daniel Hall', title: 'Content Loops', file: '06-daniel-content-loops.pptx' },
  { speaker: 'Jay Kranda', title: 'Crowd to Core', file: '08-jay-crowd-to-core.pptx' },
  { speaker: 'Jay Kranda', title: 'Reaching People Online', file: '09-jay-reaching-people.pptx' },
  { speaker: 'Nick Runyon', title: 'Metrics that Matter', file: '10-nick-metrics-that-matter.pptx' },
  { speaker: 'Natchi Lazarus', title: 'Agentic AI', file: '13-natchi-agentic-ai.pptx' },
  { speaker: 'Jay Kranda', title: 'Creating a 4th Space & Online Groups', file: '14-jay-4th-space-online-groups.pptx' },
  { speaker: 'Nick Runyon', title: 'Online to Offline', file: '15-nick-online-to-offline.pptx' },
  { speaker: 'Ben Scales', title: 'Follow Up', file: '16-ben-follow-up.pptx' },
]

const galleryPhotos = [
  'hero.jpeg',
  'IMG_3579.jpeg',
  'IMG_3598.jpeg',
  'IMG_3599.jpeg',
  'IMG_3606.jpeg',
  'IMG_3607.jpeg',
  'IMG_3611.jpeg',
  'IMG_3613.jpeg',
  'IMG_3614.jpeg',
  'IMG_3619.jpeg',
  'IMG_3621.jpeg',
  'IMG_3621-2.jpeg',
  'IMG_3622.jpeg',
  'IMG_3639.jpeg',
  'IMG_3640.jpeg',
  'IMG_5440.jpeg',
]

export default function JulyWorkshop() {
  return (
    <>
      <Nav />

      {/* HERO */}
      <section className="workshop-hero" style={{ minHeight: '440px' }}>
        <div className="workshop-hero-bg" />
        <div className="workshop-hero-overlay" />
        <div className="workshop-hero-body">
          <div className="eyebrow">Melbourne, VIC — July 21–23</div>
          <h1>Digital Pathways Summit 2026</h1>
        </div>

        <div className="workshop-hero-stats">
          <div className="stat">
            <div className="stat-num">3 Days</div>
            <div className="stat-label">Of Workshops & Connection</div>
          </div>
          <div className="stat">
            <div className="stat-num">13 Sessions</div>
            <div className="stat-label">On Digital Ministry & Follow-Up</div>
          </div>
          <div className="stat">
            <div className="stat-num">5 Speakers</div>
            <div className="stat-label">Global & Local Experts</div>
          </div>
          <div className="stat">
            <div className="stat-num">1st</div>
            <div className="stat-label">Event of Its Kind in Australia</div>
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="section" style={{ background: 'white' }}>
        <div className="section-inner">
          <div className="section-tag">Overview</div>
          <h2>A first for Australia.</h2>
          <p className="lead">
            The Digital Pathways Summit was the first event of its kind in Australia — three days
            that brought together innovators and ministry leaders from across the country to
            reimagine what digital evangelism and follow-up could look like here. From hands-on
            workshops to honest conversation about what&rsquo;s working, the summit set the tone
            for a new season of digital ministry in Australia.
          </p>
        </div>
      </section>

      {/* RESOURCES */}
      <section className="section" id="resources" style={{ background: 'var(--off-white)' }}>
        <div className="section-inner">
          <div className="section-tag">Resources</div>
          <h2>Summit presentations.</h2>
          <p className="lead">
            Download the slides from each session at the Melbourne Workshop.
          </p>
          <div className="resources-grid">
            {resources.map((r) => (
              <a
                key={r.file}
                href={`/resources/${r.file}`}
                download
                className="resource-card"
              >
                <div className="resource-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <polyline points="14 2 14 8 20 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <line x1="12" y1="18" x2="12" y2="12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    <polyline points="9 15 12 18 15 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="resource-body">
                  <div className="resource-speaker">{r.speaker}</div>
                  <div className="resource-title">{r.title}</div>
                </div>
                <div className="resource-dl">Download</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="section gallery-section">
        <div className="section-inner">
          <div className="section-tag">Photos</div>
          <h2>From the summit.</h2>
          <div className="gallery-grid gallery-grid--compact">
            {galleryPhotos.map((photo) => (
              <div className="gallery-item" key={photo}>
                <Image
                  src={`/gallery/${photo}`}
                  alt="Digital Pathways Summit"
                  width={800}
                  height={600}
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                  className="gallery-img"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
