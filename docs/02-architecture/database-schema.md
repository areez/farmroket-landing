# Supabase Integration Documentation

## Overview

This document outlines the complete Supabase integration implemented for the FarmRoket landing page, providing a robust database backend with authentication and role-based access control.

## ✅ Completed Features

### 1. Database Schema

#### Profiles Table

- **Table**: `profiles`
- **Purpose**: Extended user information and admin role management
- **Fields**:
  - `id` (UUID, References auth.users)
  - `email` (Text, Unique)
  - `full_name` (Text)
  - `avatar_url` (Text)
  - `is_admin` (Boolean, Default: false)
  - `created_at` (Timestamp)
  - `updated_at` (Timestamp)

#### Pilot Applications Table

- **Table**: `pilot_applications`
- **Location**: `supabase/migrations/001_initial_schema.sql`
- **Fields**:
  - `id` (UUID, Primary Key)
  - `user_id` (UUID, References auth.users)
  - `company_name` (Text, Required)
  - `contact_name` (Text, Required)
  - `email` (Text, Required)
  - `phone` (Text, Required)
  - `company_size` (Text, Enum: '1-10', '11-50', '51-200', '201-500', '500+')
  - `current_challenges` (Text Array, Required)
  - `interested_features` (Text Array, Required)
  - `timeline` (Text, Enum: 'immediate', '1-3-months', '3-6-months', '6-12-months')
  - `additional_info` (Text, Optional)
  - `status` (Text, Enum: 'pending', 'approved', 'rejected', 'in_review')
  - `admin_notes` (Text, Optional)
  - `created_at` (Timestamp)
  - `updated_at` (Timestamp)

### 2. Row Level Security (RLS) Policies

- **Location**: `supabase/migrations/002_rls_policies.sql`
- **Policies Implemented**:
  - Users can only view their own applications
  - Users can only insert applications for themselves
  - Users can update their own applications
  - Admins can view/update/delete all applications
  - Admin role checking via user metadata

### 3. Authentication System

- **Context**: `src/contexts/AuthContext.tsx`
- **Features**:
  - User sign up with email/password and full name
  - User sign in with email/password
  - User sign out with session cleanup
  - Automatic session management and restoration
  - Real-time authentication state updates
  - Access to user data and session tokens

### 4. Authentication Modal

- **Component**: `src/components/AuthModal.tsx`
- **Features**:
  - Toggle between sign up and sign in modes
  - Comprehensive form validation
  - Error handling with user-friendly messages
  - Loading states with visual feedback
  - Email verification requirement for new accounts
  - Responsive design for all screen sizes

### 5. Navbar Authentication Integration

- **Component**: `src/app/(sections)/Navbar.tsx`
- **Features**:
  - Dynamic authentication state display
  - Sign In button for unauthenticated users
  - User avatar and dropdown menu for authenticated users
  - Admin Dashboard link for admin users
  - Sign Out functionality
  - Integrated AuthModal for seamless login experience

### 6. API Routes

#### Waitlist API (`src/app/api/waitlist/route.ts`)

- **POST**: Create new pilot application (requires authentication)
- **GET**: Get application statistics (public access)
- **Features**:
  - User authentication requirement
  - Comprehensive field validation
  - Email uniqueness checking
  - Automatic user ID association
  - Supabase database integration with RLS

#### Admin Applications API (`src/app/api/admin/applications/route.ts`)

- **GET**: Fetch all applications (admin only)
- **Features**:
  - Admin role verification via JWT metadata
  - Bearer token authentication
  - Comprehensive application listing
  - Status filtering capabilities

#### Individual Application API (`src/app/api/admin/applications/[id]/route.ts`)

- **GET**: Fetch specific application (admin only)
- **PATCH**: Update application status (admin only)
- **Features**:
  - Admin authentication verification
  - Status validation (pending/approved/rejected/in_review)
  - Individual application management
  - Admin notes support

### 7. Updated Components

#### Waitlist Form (`src/app/(sections)/WaitlistForm.tsx`)

- **Features**:
  - Authentication requirement before submission
  - Comprehensive form fields (company details, challenges, features, timeline)
  - Integration with AuthModal for seamless user experience
  - Automatic user ID association
  - Real-time form validation
  - Success/error state management

