'use client'

import { useState } from 'react'

type FormState = 'idle' | 'loading' | 'success' | 'error'

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

  function updateContact(field: string, value: string) {
    setContact((prev) => ({ ...prev, [field]: value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setFormState('loading')
    setErrorMsg('')

    try {
      const res = await fetch('/api/submit-missionaries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ contact }),
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
            Thank you. Your ministry has been registered. The MII Australia team will be in touch
            shortly with next steps.
          </p>
        </div>
      </section>
    )
  }

  return (
    <section className="eoi" id="register">
      <div className="eoi-inner" style={{ maxWidth: '780px' }}>
        <div className="section-tag">Follow Up Centre</div>
        <h2>Register Your Ministry.</h2>
        <p className="lead">
          Tell us a bit about your ministry, and the MII Australia team will be in touch about
          getting started with the Follow Up Centre.
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

          {/* ── SUBMIT ── */}
          <div style={{ marginTop: '8px' }}>
            <button type="submit" className="btn-submit" disabled={formState === 'loading'}>
              {formState === 'loading' ? 'Submitting…' : 'Register Your Ministry'}
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
