import { Resend } from 'resend'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY)
  const body = await req.json()
  const { contact, missionaries = [] } = body
  const { firstName, lastName, email, phone, orgName, location } = contact ?? {}

  if (!firstName || !lastName || !email || !orgName) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
  }

  const missionariesHtml = missionaries.length > 0
    ? `
      <div style="margin-top: 28px;">
        <p style="font-size: 11px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: #5A6A7A; margin: 0 0 12px;">Online Missionaries (${missionaries.length})</p>
        ${missionaries.map((m: { firstName: string; lastName: string; email: string; phone: string }, i: number) => `
          <div style="padding: 14px 16px; background: #f4f6f9; border-left: 3px solid #1877F2; margin-bottom: 8px;">
            <p style="font-size: 13px; font-weight: 700; color: #022F5D; margin: 0 0 4px;">${i + 1}. ${m.firstName} ${m.lastName}</p>
            <p style="font-size: 13px; color: #1877F2; margin: 4px 0 0;">${m.email}${m.phone ? ` &nbsp;·&nbsp; ${m.phone}` : ''}</p>
          </div>
        `).join('')}
      </div>
    ` : ''

  try {
    await resend.emails.send({
      from: 'MII EOI <noreply@mii.global>',
      to: 'australia@mii.global',
      replyTo: email,
      subject: `Follow Up Centre Registration: ${orgName} — ${missionaries.length} Missionary${missionaries.length !== 1 ? 'ies' : 'y'}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 640px; margin: 0 auto; background: #f4f6f9; padding: 32px;">
          <div style="background: #022F5D; padding: 24px 32px; margin-bottom: 0;">
            <h1 style="color: white; font-size: 20px; margin: 0; font-weight: 700;">Follow Up Centre Registration</h1>
            <p style="color: rgba(255,255,255,0.6); font-size: 13px; margin: 4px 0 0;">Online Missionary Registration — Melbourne Workshop 2026</p>
          </div>

          <div style="background: white; padding: 32px; border-left: 4px solid #1877F2;">

            <p style="font-size: 11px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: #5A6A7A; margin: 0 0 12px;">Ministry Contact</p>
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
                <td style="padding: 10px 0; color: #5A6A7A; font-weight: 600;">Location</td>
                <td style="padding: 10px 0; color: #022F5D;">${location || '—'}</td>
              </tr>
            </table>

            ${missionariesHtml}

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
