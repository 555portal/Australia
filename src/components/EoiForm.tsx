'use client'

import { useState, FormEvent } from 'react'

type FormState = 'idle' | 'loading' | 'success' | 'error'

export default function EoiForm() {
  const [state, setState] = useState<FormState>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setState('loading')
    setErrorMsg('')

    const form = e.currentTarget
    const data = {
      firstName: (form.elements.namedItem('firstName') as HTMLInputElement).value,
      lastName: (form.elements.namedItem('lastName') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      phone: (form.elements.namedItem('phone') as HTMLInputElement).value,
      orgName: (form.elements.namedItem('orgName') as HTMLInputElement).value,
      orgType: (form.elements.namedItem('orgType') as HTMLSelectElement).value,
      location: (form.elements.namedItem('location') as HTMLInputElement).value,
      digitalMinistry: (form.elements.namedItem('digitalMinistry') as HTMLTextAreaElement).value,
    }

    try {
      const res = await fetch('/api/submit-eoi', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (!res.ok) throw new Error('Submission failed')
      setState('success')
    } catch {
      setState('error')
      setErrorMsg('Something went wrong. Please try again or email australia@mii.global directly.')
    }
  }

  if (state === 'success') {
    return (
      <section className="eoi" id="eoi">
        <div className="eoi-inner">
          <div className="section-tag">Expression of Interest</div>
          <h2>Thank you — we&rsquo;ll be in touch.</h2>
          <p className="lead">
            Your expression of interest has been received. A member of the MII Australia team will
            contact you soon to explore whether this program is the right fit for your ministry.
          </p>
        </div>
      </section>
    )
  }

  return (
    <section className="eoi" id="eoi">
      <div className="eoi-inner">
        <div className="section-tag">Expression of Interest</div>
        <h2>Ready to take the next step?</h2>
        <p className="lead">
          Places in the 2026 cohort are limited. Submit your expression of interest and a member
          of the MII Australia team will be in touch to explore whether this program is the right
          fit for your ministry.
        </p>

        <form className="eoi-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input id="firstName" name="firstName" type="text" placeholder="Your first name" required />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input id="lastName" name="lastName" type="text" placeholder="Your last name" required />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input id="email" name="email" type="email" placeholder="you@yourministry.org.au" required />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input id="phone" name="phone" type="tel" placeholder="Your phone number" />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="orgName">Organisation Name</label>
              <input id="orgName" name="orgName" type="text" placeholder="Church or ministry name" required />
            </div>
            <div className="form-group">
              <label htmlFor="orgType">Organisation Type</label>
              <select id="orgType" name="orgType" required defaultValue="">
                <option value="" disabled>Select one</option>
                <option>Church</option>
                <option>Ministry Organisation</option>
                <option>Other Ministry</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="location">City / State</label>
            <input id="location" name="location" type="text" placeholder="e.g. Adelaide, SA" />
          </div>

          <div className="form-group">
            <label htmlFor="digitalMinistry">Tell us about your current digital ministry (optional)</label>
            <textarea
              id="digitalMinistry"
              name="digitalMinistry"
              placeholder="What are you currently doing online? What's your biggest challenge or opportunity?"
            />
          </div>

          <div>
            <button
              type="submit"
              className="btn-submit"
              disabled={state === 'loading'}
            >
              {state === 'loading' ? 'Submitting…' : 'Submit Expression of Interest'}
            </button>
            {state === 'error' && <p className="form-error">{errorMsg}</p>}
            <p className="form-note">We respect your privacy. Your details will only be used to follow up on this enquiry.</p>
          </div>
        </form>
      </div>
    </section>
  )
}
