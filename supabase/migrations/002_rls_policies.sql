-- Enable Row Level Security on pilot_applications table
ALTER TABLE pilot_applications ENABLE ROW LEVEL SECURITY;

-- Policy: Users can only read their own applications
CREATE POLICY "Users can view own applications" ON pilot_applications
    FOR SELECT USING (auth.uid() = user_id::uuid);

-- Policy: Users can only insert applications for themselves
CREATE POLICY "Users can insert own applications" ON pilot_applications
    FOR INSERT WITH CHECK (auth.uid() = user_id::uuid);

-- Policy: Users can update their own applications (limited fields)
CREATE POLICY "Users can update own applications" ON pilot_applications
    FOR UPDATE USING (auth.uid() = user_id::uuid)
    WITH CHECK (auth.uid() = user_id::uuid);

-- Policy: Admins can view all applications
-- Note: This assumes you have a way to identify admin users
-- You might want to create an admin_users table or use user metadata
CREATE POLICY "Admins can view all applications" ON pilot_applications
    FOR SELECT USING (
        EXISTS (
            SELECT 1 FROM auth.users 
            WHERE auth.users.id = auth.uid() 
            AND auth.users.raw_user_meta_data->>'role' = 'admin'
        )
    );

-- Policy: Admins can update all applications
CREATE POLICY "Admins can update all applications" ON pilot_applications
    FOR UPDATE USING (
        EXISTS (
            SELECT 1 FROM auth.users 
            WHERE auth.users.id = auth.uid() 
            AND auth.users.raw_user_meta_data->>'role' = 'admin'
        )
    );

-- Policy: Admins can delete applications
CREATE POLICY "Admins can delete applications" ON pilot_applications
    FOR DELETE USING (
        EXISTS (
            SELECT 1 FROM auth.users 
            WHERE auth.users.id = auth.uid() 
            AND auth.users.raw_user_meta_data->>'role' = 'admin'
        )
    );

-- Create a function to check if user is admin (alternative approach)
CREATE OR REPLACE FUNCTION is_admin()
RETURNS BOOLEAN AS $$
BEGIN
    RETURN (
        SELECT COALESCE(
            (auth.jwt() ->> 'user_metadata')::jsonb ->> 'role' = 'admin',
            false
        )
    );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Alternative admin policies using the function
-- Uncomment these if you prefer this approach over the metadata check above

-- CREATE POLICY "Admins can view all applications (function)" ON pilot_applications
--     FOR SELECT USING (is_admin());

-- CREATE POLICY "Admins can update all applications (function)" ON pilot_applications
--     FOR UPDATE USING (is_admin());

-- CREATE POLICY "Admins can delete applications (function)" ON pilot_applications
--     FOR DELETE USING (is_admin());