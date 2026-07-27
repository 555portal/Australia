'use client'

import { useState } from 'react'

type FormState = 'idle' | 'loading' | 'success' | 'error'

type Missionary = {
  id: number
  firstName: string
  lastName: string
  email: string
  phone: string
}

const emptyMissionary = (id: number): Missionary => ({
  id,
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
})

export default function FollowUpForm() {
  const [formState, setFormState] = useState<FormState>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const [contact, setContact] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    orgName: '',
    location: '',
  })

  const [missionaries, setMissionaries] = useState<Missionary[]>([emptyMissionary(1)])
  const [nextId, setNextId] = useState(2)
  const [webinarDate, setWebinarDate] = useState('')

  function updateContact(field: string, value: string) {
    setContact((prev) => ({ ...prev, [field]: value }))
  }

  function updateMissionary(id: number, field: string, value: string) {
    setMissionaries((prev) =>
      prev.map((m) => (m.id === id ? { ...m, [field]: value } : m))
    )
  }

  function addMissionary() {
    setMissionaries((prev) => [...prev, emptyMissionary(nextId)])
    setNextId((n) => n + 1)
  }

  function removeMissionary(id: number) {
    setMissionaries((prev) => prev.filter((m) => m.id !== id))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setFormState('loading')
    setErrorMsg('')

    try {
      const res = await fetch('/api/submit-missionaries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ contact, missionaries, webinarDate }),
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
      <section className="eoi" id="register">
        <div className="eoi-inner">
          <div className="section-tag">Follow Up Centre</div>
          <h2>Registration received.</h2>
          <p className="lead">
            Thank you. Your Online Missionaries have been registered. The MII Australia team will
            be in touch shortly with next steps.
          </p>
        </div>
      </section>
    )
  }

  return (
    <section className="eoi" id="register">
      <div className="eoi-inner" style={{ maxWidth: '780px' }}>
        <div className="section-tag">Follow Up Centre</div>
        <h2>Register your Echo Users.</h2>
        <p className="webinar-coming-soon">Training Webinar — select a date that works for you.</p>
        <p className="lead">
          Add the details of each person from your ministry who will be serving as an Online
          Missionary (Echo User) through the Follow Up Centre.
        </p>

        <div className="form-card">
        <form className="eoi-form" onSubmit={handleSubmit}>

          {/* ── MINISTRY CONTACT ── */}
          <div className="form-section-header">Ministry Contact</div>

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
              <label>City / State</label>
              <input type="text" placeholder="e.g. Melbourne, VIC"
                value={contact.location} onChange={(e) => updateContact('location', e.target.value)} />
            </div>
          </div>

          {/* ── WEBINAR DATE ── */}
          <div className="form-section-header" style={{ marginTop: '12px' }}>
            Training Webinar Date
            <span className="form-section-sub">Select the session that works best for your team.</span>
          </div>
          <div className="webinar-date-options">
            {[
              { value: 'August 7th — 2:00pm AEST', label: 'August 7th', time: '2:00pm AEST' },
              { value: 'August 11th — 5:00pm AEST', label: 'August 11th', time: '5:00pm AEST' },
              { value: 'August 12th — 7:00pm AEST', label: 'August 12th', time: '7:00pm AEST' },
            ].map((opt) => (
              <label
                key={opt.value}
                className={`webinar-date-option${webinarDate === opt.value ? ' webinar-date-option--selected' : ''}`}
              >
                <input
                  type="radio"
                  name="webinarDate"
                  value={opt.value}
                  checked={webinarDate === opt.value}
                  onChange={() => setWebinarDate(opt.value)}
                  required
                />
                <span className="webinar-date-label">{opt.label}</span>
                <span className="webinar-date-time">{opt.time}</span>
              </label>
            ))}
          </div>

          {/* ── MISSIONARIES ── */}
          <div className="form-section-header" style={{ marginTop: '12px' }}>
            Online Missionaries
            <span className="form-section-sub">Add each person who will serve in the Follow Up Centre.</span>
          </div>

          {missionaries.map((m, index) => (
            <div className="attendee-card" key={m.id}>
              <div className="attendee-card-header">
                <span className="attendee-label">Echo User {index + 1}</span>
                {missionaries.length > 1 && (
                  <button type="button" className="attendee-remove" onClick={() => removeMissionary(m.id)}>
                    Remove
                  </button>
                )}
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>First Name</label>
                  <input type="text" placeholder="First name" required
                    value={m.firstName} onChange={(e) => updateMissionary(m.id, 'firstName', e.target.value)} />
                </div>
                <div className="form-group">
                  <label>Last Name</label>
                  <input type="text" placeholder="Last name" required
                    value={m.lastName} onChange={(e) => updateMissionary(m.id, 'lastName', e.target.value)} />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Email</label>
                  <input type="email" placeholder="Email address" required
                    value={m.email} onChange={(e) => updateMissionary(m.id, 'email', e.target.value)} />
                </div>
                <div className="form-group">
                  <label>Phone</label>
                  <input type="tel" placeholder="Phone number"
                    value={m.phone} onChange={(e) => updateMissionary(m.id, 'phone', e.target.value)} />
                </div>
              </div>
            </div>
          ))}

          <button type="button" className="btn-add-attendee" onClick={addMissionary}>
            + Add Another Echo User
          </button>

          {/* ── SUBMIT ── */}
          <div style={{ marginTop: '8px' }}>
            <button type="submit" className="btn-submit" disabled={formState === 'loading'}>
              {formState === 'loading' ? 'Submitting…' : 'Register Missionaries'}
            </button>
            {formState === 'error' && <p className="form-error">{errorMsg}</p>}
            <p className="form-note">Your details will only be used in connection with the MII Follow Up Centre program.</p>
          </div>

        </form>
        </div>
      </div>
    </section>
  )
}
