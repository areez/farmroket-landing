-- Apply is_active field migration to pilot_applications table
-- Run this in your Supabase SQL Editor

-- Check if the column already exists to avoid errors
DO $$ 
BEGIN
    IF NOT EXISTS (
        SELECT 1 
        FROM information_schema.columns 
        WHERE table_name = 'pilot_applications' 
        AND column_name = 'is_active'
    ) THEN
        -- Add is_active field to pilot_applications table for toggle functionality
        ALTER TABLE pilot_applications 
        ADD COLUMN is_active BOOLEAN DEFAULT true;
        
        -- Add comment for documentation
        COMMENT ON COLUMN pilot_applications.is_active IS 'Indicates if an approved application is currently active or paused';
        
        RAISE NOTICE 'Successfully added is_active column to pilot_applications table';
    ELSE
        RAISE NOTICE 'Column is_active already exists in pilot_applications table';
    END IF;
END $$;

-- Verify the column was added
SELECT column_name, data_type, is_nullable, column_default
FROM information_schema.columns 
WHERE table_name = 'pilot_applications' 
AND column_name = 'is_active';