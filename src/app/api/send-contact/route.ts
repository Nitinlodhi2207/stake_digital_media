import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, company, service, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
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
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Contact Form Submission</title>
          </head>
          <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
            <div style="background: linear-gradient(135deg, #0BB4E4 0%, #0A4F8D 100%); padding: 30px; border-radius: 10px 10px 0 0; text-align: center;">
              <h1 style="color: white; margin: 0; font-size: 28px;">New Contact Form Submission</h1>
            </div>
            
            <div style="background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; border: 1px solid #e0e0e0; border-top: none;">
              <h2 style="color: #0A4F8D; margin-top: 0; border-bottom: 2px solid #0BB4E4; padding-bottom: 10px;">Contact Details</h2>
              
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e0e0e0;">
                    <strong style="color: #0A4F8D; display: inline-block; width: 120px;">Name:</strong>
                    <span>${name}</span>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e0e0e0;">
                    <strong style="color: #0A4F8D; display: inline-block; width: 120px;">Email:</strong>
                    <a href="mailto:${email}" style="color: #0BB4E4; text-decoration: none;">${email}</a>
                  </td>
                </tr>
                ${phone ? `
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e0e0e0;">
                    <strong style="color: #0A4F8D; display: inline-block; width: 120px;">Phone:</strong>
                    <a href="tel:${phone}" style="color: #0BB4E4; text-decoration: none;">${phone}</a>
                  </td>
                </tr>
                ` : ''}
                ${company ? `
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e0e0e0;">
                    <strong style="color: #0A4F8D; display: inline-block; width: 120px;">Company:</strong>
                    <span>${company}</span>
                  </td>
                </tr>
                ` : ''}
                ${service ? `
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e0e0e0;">
                    <strong style="color: #0A4F8D; display: inline-block; width: 120px;">Service Interest:</strong>
                    <span style="text-transform: capitalize;">${service.replace('-', ' ')}</span>
                  </td>
                </tr>
                ` : ''}
              </table>
              
              <h2 style="color: #0A4F8D; margin-top: 30px; border-bottom: 2px solid #0BB4E4; padding-bottom: 10px;">Message</h2>
              <div style="background: white; padding: 20px; border-radius: 8px; border-left: 4px solid #0BB4E4;">
                <p style="margin: 0; white-space: pre-wrap;">${message}</p>
              </div>
              
              <div style="margin-top: 30px; padding: 20px; background: #e8f7fc; border-radius: 8px; border-left: 4px solid #0BB4E4;">
                <p style="margin: 0; font-size: 14px; color: #666;">
                  <strong>Action Required:</strong> Please respond to this inquiry within 24 hours to maintain our service standards.
                </p>
              </div>
            </div>
            
            <div style="text-align: center; margin-top: 20px; padding: 20px; color: #999; font-size: 12px;">
              <p style="margin: 0;">This email was sent from the Stake Digital Media contact form</p>
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
