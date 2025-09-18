# Setup Guide

## 🛠️ Development Environment Setup

### System Requirements

- **Node.js**: Version 18.0 or higher
- **npm**: Version 8.0 or higher (comes with Node.js)
- **Git**: Latest version
- **Code Editor**: VS Code recommended with extensions

### Recommended VS Code Extensions

```json
{
  "recommendations": [
    "bradlc.vscode-tailwindcss",
    "ms-vscode.vscode-typescript-next",
    "esbenp.prettier-vscode",
    "ms-vscode.vscode-eslint",
    "formulahendry.auto-rename-tag",
    "christian-kohler.path-intellisense"
  ]
}
```

## 📦 Installation Steps

### 1. Clone Repository

```bash
# Clone the repository
git clone <repository-url>
cd farmroket-landing

# Verify Node.js version
node --version  # Should be 18.0+
npm --version   # Should be 8.0+
```

### 2. Install Dependencies

```bash
# Install all project dependencies
npm install

# Verify installation
npm list --depth=0
```

### 3. Environment Configuration

Create environment files if needed:

```bash
# Copy environment template (if exists)
cp .env.example .env.local

# Edit environment variables
# Add any required API keys or configuration
```

### 4. Start Development Server

```bash
# Start development server with Turbopack
npm run dev

# Server will start on http://localhost:3000
# Hot reload is enabled for instant updates
```

## ⚙️ Configuration

### TailwindCSS Configuration

The project uses TailwindCSS v4 with DaisyUI. Configuration is in `tailwind.config.js`:

```javascript
// tailwind.config.js
import daisyui from 'daisyui';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
  daisyui: {
    themes: ['emerald'],
    base: true,
    styled: true,
    utils: true,
  },
};
```

### Next.js Configuration

Next.js configuration in `next.config.ts`:

```typescript
// next.config.ts
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  experimental: {
    turbo: {
      rules: {
        '*.svg': {
          loaders: ['@svgr/webpack'],
          as: '*.js',
        },
      },
    },
  },
};

export default nextConfig;
```

### TypeScript Configuration

TypeScript settings in `tsconfig.json`:

```json
{
  "compilerOptions": {
    "lib": ["dom", "dom.iterable", "es6"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

## 🔧 Development Tools

### Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript compiler
```

### Code Quality Tools

#### ESLint Configuration

```javascript
// eslint.config.mjs
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
];

export default eslintConfig;
```

#### Prettier Configuration (Optional)

Create `.prettierrc` for consistent formatting:

```json
{
  "semi": true,
  "trailingComma": "es5",
  "singleQuote": true,
  "printWidth": 80,
  "tabWidth": 2,
  "useTabs": false
}
```

## 🗂️ Project Structure Setup

### Folder Organization

```
src/
├── app/                    # Next.js App Router
│   ├── (sections)/        # Landing page sections
│   ├── api/               # API routes
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable components
│   └── ui/               # UI components
└── lib/                  # Utility functions (future)
```

### File Naming Conventions

- **Components**: PascalCase (e.g., `Hero.tsx`, `ProblemSolution.tsx`)
- **Pages**: lowercase (e.g., `page.tsx`, `layout.tsx`)
- **API Routes**: lowercase (e.g., `route.ts`)
- **Utilities**: camelCase (e.g., `formatDate.ts`)
- **Constants**: UPPER_CASE (e.g., `API_ENDPOINTS.ts`)

## 🚀 Performance Optimization

### Development Performance

- **Turbopack**: Enabled for faster builds
- **Hot Reload**: Instant updates during development
- **TypeScript**: Incremental compilation
- **ESLint**: Fast linting with caching

### Build Optimization

```bash
# Analyze bundle size
npm run build
npm run analyze  # If analyzer is configured

# Check build output
ls -la .next/static/
```

## 🐛 Troubleshooting

### Common Issues

#### Port Already in Use

```bash
# Kill process on port 3000
npx kill-port 3000

# Or use different port
npm run dev -- -p 3001
```

#### Node Modules Issues

```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm cache clean --force
npm install
```

#### TypeScript Errors

```bash
# Check TypeScript configuration
npm run type-check

# Restart TypeScript server in VS Code
# Cmd/Ctrl + Shift + P -> "TypeScript: Restart TS Server"
```

#### TailwindCSS Not Working

```bash
# Verify Tailwind config
npx tailwindcss --help

# Check if styles are being purged
# Inspect element in browser dev tools
```

### Debug Mode

```bash
# Enable debug mode
DEBUG=* npm run dev

# Next.js specific debugging
NEXT_DEBUG=1 npm run dev
```

## 📱 Testing Setup

### Manual Testing Checklist

- [ ] All sections render correctly
- [ ] Responsive design works on mobile/tablet/desktop
- [ ] Forms submit successfully
- [ ] API endpoints respond correctly
- [ ] SEO meta tags are present
- [ ] Accessibility features work
- [ ] Performance is acceptable

### Browser Testing

- **Chrome**: Latest version
- **Firefox**: Latest version
- **Safari**: Latest version (macOS)
- **Edge**: Latest version
- **Mobile**: iOS Safari, Android Chrome

## 🔐 Security Considerations

### Development Security

- Never commit sensitive data
- Use environment variables for secrets
- Keep dependencies updated
- Follow security best practices

```bash
# Check for vulnerabilities
npm audit
npm audit fix
```

## 📚 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [TailwindCSS Documentation](https://tailwindcss.com/docs)
- [DaisyUI Documentation](https://daisyui.com/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
- [React Documentation](https://react.dev/)

---

_For additional help, check the main [README.md](../README.md) or create an issue in the repository._
