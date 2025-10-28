import { NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';

// Helper function to verify admin access
async function verifyAdminAccess(request: NextRequest) {
  const authHeader = request.headers.get('authorization');
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return { isAdmin: false, error: 'No authorization token provided' };
  }

  const token = authHeader.replace('Bearer ', '');
  
  try {
    const { data: { user }, error } = await supabaseAdmin.auth.getUser(token);
    
    if (error || !user) {
      return { isAdmin: false, error: 'Invalid token' };
    }

    // Check if user has admin role in metadata
    const isAdmin = user.user_metadata?.role === 'admin' || 
                   user.app_metadata?.role === 'admin';
    
    if (!isAdmin) {
      return { isAdmin: false, error: 'Insufficient permissions' };
    }

    return { isAdmin: true, user };
  } catch {
    return { isAdmin: false, error: 'Authentication failed' };
  }
}

export async function GET(request: NextRequest) {
  try {
    // Verify admin access
    const { isAdmin, error: authError } = await verifyAdminAccess(request);
    
    if (!isAdmin) {
      return NextResponse.json(
        { error: authError || 'Access denied' },
        { status: 403 }
      );
    }
    
    const { data: applications, error } = await supabaseAdmin
      .from('pilot_applications')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching applications:', error);
      return NextResponse.json(
        { error: 'Failed to fetch applications' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      applications: applications || [],
      count: applications?.length || 0
    });

  } catch (error) {
    console.error('Error in admin applications API:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}