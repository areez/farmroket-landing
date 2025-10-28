-- Setup Admin User SQL Script
-- This script sets the admin role for a user in the profiles table
-- 
-- Usage with Supabase CLI:
--   npx supabase db reset --db-url "your_database_url"
--   npx supabase db push --db-url "your_database_url" --file setup-admin.sql
--
-- Or run directly in Supabase SQL Editor:
--   Copy and paste this query, replacing 'admin@farmroket.com' with the actual email

-- Update the user's profile to set admin role
UPDATE profiles 
SET 
  is_admin = TRUE,
  updated_at = NOW()
WHERE email = 'admin@farmroket.com';

-- Verify the update
SELECT 
  p.id,
  p.email,
  p.full_name,
  p.is_admin,
  p.created_at,
  p.updated_at,
  u.email as auth_email
FROM profiles p
LEFT JOIN auth.users u ON p.id = u.id
WHERE p.email = 'admin@farmroket.com';

-- Alternative: If you want to set admin role for a different email, use this template:
-- UPDATE profiles 
-- SET 
--   is_admin = TRUE,
--   updated_at = NOW()
-- WHERE email = 'your-email@example.com';

-- Note: Make sure the user account exists before running this query
-- You can check existing users with:
SELECT email, full_name, is_admin FROM profiles WHERE email LIKE '%admin%';

-- If the user doesn't exist in profiles table, you may need to create it first:
-- INSERT INTO profiles (id, email, full_name, is_admin)
-- SELECT id, email, raw_user_meta_data->>'full_name', TRUE
-- FROM auth.users 
-- WHERE email = 'admin@farmroket.com'
-- ON CONFLICT (id) DO UPDATE SET is_admin = TRUE;