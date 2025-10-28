# 🌾 FarmRoket Landing Page

> Revolutionizing agriculture through blockchain transparency and traceability

[![Next.js](https://img.shields.io/badge/Next.js-15.5.3-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.0+-38B2AC)](https://tailwindcss.com/)
[![DaisyUI](https://img.shields.io/badge/DaisyUI-5.1.13-5A0EF8)](https://daisyui.com/)
[![Supabase](https://img.shields.io/badge/Supabase-3.0+-3ECF8E)](https://supabase.com/)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)

## 📋 Overview

FarmRoket is a blockchain-powered platform ensuring complete transparency and traceability from farm to fork. This MVP landing page serves as the primary marketing and lead generation tool, featuring a modern design, comprehensive pilot application system with authentication, and admin dashboard for managing applications.

**Project Status**: MVP (Minimum Viable Product) - Started from fourth prompt iteration with focus on essential features.

## ✨ Key Features

### 🎯 Core Functionality

- 🎨 **Modern Landing Page** - Professional design with TailwindCSS v4 and DaisyUI
- 🔐 **Authentication System** - Complete user registration and login with Supabase Auth
- 📋 **Pilot Application System** - Comprehensive form for collecting business applications
- 👨‍💼 **Admin Dashboard** - Role-based access for managing applications
- 📊 **Application Management** - Status tracking, filtering, and admin notes

### 🛡️ Security & Performance

- ⚡ **Performance Optimized** - Next.js 15.5.3 with Turbopack
- 📱 **Responsive Design** - Mobile-first approach with modern UI
- 🔒 **Secure Authentication** - JWT-based auth with Row Level Security (RLS)
- 🛡️ **Data Protection** - Supabase backend with comprehensive security policies
- ♿ **Accessible** - WCAG compliant with semantic HTML

### 🔧 Technical Features

- 🔍 **SEO Ready** - Comprehensive meta tags and structured data
- 📧 **Lead Generation** - Integrated pilot application system with API
- 🗄️ **Database Integration** - PostgreSQL with Supabase for scalable data management
- 🔄 **Real-time Updates** - Live application status updates
- 📈 **Analytics Ready** - Application statistics and reporting

## 🚀 Quick Start

### Prerequisites

- Node.js 18.0 or higher
- npm, yarn, or pnpm
- Supabase account and project

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd farmroket-landing

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your Supabase credentials

# Run database migrations
# See docs/SUPABASE_INTEGRATION.md for setup instructions

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

### Environment Setup

Create `.env.local` with the following variables:

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=your_supabase_publishable_key
SUPABASE_SECRET_KEY=your_supabase_secret_key

# Site Configuration
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_PRODUCTION_URL=https://farmroket.com
```

### Development Workflow

```bash
# Interactive commit (recommended)
npm run commit

# Generate changelog
npm run changelog

# Run linting
npm run lint

# Build for production
npm run build

# Start production server
npm start
```

## 🏗️ Project Structure

```
src/
├── app/
│   ├── (sections)/              # Landing page sections
│   │   ├── Hero.tsx
│   │   ├── ProblemSolution.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── Features.tsx
│   │   ├── Benefits.tsx
│   │   ├── UseCasesAbout.tsx
│   │   └── WaitlistFooter.tsx
│   ├── admin/
│   │   └── page.tsx            # Admin dashboard
│   ├── api/
│   │   ├── waitlist/           # Public application API
│   │   └── admin/              # Admin-only API endpoints
│   │       └── applications/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── ui/                     # Reusable UI components
│   ├── AuthContext.tsx         # Authentication context
│   ├── AuthModal.tsx           # Login/signup modal
│   ├── Navbar.tsx              # Navigation with auth
│   └── WaitlistForm.tsx        # Pilot application form
├── lib/
│   └── supabase.ts            # Supabase client configuration
├── supabase/
│   └── migrations/            # Database schema and policies
│       ├── 001_initial_schema.sql
│       └── 002_rls_policies.sql
docs/                          # Comprehensive documentation (organized by category)
├── 01-getting-started/        # Setup and onboarding guides
├── 02-architecture/           # System design and technical architecture
├── 03-features/               # Feature-specific documentation
├── 04-api/                    # API reference and examples
├── 05-development/            # Development workflow and guidelines
├── 06-deployment/             # Production deployment guides
├── 07-sprints/                # Sprint-based development tracking
├── 08-maintenance/            # Troubleshooting and maintenance
├── 09-reference/              # Reference materials and templates
├── DOCUMENTATION_ARCHITECTURE.md  # Documentation organization guide
└── README.md                  # Documentation overview
```

## 🛠️ Technology Stack

| Technology  | Version | Purpose                         |
| ----------- | ------- | ------------------------------- |
| Next.js     | 15.5.3  | React framework with App Router |
| React       | 19.0.0  | UI library                      |
| TypeScript  | 5.0+    | Type safety                     |
| TailwindCSS | 4.0+    | Utility-first CSS framework     |
| DaisyUI     | 5.1.13  | Component library               |
| Supabase    | 3.0+    | Backend-as-a-Service (Auth, DB) |
| PostgreSQL  | Latest  | Database (via Supabase)         |
| Turbopack   | Latest  | Fast bundler for development    |

## 🔐 Authentication System

The application includes a complete authentication system:

### User Features

- **Registration**: Email/password signup with profile creation
- **Login**: Secure authentication with JWT tokens
- **Session Management**: Persistent login state across browser sessions
- **Profile Management**: User profile with role-based access

### Admin Features

- **Admin Dashboard**: Comprehensive application management interface
- **Role-Based Access**: Admin-only routes and functionality
- **Application Management**: View, filter, and update pilot applications
- **Status Tracking**: Update application status with admin notes

### Security

- **Row Level Security (RLS)**: Database-level access control
- **JWT Authentication**: Secure token-based authentication
- **Input Validation**: Comprehensive server-side validation
- **Protected Routes**: Admin-only access to sensitive functionality

For detailed authentication documentation, see [AUTHENTICATION.md](./docs/AUTHENTICATION.md).

## 🗄️ Database & Backend

### Supabase Integration

- **PostgreSQL Database**: Scalable relational database
- **Real-time Subscriptions**: Live data updates
- **Built-in Authentication**: User management and JWT tokens
- **Row Level Security**: Fine-grained access control
- **API Auto-generation**: RESTful API from database schema

### Database Schema

- **pilot_applications**: Main application data with comprehensive fields
- **profiles**: Extended user information and role management
- **auth.users**: Built-in Supabase user authentication

### API Endpoints

- `POST /api/waitlist` - Submit pilot applications (authenticated)
- `GET /api/waitlist` - Public application statistics
- `GET /api/admin/applications` - Admin application listing
- `GET /api/admin/applications/[id]` - Individual application details
- `PATCH /api/admin/applications/[id]` - Update application status

For complete backend documentation, see [SUPABASE_INTEGRATION.md](./docs/SUPABASE_INTEGRATION.md) and [API Documentation](./docs/api/README.md).

## 📚 Documentation

Comprehensive documentation is organized in the [`docs/`](./docs/) directory with a structured approach for scalability:

### 🚀 Getting Started

- **[Quick Start Guide](./docs/01-getting-started/README.md)** - Get up and running quickly
- **[Installation](./docs/01-getting-started/installation.md)** - Detailed setup instructions
- **[Admin Setup](./docs/01-getting-started/admin-setup.md)** - Create your first admin user

### 🏗️ Architecture & Design

- **[System Architecture](./docs/02-architecture/README.md)** - Technical architecture overview
- **[Database Schema](./docs/02-architecture/database-schema.md)** - Supabase integration and schema

### ✨ Features

- **[Features Overview](./docs/03-features/README.md)** - All implemented and planned features
- **[Authentication](./docs/03-features/authentication/README.md)** - Authentication system details
- **[Admin Dashboard](./docs/03-features/admin-dashboard/README.md)** - Admin interface guide
- **[Pilot Applications](./docs/03-features/pilot-applications/README.md)** - Application system

### 🔌 API Reference

- **[API Documentation](./docs/04-api/README.md)** - Complete API reference and examples

### 💻 Development

- **[Development Guide](./docs/05-development/README.md)** - Development workflow and guidelines

### 🚀 Deployment

- **[Deployment Guide](./docs/06-deployment/README.md)** - Production deployment instructions

### 📋 Sprint Documentation

- **[Sprint Overview](./docs/07-sprints/README.md)** - Sprint-based development tracking
- **[Sprint 01 - MVP](./docs/07-sprints/sprint-01-mvp/README.md)** - Current MVP sprint details

### 🔧 Maintenance

- **[Maintenance](./docs/08-maintenance/)** - Troubleshooting and maintenance guides

### 📖 Reference

- **[Documentation Architecture](./docs/DOCUMENTATION_ARCHITECTURE.md)** - How our docs are organized
- **[Changelog](./CHANGELOG.md)** - Project history and updates

## 🚀 Deployment

### Supabase Setup

1. **Create Supabase Project**:
   - Visit [Supabase Dashboard](https://supabase.com/dashboard)
   - Create new project
   - Note your project URL and API keys

2. **Run Database Migrations**:

   ```sql
   -- Run in Supabase SQL Editor
   -- 1. Execute 001_initial_schema.sql
   -- 2. Execute 002_rls_policies.sql
   ```

3. **Create Admin User**:
   - See [CREATE_ADMIN_USER.md](./docs/CREATE_ADMIN_USER.md) for detailed instructions

### Vercel Deployment (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy with environment variables
vercel --env NEXT_PUBLIC_SUPABASE_URL=your_url
```

### Environment Variables for Production

```env
NEXT_PUBLIC_SUPABASE_URL=your_production_supabase_url
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=your_production_publishable_key
SUPABASE_SECRET_KEY=your_production_secret_key
NEXT_PUBLIC_SITE_URL=https://farmroket.com
NEXT_PUBLIC_PRODUCTION_URL=https://farmroket.com
```

## 🧪 Testing

### Manual Testing Checklist

#### Authentication Flow

- [ ] User registration with email/password
- [ ] User login and logout
- [ ] Session persistence across browser refresh
- [ ] Protected route access (admin dashboard)

#### Application System

- [ ] Pilot application submission (authenticated users)
- [ ] Form validation and error handling
- [ ] Duplicate application prevention
- [ ] Application status tracking

#### Admin Dashboard

- [ ] Admin login and access verification
- [ ] Application listing and pagination
- [ ] Status filtering and search
- [ ] Application status updates
- [ ] Admin notes functionality

### API Testing

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

## 🤝 Contributing

We use [Conventional Commits](https://www.conventionalcommits.org/) and automated workflows:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feat/amazing-feature`)
3. **Set up** development environment (see Quick Start)
4. **Develop** following our coding standards
5. **Test** locally (authentication, API, admin features)
6. **Commit** using conventional format (`npm run commit`)
7. **Push** to your branch (`git push origin feat/amazing-feature`)
8. **Submit** a Pull Request

### Commit Types

- `feat:` New features (authentication, admin dashboard, etc.)
- `fix:` Bug fixes
- `docs:` Documentation changes
- `style:` Code formatting
- `refactor:` Code refactoring
- `test:` Adding tests
- `chore:` Maintenance tasks

### Development Guidelines

- Follow TypeScript best practices
- Maintain responsive design principles
- Ensure authentication security
- Test admin functionality thoroughly
- Update documentation for new features

## 📊 Project Status

### ✅ Completed Features (MVP)

- Modern landing page design
- Complete authentication system
- Pilot application form with validation
- Admin dashboard with application management
- Supabase backend integration
- API endpoints with authentication
- Row Level Security implementation
- Responsive design and accessibility

### 🔄 Future Enhancements

- Email notifications for applications
- Advanced analytics dashboard
- Bulk application management
- Export functionality
- Enhanced user profiles
- Mobile app integration

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

For questions or support:

1. **Documentation**: Check the comprehensive docs in the [`docs/`](./docs/) directory
2. **Issues**: Create an issue in the repository
3. **Authentication**: See [AUTHENTICATION.md](./docs/AUTHENTICATION.md)
4. **Database**: See [SUPABASE_INTEGRATION.md](./docs/SUPABASE_INTEGRATION.md)
5. **API**: See [API Documentation](./docs/api/README.md)

---

**Built with ❤️ for the future of agriculture**

_This MVP was developed starting from the fourth prompt iteration, focusing on essential features for pilot program management and user authentication._
