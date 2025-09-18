# API Documentation

## 📋 Overview

The FarmRoket landing page includes a RESTful API for managing waitlist submissions. The API is built using Next.js App Router API routes and provides endpoints for collecting and managing user signups.

## 🔗 Base URL

```
Development: http://localhost:3000/api
Production: https://your-domain.com/api
```

## 📡 Endpoints

### Waitlist Management

#### POST /api/waitlist

**Purpose**: Submit a new waitlist entry

**Request**:

```http
POST /api/waitlist
Content-Type: application/json

{
  "email": "user@example.com",
  "name": "John Doe",
  "company": "Farm Co.",
  "role": "farmer"
}
```

**Request Body Schema**:

```typescript
interface WaitlistEntry {
  email: string; // Required, valid email format
  name?: string; // Optional, user's full name
  company?: string; // Optional, company/organization name
  role?: string; // Optional, user's role (farmer, trader, etc.)
}
```

**Response - Success (201)**:

```json
{
  "success": true,
  "message": "Successfully added to waitlist",
  "data": {
    "id": "uuid-string",
    "email": "user@example.com",
    "name": "John Doe",
    "company": "Farm Co.",
    "role": "farmer",
    "timestamp": "2024-01-20T10:30:00.000Z",
    "source": "landing_page"
  }
}
```

**Response - Error (400)**:

```json
{
  "success": false,
  "error": "Invalid email format",
  "code": "VALIDATION_ERROR"
}
```

**Response - Error (409)**:

```json
{
  "success": false,
  "error": "Email already exists in waitlist",
  "code": "DUPLICATE_EMAIL"
}
```

**Response - Error (500)**:

```json
{
  "success": false,
  "error": "Internal server error",
  "code": "SERVER_ERROR"
}
```

---

#### GET /api/waitlist

**Purpose**: Retrieve waitlist summary (admin endpoint)

**Request**:

```http
GET /api/waitlist
```

**Query Parameters**:

- `limit` (optional): Number of entries to return (default: 100)
- `offset` (optional): Number of entries to skip (default: 0)
- `role` (optional): Filter by user role
- `since` (optional): ISO date string to filter entries since date

**Example**:

```http
GET /api/waitlist?limit=50&role=farmer&since=2024-01-01T00:00:00.000Z
```

**Response - Success (200)**:

```json
{
  "success": true,
  "data": {
    "total": 1250,
    "count": 50,
    "entries": [
      {
        "id": "uuid-string",
        "email": "user@example.com",
        "name": "John Doe",
        "company": "Farm Co.",
        "role": "farmer",
        "timestamp": "2024-01-20T10:30:00.000Z",
        "source": "landing_page"
      }
      // ... more entries
    ],
    "summary": {
      "by_role": {
        "farmer": 450,
        "trader": 320,
        "regulator": 180,
        "consumer": 300
      },
      "by_month": {
        "2024-01": 1250
      },
      "growth_rate": "15.2%"
    }
  }
}
```

## 🏗️ Implementation Details

### File Structure

```
src/app/api/
└── waitlist/
    └── route.ts          # Waitlist API endpoints
```

### Data Storage

The API uses a JSON file for data persistence:

```
data/
└── waitlist.json         # Waitlist entries storage
```

**Data Format**:

```json
[
  {
    "id": "550e8400-e29b-41d4-a716-446655440000",
    "email": "user@example.com",
    "name": "John Doe",
    "company": "Farm Co.",
    "role": "farmer",
    "timestamp": "2024-01-20T10:30:00.000Z",
    "source": "landing_page",
    "ip_address": "192.168.1.1",
    "user_agent": "Mozilla/5.0..."
  }
]
```

### Code Implementation

**Route Handler** (`src/app/api/waitlist/route.ts`):

```typescript
import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';

interface WaitlistEntry {
  id: string;
  email: string;
  name?: string;
  company?: string;
  role?: string;
  timestamp: string;
  source: string;
  ip_address?: string;
  user_agent?: string;
}

const WAITLIST_FILE = path.join(process.cwd(), 'data', 'waitlist.json');

// POST handler
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validation
    if (!body.email || !isValidEmail(body.email)) {
      return NextResponse.json(
        {
          success: false,
          error: 'Invalid email format',
          code: 'VALIDATION_ERROR',
        },
        { status: 400 }
      );
    }

    // Check for duplicates
    const existingEntries = await readWaitlist();
    if (existingEntries.some(entry => entry.email === body.email)) {
      return NextResponse.json(
        {
          success: false,
          error: 'Email already exists in waitlist',
          code: 'DUPLICATE_EMAIL',
        },
        { status: 409 }
      );
    }

    // Create new entry
    const newEntry: WaitlistEntry = {
      id: uuidv4(),
      email: body.email,
      name: body.name || '',
      company: body.company || '',
      role: body.role || '',
      timestamp: new Date().toISOString(),
      source: 'landing_page',
      ip_address: request.ip || '',
      user_agent: request.headers.get('user-agent') || '',
    };

    // Save to file
    existingEntries.push(newEntry);
    await writeWaitlist(existingEntries);

    return NextResponse.json(
      {
        success: true,
        message: 'Successfully added to waitlist',
        data: newEntry,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Waitlist submission error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error', code: 'SERVER_ERROR' },
      { status: 500 }
    );
  }
}

// GET handler
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const limit = parseInt(searchParams.get('limit') || '100');
    const offset = parseInt(searchParams.get('offset') || '0');
    const role = searchParams.get('role');
    const since = searchParams.get('since');

    let entries = await readWaitlist();

    // Apply filters
    if (role) {
      entries = entries.filter(entry => entry.role === role);
    }

    if (since) {
      const sinceDate = new Date(since);
      entries = entries.filter(entry => new Date(entry.timestamp) >= sinceDate);
    }

    // Pagination
    const total = entries.length;
    const paginatedEntries = entries.slice(offset, offset + limit);

    // Generate summary
    const summary = generateSummary(entries);

    return NextResponse.json({
      success: true,
      data: {
        total,
        count: paginatedEntries.length,
        entries: paginatedEntries,
        summary,
      },
    });
  } catch (error) {
    console.error('Waitlist retrieval error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error', code: 'SERVER_ERROR' },
      { status: 500 }
    );
  }
}

// Utility functions
async function readWaitlist(): Promise<WaitlistEntry[]> {
  try {
    const data = await fs.readFile(WAITLIST_FILE, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
}

async function writeWaitlist(entries: WaitlistEntry[]): Promise<void> {
  await fs.writeFile(WAITLIST_FILE, JSON.stringify(entries, null, 2));
}

function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function generateSummary(entries: WaitlistEntry[]) {
  // Implementation for generating summary statistics
  // ...
}
```

