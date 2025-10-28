-- Run this AFTER successfully creating admin@farmroket.com through the UI
-- This will set the admin flag for the user

-- Step 1: Verify the user exists in profiles
SELECT id, email, full_name, is_admin, created_at 
FROM profiles 
WHERE email = 'admin@farmroket.com';

-- Step 2: Set admin privileges
UPDATE profiles 
SET is_admin = TRUE, updated_at = NOW()
WHERE email = 'admin@farmroket.com';

-- Step 3: Verify the admin was set
SELECT id, email, full_name, is_admin, updated_at 
FROM profiles 
WHERE email = 'admin@farmroket.com';

-- Step 4: Test the is_admin() function
SELECT is_admin() as current_user_is_admin;