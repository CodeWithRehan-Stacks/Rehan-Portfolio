# 🚀 Quick Start Guide

Get your premium portfolio up and running in minutes!

## What You Have

✅ **Production-Ready Portfolio** with all dependencies installed  
✅ **9 Beautiful Sections** with animations and effects  
✅ **Responsive Design** for all devices  
✅ **3D Graphics** with Three.js  
✅ **Performance Optimized** build system  

---

## Start Development (Right Now!)

The dev server is already running on port 5174:

```
👉 http://localhost:5174/
```

### Start from Terminal

```bash
cd "c:\New folder"
npm run dev
```

Your portfolio will open automatically or navigate to the URL above.

---

## File Organization

```
📁 src/
├── 📄 App.jsx                 ← Main file
├── 📄 main.jsx               ← Entry point
├── 📄 index.css              ← Global styles
├── 📁 components/
│   ├── 📁 Sections/          ← All page sections
│   │   ├── Hero.jsx          ← Hero with 3D orb
│   │   ├── About.jsx         ← About section
│   │   ├── Skills.jsx        ← Skills cards
│   │   ├── Projects.jsx      ← Projects showcase
│   │   ├── GithubIntel.jsx   ← GitHub stats
│   │   ├── Timeline.jsx      ← Career timeline
│   │   ├── Testimonials.jsx  ← Testimonials
│   │   ├── Contact.jsx       ← Contact form
│   │   └── Footer.jsx        ← Footer
│   ├── 📁 3D/                ← Three.js components
│   │   ├── GlowingOrb.jsx    ← 3D glowing sphere
│   │   ├── FloatingParticles.jsx ← 3D particles
│   │   └── Scene3D.jsx       ← 3D scene setup
│   └── 📁 Layout/            ← Layout components
│       ├── SmoothScrollProvider.jsx ← Lenis setup
│       └── DynamicCursor.jsx ← Custom cursor
├── 📁 data/                  ← Content data
│   ├── skills.js
│   ├── projects.js
│   ├── timeline.js
│   └── testimonials.js
├── 📁 hooks/                 ← Custom React hooks
├── 📁 utils/                 ← Utilities
└── 📁 styles/                ← Global styles
```

---

## Quick Edits

### 1. Change Your Name & Info

**Files to update**:
- `src/components/Sections/Hero.jsx` - Line 30 (title)
- `src/components/Sections/Footer.jsx` - Line 100 (name)
- `src/components/Sections/Contact.jsx` - Line 90 (email & links)

### 2. Update Skills

**File**: `src/data/skills.js`

```javascript
{
  id: 1,
  name: 'React',
  category: 'Frontend',
  icon: FaReact,
  proficiency: 95,
  color: '#61dafb',
}
```

### 3. Add Projects

**File**: `src/data/projects.js`

```javascript
{
  id: 1,
  title: 'Project Name',
  description: 'What it does',
  tags: ['React', 'Node.js'],
  github: 'https://github.com/...',
  live: 'https://demo.com',
  color: '#0ea5e9',
}
```

### 4. Update Timeline

**File**: `src/data/timeline.js`

```javascript
{
  id: 1,
  year: '2019',
  title: 'Started Learning',
  description: 'Your description',
  icon: '📚',
}
```

### 5. Change Colors

**File**: `src/utils/constants/colors.js`

```javascript
export const COLORS = {
  primary: '#0ea5e9',      // Change these
  secondary: '#38bdf8',
  accent: '#7dd3fc',
};
```

---

## Build & Deploy

### Build for Production

```bash
npm run build
```

Creates optimized `dist/` folder (~150KB gzipped)

### Deploy to Vercel (Easiest)

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

Takes < 1 minute!

### Other Hosting

- **Netlify**: Drag & drop the `dist/` folder
- **GitHub Pages**: Use `npm run build` + deployment action
- **Self-hosted**: Upload `dist/` to your server

See [DEPLOYMENT_VERCEL.md](DEPLOYMENT_VERCEL.md) for detailed instructions.

---

## Features Checklist

- ✅ Smooth cinematic scrolling (Lenis)
- ✅ Animated 3D orb (Three.js)
- ✅ Premium skill cards with hover effects
- ✅ Project showcase with links
- ✅ GitHub integration
- ✅ Career timeline
- ✅ Contact form
- ✅ Custom cursor
- ✅ Scroll progress indicator
- ✅ Responsive mobile design

---

## Development Commands

```bash
# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Check for errors
npm run lint

# Install new package
npm install package-name
```

---

## Browser Preview

Once running, open:

```
http://localhost:5174/
```

Scroll through and see all the animations! ✨

---

## Next Steps

1. ✅ **View the site** - Open `http://localhost:5174/`
2. 📝 **Edit content** - Update the data files
3. 🎨 **Customize colors** - Modify color constants
4. 🚀 **Deploy** - Push to Vercel/Netlify
5. 🔗 **Share** - Get your live URL

---

## Getting Help

- **Stuck?** Check [FEATURES_GUIDE.md](FEATURES_GUIDE.md)
- **Deploy help?** See [DEPLOYMENT_VERCEL.md](DEPLOYMENT_VERCEL.md)
- **Full guide?** Read [PORTFOLIO_GUIDE.md](PORTFOLIO_GUIDE.md)

---

## What's Running?

Your portfolio is now running with:

- ⚡ **Vite** - Lightning fast dev server
- 🎨 **Tailwind CSS v4** - Utility-first styling
- ✨ **Framer Motion** - Smooth animations
- 🎬 **GSAP** - Advanced scroll effects
- 🌐 **Three.js** - 3D graphics
- 🏃 **Lenis** - Smooth scrolling
- 📱 **Responsive** - Mobile-first design

---

## Performance Tips

- Clear browser cache if styles don't update
- Disable browser extensions if animations lag
- Use Chrome for best performance
- Test on mobile device for responsive design

---

## Need to Stop Dev Server?

In terminal: Press `Ctrl + C`

To restart:
```bash
npm run dev
```

---

**That's it! You have a production-ready, luxury portfolio website.** 🌟

Next step: Customize it with your information and deploy! 🚀

---

*Built with React + Tailwind + Framer Motion + GSAP + Three.js*
