-- Add unique constraints to prevent duplicate submissions
-- This ensures each company can only submit one pilot application

-- Add unique constraint on email
ALTER TABLE pilot_applications 
ADD CONSTRAINT unique_email UNIQUE (email);

-- Add unique constraint on phone (only if phone is not null)
CREATE UNIQUE INDEX unique_phone_not_null 
ON pilot_applications (phone) 
WHERE phone IS NOT NULL AND phone != '';

-- Add a comment explaining the constraints
COMMENT ON CONSTRAINT unique_email ON pilot_applications IS 'Ensures each email can only submit one pilot application';
COMMENT ON INDEX unique_phone_not_null IS 'Ensures each phone number can only be used once (when provided)';