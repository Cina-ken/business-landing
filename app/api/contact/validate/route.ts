import { NextRequest, NextResponse } from 'next/server';

export async function PUT(request: NextRequest) {
  try {
    const { email } = await request.json();
    
    // You could add real-time email validation here
    // Check against disposable email services, etc.
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailRegex.test(email);
    
    return NextResponse.json({
      valid: isValid,
      message: isValid ? 'Email looks good!' : 'Please enter a valid email address'
    });
    
  } catch (error) {
    console.error('Email validation failed:', error);
    return NextResponse.json({ valid: false, message: 'Validation error' });
  }
}