import { NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';
import { Database, PilotApplicationInsert } from '@/types/database';
import { EmailService, EmailNotificationData } from '@/lib/email';

function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function isValidCompanySize(size: string): boolean {
  const validSizes = ['1-10', '11-50', '51-200', '201-500', '500+'];
  return validSizes.includes(size);
}

function isValidTimeline(timeline: string): boolean {
  const validTimelines = ['immediate', '1-3-months', '3-6-months', '6-12-months'];
  return validTimelines.includes(timeline);
}

export async function POST(request: NextRequest) {
  try {
    if (!supabaseAdmin) {
      return NextResponse.json(
        { error: 'Database operations not available' },
        { status: 500 }
      );
    }

    const body = await request.json();
    const { 
      companyName, 
      contactName, 
      email, 
      phone, 
      companySize, 
      currentChallenges, 
      interestedFeatures, 
      timeline, 
      additionalInfo
    } = body;

    // Validate required fields
    if (!companyName || !contactName || !email || !companySize || !timeline) {
      return NextResponse.json(
        { error: 'Missing required fields: companyName, contactName, email, companySize, and timeline are required' },
        { status: 400 }
      );
    }

    // Validate field types
    if (typeof companyName !== 'string' || typeof contactName !== 'string' || typeof email !== 'string' || 
        typeof companySize !== 'string' || typeof timeline !== 'string') {
      return NextResponse.json(
        { error: 'Invalid field types: string fields must be strings' },
        { status: 400 }
      );
    }

    // Validate array fields
    if (currentChallenges && !Array.isArray(currentChallenges)) {
      return NextResponse.json(
        { error: 'currentChallenges must be an array' },
        { status: 400 }
      );
    }

    if (interestedFeatures && !Array.isArray(interestedFeatures)) {
      return NextResponse.json(
        { error: 'interestedFeatures must be an array' },
        { status: 400 }
      );
    }

    // Validate field lengths
    if (companyName.trim().length === 0 || contactName.trim().length === 0 || email.trim().length === 0) {
      return NextResponse.json(
        { error: 'Empty fields: required fields must contain valid content' },
        { status: 400 }
      );
    }

    // Validate field lengths
    if (companyName.length > 100 || contactName.length > 100 || email.length > 100) {
      return NextResponse.json(
        { error: 'Field too long: maximum 100 characters for company name, contact name, and email' },
        { status: 400 }
      );
    }

    // Validate email format
    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Validate company size
    if (!isValidCompanySize(companySize)) {
      return NextResponse.json(
        { error: 'Invalid company size. Must be one of: 1-10, 11-50, 51-200, 201-500, 500+' },
        { status: 400 }
      );
    }

    // Validate timeline
    if (!isValidTimeline(timeline)) {
      return NextResponse.json(
        { error: 'Invalid timeline. Must be one of: immediate, 1-3-months, 3-6-months, 6-12-months' },
        { status: 400 }
      );
    }

    // Validate phone number format if provided
    if (phone && phone.trim()) {
      const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
      if (!phoneRegex.test(phone.trim().replace(/[\s\-\(\)]/g, ''))) {
        return NextResponse.json(
          { error: 'Invalid phone number format' },
          { status: 400 }
        );
      }
    }

    // Check if email already exists in database
    const { data: existingApplication, error: checkError } = await supabaseAdmin
      .from('pilot_applications')
      .select('id')
      .eq('email', email.trim().toLowerCase())
      .single();

    if (checkError && checkError.code !== 'PGRST116') { // PGRST116 = no rows found
      console.error('Error checking existing email:', checkError);
      return NextResponse.json(
        { error: 'Database error while checking email' },
        { status: 500 }
      );
    }

    if (existingApplication) {
      return NextResponse.json(
        { error: 'This email has already been registered for pilot access. Each company can only submit one application.' },
        { status: 409 }
      );
    }

    // Check if phone number already exists (if provided)
    if (phone && phone.trim()) {
      const { data: existingPhone, error: phoneCheckError } = await supabaseAdmin
        .from('pilot_applications')
        .select('id')
        .eq('phone', phone.trim())
        .single();

      if (phoneCheckError && phoneCheckError.code !== 'PGRST116') {
        console.error('Error checking existing phone:', phoneCheckError);
        return NextResponse.json(
          { error: 'Database error while checking phone number' },
          { status: 500 }
        );
      }

      if (existingPhone) {
        return NextResponse.json(
          { error: 'This phone number has already been registered for pilot access. Each company can only submit one application.' },
          { status: 409 }
        );
      }
    }

    // Create new pilot application
    const newApplication: PilotApplicationInsert = {
      user_id: null, // Allow anonymous submissions
      company_name: companyName.trim(),
      contact_name: contactName.trim(),
      email: email.trim().toLowerCase(),
      phone: phone?.trim() || '',
      company_size: companySize as Database['public']['Tables']['pilot_applications']['Row']['company_size'],
      current_challenges: currentChallenges || [],
      interested_features: interestedFeatures || [],
      timeline: timeline as Database['public']['Tables']['pilot_applications']['Row']['timeline'],
      additional_info: additionalInfo?.trim() || null,
      status: 'pending'
    };

    // Insert into database
    const { data: insertedApplication, error: insertError } = await supabaseAdmin
      .from('pilot_applications')
      .insert(newApplication)
      .select('id, created_at')
      .single();

    if (insertError) {
      console.error('Error inserting pilot application:', insertError);
      return NextResponse.json(
        { error: 'Failed to submit application' },
        { status: 500 }
      );
    }

    // Send email notifications (don't block the response if emails fail)
    const emailData: EmailNotificationData = {
      companyName,
      contactName,
      email,
      companySize,
      timeline,
      currentChallenges: currentChallenges || [],
      interestedFeatures: interestedFeatures || [],
      phone: phone || undefined,
      submittedAt: insertedApplication.created_at
    };

    // Send notifications asynchronously
    Promise.all([
      EmailService.sendAdminNotification(emailData),
      EmailService.sendApplicantConfirmation(emailData)
    ]).then(([adminSent, applicantSent]) => {
      console.log('Email notifications sent:', {
        adminNotification: adminSent,
        applicantConfirmation: applicantSent,
        applicationId: insertedApplication.id
      });
    }).catch((error) => {
      console.error('Error sending email notifications:', error);
    });

    // Return success response
    return NextResponse.json(
      { 
        ok: true, 
        message: 'Successfully submitted pilot application',
        id: insertedApplication.id
      },
      { status: 201 }
    );

  } catch (error) {
    console.error('Error processing pilot application:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// GET endpoint to retrieve pilot application statistics (for admin purposes)
export async function GET() {
  try {
    if (!supabaseAdmin) {
      return NextResponse.json(
        { error: 'Database operations not available' },
        { status: 500 }
      );
    }

    // Get total count of applications
    const { count: totalApplications, error: countError } = await supabaseAdmin
      .from('pilot_applications')
      .select('*', { count: 'exact', head: true });

    if (countError) {
      console.error('Error getting application count:', countError);
      return NextResponse.json(
        { error: 'Failed to retrieve application statistics' },
        { status: 500 }
      );
    }

    // Get latest application timestamp
    const { data: latestApplication, error: latestError } = await supabaseAdmin
      .from('pilot_applications')
      .select('created_at')
      .order('created_at', { ascending: false })
      .limit(1)
      .single();

    if (latestError && latestError.code !== 'PGRST116') { // PGRST116 = no rows found
      console.error('Error getting latest application:', latestError);
      return NextResponse.json(
        { error: 'Failed to retrieve latest application' },
        { status: 500 }
      );
    }

    // Get status breakdown
    const { data: statusBreakdown, error: statusError } = await supabaseAdmin
      .from('pilot_applications')
      .select('status')
      .then(({ data, error }) => {
        if (error) return { data: null, error };
        
        const breakdown = data?.reduce((acc: Record<string, number>, app) => {
          acc[app.status] = (acc[app.status] || 0) + 1;
          return acc;
        }, {}) || {};
        
        return { data: breakdown, error: null };
      });

    if (statusError) {
      console.error('Error getting status breakdown:', statusError);
      return NextResponse.json(
        { error: 'Failed to retrieve status breakdown' },
        { status: 500 }
      );
    }

    // Return summary data (without exposing sensitive information)
    return NextResponse.json({
      total: totalApplications || 0,
      latest: latestApplication?.created_at || null,
      statusBreakdown: statusBreakdown || {}
    });
  } catch (error) {
    console.error('Error retrieving pilot application statistics:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}