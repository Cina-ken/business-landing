
// app/api/contact/route.ts
import { NextRequest, NextResponse } from 'next/server';

interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  service: string;
  message: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();
    
    // Validate required fields
    const { name, email, message } = body;
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address' },
        { status: 400 }
      );
    }

    // In a real application, you would:
    // 1. Save to database
    // 2. Send email notification
    // 3. Add to CRM system
    // 4. Send auto-response email
    
    // For demo purposes, we'll just log and simulate processing
    console.log('New contact form submission:', {
      ...body,
      timestamp: new Date().toISOString(),
      userAgent: request.headers.get('user-agent') || 'unknown'
    });

    // Simulate processing delay (remove in production)
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Here's where you'd integrate with services like:
    // - EmailJS for sending emails
    // - Airtable or Notion as a simple database
    // - SendGrid for email notifications
    // - Slack webhook for team notifications

    return NextResponse.json({
      success: true,
      message: 'Thank you for your message! We\'ll get back to you within 24 hours.',
      data: {
        submittedAt: new Date().toISOString(),
        referenceId: `REF-${Date.now()}`
      }
    });

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Something went wrong. Please try again later.' },
      { status: 500 }
    );
  }
}