#### Admin Dashboard (`src/app/admin/page.tsx`)

- **Features**:
  - Authentication-protected route access
  - Comprehensive application listing with pagination
  - Advanced filtering by status (all/pending/approved/rejected)
  - Bulk status management operations
  - Real-time statistics dashboard
  - Individual application detail view
  - Admin notes functionality
  - Bearer token authentication for all API calls

#### Application Layout (`src/app/layout.tsx`)

- **Features**:
  - Global AuthProvider wrapper
  - Authentication context available throughout application
  - Consistent styling and theme management

## 🔧 Configuration

### Environment Variables Required

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=sb_publishable_...
SUPABASE_SECRET_KEY=sb_secret_...

# Site Configuration
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_PRODUCTION_URL=https://farmroket.com
```

### API Key Migration

This project uses the new Supabase API key system:

- **Publishable Key** (`sb_publishable_...`): Replaces the legacy `anon` key, safe for client-side use
- **Secret Key** (`sb_secret_...`): Replaces the legacy `service_role` key, for server-side operations only

The new keys provide better security, independent rotation capabilities, and improved developer experience.

## 🧪 Testing Instructions

### 1. User Authentication Testing

1. Navigate to `http://localhost:3000`
2. Try to submit the waitlist form without authentication
3. Verify that the authentication modal appears
4. Test sign up with a new email/password
5. Test sign in with existing credentials
6. Verify form submission works after authentication

### 2. Admin Dashboard Testing

1. Navigate to `http://localhost:3000/admin`
2. Verify authentication is required
3. Sign in with an admin account (user metadata role: 'admin')
4. Test application listing and filtering
5. Test status updates (approve/reject/pending)

### 3. API Testing

- **Waitlist API**: Test form submissions
- **Admin APIs**: Test with proper Bearer token authentication
- **RLS Policies**: Verify users can only access their own data

## 🔐 Security Features

### Row Level Security (RLS)

- Enabled on `pilot_applications` table
- Users can only access their own applications
- Admin role-based access for management functions

### Authentication

- JWT-based authentication via Supabase Auth
- Bearer token validation for admin APIs
- Role-based access control using user metadata

### Data Validation

- Server-side validation for all form fields
- Email format validation
- Required field validation
- Type checking for all inputs

## 🚀 Deployment Notes

### Database Migrations

Run the following migrations in order:

1. `001_initial_schema.sql` - Creates the pilot_applications table
2. `002_rls_policies.sql` - Implements Row Level Security policies

### Admin User Setup

Admin users can be created through multiple methods:

#### Method 1: Direct Database Access (Recommended)

```sql
-- Update user metadata to grant admin role
UPDATE auth.users
SET raw_user_meta_data = raw_user_meta_data || '{"role": "admin"}'::jsonb
WHERE email = 'admin@farmroket.com';

-- Alternatively, update the profiles table
UPDATE profiles
SET is_admin = true
WHERE email = 'admin@farmroket.com';
```

#### Method 2: Supabase Dashboard

1. Navigate to Authentication > Users in Supabase Dashboard
2. Find the user account
3. Edit user metadata to add `{"role": "admin"}`
4. Save changes

#### Method 3: Application UI (Future Enhancement)

- Admin user creation interface can be added to the admin dashboard
- Requires existing admin privileges to create new admin users

For detailed instructions, see `CREATE_ADMIN_USER.md`

## 📝 Next Steps

1. **Production Deployment**: Deploy to production environment
2. **Admin User Management**: Implement proper admin user creation flow
3. **Email Notifications**: Add email notifications for application status changes
4. **Enhanced Analytics**: Add more detailed analytics and reporting
5. **Backup Strategy**: Implement database backup and recovery procedures

## 🐛 Troubleshooting

### Common Issues

1. **Authentication Errors**: Check environment variables and Supabase configuration
2. **RLS Policy Issues**: Verify user roles and policy conditions
3. **API Access Denied**: Ensure proper Bearer token authentication
4. **Form Submission Failures**: Check user authentication status and validation

### Debug Tools

- Browser Developer Tools for client-side debugging
- Supabase Dashboard for database and authentication monitoring
- Next.js development server logs for API debugging
