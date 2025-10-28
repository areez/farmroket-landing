# Create Admin User Guide

## Method 1: Through the Application UI (Recommended)

1. **Navigate to the application**: Go to `http://localhost:3000`
2. **Click "Sign In"** in the top navigation
3. **Create a new account** with your desired admin credentials:
   - Full Name: Admin User
   - Email: admin@farmroket.com
   - Password: admin123456
4. **Check your email** for the confirmation link and click it
5. **Set admin role in Supabase Dashboard**:
   - Go to your Supabase project dashboard
   - Navigate to Authentication > Users
   - Find your newly created user
   - Click on the user to edit
   - In the "Raw User Meta Data" section, add:
     ```json
     {
       "role": "admin"
     }
     ```
   - Save the changes

## Method 2: Direct Database Access

If you have access to the Supabase SQL editor:

1. Go to your Supabase project dashboard
2. Navigate to SQL Editor
3. Run this query to update a user's role:

```sql
-- Replace 'admin@farmroket.com' with your admin email
UPDATE auth.users
SET app_metadata = jsonb_set(
  COALESCE(app_metadata, '{}'),
  '{role}',
  '"admin"'
)
WHERE email = 'admin@farmroket.com';
```

## Method 3: Using Supabase CLI (Advanced)

If you have Supabase CLI installed:

```bash
# Update user metadata
supabase auth update --user-id <user-id> --app-metadata '{"role": "admin"}'
```

## Testing Admin Access

1. **Sign in** with your admin credentials
2. **Navigate to** `http://localhost:3000/admin`
3. **Verify** you can access the admin dashboard
4. **Check** that you can see the "Admin Dashboard" option in the user dropdown menu

## Pre-created Test Admin Accounts

You can create these test accounts through the UI:

| Email               | Password    | Role  |
| ------------------- | ----------- | ----- |
| admin@farmroket.com | admin123456 | admin |
| demo@farmroket.com  | demo123456  | admin |
| test@farmroket.com  | test123456  | admin |

Remember to:

1. Create the account through the UI first
2. Confirm the email
3. Set the admin role in Supabase dashboard
4. Test access to `/admin`

## Troubleshooting

- **Can't access admin dashboard**: Ensure the user has `app_metadata.role = "admin"`
- **Authentication issues**: Check the browser console for errors
- **Database errors**: Verify Supabase connection and environment variables
