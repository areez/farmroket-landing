# FarmRoket Landing Page Documentation

## 📋 Table of Contents

- [Project Overview](#project-overview)
- [Quick Start](#quick-start)
- [Development Workflow](#development-workflow)
- [Architecture](#architecture)
- [Components](#components)
- [API Reference](#api-reference)
- [Deployment](#deployment)
- [Version Management](#version-management)
- [Contributing](#contributing)

## 🌾 Project Overview

**FarmRoket** is a revolutionary blockchain-powered platform that ensures complete transparency and traceability from farm to fork. This landing page serves as the primary marketing and lead generation tool for the platform.

### Key Features

- **Modern Design**: Built with TailwindCSS v4 and DaisyUI for a professional, responsive interface
- **Performance Optimized**: Next.js 15.5.3 with Turbopack for lightning-fast development and production builds
- **SEO Ready**: Comprehensive meta tags, Open Graph, and Twitter Card integration
- **Lead Generation**: Integrated waitlist system with API backend
- **Accessibility**: WCAG compliant with semantic HTML and ARIA labels

### Technology Stack

| Technology  | Version | Purpose                         |
| ----------- | ------- | ------------------------------- |
| Next.js     | 15.5.3  | React framework with App Router |
| React       | 19.0.0  | UI library                      |
| TypeScript  | 5.0+    | Type safety                     |
| TailwindCSS | 4.0+    | Utility-first CSS framework     |
| DaisyUI     | 5.1.13  | Component library               |
| Turbopack   | Latest  | Fast bundler for development    |

## 🚀 Quick Start

### Prerequisites

- Node.js 18.0 or higher
- npm or yarn package manager
- Git for version control

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd farmroket-landing
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:3000`

### Available Scripts

```bash
# Development server with Turbopack
npm run dev

# Production build
npm run build

# Start production server
npm start

# Lint code
npm run lint

# Interactive commit (recommended)
npm run commit

# Generate changelog
npm run changelog

# Version bump (automated in CI)
npm run version

# Run pre-commit checks
npm run lint-staged
```

## 🔄 Development Workflow

This project follows modern development best practices with automated workflows:

### **Commit Standards**

We use [Conventional Commits](https://www.conventionalcommits.org/) for consistent commit messages:

```bash
# Interactive commit (recommended)
npm run commit

# Manual conventional commit
git commit -m "feat: add new landing section"
git commit -m "fix: resolve mobile responsive issue"
git commit -m "docs: update API documentation"
```

### **Automated Quality Checks**

- **Pre-commit hooks**: Automatic code formatting and linting
- **Commit message validation**: Ensures conventional commit format
- **CI pipeline**: Automated testing and security audits
- **Automated releases**: Version bumping and changelog generation

### **Version Management**

- `feat:` commits → Minor version bump (1.0.0 → 1.1.0)
- `fix:` commits → Patch version bump (1.0.0 → 1.0.1)
- `feat!:` or `BREAKING CHANGE:` → Major version bump (1.0.0 → 2.0.0)

### **Development Tools**

- **ESLint**: Code linting and error detection
- **Prettier**: Automatic code formatting
- **Husky**: Git hooks for quality assurance
- **Commitizen**: Interactive commit message creation
- **Conventional Changelog**: Automated changelog generation

For detailed development guidelines, see [Development Documentation](./DEVELOPMENT.md).

## 🏗️ Architecture

### Project Structure

```
farmroket-landing/
├── src/
│   ├── app/
│   │   ├── (sections)/          # Landing page sections
│   │   │   ├── Hero.tsx
│   │   │   ├── ProblemSolution.tsx
│   │   │   ├── HowItWorks.tsx
│   │   │   ├── Features.tsx
│   │   │   ├── Benefits.tsx
│   │   │   ├── UseCasesAbout.tsx
│   │   │   └── WaitlistFooter.tsx
│   │   ├── api/
│   │   │   └── waitlist/
│   │   │       └── route.ts     # Waitlist API endpoint
│   │   ├── globals.css          # Global styles
│   │   ├── layout.tsx           # Root layout with SEO
│   │   └── page.tsx             # Main page component
│   └── components/
│       └── ui/                  # Reusable UI components
├── data/
│   └── waitlist.json           # Waitlist data storage
├── docs/                       # Documentation
├── public/                     # Static assets
├── tailwind.config.js          # Tailwind configuration
└── package.json               # Dependencies and scripts
```

### Design Patterns

- **Component-Based Architecture**: Each section is a self-contained React component
- **Server Components**: Leveraging Next.js App Router for optimal performance
- **API Routes**: RESTful endpoints for data operations
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints
- **Type Safety**: Full TypeScript integration for better developer experience

## 📱 Components

The landing page is composed of modular sections, each serving a specific purpose:

### Section Components

1. **Hero** - Primary value proposition and CTA
2. **ProblemSolution** - Problem identification and solution presentation
3. **HowItWorks** - Process explanation with visual timeline
4. **Features** - Key platform capabilities
5. **Benefits** - User-specific value propositions
6. **UseCasesAbout** - Regulatory use cases and company information
7. **WaitlistFooter** - Lead capture and footer information

### Component Guidelines

- Each component is fully self-contained
- Props are typed with TypeScript interfaces
- Responsive design using Tailwind breakpoints
- Accessibility features included (ARIA labels, semantic HTML)
- Consistent spacing using Tailwind spacing scale

For detailed component documentation, see [Components Documentation](./components/README.md).

## 🔌 API Reference

The application includes a RESTful API for waitlist management:

### Endpoints

- `POST /api/waitlist` - Submit waitlist entry
- `GET /api/waitlist` - Get waitlist summary (admin)

For complete API documentation, see [API Documentation](./api/README.md).

## 🚀 Deployment

The application is optimized for deployment on Vercel but can be deployed to any platform supporting Next.js.

### Vercel Deployment (Recommended)

1. Connect your GitHub repository to Vercel
2. Configure environment variables (if any)
3. Deploy with automatic builds on push

### Other Platforms

- **Netlify**: Use `npm run build` and deploy the `out` folder
- **AWS**: Deploy using AWS Amplify or EC2
- **Docker**: Containerize using the included Dockerfile

For detailed deployment instructions, see [Deployment Documentation](./deployment/README.md).

## 📦 Version Management

### **Automated Versioning**

Versions are automatically managed based on commit types:

- **Semantic Versioning**: Following [semver](https://semver.org/) standards
- **Automated Changelog**: Generated from conventional commits
- **GitHub Releases**: Automatically created with release notes
- **CI/CD Integration**: Seamless deployment pipeline

### **Release Process**

1. **Development**: Make changes using conventional commits
2. **Pull Request**: Automated CI checks and validation
3. **Merge**: Automatic version detection and changelog update
4. **Release**: GitHub release creation and deployment

### **Current Version**

Check the latest version in [CHANGELOG.md](../CHANGELOG.md) or [package.json](../package.json).

## 🤝 Contributing

### **Development Workflow**

1. **Fork and Clone**: Create your own fork of the repository
2. **Branch**: Create a feature branch (`git checkout -b feat/amazing-feature`)
3. **Develop**: Make changes following our coding standards
4. **Commit**: Use conventional commits (`npm run commit`)
5. **Test**: Ensure all checks pass locally
6. **Pull Request**: Submit with detailed description
7. **Review**: Address feedback and ensure CI passes
8. **Merge**: Automatic deployment after approval

### **Coding Standards**

- **TypeScript**: Use TypeScript for all new code
- **Component Structure**: Follow existing patterns
- **Styling**: Use Tailwind CSS classes
- **Type Safety**: Include proper TypeScript interfaces
- **Documentation**: Add comments for complex logic
- **Accessibility**: Ensure WCAG compliance
- **Conventional Commits**: Use standardized commit messages

### **Quality Assurance**

- **Automated Formatting**: Pre-commit hooks handle code style
- **Linting**: ESLint catches potential issues
- **Type Checking**: TypeScript ensures type safety
- **CI Pipeline**: Automated testing and security audits
- **Manual Testing**: Cross-browser and device testing

### **Getting Help**

- **Development Guide**: See [DEVELOPMENT.md](./DEVELOPMENT.md) for detailed workflow
- **Component Docs**: Check [components/README.md](./components/README.md)
- **API Reference**: Review [api/README.md](./api/README.md)
- **Deployment**: See [deployment/README.md](./deployment/README.md)

## 📞 Support

For questions or issues:

- Check the [CHANGELOG.md](../CHANGELOG.md) for recent changes
- Review component documentation in `docs/components/`
- Check API documentation in `docs/api/`
- Create an issue in the project repository

---

_Last updated: September 2025_
