-- Fix for profiles table RLS policies
-- This adds the missing INSERT policy that allows the trigger to create new profiles

-- Add INSERT policy for profiles table to allow trigger to work
CREATE POLICY "Allow profile creation on signup" ON profiles
  FOR INSERT WITH CHECK (true);

-- Alternative: More restrictive policy that only allows the user to create their own profile
-- CREATE POLICY "Users can create own profile" ON profiles
--   FOR INSERT WITH CHECK (auth.uid() = id);

-- Verify the policies
SELECT schemaname, tablename, policyname, permissive, roles, cmd, qual, with_check
FROM pg_policies 
WHERE tablename = 'profiles'
ORDER BY policyname;