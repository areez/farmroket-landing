# 🌾 FarmRoket Landing Page

> Revolutionizing agriculture through blockchain transparency and traceability

[![Next.js](https://img.shields.io/badge/Next.js-15.5.3-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.0+-38B2AC)](https://tailwindcss.com/)
[![DaisyUI](https://img.shields.io/badge/DaisyUI-5.1.13-5A0EF8)](https://daisyui.com/)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

## 📋 Overview

FarmRoket is a blockchain-powered platform ensuring complete transparency and traceability from farm to fork. This landing page serves as the primary marketing and lead generation tool, featuring a modern design, comprehensive waitlist system, and optimized performance.

## ✨ Features

- 🎨 **Modern Design** - Built with TailwindCSS v4 and DaisyUI
- ⚡ **Performance Optimized** - Next.js 15.5.3 with Turbopack
- 📱 **Responsive** - Mobile-first design approach
- 🔍 **SEO Ready** - Comprehensive meta tags and structured data
- 📧 **Lead Generation** - Integrated waitlist system with API
- ♿ **Accessible** - WCAG compliant with semantic HTML
- 🔒 **Secure** - Input validation and security headers

## 🚀 Quick Start

### Prerequisites

- Node.js 18.0 or higher
- npm, yarn, or pnpm

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd farmroket-landing

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

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
```

## 🏗️ Project Structure

```
src/
├── app/
│   ├── (sections)/          # Landing page sections
│   │   ├── Hero.tsx
│   │   ├── ProblemSolution.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── Features.tsx
│   │   ├── Benefits.tsx
│   │   ├── UseCasesAbout.tsx
│   │   └── WaitlistFooter.tsx
│   ├── api/
│   │   └── waitlist/        # Waitlist API endpoint
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   └── ui/                  # Reusable UI components
data/
└── waitlist.json           # Waitlist data storage
docs/                       # Comprehensive documentation
├── README.md              # Detailed project documentation
├── DEVELOPMENT.md         # Development workflow and guidelines
├── setup/                 # Setup and installation guides
├── components/            # Component documentation
├── api/                   # API reference
└── deployment/            # Deployment guides
```

## 🛠️ Technology Stack

| Technology  | Version | Purpose                         |
| ----------- | ------- | ------------------------------- |
| Next.js     | 15.5.3  | React framework with App Router |
| React       | 19.0.0  | UI library                      |
| TypeScript  | 5.0+    | Type safety                     |
| TailwindCSS | 4.0+    | Utility-first CSS framework     |
| DaisyUI     | 5.1.13  | Component library               |
| Turbopack   | Latest  | Fast bundler for development    |

## 📚 Documentation

For comprehensive documentation, visit the [`docs/`](./docs/) directory:

- **[Project Overview](./docs/README.md)** - Detailed project documentation
- **[Development Guide](./docs/DEVELOPMENT.md)** - Development workflow and best practices
- **[Setup Guide](./docs/setup/SETUP.md)** - Development environment setup
- **[Components](./docs/components/README.md)** - Component documentation
- **[API Reference](./docs/api/README.md)** - API endpoints and usage
- **[Deployment](./docs/deployment/README.md)** - Deployment guides

## 🚀 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Other Platforms

See the [deployment documentation](./docs/deployment/README.md) for guides on:

- Netlify
- GitHub Pages
- Docker
- AWS, GCP, Azure

## 🤝 Contributing

We use [Conventional Commits](https://www.conventionalcommits.org/) and automated workflows:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feat/amazing-feature`)
3. **Develop** following our [coding standards](./docs/DEVELOPMENT.md)
4. **Commit** using conventional format (`npm run commit`)
5. **Test** locally (`npm run lint && npm run build`)
6. **Push** to your branch (`git push origin feat/amazing-feature`)
7. **Submit** a Pull Request

### Commit Types

- `feat:` New features
- `fix:` Bug fixes
- `docs:` Documentation changes
- `style:` Code formatting
- `refactor:` Code refactoring
- `test:` Adding tests
- `chore:` Maintenance tasks

### Automated Quality Checks

- ✅ Pre-commit hooks (formatting, linting)
- ✅ Commit message validation
- ✅ CI pipeline (build, test, security)
- ✅ Automated releases and changelog

See [Development Guide](./docs/DEVELOPMENT.md) for detailed workflow instructions.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

For questions or support, please refer to the documentation or create an issue in the repository.

---

**Built with ❤️ for the future of agriculture**
