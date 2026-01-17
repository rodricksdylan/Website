import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, message } = body

    // Validate input
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    // Validate environment variables
    const smtpHost = process.env.SMTP_HOST
    const smtpUser = process.env.SMTP_USER
    const smtpPassword = process.env.SMTP_PASSWORD?.replace(/^["']|["']$/g, '') || process.env.SMTP_PASSWORD // Remove quotes if present
    const smtpPort = parseInt(process.env.SMTP_PORT || '465')
    const emailFrom = process.env.EMAIL_FROM || smtpUser

    if (!smtpHost || !smtpUser || !smtpPassword) {
      console.error('Missing SMTP environment variables:', {
        hasHost: !!smtpHost,
        hasUser: !!smtpUser,
        hasPassword: !!smtpPassword,
      })
      return NextResponse.json(
        { error: 'Email service configuration error' },
        { status: 500 }
      )
    }

    // Create transporter using Hostinger SMTP
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: true, // true for 465, false for other ports
      auth: {
        user: smtpUser,
        pass: smtpPassword,
      },
    })

    // Email content
    const mailOptions = {
      from: emailFrom,
      to: emailFrom, // Send to yourself
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${String(message).replace(/\n/g, '<br>')}</p>
      `,
      text: `
        New Contact Form Submission
        
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `,
    }

    // Send email
    await transporter.sendMail(mailOptions)
    
    return NextResponse.json(
      { message: 'Email sent successfully', success: true },
      { status: 200 }
    )
  } catch (error: any) {
    console.error('Error sending email:', error)
    
    // Return more specific error information in development
    const errorMessage = process.env.NODE_ENV === 'development' 
      ? `Failed to send email: ${error.message || 'Unknown error'}`
      : 'Failed to send email. Please try again later.'
    
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    )
  }
}
