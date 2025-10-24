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
      from: 'ITURNEDTOASTAR® <info@ittas.co.za>',
      to: ['nitinlodhi2002@gmail.com'],
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      text: `
ITURNEDTOASTAR - New Contact Form Submission

A new contact form submission has been received from Stake Digital Media website.

Contact Details:
- Name: ${name}
- Email: ${email}
${phone ? `- Phone: ${phone}` : ''}
${company ? `- Company: ${company}` : ''}
${service ? `- Service Interest: ${service.replace('-', ' ')}` : ''}

Message:
${message}

---
Action Required: Please respond to this inquiry within 24 hours to maintain our service standards.

This email was sent by ITURNEDTOASTAR from the Stake Digital Media contact form.
© ${new Date().getFullYear()} ITURNEDTOASTAR (Pty) Ltd. All rights reserved.
      `,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Contact Form Submission</title>
          </head>
          <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
            <div style="background: linear-gradient(135deg, #ACA85C 0%, #8A8740 100%); padding: 30px; border-radius: 10px 10px 0 0; text-align: center;">
              <h1 style="color: white; margin: 0; font-size: 28px;">ITURNEDTOASTAR®</h1>
              <p style="color: white; margin: 10px 0 0 0; font-size: 16px;">New Contact Form Submission</p>
            </div>
            
            <div style="background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; border: 1px solid #e0e0e0; border-top: none;">
              <div style="background: linear-gradient(135deg, #f9f6ed 0%, #e8e3ce 100%); padding: 15px 20px; border-radius: 8px; margin-bottom: 25px; border-left: 4px solid #ACA85C;">
                <p style="margin: 0; font-size: 14px; color: #666;">
                  <strong style="color: #8A8740;">Stake Digital Media</strong> website contact form submission
                </p>
              </div>
              
              <h2 style="color: #8A8740; margin-top: 0; border-bottom: 2px solid #ACA85C; padding-bottom: 10px;">Contact Details</h2>
              
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
                ${phone ? `
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e0e0e0;">
                    <strong style="color: #8A8740; display: inline-block; width: 120px;">Phone:</strong>
                    <a href="tel:${phone}" style="color: #ACA85C; text-decoration: none;">${phone}</a>
                  </td>
                </tr>
                ` : ''}
                ${company ? `
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e0e0e0;">
                    <strong style="color: #8A8740; display: inline-block; width: 120px;">Company:</strong>
                    <span>${company}</span>
                  </td>
                </tr>
                ` : ''}
                ${service ? `
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e0e0e0;">
                    <strong style="color: #8A8740; display: inline-block; width: 120px;">Service Interest:</strong>
                    <span style="text-transform: capitalize;">${service.replace('-', ' ')}</span>
                  </td>
                </tr>
                ` : ''}
              </table>
              
              <h2 style="color: #8A8740; margin-top: 30px; border-bottom: 2px solid #ACA85C; padding-bottom: 10px;">Message</h2>
              <div style="background: white; padding: 20px; border-radius: 8px; border-left: 4px solid #ACA85C;">
                <p style="margin: 0; white-space: pre-wrap;">${message}</p>
              </div>
              
              <div style="margin-top: 30px; padding: 20px; background: #f9f6ed; border-radius: 8px; border-left: 4px solid #ACA85C;">
                <p style="margin: 0; font-size: 14px; color: #666;">
                  <strong>Action Required:</strong> Please respond to this inquiry within 24 hours to maintain our service standards.
                </p>
              </div>
            </div>
            
            <div style="text-align: center; margin-top: 20px; padding: 20px; color: #999; font-size: 12px;">
              <p style="margin: 0;">This email was sent by <strong style="color: #8A8740;">ITURNEDTOASTAR</strong> from Stake Digital Media contact form</p>
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
