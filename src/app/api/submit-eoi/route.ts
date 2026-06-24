import { Resend } from 'resend'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY)
  const body = await req.json()
  const {
    firstName, lastName, email, phone,
    orgName, orgType, location,
    attendees = [],
    digitalMinistry, socialMedia = [], seekerResponse,
  } = body

  if (!firstName || !lastName || !email || !orgName || !orgType) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
  }

  const attendeesHtml = attendees.length > 0
    ? `
      <div style="margin-top: 28px;">
        <p style="font-size: 11px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: #5A6A7A; margin: 0 0 12px;">Workshop Attendees (${attendees.length})</p>
        ${attendees.map((a: { firstName: string; lastName: string; email: string; phone: string; position: string; location: string }, i: number) => `
          <div style="padding: 14px 16px; background: #f4f6f9; border-left: 3px solid #1877F2; margin-bottom: 8px;">
            <p style="font-size: 13px; font-weight: 700; color: #022F5D; margin: 0 0 4px;">${i + 1}. ${a.firstName} ${a.lastName}</p>
            <p style="font-size: 13px; color: #5A6A7A; margin: 0;">${a.position || '—'} &nbsp;·&nbsp; ${a.location || '—'}</p>
            <p style="font-size: 13px; color: #1877F2; margin: 4px 0 0;">${a.email}${a.phone ? ` &nbsp;·&nbsp; ${a.phone}` : ''}</p>
          </div>
        `).join('')}
      </div>
    ` : ''

  try {
    await resend.emails.send({
      from: 'MII EOI <noreply@mii.global>',
      to: 'australia@mii.global',
      replyTo: email,
      subject: `New EOI: ${firstName} ${lastName} — ${orgName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 640px; margin: 0 auto; background: #f4f6f9; padding: 32px;">
          <div style="background: #022F5D; padding: 24px 32px; margin-bottom: 0;">
            <h1 style="color: white; font-size: 20px; margin: 0; font-weight: 700;">New Expression of Interest</h1>
            <p style="color: rgba(255,255,255,0.6); font-size: 13px; margin: 4px 0 0;">Media Impact International — 2026 Cohort</p>
          </div>

          <div style="background: white; padding: 32px; border-left: 4px solid #1877F2;">

            <p style="font-size: 11px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: #5A6A7A; margin: 0 0 12px;">Ministry Primary Contact</p>
            <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
              <tr style="border-bottom: 1px solid #f0f0f0;">
                <td style="padding: 10px 0; color: #5A6A7A; width: 40%; font-weight: 600;">Name</td>
                <td style="padding: 10px 0; color: #022F5D; font-weight: 700;">${firstName} ${lastName}</td>
              </tr>
              <tr style="border-bottom: 1px solid #f0f0f0;">
                <td style="padding: 10px 0; color: #5A6A7A; font-weight: 600;">Email</td>
                <td style="padding: 10px 0;"><a href="mailto:${email}" style="color: #1877F2;">${email}</a></td>
              </tr>
              <tr style="border-bottom: 1px solid #f0f0f0;">
                <td style="padding: 10px 0; color: #5A6A7A; font-weight: 600;">Phone</td>
                <td style="padding: 10px 0; color: #022F5D;">${phone || '—'}</td>
              </tr>
              <tr style="border-bottom: 1px solid #f0f0f0;">
                <td style="padding: 10px 0; color: #5A6A7A; font-weight: 600;">Organisation</td>
                <td style="padding: 10px 0; color: #022F5D; font-weight: 700;">${orgName}</td>
              </tr>
              <tr style="border-bottom: 1px solid #f0f0f0;">
                <td style="padding: 10px 0; color: #5A6A7A; font-weight: 600;">Organisation Type</td>
                <td style="padding: 10px 0; color: #022F5D;">${orgType}</td>
              </tr>
              <tr style="border-bottom: 1px solid #f0f0f0;">
                <td style="padding: 10px 0; color: #5A6A7A; font-weight: 600;">Location</td>
                <td style="padding: 10px 0; color: #022F5D;">${location || '—'}</td>
              </tr>
            </table>

            ${attendeesHtml}

            ${socialMedia.length > 0 ? `
              <div style="margin-top: 24px; padding: 16px 20px; background: #f4f6f9; border-left: 3px solid #1877F2;">
                <p style="font-size: 11px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: #5A6A7A; margin: 0 0 8px;">Primary Social Media</p>
                <p style="font-size: 14px; color: #022F5D; margin: 0;">${socialMedia.join(', ')}</p>
              </div>
            ` : ''}

            ${digitalMinistry ? `
              <div style="margin-top: 16px; padding: 16px 20px; background: #f4f6f9; border-left: 3px solid #1877F2;">
                <p style="font-size: 11px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: #5A6A7A; margin: 0 0 8px;">Current Digital Ministry / Outreach</p>
                <p style="font-size: 14px; color: #022F5D; line-height: 1.7; margin: 0;">${digitalMinistry.replace(/\n/g, '<br>')}</p>
              </div>
            ` : ''}

            ${seekerResponse ? `
              <div style="margin-top: 16px; padding: 16px 20px; background: #f4f6f9; border-left: 3px solid #1877F2;">
                <p style="font-size: 11px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: #5A6A7A; margin: 0 0 8px;">Responding to Seekers Online</p>
                <p style="font-size: 14px; color: #022F5D; line-height: 1.7; margin: 0;">${seekerResponse.replace(/\n/g, '<br>')}</p>
              </div>
            ` : ''}

          </div>

          <div style="padding: 20px 32px; text-align: center;">
            <p style="font-size: 12px; color: #999; margin: 0;">
              Submitted via australia.mii.global &nbsp;·&nbsp;
              <a href="mailto:${email}" style="color: #1877F2;">Reply directly to ${firstName}</a>
            </p>
          </div>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Email send error:', error)
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
  }
}
