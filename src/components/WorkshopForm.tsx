'use client'

import { useState } from 'react'

type FormState = 'idle' | 'loading' | 'success' | 'error'

type Attendee = {
  id: number
  firstName: string
  lastName: string
  email: string
  phone: string
  position: string
  location: string
}

const SOCIAL_OPTIONS = ['Facebook / Meta', 'Instagram', 'TikTok', 'Web']

const emptyAttendee = (id: number): Attendee => ({
  id,
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  position: '',
  location: '',
})

export default function WorkshopForm() {
  const [formState, setFormState] = useState<FormState>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const [contact, setContact] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    orgName: '',
    orgType: '',
    location: '',
  })

  const [attendees, setAttendees] = useState<Attendee[]>([emptyAttendee(1)])
  const [nextId, setNextId] = useState(2)

  const [digitalMinistry, setDigitalMinistry] = useState('')
  const [socialMedia, setSocialMedia] = useState<string[]>([])
  const [seekerResponse, setSeekerResponse] = useState('')

  function updateContact(field: string, value: string) {
    setContact((prev) => ({ ...prev, [field]: value }))
  }

  function updateAttendee(id: number, field: string, value: string) {
    setAttendees((prev) =>
      prev.map((a) => (a.id === id ? { ...a, [field]: value } : a))
    )
  }

  function addAttendee() {
    setAttendees((prev) => [...prev, emptyAttendee(nextId)])
    setNextId((n) => n + 1)
  }

  function removeAttendee(id: number) {
    setAttendees((prev) => prev.filter((a) => a.id !== id))
  }

  function toggleSocialMedia(option: string) {
    setSocialMedia((prev) =>
      prev.includes(option) ? prev.filter((s) => s !== option) : [...prev, option]
    )
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setFormState('loading')
    setErrorMsg('')

    try {
      const res = await fetch('/api/submit-eoi', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...contact,
          attendees,
          digitalMinistry,
          socialMedia,
          seekerResponse,
          source: 'July Workshop',
        }),
      })

      if (!res.ok) throw new Error('Submission failed')
      setFormState('success')
    } catch {
      setFormState('error')
      setErrorMsg('Something went wrong. Please try again or email australia@mii.global directly.')
    }
  }

  if (formState === 'success') {
    return (
      <section className="eoi" id="eoi">
        <div className="eoi-inner">
          <div className="section-tag">Workshop Registration</div>
          <h2>Thank you — we&rsquo;ll be in touch.</h2>
          <p className="lead">
            Your registration interest has been received. A member of the MII Australia team will
            contact you shortly to confirm your place at the Melbourne Workshop.
          </p>
        </div>
      </section>
    )
  }

  return (
    <section className="eoi" id="register" style={{ position: 'relative' }}>
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: "url('/eoi-bg.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center 40%',
        opacity: 0.28,
        zIndex: 0,
      }} />
      <div className="eoi-inner" style={{ maxWidth: '780px' }}>
        <div className="section-tag">Workshop Registration</div>
        <h2>Register your team.</h2>
        <p className="lead">
          Places are limited. Submit your details below and a member of the MII Australia team
          will be in touch to confirm your place at the Melbourne Workshop, July 21–23.
        </p>

        <form className="eoi-form" onSubmit={handleSubmit}>

          {/* ── PRIMARY CONTACT ── */}
          <div className="form-section-header">Ministry Primary Contact</div>

          <div className="form-row">
            <div className="form-group">
              <label>First Name</label>
              <input type="text" placeholder="Your first name" required
                value={contact.firstName} onChange={(e) => updateContact('firstName', e.target.value)} />
            </div>
            <div className="form-group">
              <label>Last Name</label>
              <input type="text" placeholder="Your last name" required
                value={contact.lastName} onChange={(e) => updateContact('lastName', e.target.value)} />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Email Address</label>
              <input type="email" placeholder="you@yourministry.org.au" required
                value={contact.email} onChange={(e) => updateContact('email', e.target.value)} />
            </div>
            <div className="form-group">
              <label>Phone</label>
              <input type="tel" placeholder="Your phone number"
                value={contact.phone} onChange={(e) => updateContact('phone', e.target.value)} />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Organisation Name</label>
              <input type="text" placeholder="Church or ministry name" required
                value={contact.orgName} onChange={(e) => updateContact('orgName', e.target.value)} />
            </div>
            <div className="form-group">
              <label>Organisation Type</label>
              <select required value={contact.orgType} onChange={(e) => updateContact('orgType', e.target.value)}>
                <option value="" disabled>Select one</option>
                <option>Church</option>
                <option>Ministry Organisation</option>
                <option>Other Ministry</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label>City / State</label>
            <input type="text" placeholder="e.g. Melbourne, VIC"
              value={contact.location} onChange={(e) => updateContact('location', e.target.value)} />
          </div>

          {/* ── ATTENDEES ── */}
          <div className="form-section-header" style={{ marginTop: '12px' }}>
            Workshop Attendees
            <span className="form-section-sub">Add everyone you&rsquo;d like to attend.</span>
          </div>

          {attendees.map((attendee, index) => (
            <div className="attendee-card" key={attendee.id}>
              <div className="attendee-card-header">
                <span className="attendee-label">Attendee {index + 1}</span>
                {attendees.length > 1 && (
                  <button type="button" className="attendee-remove" onClick={() => removeAttendee(attendee.id)}>
                    Remove
                  </button>
                )}
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>First Name</label>
                  <input type="text" placeholder="First name" required
                    value={attendee.firstName} onChange={(e) => updateAttendee(attendee.id, 'firstName', e.target.value)} />
                </div>
                <div className="form-group">
                  <label>Last Name</label>
                  <input type="text" placeholder="Last name" required
                    value={attendee.lastName} onChange={(e) => updateAttendee(attendee.id, 'lastName', e.target.value)} />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Email</label>
                  <input type="email" placeholder="Email address" required
                    value={attendee.email} onChange={(e) => updateAttendee(attendee.id, 'email', e.target.value)} />
                </div>
                <div className="form-group">
                  <label>Phone</label>
                  <input type="tel" placeholder="Phone number"
                    value={attendee.phone} onChange={(e) => updateAttendee(attendee.id, 'phone', e.target.value)} />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Position / Role</label>
                  <input type="text" placeholder="e.g. Senior Pastor, Digital Lead"
                    value={attendee.position} onChange={(e) => updateAttendee(attendee.id, 'position', e.target.value)} />
                </div>
                <div className="form-group">
                  <label>Home City / State</label>
                  <input type="text" placeholder="e.g. Sydney, NSW"
                    value={attendee.location} onChange={(e) => updateAttendee(attendee.id, 'location', e.target.value)} />
                </div>
              </div>
            </div>
          ))}

          <button type="button" className="btn-add-attendee" onClick={addAttendee}>
            + Add Another Attendee
          </button>

          {/* ── MINISTRY QUESTIONS ── */}
          <div className="form-section-header" style={{ marginTop: '12px' }}>About Your Ministry</div>

          <div className="form-group">
            <label>Tell us about your current digital ministry / outreach</label>
            <textarea
              placeholder="What are you currently doing online? What's your biggest challenge or opportunity?"
              value={digitalMinistry}
              onChange={(e) => setDigitalMinistry(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>What is your primary social media tool?</label>
            <div className="form-checkbox-group">
              {SOCIAL_OPTIONS.map((option) => (
                <label key={option} className="form-checkbox">
                  <input
                    type="checkbox"
                    checked={socialMedia.includes(option)}
                    onChange={() => toggleSocialMedia(option)}
                  />
                  <span>{option}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="form-group">
            <label>Do you currently respond to seekers online? If so, how?</label>
            <textarea
              placeholder="e.g. We reply to comments and DMs on Facebook, or we have a team that follows up ad responses..."
              value={seekerResponse}
              onChange={(e) => setSeekerResponse(e.target.value)}
            />
          </div>

          {/* ── SUBMIT ── */}
          <div>
            <button type="submit" className="btn-submit" disabled={formState === 'loading'}>
              {formState === 'loading' ? 'Submitting…' : 'Register for the Workshop'}
            </button>
            {formState === 'error' && <p className="form-error">{errorMsg}</p>}
            <p className="form-note">We respect your privacy. Your details will only be used to follow up on this enquiry.</p>
          </div>

        </form>
      </div>
    </section>
  )
}
