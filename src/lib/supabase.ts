import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co'
const supabasePublishableKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY || 'placeholder-key'

if (!process.env.NEXT_PUBLIC_SUPABASE_URL) {
  console.warn('Missing NEXT_PUBLIC_SUPABASE_URL environment variable')
}

if (!process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY) {
  console.warn('Missing NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY environment variable')
}

export const supabase = createClient(
  supabaseUrl, 
  supabasePublishableKey
)

// Admin client for server-side operations
const supabaseSecretKey = process.env.SUPABASE_SECRET_KEY

export const supabaseAdmin = supabaseSecretKey 
  ? createClient(supabaseUrl, supabaseSecretKey)
  : null

if (!supabaseSecretKey) {
  console.warn('Missing SUPABASE_SECRET_KEY environment variable - admin operations will not be available')
}