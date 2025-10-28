# FarmRoket Admin Access Guide

## 🎯 Overview

This guide provides step-by-step instructions for accessing submitted data, logging into the admin dashboard, and managing pilot applications.

## 📊 Current System Status

✅ **Sample Data Created**: 5 test applications with different statuses
✅ **Admin Dashboard**: Fully functional at `/admin`
✅ **API Endpoints**: All working with proper authentication
✅ **Database**: PostgreSQL via Supabase with proper constraints

## 🔐 Step 1: Accessing the Admin Dashboard

### Method 1: Direct Browser Access

1. **Open your browser**
2. **Navigate to**: `http://localhost:3000/admin`
3. **You will see**: Authentication required page
4. **Action**: You'll be redirected to login

### Method 2: From Main Site

1. **Go to**: `http://localhost:3000`
2. **Add `/admin`** to the URL
3. **Press Enter**

## 🔑 Step 2: Authentication Options

### Option A: Create New Admin Account

1. **Click "Create Account"** on the login modal
2. **Fill in details**:
   - Full Name: `Admin User`
   - Email: `admin@farmroket.com` (or your preferred email)
   - Password: `admin123456` (or your preferred password)
3. **Click "Create Account"**
4. **Note**: You'll need to manually set admin role (see Step 3)

### Option B: Use Existing Account

1. **Click "Sign In"** on the login modal
2. **Enter credentials** for an existing account
3. **Click "Sign In"**

## 🛠️ Step 3: Setting Admin Role

### Important: Admin Role Required

The admin dashboard requires users to have an admin role. Here's how to set it:

### Method 1: Supabase Dashboard (Recommended)

1. **Go to**: [Supabase Dashboard](https://supabase.com/dashboard)
2. **Select your project**
3. **Navigate to**: Authentication → Users
4. **Find your user** by email
5. **Click the user** to edit
6. **In "User Metadata"**, add:
   ```json
   {
     "role": "admin"
   }
   ```
7. **Save changes**

### Method 2: SQL Query

1. **In Supabase Dashboard**: SQL Editor
2. **Run this query** (replace email):
   ```sql
   UPDATE auth.users
   SET raw_user_meta_data = raw_user_meta_data || '{"role": "admin"}'::jsonb
   WHERE email = 'admin@farmroket.com';
   ```

## 📋 Step 4: Admin Dashboard Features

### Dashboard Overview

Once logged in with admin role, you'll see:

#### 📊 Statistics Cards

- **Total Applications**: Shows total count
- **Pending**: Applications awaiting review
- **Approved**: Approved applications
- **Rejected**: Rejected applications

#### 🔍 Filtering Options

- **All**: View all applications
- **Pending**: Filter pending applications
- **Approved**: Filter approved applications
- **Rejected**: Filter rejected applications
- **Refresh Button**: Reload data

#### 📝 Application Table

Each row shows:

- **Company**: Company name
- **Contact**: Contact person name
- **Email**: Business email
- **Company Size**: Employee count range
- **Timeline**: Implementation timeline
- **Status**: Current status with colored badge
- **Applied**: Application date
- **Actions**: Dropdown to change status

### Managing Applications

1. **Find application** in the table
2. **Click Actions dropdown** (last column)
3. **Select new status**:
   - ✅ **Approve**: Mark as approved
   - ❌ **Reject**: Mark as rejected
   - ⏳ **Mark as Pending**: Reset to pending
4. **Status updates immediately**

## 📊 Step 5: Viewing Submitted Data

### Method 1: Admin Dashboard (Recommended)

- **Best for**: Day-to-day management
- **Features**: Filtering, status updates, statistics
- **Access**: `http://localhost:3000/admin`

### Method 2: Supabase Dashboard

1. **Go to**: [Supabase Dashboard](https://supabase.com/dashboard)
2. **Select project**
3. **Navigate to**: Table Editor
4. **Select**: `pilot_applications` table
5. **View/Edit**: All data directly

### Method 3: API Endpoints

- **Statistics**: `GET /api/waitlist` (public)
- **All Applications**: `GET /api/admin/applications` (admin only)
- **Specific App**: `GET /api/admin/applications/[id]` (admin only)
- **Update Status**: `PATCH /api/admin/applications/[id]` (admin only)

### Method 4: SQL Queries

In Supabase SQL Editor:

```sql
-- View all applications
SELECT * FROM pilot_applications ORDER BY created_at DESC;

-- Count by status
SELECT status, COUNT(*) FROM pilot_applications GROUP BY status;

-- Recent applications
SELECT company_name, contact_name, status, created_at
FROM pilot_applications
ORDER BY created_at DESC
LIMIT 10;
```

## 🔧 Step 6: API Testing

### Public Statistics API

```bash
curl http://localhost:3000/api/waitlist
```

### Admin API (Requires Token)

1. **Get token**: Login to admin dashboard, check browser dev tools
2. **Use token**:

```bash
curl -H "Authorization: Bearer YOUR_TOKEN" \
     http://localhost:3000/api/admin/applications
```

## 📈 Step 7: Sample Data Overview

The system currently has 5 test applications:

1. **Green Valley Farms** (Pending)
   - Contact: Sarah Johnson
   - Size: 51-200 employees
   - Timeline: 1-3 months

2. **Sunrise Agriculture** (Approved)
   - Contact: Mike Chen
   - Size: 11-50 employees
   - Timeline: 3-6 months

3. **Mountain View Organics** (Pending)
   - Contact: Lisa Rodriguez
   - Size: 1-10 employees
   - Timeline: Immediate

4. **Prairie Grain Co** (Rejected)
   - Contact: Tom Wilson
   - Size: 201-500 employees
   - Timeline: 6-12 months

5. **Fresh Harvest Cooperative** (Approved)
   - Contact: Emma Davis
   - Size: 500+ employees
   - Timeline: 1-3 months

## 🚪 Step 8: Logout

1. **Click your email** in the top right corner
2. **Select "Sign Out"** from dropdown
3. **You'll be redirected** to the main site

## 🔍 Troubleshooting

### Can't Access Admin Dashboard

- ✅ Check if logged in
- ✅ Verify admin role in user metadata
- ✅ Clear browser cache/cookies
- ✅ Check browser console for errors

### No Data Showing

- ✅ Click "Refresh" button
- ✅ Check network tab in dev tools
- ✅ Verify database connection
- ✅ Check if sample data exists

### Authentication Issues

- ✅ Verify email/password
- ✅ Check Supabase project settings
- ✅ Ensure user exists in auth.users
- ✅ Verify environment variables

## 📞 Quick Reference

| Action             | URL/Method                       |
| ------------------ | -------------------------------- |
| Admin Dashboard    | `http://localhost:3000/admin`    |
| Main Site          | `http://localhost:3000`          |
| Statistics API     | `GET /api/waitlist`              |
| Admin API          | `GET /api/admin/applications`    |
| Supabase Dashboard | `https://supabase.com/dashboard` |

## 🎉 Success Checklist

- [ ] Can access `http://localhost:3000/admin`
- [ ] Can login with credentials
- [ ] User has admin role set
- [ ] Can see application statistics
- [ ] Can view application table
- [ ] Can filter applications
- [ ] Can update application status
- [ ] Can logout successfully

---

**Need Help?** Check the browser console for error messages or review the Supabase dashboard for authentication issues.
