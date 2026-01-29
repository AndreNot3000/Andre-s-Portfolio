import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json()

    // Basic validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      )
    }

    // Log the message (you can see this in your terminal/console)
    console.log('📧 New Contact Form Submission:')
    console.log('From:', name, `(${email})`)
    console.log('Subject:', subject)
    console.log('Message:', message)
    console.log('Time:', new Date().toISOString())
    console.log('---')

    // TODO: Integrate with email service
    // For now, this will show success but won't send actual emails
    // See CONTACT_SETUP.md for email integration instructions

    return NextResponse.json(
      { 
        success: true, 
        message: 'Message received! Check the console logs. To receive actual emails, follow the setup in CONTACT_SETUP.md' 
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to send message. Please try again.' },
      { status: 500 }
    )
  }
}