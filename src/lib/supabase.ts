import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co'
const supabasePublishableKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY || 'placeholder-key'

if (!process.env.NEXT_PUBLIC_SUPABASE_URL) {
  console.warn('Missing NEXT_PUBLIC_SUPABASE_URL environment variable')
}

if (!process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY) {
  console.warn('Missing NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY environment variable')
}

// Get the current site URL for redirects
const getSiteUrl = () => {
  if (process.env.NEXT_PUBLIC_VERCEL_URL) {
    return `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
  }
  if (process.env.NEXT_PUBLIC_PRODUCTION_URL) {
    return process.env.NEXT_PUBLIC_PRODUCTION_URL
  }
  return process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
}

export const supabase = createClient(
  supabaseUrl, 
  supabasePublishableKey,
  {
    auth: {
      redirectTo: `${getSiteUrl()}/admin/dashboard`
    }
  }
)

// Admin client for server-side operations
const supabaseSecretKey = process.env.SUPABASE_SECRET_KEY

export const supabaseAdmin = supabaseSecretKey 
  ? createClient(supabaseUrl, supabaseSecretKey)
  : null

if (!supabaseSecretKey) {
  console.warn('Missing SUPABASE_SECRET_KEY environment variable - admin operations will not be available')
}