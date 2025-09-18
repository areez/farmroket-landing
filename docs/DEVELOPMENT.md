# Development Guidelines

## 🚀 Getting Started

This document outlines the development workflow, coding standards, and best practices for the FarmRoket landing page project.

## 📋 Table of Contents

- [Development Workflow](#development-workflow)
- [Commit Message Standards](#commit-message-standards)
- [Code Quality & Formatting](#code-quality--formatting)
- [Version Management](#version-management)
- [CI/CD Pipeline](#cicd-pipeline)
- [Release Process](#release-process)
- [Git Hooks](#git-hooks)
- [Troubleshooting](#troubleshooting)

## 🔄 Development Workflow

### 1. **Branch Strategy**

```bash
# Create feature branch
git checkout -b feat/new-feature

# Create bugfix branch
git checkout -b fix/bug-description

# Create documentation branch
git checkout -b docs/update-readme
```

### 2. **Making Changes**

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Make your changes...

# Run linting
npm run lint

# Build project
npm run build
```

### 3. **Committing Changes**

```bash
# Interactive commit (recommended)
npm run commit

# Or manual commit with conventional format
git commit -m "feat: add new landing page section"
```

## 📝 Commit Message Standards

We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

### **Format**

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

### **Types**

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `perf`: Performance improvements
- `test`: Adding or updating tests
- `build`: Build system or external dependencies
- `ci`: CI/CD changes
- `chore`: Other changes that don't modify src or test files
- `revert`: Reverting previous commits

### **Examples**

```bash
# Feature
feat: add waitlist signup form
feat(api): implement email validation

# Bug fix
fix: resolve mobile responsive issues
fix(ui): correct button alignment on small screens

# Documentation
docs: update API documentation
docs(readme): add installation instructions

# Breaking change
feat!: redesign landing page layout

BREAKING CHANGE: The landing page layout has been completely redesigned.
This affects all existing custom CSS overrides.
```

## 🎨 Code Quality & Formatting

### **Automated Tools**

- **ESLint**: Code linting and error detection
- **Prettier**: Code formatting
- **TypeScript**: Type checking
- **Husky**: Git hooks
- **lint-staged**: Pre-commit formatting

### **Pre-commit Checks**

The following checks run automatically before each commit:

```bash
# JavaScript/TypeScript files
eslint --fix
prettier --write

# JSON/Markdown files
prettier --write
```

### **Manual Commands**

```bash
# Run linting
npm run lint

# Format code
npx prettier --write .

# Type checking
npx tsc --noEmit
```

## 📦 Version Management

### **Semantic Versioning**

We follow [Semantic Versioning](https://semver.org/):

- **MAJOR**: Breaking changes
- **MINOR**: New features (backward compatible)
- **PATCH**: Bug fixes (backward compatible)

### **Automated Versioning**

```bash
# Generate changelog
npm run changelog

# Version bump (automated in CI)
npm run version
```

### **Manual Version Bump**

```bash
# Patch version (1.0.0 → 1.0.1)
npm version patch

# Minor version (1.0.0 → 1.1.0)
npm version minor

# Major version (1.0.0 → 2.0.0)
npm version major
```

## 🔄 CI/CD Pipeline

### **Pull Request Workflow**

1. **Automated Checks**:
   - Code linting
   - Build verification
   - Commit message validation
   - Security audit

2. **Manual Review**:
   - Code review by team members
   - Testing on preview deployment

### **Release Workflow**

1. **Merge to Main**:
   - Automatic version detection
   - Changelog generation
   - Version bump
   - Git tag creation

2. **Deployment**:
   - GitHub release creation
   - Automatic deployment to production

## 🚀 Release Process

### **Automatic Releases**

Releases are triggered automatically when:

- Commits with `feat:` are merged (minor version)
- Commits with `fix:` are merged (patch version)
- Commits with `feat!:` or `BREAKING CHANGE:` are merged (major version)

### **Manual Release**

```bash
# Create release branch
git checkout -b release/v1.2.0

# Update version and changelog
npm run version

# Commit changes
git commit -m "chore(release): v1.2.0"

# Create pull request
# After merge, tag will be created automatically
```

## 🪝 Git Hooks

### **Pre-commit Hook**

- Runs `lint-staged` to format and lint staged files
- Ensures code quality before commit

### **Commit-msg Hook**

- Validates commit message format
- Enforces conventional commit standards

### **Bypassing Hooks** (Emergency Only)

```bash
# Skip pre-commit hook
git commit --no-verify -m "emergency fix"

# Skip commit-msg validation
git commit --no-verify -m "emergency: quick fix"
```

## 🛠️ Troubleshooting

### **Common Issues**

#### **Commit Message Rejected**

```bash
# Error: Commit message doesn't follow conventional format
# Solution: Use interactive commit
npm run commit

# Or fix the message format
git commit -m "feat: add new feature"
```

#### **Pre-commit Hook Fails**

```bash
# Error: ESLint or Prettier errors
# Solution: Fix the issues
npm run lint
npx prettier --write .

# Then commit again
git add .
git commit -m "fix: resolve linting issues"
```

#### **Build Fails in CI**

```bash
# Check build locally
npm run build

# Fix any TypeScript errors
npx tsc --noEmit

# Commit fixes
git commit -m "fix: resolve build errors"
```

#### **Husky Not Working**

```bash
# Reinstall husky
npm run prepare

# Check hook permissions (Unix/Mac)
chmod +x .husky/pre-commit
chmod +x .husky/commit-msg
```

### **Useful Commands**

```bash
# Check commit history
git log --oneline --graph

# View changelog
cat CHANGELOG.md

# Check current version
node -p "require('./package.json').version"

# Validate commit message
echo "feat: new feature" | npx commitlint

# Test hooks manually
npx lint-staged
npx commitlint --edit .git/COMMIT_EDITMSG
```

## 📚 Resources

- [Conventional Commits](https://www.conventionalcommits.org/)
- [Semantic Versioning](https://semver.org/)
- [Keep a Changelog](https://keepachangelog.com/)
- [ESLint Documentation](https://eslint.org/docs/)
- [Prettier Configuration](https://prettier.io/docs/en/configuration.html)
- [Husky Documentation](https://typicode.github.io/husky/)
- [GitHub Actions](https://docs.github.com/en/actions)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Follow the development workflow
4. Submit a pull request
5. Ensure all CI checks pass
6. Request code review

---

**Happy coding! 🚀**
