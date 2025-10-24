import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, company } = body;

    // Validate required fields
    if (!name || !email) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'ITURNEDTOASTAR® <info@ittas.co.za>',
      to: ['nitinlodhi2002@gmail.com'],
      replyTo: email,
      subject: `New Lead Capture: ${name}${company ? ` from ${company}` : ''}`,
      text: `
ITURNEDTOASTAR - New Lead Captured! 🎯

A new lead has been captured from Stake Digital Media website.

Media Kit Download Request
This lead downloaded the media kit from the popup modal.

Lead Information:
- Name: ${name}
- Email: ${email}
${company ? `- Company: ${company}` : ''}
- Submitted: ${new Date().toLocaleString('en-ZA', { 
  timeZone: 'Africa/Johannesburg',
  dateStyle: 'full',
  timeStyle: 'short'
})}

Tip: Lead captured via popup - high intent! Follow up within 2 hours for best conversion rates.

Recommended Next Steps:
- Send media kit to ${email}
- Add to CRM and set follow-up reminder
- Prepare personalized campaign proposal

---
This email was sent by ITURNEDTOASTAR from the Stake Digital Media website popup.
© ${new Date().getFullYear()} ITURNEDTOASTAR (Pty) Ltd. All rights reserved.
      `,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Lead Capture Submission</title>
          </head>
          <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
            <div style="background: linear-gradient(135deg, #ACA85C 0%, #8A8740 100%); padding: 30px; border-radius: 10px 10px 0 0; text-align: center;">
              <h1 style="color: white; margin: 0; font-size: 28px;">ITURNEDTOASTAR®</h1>
              <p style="color: white; margin: 10px 0 0 0; font-size: 16px;">🎯 New Lead Captured!</p>
            </div>
            
            <div style="background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; border: 1px solid #e0e0e0; border-top: none;">
              <div style="background: linear-gradient(135deg, #f9f6ed 0%, #e8e3ce 100%); padding: 20px; border-radius: 8px; margin-bottom: 30px; border-left: 4px solid #ACA85C;">
                <p style="margin: 0; font-weight: bold; color: #8A8740;">⭐ Media Kit Download Request</p>
                <p style="margin: 5px 0 0 0; font-size: 14px; color: #666;">This lead downloaded the media kit from <strong>Stake Digital Media</strong> popup modal</p>
              </div>
              
              <h2 style="color: #8A8740; margin-top: 0; border-bottom: 2px solid #ACA85C; padding-bottom: 10px;">Lead Information</h2>
              
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e0e0e0;">
                    <strong style="color: #8A8740; display: inline-block; width: 120px;">Name:</strong>
                    <span>${name}</span>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e0e0e0;">
                    <strong style="color: #8A8740; display: inline-block; width: 120px;">Email:</strong>
                    <a href="mailto:${email}" style="color: #ACA85C; text-decoration: none;">${email}</a>
                  </td>
                </tr>
                ${company ? `
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e0e0e0;">
                    <strong style="color: #8A8740; display: inline-block; width: 120px;">Company:</strong>
                    <span>${company}</span>
                  </td>
                </tr>
                ` : ''}
                <tr>
                  <td style="padding: 12px 0;">
                    <strong style="color: #8A8740; display: inline-block; width: 120px;">Submitted:</strong>
                    <span>${new Date().toLocaleString('en-ZA', { 
                      timeZone: 'Africa/Johannesburg',
                      dateStyle: 'full',
                      timeStyle: 'short'
                    })}</span>
                  </td>
                </tr>
              </table>
              
              <div style="margin-top: 30px; padding: 20px; background: #f9f6ed; border-radius: 8px; border-left: 4px solid #ACA85C;">
                <p style="margin: 0; font-size: 14px; color: #666;">
                  <strong>💡 Tip:</strong> Lead captured via popup - high intent! Follow up within 2 hours for best conversion rates.
                </p>
              </div>
              
              <div style="margin-top: 20px; padding: 20px; background: white; border-radius: 8px; border: 2px dashed #ACA85C;">
                <h3 style="margin: 0 0 10px 0; color: #8A8740; font-size: 16px;">Recommended Next Steps:</h3>
                <ul style="margin: 0; padding-left: 20px; color: #666;">
                  <li style="margin: 5px 0;">Send media kit to ${email}</li>
                  <li style="margin: 5px 0;">Add to CRM and set follow-up reminder</li>
                  <li style="margin: 5px 0;">Prepare personalized campaign proposal</li>
                </ul>
              </div>
            </div>
            
            <div style="text-align: center; margin-top: 20px; padding: 20px; color: #999; font-size: 12px;">
              <p style="margin: 0;">This email was sent by <strong style="color: #8A8740;">ITURNEDTOASTAR</strong> from Stake Digital Media website popup</p>
              <p style="margin: 5px 0 0 0;">© ${new Date().getFullYear()} ITURNEDTOASTAR (Pty) Ltd. All rights reserved.</p>
            </div>
          </body>
        </html>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, messageId: data?.id },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing request:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
