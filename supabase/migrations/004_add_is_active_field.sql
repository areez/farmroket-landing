-- Add is_active field to pilot_applications table for toggle functionality
ALTER TABLE pilot_applications 
ADD COLUMN is_active BOOLEAN DEFAULT true;

-- Add comment for documentation
COMMENT ON COLUMN pilot_applications.is_active IS 'Indicates if an approved application is currently active or paused';