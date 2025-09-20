# Technical Design Plan - Supplier-Focused Landing Page

## Architecture Overview

### Technology Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS + DaisyUI components
- **Language**: TypeScript for type safety
- **State Management**: React hooks (useState, useEffect)
- **Form Handling**: React Hook Form with validation
- **Animations**: Framer Motion (if needed)
- **Icons**: Heroicons or Lucide React

### Project Structure

```
src/
├── app/
│   ├── (sections)/
│   │   ├── Hero.tsx
│   │   ├── SupplierDashboardPreview.tsx
│   │   ├── KeyFeatures.tsx
│   │   ├── BenefitsGrid.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── WhySuppliersNeedThis.tsx
│   │   ├── PilotPartnerCTA.tsx
│   │   ├── Founders.tsx
│   │   ├── WaitlistForm.tsx
│   │   └── Footer.tsx
│   ├── components/
│   │   ├── ui/
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Carousel.tsx
│   │   │   └── Form.tsx
│   │   ├── mockups/
│   │   │   ├── DashboardMockup.tsx
│   │   │   ├── MobileMockup.tsx
│   │   │   └── ScreenshotPlaceholder.tsx
│   │   └── icons/
│   │       └── index.tsx
│   ├── types/
│   │   └── index.ts
│   ├── utils/
│   │   └── constants.ts
│   └── page.tsx
```

## Component Design Specifications

### 1. Hero Section Component

```typescript
interface HeroProps {
  headline: string;
  subheadline: string;
  primaryCTA: {
    text: string;
    action: () => void;
  };
  secondaryCTA: {
    text: string;
    action: () => void;
  };
}
```

**DaisyUI Components Used:**

- `hero` class for main container
- `btn btn-primary` and `btn btn-secondary` for CTAs
- `mockup-window` for dashboard preview
- `mockup-phone` for mobile app preview

### 2. Supplier Dashboard Preview Component

```typescript
interface DashboardPreviewProps {
  screenshots: {
    id: string;
    title: string;
    description: string;
    imagePlaceholder: string;
  }[];
}
```

**DaisyUI Components Used:**

- `carousel carousel-center` for main container
- `carousel-item` for each screenshot
- `card` for screenshot containers
- `badge` for feature labels

### 3. Key Features Grid Component

```typescript
interface Feature {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  highlighted?: boolean;
}

interface KeyFeaturesProps {
  features: Feature[];
}
```

**DaisyUI Components Used:**

- `grid grid-cols-1 md:grid-cols-2` for 2x2 layout
- `card card-compact` for feature cards
- `card-body` for content
- `badge badge-primary` for highlights

### 4. Benefits Grid Component

```typescript
interface Stakeholder {
  id: string;
  name: string;
  role: 'primary' | 'supporting';
  benefits: string[];
  icon: React.ReactNode;
  color: string;
}

interface BenefitsGridProps {
  stakeholders: Stakeholder[];
}
```

**DaisyUI Components Used:**

- `stats` or `grid` for layout
- `stat` or `card` for each stakeholder
- `stat-title` and `stat-value` for content
- `badge` for role indicators

### 5. How It Works Component

```typescript
interface Step {
  id: string;
  title: string;
  description: string;
  imagePlaceholder: string;
  stepNumber: number;
}

interface HowItWorksProps {
  steps: Step[];
}
```

**DaisyUI Components Used:**

- `steps steps-horizontal` for main container
- `step step-primary` for each step
- `card` for step details
- `mockup-window` for image placeholders

### 6. Pilot Partner CTA Component

```typescript
interface PilotCTAProps {
  title: string;
  description: string;
  ctaText: string;
  backgroundImage: string;
  onCTAClick: () => void;
}
```

**DaisyUI Components Used:**

- `hero` with background image
- `hero-overlay` for dark overlay
- `hero-content` for text and CTA
- `btn btn-primary btn-lg` for CTA button

### 7. Waitlist Form Component

```typescript
interface FormData {
  name: string;
  email: string;
  organization: string;
  role?: string;
}

interface WaitlistFormProps {
  onSubmit: (data: FormData) => Promise<void>;
  isLoading?: boolean;
}
```

**DaisyUI Components Used:**

- `form-control` for input containers
- `label` and `label-text` for labels
- `input input-bordered` for text inputs
- `select select-bordered` for dropdowns
- `btn btn-primary` for submit button
- `toast` for success/error messages

## Data Flow Architecture

### 1. Static Data Management

```typescript
// utils/constants.ts
export const FEATURES_DATA: Feature[] = [
  {
    id: 'traceability',
    title: 'Traceability Dashboard',
    description: 'Real-time supply chain visibility',
    icon: <TraceabilityIcon />,
  },
  // ... other features
];

export const STAKEHOLDERS_DATA: Stakeholder[] = [
  {
    id: 'suppliers',
    name: 'Suppliers',
    role: 'primary',
    benefits: ['Stay compliant', 'Build trust', 'Reduce fraud'],
    icon: <SuppliersIcon />,
    color: 'primary',
  },
  // ... other stakeholders
];
```