## 🔒 Security Considerations

### Input Validation

- **Email Validation**: Regex pattern validation
- **Data Sanitization**: Remove potentially harmful characters
- **Rate Limiting**: Prevent spam submissions (future enhancement)
- **CSRF Protection**: Built-in Next.js protection

### Data Protection

- **No Sensitive Data**: Only collect necessary information
- **IP Logging**: For analytics and abuse prevention
- **Data Encryption**: Consider encrypting stored data (future enhancement)
- **GDPR Compliance**: Implement data deletion endpoints (future enhancement)

### Error Handling

- **No Data Leakage**: Generic error messages for security
- **Logging**: Detailed server-side logging for debugging
- **Graceful Degradation**: Fallback mechanisms for failures

## 🚀 Performance Optimization

### Current Implementation

- **File-based Storage**: Simple JSON file for MVP
- **In-memory Processing**: Fast for small datasets
- **Minimal Dependencies**: Reduced bundle size

### Future Enhancements

- **Database Integration**: PostgreSQL/MongoDB for scalability
- **Caching**: Redis for frequently accessed data
- **Background Processing**: Queue system for email notifications
- **CDN**: Static asset optimization

## 📊 Analytics & Monitoring

### Metrics to Track

- **Submission Rate**: Signups per day/week/month
- **Conversion Rate**: Landing page visitors to signups
- **User Segmentation**: By role, company size, location
- **Error Rates**: Failed submissions and reasons

### Implementation

```typescript
// Add analytics tracking
const trackEvent = (event: string, properties: object) => {
  // Send to analytics service
  console.log('Analytics:', event, properties);
};

// In API handler
trackEvent('waitlist_signup', {
  role: body.role,
  source: 'landing_page',
  timestamp: new Date().toISOString(),
});
```

## 🧪 Testing

### API Testing

**Using curl**:

```bash
# Submit waitlist entry
curl -X POST http://localhost:3000/api/waitlist \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","name":"Test User","role":"farmer"}'

# Get waitlist summary
curl http://localhost:3000/api/waitlist
```

**Using Postman**:

1. Create new request
2. Set method to POST
3. Set URL to `http://localhost:3000/api/waitlist`
4. Add JSON body with email field
5. Send request and verify response

### Integration Testing

```typescript
// Example test with Jest
describe('/api/waitlist', () => {
  it('should accept valid email submission', async () => {
    const response = await fetch('/api/waitlist', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: 'test@example.com' }),
    });

    expect(response.status).toBe(201);
    const data = await response.json();
    expect(data.success).toBe(true);
  });

  it('should reject invalid email', async () => {
    const response = await fetch('/api/waitlist', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: 'invalid-email' }),
    });

    expect(response.status).toBe(400);
  });
});
```

## 🔄 Future Enhancements

### Planned Features

1. **Email Notifications**
   - Welcome email for new signups
   - Admin notifications for new entries
   - Bulk email campaigns

2. **Advanced Analytics**
   - Real-time dashboard
   - Conversion funnel analysis
   - A/B testing support

3. **Database Migration**
   - PostgreSQL for production
   - Data migration scripts
   - Backup and recovery

4. **Admin Interface**
   - Web-based admin panel
   - Export functionality
   - User management

5. **API Enhancements**
   - Authentication for admin endpoints
   - Rate limiting
   - Webhook support
   - GraphQL endpoint

### Migration Path

```typescript
// Database schema (future)
CREATE TABLE waitlist_entries (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email VARCHAR(255) UNIQUE NOT NULL,
  name VARCHAR(255),
  company VARCHAR(255),
  role VARCHAR(100),
  timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  source VARCHAR(100) DEFAULT 'landing_page',
  ip_address INET,
  user_agent TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

## 📚 Resources

- [Next.js API Routes](https://nextjs.org/docs/app/building-your-application/routing/route-handlers)
- [HTTP Status Codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)
- [REST API Best Practices](https://restfulapi.net/)
- [JSON Schema Validation](https://json-schema.org/)
- [API Security Best Practices](https://owasp.org/www-project-api-security/)

---

_For API-related questions or issues, refer to the route implementation in `src/app/api/waitlist/route.ts` or create an issue in the repository._
