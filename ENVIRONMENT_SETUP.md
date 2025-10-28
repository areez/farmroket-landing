# Environment Variables Setup

This document outlines the environment variables required for FarmRoket Landing Page deployment.

## Required Environment Variables

### Supabase Configuration

```bash
# Supabase Project URL (from your Supabase dashboard)
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co

# Supabase Publishable Key (from your Supabase dashboard)
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...

# Supabase Secret Key (from your Supabase dashboard - KEEP SECURE)
SUPABASE_SECRET_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

### Site Configuration

```bash
# Production site URL
NEXT_PUBLIC_SITE_URL=https://farmroket.com

# Production URL (same as above for most cases)
NEXT_PUBLIC_PRODUCTION_URL=https://farmroket.com
```

### Email Configuration (Production Only)

```bash
# Resend API Key for email notifications
# Sign up at https://resend.com and get your API key
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxxxx
```

## Development vs Production

### Development Mode

- Emails are logged to console instead of being sent
- Uses local Supabase instance if configured
- No RESEND_API_KEY required

### Production Mode

- Requires RESEND_API_KEY for email notifications
- Uses production Supabase instance
- All environment variables must be properly configured

## Email Service Setup (Production)

1. **Sign up for Resend**
   - Go to [resend.com](https://resend.com)
   - Create an account
   - Verify your domain (farmroket.com)

2. **Get API Key**
   - Navigate to API Keys in your Resend dashboard
   - Create a new API key
   - Add it to your environment variables as `RESEND_API_KEY`

3. **Configure Domain**
   - Add and verify your domain in Resend
   - Update DNS records as instructed
   - Ensure SPF, DKIM, and DMARC records are properly configured

## Deployment Checklist

- [ ] Supabase project created and configured
- [ ] Database tables created (pilot_applications, profiles)
- [ ] Row Level Security (RLS) policies configured
- [ ] Resend account created and domain verified
- [ ] All environment variables added to deployment platform
- [ ] Admin user created (admin@farmroket.com)
- [ ] Email notifications tested

## Security Notes

- Never commit `.env.local` or `.env.production` files to version control
- Use your deployment platform's environment variable management
- Regularly rotate API keys and secrets
- Ensure Supabase RLS policies are properly configured
- Use strong passwords for admin accounts

## Troubleshooting

### Email Issues

- Check RESEND_API_KEY is correctly set
- Verify domain is verified in Resend dashboard
- Check Supabase Edge Function logs for errors

### Database Issues

- Verify Supabase connection strings
- Check RLS policies allow proper access
- Ensure database schema is up to date

### Authentication Issues

- Verify admin user exists in auth.users table
- Check profile has is_admin: true
- Ensure session management is working
