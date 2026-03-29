# Vercel Deployment Guide

## Quick Deployment Steps

### 1. **Prepare Your Repository**
```bash
git add .
git commit -m "Production ready portfolio with security headers"
git push origin main
```

### 2. **Deploy to Vercel**

**Option A: Using Vercel CLI**
```bash
npm install -g vercel
vercel
```

**Option B: Using Vercel Dashboard**
- Go to https://vercel.com/new
- Import your GitHub repository
- Vercel will auto-detect Next.js configuration
- Click "Deploy"

### 3. **Configure Environment Variables (if needed)**
In Vercel Dashboard → Settings → Environment Variables:
```
NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
```

## Security Features Enabled ✅

- ✅ **Content Security Policy (CSP)** - Prevents XSS attacks
- ✅ **HSTS** - Forces HTTPS connections
- ✅ **X-Frame-Options** - Prevents clickjacking
- ✅ **X-XSS-Protection** - Browser XSS protection
- ✅ **Referrer Policy** - Controls referrer information
- ✅ **Permissions Policy** - Restricts browser features
- ✅ **Server-side Security Middleware** - Additional protection layer
- ✅ **Hidden Headers** - Doesn't reveal Next.js version

## Performance Optimizations

- Next.js 16.2.1 (Latest)
- React 19 (Latest)
- Automatic code splitting
- Image optimization
- CSS-in-JS with Tailwind

## Custom Domain Setup

1. In Vercel Dashboard, go to your project
2. Settings → Domains
3. Add your custom domain
4. Update DNS records (Vercel will provide instructions)

## Monitoring & Analytics

- Access real-time logs: `vercel logs [project-name]`
- View analytics in Vercel Dashboard
- Monitor performance metrics

## Post-Deployment Checklist

- [ ] Test all links and navigation
- [ ] Verify email links work (mailto:)
- [ ] Check video/media loading
- [ ] Test on mobile devices
- [ ] Verify SEO metadata
- [ ] Check Core Web Vitals in Google Search Console
- [ ] Monitor security headers with Security Headers website

## Rollback (if needed)
```bash
vercel rollback
```

## Need Help?
- Vercel Docs: https://vercel.com/docs
- Next.js Docs: https://nextjs.org/docs
