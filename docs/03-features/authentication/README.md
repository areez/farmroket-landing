# Authentication System Documentation

## Overview

FarmRoket Landing Page implements a comprehensive authentication system using Supabase Auth, providing secure user registration, login, and role-based access control for the admin dashboard.

## Architecture

### Components

1. **AuthContext** (`src/contexts/AuthContext.tsx`)
   - Global authentication state management
   - Provides authentication methods and user session data
   - Handles automatic session restoration and state updates

2. **AuthModal** (`src/components/AuthModal.tsx`)
   - Modal component for user registration and login
   - Integrated form validation and error handling
   - Responsive design with loading states

3. **Admin Dashboard** (`src/app/admin/page.tsx`)
   - Protected route requiring authentication
   - Role-based access control for admin users
   - Application management interface

4. **Navbar Integration** (`src/app/(sections)/Navbar.tsx`)
   - Authentication status display
   - User avatar and dropdown menu
   - Sign in/out functionality

## Authentication Flow

### User Registration

1. User clicks "Sign In" button in navbar
2. AuthModal opens with registration form
3. User provides email, password, and full name
4. System creates account via Supabase Auth
5. Confirmation email sent to user
6. User must verify email before accessing protected features

### User Login

1. User clicks "Sign In" button in navbar
2. AuthModal opens with login form
3. User provides email and password
4. System authenticates via Supabase Auth
5. Session established and user redirected appropriately
6. User icon replaces sign-in button in navbar

### User Sign-Out

1. User clicks on the user icon in navbar
2. Dropdown menu appears with "Sign Out" option
3. User clicks "Sign Out" button
4. Session is completely cleared from Supabase
5. User is redirected to homepage
6. Sign-in button replaces user icon in navbar

### Admin Access

1. Admin users can access `/admin/dashboard` and `/admin/profile` routes
2. System checks authentication status with loading state
3. Unauthenticated users redirected to homepage with sign-in modal
4. Authenticated admin users see dashboard with application management
5. Browser back button protection prevents unauthorized access glimpses

## Features

### Security Features

- **Supabase Auth Integration**: Enterprise-grade authentication
- **Session Management**: Automatic session restoration and cleanup
- **Role-Based Access**: Admin role verification for protected routes
- **Secure Token Handling**: JWT tokens for API authentication
- **Email Verification**: Required for account activation

### User Experience Features

- **Responsive Design**: Mobile-friendly authentication forms
- **Loading States**: Visual feedback during authentication processes
- **Error Handling**: Comprehensive error messages and validation
- **Persistent Sessions**: Users remain logged in across browser sessions
- **User Icon**: Transparent user icon for consistent visual representation
- **Dropdown Menu**: Branded dropdown menu with sign-out functionality
- **Improved Navigation**: Enhanced spacing and visual hierarchy in navbar
- **Secure Sign-Out**: Complete session cleanup with homepage redirect
- **Authentication Guards**: Prevents unauthorized access with loading states

### Admin Features

- **Application Management**: View and manage pilot program applications
- **Statistics Dashboard**: Real-time application statistics
- **Status Filtering**: Filter applications by approval status
- **Bulk Operations**: Approve/reject multiple applications
- **Export Functionality**: Download application data

## API Integration

### Authentication Headers

All admin API calls include authentication headers:

```javascript
headers: {
  'Authorization': `Bearer ${session.access_token}`,
}
```

### Protected Routes

- `/api/admin/applications` - Application management
- `/api/admin/stats` - Dashboard statistics
- `/admin/dashboard` - Admin dashboard page
- `/admin/profile` - Admin profile page

## Recent Improvements (Latest Updates)

### UI/UX Enhancements

- **User Icon Replacement**: Replaced user avatar displaying initials with a transparent user icon for consistency
- **Improved Navbar Spacing**: Added better spacing between "Request Demo" button and authentication controls
- **Branded Dropdown Menu**: Enhanced dropdown design with proper styling and clear sign-out option
- **Visual Consistency**: User icon matches the design language of the sign-in button

### Authentication Flow Improvements

- **Loading State Protection**: Added `isAuthChecking` state to prevent dashboard flash on unauthorized access
- **Secure Redirects**: All authentication failures now redirect to homepage instead of non-existent login pages
- **Browser Back Button Protection**: Prevents brief glimpses of protected content when using browser navigation
- **Complete Session Cleanup**: Enhanced sign-out process ensures all session data is properly cleared

### Technical Improvements

- **Authentication Guards**: Improved authentication checking in admin routes
- **State Management**: Better handling of authentication loading states
- **Error Handling**: Enhanced error handling for authentication failures
- **Session Persistence**: Improved session restoration and management

## User Roles

### Regular Users

- Can register and login
- Access to waitlist signup
- Email verification required

### Admin Users

- All regular user permissions
- Access to admin dashboard
- Application management capabilities
- Statistics and reporting access

## Implementation Details

### AuthContext Provider

```typescript
interface AuthContextType {
  user: User | null;
  session: Session | null;
  loading: boolean;
  signUp: (
    email: string,
    password: string,
    fullName: string
  ) => Promise<{ error: any }>;
  signIn: (email: string, password: string) => Promise<{ error: any }>;
  signOut: () => Promise<void>;
}
```

### Authentication State Management

- Automatic session restoration on app load
- Real-time authentication state updates
- Proper cleanup on component unmount

### Error Handling

- Network error handling
- Invalid credential messages
- Email verification requirements
- Session expiration handling

## Setup and Configuration

### Environment Variables

Required Supabase configuration:

```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=your_publishable_key
SUPABASE_SECRET_KEY=your_secret_key
```

### Database Setup

Authentication relies on Supabase's built-in auth tables and the custom `pilot_applications` table with proper RLS policies.

## Testing

### Manual Testing

1. Test user registration flow
2. Verify email confirmation process
3. Test login/logout functionality
4. Verify admin access controls
5. Test session persistence

### Admin User Creation

Admin users can be created through:

1. Direct database access (recommended for initial setup)
2. Supabase dashboard user management
3. Custom admin creation scripts (if needed)

## Security Considerations

- All authentication handled by Supabase Auth
- No passwords stored in application database
- JWT tokens used for API authentication
- Row Level Security (RLS) policies protect data
- Email verification required for account activation
- Session tokens automatically refreshed

## Troubleshooting

### Common Issues

1. **Email not received**: Check spam folder, verify email configuration
2. **Login fails**: Verify email is confirmed, check credentials
3. **Admin access denied**: Verify user has admin role in database
4. **Session expires**: Automatic refresh should handle this, manual re-login if needed

### Debug Steps

1. Check browser console for authentication errors
2. Verify Supabase configuration
3. Check database user roles and permissions
4. Verify API endpoint authentication headers
