# Deployment Guide

## 📋 Overview

This guide covers deployment options and best practices for the FarmRoket landing page. The application is built with Next.js 15 and can be deployed to various platforms with different configurations.

## 🚀 Quick Deployment

### Vercel (Recommended)

**Why Vercel?**

- Native Next.js support
- Automatic deployments from Git
- Built-in CDN and edge functions
- Zero configuration required
- Free tier available

**Steps:**

1. **Connect Repository**

   ```bash
   # Push your code to GitHub/GitLab/Bitbucket
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Deploy to Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Sign up/login with your Git provider
   - Click "New Project"
   - Import your repository
   - Configure project settings (optional)
   - Click "Deploy"

3. **Environment Variables**

   ```bash
   # In Vercel dashboard, add these environment variables:
   NODE_ENV=production
   NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
   ```

4. **Custom Domain (Optional)**
   - Go to Project Settings → Domains
   - Add your custom domain
   - Configure DNS records as instructed

**Vercel CLI Deployment:**

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Deploy to production
vercel --prod
```

---

### Netlify

**Steps:**

1. **Build Configuration**

   Create `netlify.toml`:

   ```toml
   [build]
     command = "npm run build"
     publish = "out"

   [build.environment]
     NODE_VERSION = "18"

   [[redirects]]
     from = "/*"
     to = "/index.html"
     status = 200
   ```

2. **Update Next.js Config**

   Modify `next.config.ts`:

   ```typescript
   const nextConfig = {
     output: 'export',
     trailingSlash: true,
     images: {
       unoptimized: true,
     },
   };

   export default nextConfig;
   ```

3. **Deploy**
   - Connect repository to Netlify
   - Set build command: `npm run build`
   - Set publish directory: `out`
   - Deploy

---

### GitHub Pages

**Setup:**

1. **Install gh-pages**

   ```bash
   npm install --save-dev gh-pages
   ```

2. **Update package.json**

   ```json
   {
     "scripts": {
       "deploy": "gh-pages -d out",
       "export": "next build && next export"
     }
   }
   ```

3. **Configure Next.js**

   ```typescript
   // next.config.ts
   const nextConfig = {
     output: 'export',
     basePath: '/farmroket-landing',
     assetPrefix: '/farmroket-landing/',
     images: {
       unoptimized: true,
     },
   };
   ```

4. **Deploy**
   ```bash
   npm run export
   npm run deploy
   ```

---

## 🐳 Docker Deployment

### Dockerfile

```dockerfile
# Build stage
FROM node:18-alpine AS builder

WORKDIR /app

# Copy package files
COPY package*.json ./
RUN npm ci --only=production

# Copy source code
COPY . .

# Build application
RUN npm run build

# Production stage
FROM node:18-alpine AS runner

WORKDIR /app

# Create non-root user
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copy built application
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

# Set permissions
USER nextjs

EXPOSE 3000

ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

CMD ["node", "server.js"]
```

### Docker Compose

```yaml
# docker-compose.yml
version: '3.8'

services:
  farmroket-landing:
    build: .
    ports:
      - '3000:3000'
    environment:
      - NODE_ENV=production
      - NEXT_PUBLIC_SITE_URL=https://your-domain.com
    restart: unless-stopped
    volumes:
      - ./data:/app/data
    networks:
      - farmroket-network

  nginx:
    image: nginx:alpine
    ports:
      - '80:80'
      - '443:443'
    volumes:
      - ./nginx.conf:/etc/nginx/nginx.conf
      - ./ssl:/etc/nginx/ssl
    depends_on:
      - farmroket-landing
    networks:
      - farmroket-network

networks:
  farmroket-network:
    driver: bridge

volumes:
  data:
```

### Build and Run

```bash
# Build image
docker build -t farmroket-landing .

# Run container
docker run -p 3000:3000 farmroket-landing

# Using Docker Compose
docker-compose up -d
```

---

## ☁️ Cloud Platform Deployment

### AWS (Amazon Web Services)

**Option 1: AWS Amplify**

1. **Install Amplify CLI**

   ```bash
   npm install -g @aws-amplify/cli
   amplify configure
   ```

2. **Initialize Project**
   ```bash
   amplify init
   amplify add hosting
   amplify publish
   ```

**Option 2: AWS EC2 + Docker**

1. **Launch EC2 Instance**
   - Choose Ubuntu 20.04 LTS
   - Configure security groups (ports 80, 443, 22)
   - Launch instance

2. **Setup Server**

   ```bash
   # Connect to instance
   ssh -i your-key.pem ubuntu@your-ec2-ip

   # Install Docker
   sudo apt update
   sudo apt install docker.io docker-compose
   sudo usermod -aG docker ubuntu

   # Clone repository
   git clone https://github.com/your-username/farmroket-landing.git
   cd farmroket-landing

   # Deploy
   docker-compose up -d
   ```