### 2. Form State Management

```typescript
// Using React Hook Form
const {
  register,
  handleSubmit,
  formState: { errors, isSubmitting },
  reset,
} = useForm<FormData>();

const onSubmit = async (data: FormData) => {
  try {
    // API call to submit waitlist data
    await submitWaitlistForm(data);
    // Show success toast
    showToast("Success! You've been added to our waitlist.", 'success');
    reset();
  } catch (error) {
    showToast('Error submitting form. Please try again.', 'error');
  }
};
```

### 3. Component Communication

```typescript
// Parent component (page.tsx)
const [activeSection, setActiveSection] = useState<string>('');
const [formSubmissions, setFormSubmissions] = useState<number>(0);

// Scroll tracking for navigation
useEffect(() => {
  const handleScroll = () => {
    // Update active section based on scroll position
  };
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);
```

## Responsive Design Strategy

### Breakpoint System (Tailwind/DaisyUI)

- **Mobile**: `< 768px` - Single column, stacked layout
- **Tablet**: `768px - 1024px` - 2-column grids, adjusted spacing
- **Desktop**: `> 1024px` - Full grid layouts, optimal spacing

### Component Responsiveness

```typescript
// Example responsive classes
const responsiveClasses = {
  hero: 'hero min-h-screen',
  grid: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
  card: 'card w-full md:w-96',
  carousel: 'carousel w-full max-w-md md:max-w-4xl',
};
```

## Performance Optimization

### 1. Image Optimization

```typescript
// Use Next.js Image component for mockups
import Image from 'next/image';

// Placeholder images with proper sizing
const DashboardMockup = () => (
  <div className="mockup-window border bg-base-300">
    <div className="flex justify-center px-4 py-16 bg-base-200">
      <Image
        src="/placeholder-dashboard.svg"
        alt="Supplier Dashboard"
        width={800}
        height={600}
        priority
        className="rounded-lg"
      />
    </div>
  </div>
);
```

### 2. Code Splitting

```typescript
// Lazy load non-critical components
const PilotPartnerCTA = lazy(() => import('./PilotPartnerCTA'));
const Founders = lazy(() => import('./Founders'));

// Use Suspense for loading states
<Suspense fallback={<div className="loading loading-spinner"></div>}>
  <PilotPartnerCTA />
</Suspense>
```

### 3. Bundle Optimization

- Tree-shake unused DaisyUI components
- Optimize Tailwind CSS with purge configuration
- Use dynamic imports for heavy components

## Accessibility Implementation

### 1. Semantic HTML

```typescript
// Use proper heading hierarchy
<main>
  <section aria-labelledby="hero-heading">
    <h1 id="hero-heading">Compliance-ready food suppliers</h1>
  </section>
  <section aria-labelledby="features-heading">
    <h2 id="features-heading">Key Features</h2>
  </section>
</main>
```

### 2. ARIA Labels

```typescript
// Carousel with proper ARIA
<div
  className="carousel"
  role="region"
  aria-label="Supplier dashboard screenshots"
>
  {screenshots.map((screenshot, index) => (
    <div
      key={screenshot.id}
      className="carousel-item"
      role="group"
      aria-label={`Screenshot ${index + 1} of ${screenshots.length}`}
    >
      {/* Content */}
    </div>
  ))}
</div>
```

### 3. Keyboard Navigation

```typescript
// Focus management for interactive elements
const handleKeyDown = (event: KeyboardEvent) => {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault();
    handleCTAClick();
  }
};
```

## Testing Strategy Integration

### 1. Component Testing

```typescript
// Example test structure
describe('Hero Component', () => {
  it('renders headline and subheadline correctly', () => {
    // Test implementation
  });

  it('calls CTA handlers when buttons are clicked', () => {
    // Test implementation
  });

  it('displays mockups on desktop view', () => {
    // Test implementation
  });
});
```

### 2. Integration Points

- Form submission validation
- Responsive behavior testing
- Accessibility compliance
- Performance benchmarks

## Deployment Considerations

### 1. Environment Configuration

```typescript
// Environment variables
const config = {
  apiUrl: process.env.NEXT_PUBLIC_API_URL,
  analyticsId: process.env.NEXT_PUBLIC_ANALYTICS_ID,
  isDevelopment: process.env.NODE_ENV === 'development',
};
```

### 2. Build Optimization

- Static generation for landing page
- Image optimization pipeline
- CSS purging and minification
- Bundle analysis and optimization

## Implementation Timeline

### Phase 1: Foundation (Days 1-2)

- Set up component structure
- Implement Hero and basic layout
- Create mockup placeholders

### Phase 2: Core Features (Days 3-4)

- Build dashboard preview carousel
- Implement features grid
- Create benefits section

### Phase 3: Completion (Days 5-6)

- Add remaining sections
- Implement form handling
- Responsive optimization
- Testing and validation

### Phase 4: Polish (Day 7)

- Performance optimization
- Accessibility audit
- Final testing
- Deployment preparation
