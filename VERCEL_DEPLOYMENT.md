# Vercel Deployment Guide

## Environment Variables Setup

### Required Environment Variables for Vercel

Add these environment variables in your Vercel dashboard:

#### 1. Supabase Configuration

```
NEXT_PUBLIC_SUPABASE_URL=https://hstuynnhhxysgwhlxtfc.supabase.co
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhzdHV5bm5oaHh5c2d3aGx4dGZjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjE2MzYyMjgsImV4cCI6MjA3NzIxMjIyOH0.AkirYTikXcvKS_MgBENCIYGHqT4PxGmHuULEUSJVf3M
SUPABASE_SECRET_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhzdHV5bm5oaHh5c2d3aGx4dGZjIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2MTYzNjIyOCwiZXhwIjoyMDc3MjEyMjI4fQ.NEja6WlBN_4Uj0XGCLw--3sn4ghfTfHOPhyWT6b91QE
```

#### 2. Site Configuration

```
NEXT_PUBLIC_PRODUCTION_URL=https://farmroket.com
```

#### 3. Email Service

```
RESEND_API_KEY=re_TeDtps3f_7WkrjpsmfE5xg6ADnLA3uTSM
```

### How to Add Environment Variables in Vercel

#### Method 1: Vercel Dashboard (Recommended)

1. Go to your project in [Vercel Dashboard](https://vercel.com/dashboard)
2. Click on your project name
3. Go to **Settings** tab
4. Click **Environment Variables** in the sidebar
5. Add each variable:
   - **Name**: Variable name (e.g., `NEXT_PUBLIC_SUPABASE_URL`)
   - **Value**: Variable value
   - **Environment**: Select `Production`, `Preview`, and `Development`
6. Click **Save**

#### Method 2: Vercel CLI

```bash
# Install Vercel CLI if not already installed
npm i -g vercel

# Login to Vercel
vercel login

# Add environment variables
vercel env add NEXT_PUBLIC_SUPABASE_URL
vercel env add NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY
vercel env add SUPABASE_SECRET_KEY
vercel env add NEXT_PUBLIC_PRODUCTION_URL
vercel env add RESEND_API_KEY
```

#### Method 3: Using .env files with Vercel CLI

```bash
# Pull current environment variables
vercel env pull .env.vercel

# Push local environment variables to Vercel
vercel env add < .env.local
```

### Automatic Environment Variables

Vercel automatically provides these environment variables:

- `NEXT_PUBLIC_VERCEL_URL` - The URL of the deployment
- `VERCEL_URL` - Same as above but without NEXT_PUBLIC prefix
- `VERCEL_ENV` - The environment (production, preview, development)

### Supabase Configuration for Production

#### Update Supabase Auth Settings

1. Go to your [Supabase Dashboard](https://supabase.com/dashboard)
2. Select your project
3. Go to **Authentication** > **URL Configuration**
4. Add your production URL to **Site URL**: `https://farmroket.com`
5. Add redirect URLs:
   - `https://farmroket.com/admin/dashboard`
   - `https://farmroket.com/auth/callback`
   - `https://*.vercel.app/admin/dashboard` (for preview deployments)
   - `https://*.vercel.app/auth/callback` (for preview deployments)

### Troubleshooting Production Issues

#### "Failed to Fetch" Error Solutions:

1. **CORS Issues**: Ensure your production domain is added to Supabase allowed origins
2. **Environment Variables**: Verify all required env vars are set in Vercel
3. **URL Configuration**: Check that redirect URLs match your deployment URLs
4. **Network Issues**: Ensure your production server can reach Supabase endpoints

#### Common Fixes:

```bash
# Redeploy with fresh environment variables
vercel --prod

# Check environment variables are loaded
vercel env ls

# View deployment logs
vercel logs [deployment-url]
```

### Security Best Practices

1. **Never commit sensitive keys** to your repository
2. **Use different keys** for development and production
3. **Rotate keys regularly**
4. **Use Vercel's environment variable encryption**
5. **Limit Supabase RLS policies** to your production domain

### Deployment Commands

```bash
# Deploy to production
vercel --prod

# Deploy preview
vercel

# Check deployment status
vercel ls

# View logs
vercel logs
```