**Option 3: AWS ECS (Elastic Container Service)**

1. **Create ECS Cluster**
2. **Build and push Docker image to ECR**
3. **Create task definition**
4. **Deploy service**

### Google Cloud Platform

**Cloud Run Deployment:**

1. **Build and Push Image**

   ```bash
   # Build for Cloud Run
   gcloud builds submit --tag gcr.io/PROJECT-ID/farmroket-landing
   ```

2. **Deploy to Cloud Run**
   ```bash
   gcloud run deploy farmroket-landing \
     --image gcr.io/PROJECT-ID/farmroket-landing \
     --platform managed \
     --region us-central1 \
     --allow-unauthenticated
   ```

### Microsoft Azure

**Azure Container Instances:**

```bash
# Create resource group
az group create --name farmroket-rg --location eastus

# Deploy container
az container create \
  --resource-group farmroket-rg \
  --name farmroket-landing \
  --image your-registry/farmroket-landing \
  --dns-name-label farmroket-landing \
  --ports 3000
```

---

## 🔧 Production Configuration

### Environment Variables

```bash
# .env.production
NODE_ENV=production
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NEXT_PUBLIC_ANALYTICS_ID=your-analytics-id
NEXT_PUBLIC_GTM_ID=your-gtm-id

# Security
NEXT_PUBLIC_CSP_NONCE=your-csp-nonce

# API Configuration
API_RATE_LIMIT=100
API_RATE_WINDOW=900000

# Database (if using)
DATABASE_URL=postgresql://user:password@host:port/database
REDIS_URL=redis://user:password@host:port
```

### Next.js Production Config

```typescript
// next.config.ts
const nextConfig = {
  // Production optimizations
  compress: true,
  poweredByHeader: false,
  generateEtags: false,

  // Security headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Content-Security-Policy',
            value:
              "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:;",
          },
        ],
      },
    ];
  },

  // Image optimization
  images: {
    domains: ['your-cdn-domain.com'],
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 60,
  },

  // Experimental features
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['lucide-react'],
  },
};

export default nextConfig;
```

### Nginx Configuration

```nginx
# nginx.conf
server {
    listen 80;
    server_name your-domain.com www.your-domain.com;
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    server_name your-domain.com www.your-domain.com;

    # SSL Configuration
    ssl_certificate /etc/nginx/ssl/cert.pem;
    ssl_certificate_key /etc/nginx/ssl/key.pem;
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers ECDHE-RSA-AES256-GCM-SHA512:DHE-RSA-AES256-GCM-SHA512;
    ssl_prefer_server_ciphers off;

    # Security Headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header Referrer-Policy "strict-origin-when-cross-origin" always;

    # Gzip Compression
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_types text/plain text/css text/xml text/javascript application/javascript application/xml+rss application/json;

    # Proxy to Next.js
    location / {
        proxy_pass http://farmroket-landing:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }

    # Static assets caching
    location /_next/static/ {
        proxy_pass http://farmroket-landing:3000;
        add_header Cache-Control "public, max-age=31536000, immutable";
    }

    # API routes
    location /api/ {
        proxy_pass http://farmroket-landing:3000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

---

## 📊 Monitoring & Analytics

### Performance Monitoring

**Vercel Analytics:**

```bash
npm install @vercel/analytics
```

```typescript
// app/layout.tsx
import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
```

**Google Analytics 4:**

```typescript
// lib/gtag.ts
export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID;

export const pageview = (url: string) => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  });
};

export const event = ({ action, category, label, value }) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};
```

### Error Tracking

**Sentry Integration:**

```bash
npm install @sentry/nextjs
```

```javascript
// sentry.client.config.js
import * as Sentry from '@sentry/nextjs';

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  tracesSampleRate: 1.0,
});
```

### Uptime Monitoring

**Options:**

- UptimeRobot (free tier available)
- Pingdom
- StatusCake
- AWS CloudWatch
- Google Cloud Monitoring

**Basic Health Check Endpoint:**

```typescript
// app/api/health/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    version: process.env.npm_package_version || '1.0.0',
  });
}
```

---

## 🔒 Security Best Practices

### SSL/TLS Configuration

**Let's Encrypt (Free SSL):**

```bash
# Install Certbot
sudo apt install certbot python3-certbot-nginx

# Obtain certificate
sudo certbot --nginx -d your-domain.com -d www.your-domain.com

# Auto-renewal
sudo crontab -e
# Add: 0 12 * * * /usr/bin/certbot renew --quiet
```

### Security Headers

```typescript
// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  // Security headers
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  response.headers.set(
    'Permissions-Policy',
    'camera=(), microphone=(), geolocation=()'
  );

  return response;
}

export const config = {
  matcher: '/((?!api|_next/static|_next/image|favicon.ico).*)',
};
```

### Rate Limiting

```typescript
// lib/rate-limit.ts
import { NextRequest } from 'next/server';

