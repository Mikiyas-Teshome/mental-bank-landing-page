import { NextRequest, NextResponse } from 'next/server';

const BACKEND_URL = process.env.BACKEND_URL || 'http://84.247.182.225:8000';

export async function POST(request: NextRequest) {
  try {
    const { email, otp } = await request.json();

    if (!email || !otp) {
      return NextResponse.json(
        { message: 'Email and OTP are required' },
        { status: 400 }
      );
    }

    // First verify the OTP
    const verifyResponse = await fetch(`${BACKEND_URL}/auth/verify-otp`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, otp }),
    });

    if (!verifyResponse.ok) {
      const errorData = await verifyResponse.json();
      return NextResponse.json(
        { message: errorData.message || 'Invalid OTP' },
        { status: verifyResponse.status }
      );
    }

    const userData = await verifyResponse.json();
    const userId = userData.userInfo?.userId;

    if (!userId) {
      return NextResponse.json(
        { message: 'User not found' },
        { status: 404 }
      );
    }

    // Now delete the account using the access token
    const deleteResponse = await fetch(`${BACKEND_URL}/auth/delete-account`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${userData.accessToken}`,
      },
    });

    if (deleteResponse.ok) {
      return NextResponse.json({ 
        message: 'Account deleted successfully' 
      });
    } else {
      const errorData = await deleteResponse.json();
      return NextResponse.json(
        { message: errorData.message || 'Failed to delete account' },
        { status: deleteResponse.status }
      );
    }
  } catch (error) {
    console.error('Error deleting account:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}