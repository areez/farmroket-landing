# Components Documentation

## 📋 Overview

This document provides detailed information about all components used in the FarmRoket landing page. Each component is designed to be modular, reusable, and accessible.

## 🏗️ Component Architecture

### Design Principles

- **Single Responsibility**: Each component has one clear purpose
- **Reusability**: Components can be used across different sections
- **Accessibility**: WCAG 2.1 AA compliance
- **Responsive**: Mobile-first design approach
- **Type Safety**: Full TypeScript integration

### Component Categories

1. **Section Components**: Main landing page sections
2. **UI Components**: Reusable interface elements
3. **Layout Components**: Structural components

## 📱 Section Components

### Hero Component

**File**: `src/app/(sections)/Hero.tsx`

**Purpose**: Primary landing section with value proposition and main CTA

**Features**:

- Gradient background with brand colors
- Compelling headline and subhead
- Primary call-to-action button
- Key statistics display
- Responsive design for all screen sizes

**Props**: None (self-contained)

**Styling**:

- Uses TailwindCSS utility classes
- DaisyUI button components
- Custom gradient backgrounds
- Responsive typography scaling

**Code Structure**:

```typescript
export default function Hero() {
  return (
    <section className="hero min-h-screen bg-gradient-to-br from-emerald-50 to-emerald-100">
      {/* Hero content */}
    </section>
  );
}
```

**Accessibility Features**:

- Semantic HTML structure
- Proper heading hierarchy
- Alt text for images
- Focus management

---

### ProblemSolution Component

**File**: `src/app/(sections)/ProblemSolution.tsx`

**Purpose**: Presents the problem and FarmRoket's solution

**Features**:

- Two-card layout design
- Problem identification section
- Solution presentation section
- Visual icons and structured content
- Responsive grid layout

**Props**: None (self-contained)

**Styling**:

- Card-based layout using DaisyUI
- Icon integration
- Consistent spacing and typography
- Hover effects for interactivity

**Code Structure**:

```typescript
export default function ProblemSolution() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Problem and Solution cards */}
      </div>
    </section>
  );
}
```

---

### HowItWorks Component

**File**: `src/app/(sections)/HowItWorks.tsx`

**Purpose**: Explains the 3-step process of FarmRoket

**Features**:

- Timeline visualization
- Step-by-step process explanation
- Visual flow indicators
- Process steps: Record → Store → Verify
- Interactive design elements

**Props**: None (self-contained)

**Styling**:

- Timeline layout with connecting lines
- Step indicators with numbers
- Color-coded sections
- Responsive stacking on mobile

**Code Structure**:

```typescript
export default function HowItWorks() {
  const steps = [
    { title: "Farmer Records", description: "..." },
    { title: "Blockchain Storage", description: "..." },
    { title: "QR Code Verification", description: "..." }
  ];

  return (
    <section className="py-20 bg-emerald-50">
      {/* Timeline steps */}
    </section>
  );
}
```

---

### Features Component

**File**: `src/app/(sections)/Features.tsx`

**Purpose**: Showcases key platform capabilities

**Features**:

- 4-card grid layout
- Feature categories: Security, Tracking, Analytics, Mobile
- Detailed benefits for each feature
- Icon-based visual hierarchy
- Call-to-action section

**Props**: None (self-contained)

**Styling**:

- Grid layout with responsive columns
- Card hover effects
- Icon and text alignment
- Consistent spacing patterns

**Code Structure**:

```typescript
export default function Features() {
  const features = [
    {
      icon: "🔒",
      title: "Blockchain Security",
      description: "...",
      benefits: ["...", "...", "..."]
    },
    // ... more features
  ];

  return (
    <section className="py-20 bg-white">
      {/* Features grid */}
    </section>
  );
}
```

---

### Benefits Component

**File**: `src/app/(sections)/Benefits.tsx`

**Purpose**: Presents user-specific value propositions

**Features**:

- User type categorization
- Targeted benefits for each user group
- Color-coded sections
- User types: Producers, Traders, Regulators, Consumers
- Visual hierarchy with icons

**Props**: None (self-contained)

**Styling**:

- Color-coded cards for different user types
- Consistent icon usage
- Responsive grid layout
- Hover interactions

**Code Structure**:

```typescript
export default function Benefits() {
  const userTypes = [
    {
      type: "Producers",
      color: "emerald",
      benefits: ["...", "...", "..."]
    },
    // ... more user types
  ];

  return (
    <section className="py-20 bg-emerald-50">
      {/* Benefits grid */}
    </section>
  );
}
```

---

### UseCasesAbout Component

**File**: `src/app/(sections)/UseCasesAbout.tsx`