const rateLimit = new Map();

export function rateLimiter(request: NextRequest) {
  const ip = request.ip || 'anonymous';
  const now = Date.now();
  const windowMs = 15 * 60 * 1000; // 15 minutes
  const maxRequests = 100;

  if (!rateLimit.has(ip)) {
    rateLimit.set(ip, { count: 1, resetTime: now + windowMs });
    return { success: true };
  }

  const record = rateLimit.get(ip);

  if (now > record.resetTime) {
    record.count = 1;
    record.resetTime = now + windowMs;
    return { success: true };
  }

  if (record.count >= maxRequests) {
    return {
      success: false,
      error: 'Too many requests',
      retryAfter: Math.ceil((record.resetTime - now) / 1000),
    };
  }

  record.count++;
  return { success: true };
}
```

---

## 🚨 Troubleshooting

### Common Issues

**Build Failures:**

```bash
# Clear Next.js cache
rm -rf .next
npm run build

# Clear npm cache
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

**Memory Issues:**

```bash
# Increase Node.js memory limit
NODE_OPTIONS="--max-old-space-size=4096" npm run build
```

**Static Export Issues:**

```typescript
// next.config.ts - for static hosting
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};
```

### Performance Issues

**Bundle Analysis:**

```bash
npm install --save-dev @next/bundle-analyzer
```

```typescript
// next.config.ts
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer(nextConfig);
```

```bash
ANALYZE=true npm run build
```

### Debugging

**Enable Debug Mode:**

```bash
DEBUG=* npm run dev
```

**Server Logs:**

```bash
# Docker logs
docker logs farmroket-landing

# PM2 logs
pm2 logs farmroket-landing

# Systemd logs
sudo journalctl -u farmroket-landing
```

---

## 📈 Scaling Considerations

### Horizontal Scaling

**Load Balancer Configuration:**

```nginx
upstream farmroket_backend {
    server farmroket-1:3000;
    server farmroket-2:3000;
    server farmroket-3:3000;
}

server {
    location / {
        proxy_pass http://farmroket_backend;
    }
}
```

**Docker Swarm:**

```yaml
# docker-compose.prod.yml
version: '3.8'

services:
  farmroket-landing:
    image: farmroket-landing:latest
    deploy:
      replicas: 3
      update_config:
        parallelism: 1
        delay: 10s
      restart_policy:
        condition: on-failure
    networks:
      - farmroket-network
```

### Database Scaling

**Migration to PostgreSQL:**

```sql
-- Create database
CREATE DATABASE farmroket_production;

-- Create tables
CREATE TABLE waitlist_entries (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email VARCHAR(255) UNIQUE NOT NULL,
  name VARCHAR(255),
  company VARCHAR(255),
  role VARCHAR(100),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Indexes
CREATE INDEX idx_waitlist_email ON waitlist_entries(email);
CREATE INDEX idx_waitlist_created_at ON waitlist_entries(created_at);
```

### CDN Integration

**Cloudflare Setup:**

1. Add domain to Cloudflare
2. Update DNS records
3. Enable caching rules
4. Configure security settings

**AWS CloudFront:**

```json
{
  "DistributionConfig": {
    "CallerReference": "farmroket-landing",
    "Origins": {
      "Quantity": 1,
      "Items": [
        {
          "Id": "farmroket-origin",
          "DomainName": "your-domain.com",
          "CustomOriginConfig": {
            "HTTPPort": 80,
            "HTTPSPort": 443,
            "OriginProtocolPolicy": "https-only"
          }
        }
      ]
    },
    "DefaultCacheBehavior": {
      "TargetOriginId": "farmroket-origin",
      "ViewerProtocolPolicy": "redirect-to-https",
      "CachePolicyId": "managed-caching-optimized"
    },
    "Enabled": true
  }
}
```

---

## 📚 Resources

### Documentation

- [Next.js Deployment](https://nextjs.org/docs/deployment)
- [Vercel Documentation](https://vercel.com/docs)
- [Docker Best Practices](https://docs.docker.com/develop/dev-best-practices/)
- [Nginx Configuration](https://nginx.org/en/docs/)

### Tools

- [Lighthouse](https://developers.google.com/web/tools/lighthouse) - Performance auditing
- [WebPageTest](https://www.webpagetest.org/) - Performance testing
- [SSL Labs](https://www.ssllabs.com/ssltest/) - SSL configuration testing
- [Security Headers](https://securityheaders.com/) - Security header analysis

### Monitoring Services

- [Vercel Analytics](https://vercel.com/analytics)
- [Google Analytics](https://analytics.google.com/)
- [Sentry](https://sentry.io/) - Error tracking
- [LogRocket](https://logrocket.com/) - Session replay
- [New Relic](https://newrelic.com/) - Application monitoring

---

_For deployment-related questions or issues, refer to the platform-specific documentation or create an issue in the repository._
