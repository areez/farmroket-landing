import { NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';
import { PilotApplicationInsert } from '@/types/database';

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
      additionalInfo,
      userId 
    } = body;

    // Validate required fields
    if (!companyName || !contactName || !email || !companySize || !timeline || !userId) {
      return NextResponse.json(
        { error: 'Missing required fields: companyName, contactName, email, companySize, timeline, and userId are required' },
        { status: 400 }
      );
    }

    // Validate field types
    if (typeof companyName !== 'string' || typeof contactName !== 'string' || typeof email !== 'string' || 
        typeof companySize !== 'string' || typeof timeline !== 'string' || typeof userId !== 'string') {
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
        { error: 'Email already registered in waitlist' },
        { status: 409 }
      );
    }

    // Create new pilot application
    const newApplication: PilotApplicationInsert = {
      user_id: userId,
      company_name: companyName.trim(),
      contact_name: contactName.trim(),
      email: email.trim().toLowerCase(),
      phone: phone?.trim() || '',
      company_size: companySize as Database['public']['Enums']['company_size'],
      current_challenges: currentChallenges || [],
      interested_features: interestedFeatures || [],
      timeline: timeline as Database['public']['Enums']['timeline'],
      additional_info: additionalInfo?.trim() || null,
      status: 'pending'
    };

    // Insert into database
    const { data: insertedApplication, error: insertError } = await supabaseAdmin
      .from('pilot_applications')
      .insert(newApplication)
      .select('id')
      .single();

    if (insertError) {
      console.error('Error inserting pilot application:', insertError);
      return NextResponse.json(
        { error: 'Failed to submit application' },
        { status: 500 }
      );
    }

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