**Purpose**: Regulatory use cases and company information

**Features**:

- Regulatory compliance scenarios
- Founder profiles and expertise
- Company mission and vision
- Industry credibility building
- Two-section layout

**Props**: None (self-contained)

**Styling**:

- Split-section layout
- Profile cards for founders
- Regulatory use case cards
- Professional styling

**Code Structure**:

```typescript
export default function UseCasesAbout() {
  const useCases = [/* regulatory scenarios */];
  const founders = [/* founder profiles */];

  return (
    <section className="py-20 bg-white">
      {/* Use cases and about sections */}
    </section>
  );
}
```

---

### WaitlistFooter Component

**File**: `src/app/(sections)/WaitlistFooter.tsx`

**Purpose**: Lead capture and footer information

**Features**:

- Interactive waitlist signup form
- Form validation and state management
- Success/error message handling
- Complete footer with company information
- Social media links

**Props**: None (self-contained)

**State Management**:

```typescript
const [email, setEmail] = useState('');
const [isSubmitting, setIsSubmitting] = useState(false);
const [message, setMessage] = useState('');
```

**Form Handling**:

```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  // Form submission logic
};
```

**Styling**:

- Form styling with DaisyUI
- Footer layout with multiple columns
- Responsive design
- Loading states and feedback

## 🎨 UI Components

### Button Components

**Usage**: Throughout the application for CTAs

**Variants**:

- Primary buttons (emerald theme)
- Secondary buttons
- Outline buttons
- Loading states

**Example**:

```typescript
<button className="btn btn-primary btn-lg">
  Join Waitlist
</button>
```

### Card Components

**Usage**: Feature cards, benefit cards, profile cards

**Variants**:

- Basic cards
- Hover effect cards
- Color-themed cards
- Image cards

**Example**:

```typescript
<div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow">
  <div className="card-body">
    {/* Card content */}
  </div>
</div>
```

### Form Components

**Usage**: Waitlist form, contact forms

**Features**:

- Input validation
- Error handling
- Loading states
- Accessibility features

**Example**:

```typescript
<input
  type="email"
  className="input input-bordered w-full"
  placeholder="Enter your email"
  required
/>
```

## 🎯 Component Guidelines

### Development Standards

1. **TypeScript**: All components must use TypeScript
2. **Props Interface**: Define clear prop interfaces
3. **Default Props**: Provide sensible defaults
4. **Error Boundaries**: Handle errors gracefully
5. **Performance**: Use React.memo when appropriate

### Styling Guidelines

1. **TailwindCSS**: Use utility classes for styling
2. **DaisyUI**: Leverage component classes
3. **Responsive**: Mobile-first approach
4. **Consistency**: Follow design system
5. **Accessibility**: Include ARIA attributes

### Code Organization

```typescript
// Component imports
import React from 'react';

// Type definitions
interface ComponentProps {
  // prop definitions
}

// Component implementation
export default function ComponentName({ props }: ComponentProps) {
  // State and effects

  // Event handlers

  // Render
  return (
    <section className="...">
      {/* Component JSX */}
    </section>
  );
}
```

## 🔧 Customization

### Theme Customization

Modify `tailwind.config.js` to customize the theme:

```javascript
daisyui: {
  themes: [
    {
      emerald: {
        primary: '#10b981',
        secondary: '#f000b8',
        accent: '#1dcdbc',
        // ... more colors
      },
    },
  ];
}
```

### Component Variants

Create component variants using props:

```typescript
interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export function Button({ variant = 'primary', size = 'md', children }: ButtonProps) {
  const baseClasses = 'btn';
  const variantClasses = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    outline: 'btn-outline'
  };
  const sizeClasses = {
    sm: 'btn-sm',
    md: '',
    lg: 'btn-lg'
  };

  return (
    <button className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]}`}>
      {children}
    </button>
  );
}
```

## 🧪 Testing Components

### Manual Testing Checklist

- [ ] Component renders without errors
- [ ] Responsive design works on all screen sizes
- [ ] Interactive elements function correctly
- [ ] Accessibility features work (keyboard navigation, screen readers)
- [ ] Loading states display properly
- [ ] Error states handle gracefully

### Browser Testing

- Test on Chrome, Firefox, Safari, Edge
- Test on mobile devices (iOS, Android)
- Verify touch interactions work properly
- Check performance on slower devices

## 📚 Resources

- [TailwindCSS Documentation](https://tailwindcss.com/docs)
- [DaisyUI Components](https://daisyui.com/components/)
- [React Documentation](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Web Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

---

_For component-specific questions or issues, refer to the individual component files or create an issue in the repository._
