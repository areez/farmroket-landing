-- Proper solution: Fix the RLS policies to allow profile creation during signup
-- The issue is that there's no INSERT policy on the profiles table

-- Step 1: Check current policies on profiles table
SELECT schemaname, tablename, policyname, permissive, roles, cmd, qual, with_check
FROM pg_policies 
WHERE tablename = 'profiles'
ORDER BY policyname;

-- Step 2: Add the missing INSERT policy for profiles table
-- This allows the trigger to create profiles when new users sign up
CREATE POLICY "Allow profile creation on signup" ON profiles
  FOR INSERT WITH CHECK (true);

-- Step 3: Alternative - if you want more restrictive policy, use this instead:
-- DROP POLICY IF EXISTS "Allow profile creation on signup" ON profiles;
-- CREATE POLICY "Users can create own profile" ON profiles
--   FOR INSERT WITH CHECK (auth.uid() = id);

-- Step 4: Verify the policy was created
SELECT policyname, cmd, permissive, qual, with_check
FROM pg_policies 
WHERE tablename = 'profiles'
ORDER BY policyname;

-- Step 5: Test the trigger function manually (optional)
-- This simulates what happens when a user signs up
-- DO $$
-- DECLARE
--   test_user_id uuid := gen_random_uuid();
-- BEGIN
--   -- Simulate inserting a user (this would normally be done by Supabase Auth)
--   -- We can't actually insert into auth.users directly, but we can test the profile creation
--   
--   -- Test if we can now insert into profiles
--   INSERT INTO profiles (id, email, full_name, is_admin)
--   VALUES (test_user_id, 'test@example.com', 'Test User', false);
--   
--   -- Clean up the test
--   DELETE FROM profiles WHERE id = test_user_id;
--   
--   RAISE NOTICE 'Profile creation test successful!';
-- END $$;

-- Now you should be able to create users through the application UI
-- The signup process will work because the INSERT policy allows profile creation