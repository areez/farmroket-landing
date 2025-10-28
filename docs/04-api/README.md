# API Documentation

## 📋 Overview

The FarmRoket landing page includes a comprehensive RESTful API for managing pilot program applications with authentication and role-based access control. The API is built using Next.js App Router API routes with Supabase backend integration.

## 🔗 Base URL

```
Development: http://localhost:3000/api
Production: https://farmroket.com/api
```

## 🔐 Authentication

The API uses Supabase Auth with JWT tokens for authentication. Admin endpoints require Bearer token authentication.

### Authentication Headers

For admin endpoints, include the authorization header:

```http
Authorization: Bearer <jwt_token>
```

## 📡 Endpoints

### Pilot Application Management

#### POST /api/waitlist

**Purpose**: Submit a new pilot program application (requires authentication)

**Authentication**: Required - User must be logged in

**Request**:

```http
POST /api/waitlist
Content-Type: application/json
Authorization: Bearer <jwt_token>

{
  "companyName": "FarmTech Solutions",
  "contactName": "John Doe",
  "email": "john@farmtech.com",
  "phone": "+1-555-0123",
  "companySize": "11-50",
  "currentChallenges": ["supply-chain", "inventory-management"],
  "interestedFeatures": ["real-time-tracking", "analytics"],
  "timeline": "1-3-months",
  "additionalInfo": "Looking to optimize our supply chain operations"
}
```

**Request Body Schema**:

```typescript
interface PilotApplication {
  companyName: string; // Required, company name
  contactName: string; // Required, contact person name
  email: string; // Required, valid email format
  phone: string; // Required, contact phone number
  companySize: string; // Required, enum: '1-10', '11-50', '51-200', '201-500', '500+'
  currentChallenges: string[]; // Required, array of challenge types
  interestedFeatures: string[]; // Required, array of feature interests
  timeline: string; // Required, enum: 'immediate', '1-3-months', '3-6-months', '6-12-months'
  additionalInfo?: string; // Optional, additional information
}
```

**Response - Success (201)**:

```json
{
  "success": true,
  "message": "Application submitted successfully",
  "data": {
    "id": "uuid-string",
    "user_id": "user-uuid",
    "company_name": "FarmTech Solutions",
    "contact_name": "John Doe",
    "email": "john@farmtech.com",
    "phone": "+1-555-0123",
    "company_size": "11-50",
    "current_challenges": ["supply-chain", "inventory-management"],
    "interested_features": ["real-time-tracking", "analytics"],
    "timeline": "1-3-months",
    "additional_info": "Looking to optimize our supply chain operations",
    "status": "pending",
    "created_at": "2024-01-20T10:30:00.000Z"
  }
}
```

**Response - Error (401)**:

```json
{
  "success": false,
  "error": "Authentication required",
  "code": "UNAUTHORIZED"
}
```

**Response - Error (400)**:

```json
{
  "success": false,
  "error": "Invalid company size. Must be one of: 1-10, 11-50, 51-200, 201-500, 500+",
  "code": "VALIDATION_ERROR"
}
```

**Response - Error (409)**:

```json
{
  "success": false,
  "error": "Application already exists for this email",
  "code": "DUPLICATE_APPLICATION"
}
```

---

#### GET /api/waitlist

**Purpose**: Retrieve application statistics (public endpoint)

**Authentication**: Not required

**Request**:

```http
GET /api/waitlist
```

**Response - Success (200)**:

```json
{
  "success": true,
  "data": {
    "total": 1250,
    "pending": 800,
    "approved": 350,
    "rejected": 100,
    "latest_application": "2024-01-20T10:30:00.000Z"
  }
}
```

---

### Admin Endpoints

#### GET /api/admin/applications

**Purpose**: Retrieve all pilot applications (admin only)

**Authentication**: Required - Admin role

**Request**:

```http
GET /api/admin/applications
Authorization: Bearer <admin_jwt_token>
```

**Query Parameters**:

- `status` (optional): Filter by status ('pending', 'approved', 'rejected', 'in_review')
- `limit` (optional): Number of entries to return (default: 50)
- `offset` (optional): Number of entries to skip (default: 0)

**Example**:

```http
GET /api/admin/applications?status=pending&limit=25
Authorization: Bearer <admin_jwt_token>
```

**Response - Success (200)**:

```json
{
  "success": true,
  "data": {
    "applications": [
      {
        "id": "uuid-string",
        "user_id": "user-uuid",
        "company_name": "FarmTech Solutions",
        "contact_name": "John Doe",
        "email": "john@farmtech.com",
        "phone": "+1-555-0123",
        "company_size": "11-50",
        "current_challenges": ["supply-chain", "inventory-management"],
        "interested_features": ["real-time-tracking", "analytics"],
        "timeline": "1-3-months",
        "additional_info": "Looking to optimize our supply chain operations",
        "status": "pending",
        "admin_notes": null,
        "created_at": "2024-01-20T10:30:00.000Z",
        "updated_at": "2024-01-20T10:30:00.000Z"
      }
    ],
    "total": 1250,
    "count": 25
  }
}
```

