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
      from: 'Stake Digital Media <info@ittas.co.za>',
      to: ['nitinlodhi2002@gmail.com'],
      replyTo: email,
      subject: `New Lead Capture: ${name}${company ? ` from ${company}` : ''}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Lead Capture Submission</title>
          </head>
          <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
            <div style="background: linear-gradient(135deg, #00C853 0%, #00875A 100%); padding: 30px; border-radius: 10px 10px 0 0; text-align: center;">
              <h1 style="color: white; margin: 0; font-size: 28px;">🎯 New Lead Captured!</h1>
            </div>
            
            <div style="background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; border: 1px solid #e0e0e0; border-top: none;">
              <div style="background: linear-gradient(135deg, #fff8e1 0%, #ffe57f 100%); padding: 20px; border-radius: 8px; margin-bottom: 30px; border-left: 4px solid #ffd700;">
                <p style="margin: 0; font-weight: bold; color: #f57c00;">⭐ Media Kit Download Request</p>
                <p style="margin: 5px 0 0 0; font-size: 14px; color: #666;">This lead downloaded the media kit from the popup modal</p>
              </div>
              
              <h2 style="color: #00875A; margin-top: 0; border-bottom: 2px solid #00C853; padding-bottom: 10px;">Lead Information</h2>
              
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e0e0e0;">
                    <strong style="color: #00875A; display: inline-block; width: 120px;">Name:</strong>
                    <span>${name}</span>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e0e0e0;">
                    <strong style="color: #00875A; display: inline-block; width: 120px;">Email:</strong>
                    <a href="mailto:${email}" style="color: #0BB4E4; text-decoration: none;">${email}</a>
                  </td>
                </tr>
                ${company ? `
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e0e0e0;">
                    <strong style="color: #00875A; display: inline-block; width: 120px;">Company:</strong>
                    <span>${company}</span>
                  </td>
                </tr>
                ` : ''}
                <tr>
                  <td style="padding: 12px 0;">
                    <strong style="color: #00875A; display: inline-block; width: 120px;">Submitted:</strong>
                    <span>${new Date().toLocaleString('en-ZA', { 
                      timeZone: 'Africa/Johannesburg',
                      dateStyle: 'full',
                      timeStyle: 'short'
                    })}</span>
                  </td>
                </tr>
              </table>
              
              <div style="margin-top: 30px; padding: 20px; background: #e8f5e9; border-radius: 8px; border-left: 4px solid #00C853;">
                <p style="margin: 0; font-size: 14px; color: #2e7d32;">
                  <strong>💡 Tip:</strong> Lead captured via popup - high intent! Follow up within 2 hours for best conversion rates.
                </p>
              </div>
              
              <div style="margin-top: 20px; padding: 20px; background: white; border-radius: 8px; border: 2px dashed #00C853;">
                <h3 style="margin: 0 0 10px 0; color: #00875A; font-size: 16px;">Recommended Next Steps:</h3>
                <ul style="margin: 0; padding-left: 20px; color: #666;">
                  <li style="margin: 5px 0;">Send media kit to ${email}</li>
                  <li style="margin: 5px 0;">Add to CRM and set follow-up reminder</li>
                  <li style="margin: 5px 0;">Prepare personalized campaign proposal</li>
                </ul>
              </div>
            </div>
            
            <div style="text-align: center; margin-top: 20px; padding: 20px; color: #999; font-size: 12px;">
              <p style="margin: 0;">This lead was captured from the Stake Digital Media website popup</p>
              <p style="margin: 5px 0 0 0;">© ${new Date().getFullYear()} Stake Digital Media. All rights reserved.</p>
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
