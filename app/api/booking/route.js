import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();
    
    const { name, email, phone, date, time, therapyType, preferredMode, concerns, emergencyContact, previousTherapy } = body;
    
    if (!name || !email || !phone || !date || !time) {
      return NextResponse.json(
        { error: 'All required fields must be filled' },
        { status: 400 }
      );
    }

    const formData = new URLSearchParams();
    formData.append('_subject', 'New Consultation Booking');
    formData.append('Name', name);
    formData.append('Email', email);
    formData.append('Phone', phone);
    formData.append('Date', date);
    formData.append('Time', time);
    formData.append('Therapy Type', therapyType || 'N/A');
    formData.append('Mode', preferredMode || 'N/A');
    formData.append('Emergency Contact', emergencyContact || 'N/A');
    formData.append('Previous Therapy', previousTherapy || 'N/A');
    formData.append('Concerns', concerns || 'N/A');

    await fetch('https://formsubmit.co/shahmanan2116@gmail.com', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: formData.toString()
    });

    return NextResponse.json(
      { success: true, message: 'Booking request sent successfully!' },
      { status: 200 }
    );
    
  } catch (error) {
    console.error('Booking API Error:', error);
    return NextResponse.json(
      { error: 'Failed to send booking request. Please try again.' },
      { status: 500 }
    );
  }
}