**Response - Error (403)**:

```json
{
  "success": false,
  "error": "Admin access required",
  "code": "FORBIDDEN"
}
```

---

#### GET /api/admin/applications/[id]

**Purpose**: Retrieve specific application (admin only)

**Authentication**: Required - Admin role

**Request**:

```http
GET /api/admin/applications/uuid-string
Authorization: Bearer <admin_jwt_token>
```

**Response - Success (200)**:

```json
{
  "success": true,
  "data": {
    "id": "uuid-string",
    "user_id": "user-uuid",
    "company_name": "FarmTech Solutions",
    "contact_name": "John Doe",
    "email": "john@farmtech.com",
    "phone": "+1-555-0123",
    "company_size": "11-50",
    "current_challenges": ["supply-chain", "inventory-management"],
    "interested_features": ["real-time-tracking", "analytics"],
    "timeline": "1-3-months",
    "additional_info": "Looking to optimize our supply chain operations",
    "status": "pending",
    "admin_notes": null,
    "created_at": "2024-01-20T10:30:00.000Z",
    "updated_at": "2024-01-20T10:30:00.000Z"
  }
}
```

**Response - Error (404)**:

```json
{
  "success": false,
  "error": "Application not found",
  "code": "NOT_FOUND"
}
```

---

#### PATCH /api/admin/applications/[id]

**Purpose**: Update application status (admin only)

**Authentication**: Required - Admin role

**Request**:

```http
PATCH /api/admin/applications/uuid-string
Content-Type: application/json
Authorization: Bearer <admin_jwt_token>

{
  "status": "approved",
  "admin_notes": "Great fit for our pilot program"
}
```

**Request Body Schema**:

```typescript
interface ApplicationUpdate {
  status: 'pending' | 'approved' | 'rejected' | 'in_review';
  admin_notes?: string;
}
```

**Response - Success (200)**:

```json
{
  "success": true,
  "message": "Application updated successfully",
  "data": {
    "id": "uuid-string",
    "status": "approved",
    "admin_notes": "Great fit for our pilot program",
    "updated_at": "2024-01-20T11:30:00.000Z"
  }
}
```

## 🏗️ Implementation Details

### File Structure

```
src/app/api/
├── waitlist/
│   └── route.ts              # Public waitlist endpoints
└── admin/
    └── applications/
        ├── route.ts          # Admin application listing
        └── [id]/
            └── route.ts      # Individual application management
```

### Database Integration

The API uses Supabase PostgreSQL database with the following tables:

- `pilot_applications`: Main application data
- `profiles`: Extended user information
- `auth.users`: Supabase authentication (built-in)

### Security Features

- **Row Level Security (RLS)**: Users can only access their own applications
- **JWT Authentication**: Secure token-based authentication
- **Role-Based Access**: Admin role verification for protected endpoints
- **Input Validation**: Comprehensive server-side validation
- **SQL Injection Protection**: Parameterized queries via Supabase client

### Error Handling

All endpoints return consistent error responses:

```typescript
interface ErrorResponse {
  success: false;
  error: string;
  code: string;
  details?: any;
}
```

### Rate Limiting

- Public endpoints: Standard Next.js rate limiting
- Admin endpoints: Enhanced rate limiting for security
- Authentication endpoints: Supabase built-in rate limiting

## 🧪 Testing

### Manual Testing

1. **Authentication Flow**:
   - Test user registration and login
   - Verify JWT token generation
   - Test token expiration handling

2. **Application Submission**:
   - Test with valid data
   - Test validation errors
   - Test duplicate submission prevention

3. **Admin Operations**:
   - Test admin authentication
   - Test application listing and filtering
   - Test status updates

### API Testing Tools

Use tools like Postman, Insomnia, or curl for API testing:

```bash
# Test application submission
curl -X POST http://localhost:3000/api/waitlist \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer <jwt_token>" \
  -d '{"companyName":"Test Co","contactName":"John Doe","email":"test@example.com","phone":"555-0123","companySize":"1-10","currentChallenges":["supply-chain"],"interestedFeatures":["tracking"],"timeline":"immediate"}'

# Test admin access
curl -X GET http://localhost:3000/api/admin/applications \
  -H "Authorization: Bearer <admin_jwt_token>"
```

## 🔧 Configuration

### Environment Variables

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=your_publishable_key
SUPABASE_SECRET_KEY=your_secret_key

# Site Configuration
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_PRODUCTION_URL=https://farmroket.com
```

### Database Setup

Ensure the following migrations are applied:

1. `001_initial_schema.sql` - Creates tables and constraints
2. `002_rls_policies.sql` - Implements Row Level Security

## 🚨 Security Considerations

- All admin endpoints require valid JWT tokens
- User data is protected by Row Level Security policies
- Input validation prevents injection attacks
- Rate limiting prevents abuse
- CORS policies restrict cross-origin requests
- Environment variables protect sensitive configuration

## 📈 Monitoring

- Monitor API response times and error rates
- Track authentication success/failure rates
- Monitor database performance and query efficiency
- Set up alerts for unusual activity patterns
