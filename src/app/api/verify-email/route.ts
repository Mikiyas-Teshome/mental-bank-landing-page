import { NextRequest, NextResponse } from 'next/server';

const BACKEND_URL = process.env.BACKEND_URL || 'http://84.247.182.225:8000';

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json(
        { message: 'Email is required' },
        { status: 400 }
      );
    }

    // Call the new backend endpoint that checks email existence first
    const response = await fetch(`${BACKEND_URL}/auth/check-email-for-deletion`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    });

    const data = await response.json();

    if (response.ok) {
      return NextResponse.json({ 
        message: 'OTP sent successfully',
        // Don't return the actual OTP in production
        otp: process.env.NODE_ENV === 'development' ? data.otp : undefined
      });
    } else {
      return NextResponse.json(
        { message: data.message || 'Failed to verify email' },
        { status: response.status }
      );
    }
  } catch (error) {
    console.error('Error verifying email:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}