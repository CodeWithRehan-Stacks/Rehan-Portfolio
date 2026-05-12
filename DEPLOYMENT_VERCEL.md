# Deployment Configuration for Vercel

This portfolio is optimized for Vercel deployment. The configuration is automatic, but here are the key settings:

## Vercel Project Settings

### Environment Variables
None required for basic deployment. Optional:
- `VITE_APP_TITLE`: Page title (defaults to "Muhammad Rehan Portfolio")

### Build Settings
- **Build Command**: `npm run build` (auto-detected)
- **Output Directory**: `dist` (auto-detected)
- **Install Command**: `npm ci` (auto-detected)

### Performance Optimizations
- ✅ Automatic code splitting
- ✅ Image optimization via Vercel CDN
- ✅ Edge caching for static assets
- ✅ HTTP/2 push
- ✅ Automatic HTTPS
- ✅ DDoS protection

## Deployment Steps

### Quick Deploy Button
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import/project?template=https://github.com/yourusername/portfolio)

### Manual Deployment

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy from project root**
   ```bash
   vercel
   ```

4. **Choose options**
   - Scope: Select your personal/team account
   - Project name: `portfolio` (or your choice)
   - Directory: `./` (current)
   - Use defaults for everything else

### Connect GitHub Repository (Recommended)

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click "New Project"
3. Select your GitHub repository
4. Choose "Create a new project"
5. Configure:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
6. Click "Deploy"

Your portfolio will now automatically deploy on every push to the main branch!

## Custom Domain

1. Go to Project Settings → Domains
2. Add your domain
3. Follow DNS configuration instructions
4. Wait for verification (usually instant)

## Environment Variables

In Vercel Dashboard, go to Settings → Environment Variables to add:

```
VITE_APP_TITLE=Muhammad Rehan - Portfolio
VITE_GITHUB_URL=https://github.com/CodeWithRehan-Stacks
VITE_LINKEDIN_URL=https://www.linkedin.com/in/muhammad-rehan-b7110a362/
VITE_EMAIL=contact@rehan.dev
```

## Analytics & Monitoring

Vercel provides:
- **Web Analytics**: Automatic page performance tracking
- **Logs**: Real-time request and build logs
- **Error Tracking**: Automatic error reporting
- **Performance Insights**: CPU, memory, and bandwidth metrics

## Troubleshooting

### Build Fails
- Check logs in Vercel Dashboard → Deployments
- Ensure all dependencies are in package.json
- Run `npm run build` locally to test

### Site Looks Broken
- Clear browser cache
- Verify assets in `dist/` folder
- Check for 404 errors in Network tab

### Slow Performance
- Enable Vercel Analytics
- Check image optimization settings
- Review edge cache configuration

---

For more info: https://vercel.com/docs
