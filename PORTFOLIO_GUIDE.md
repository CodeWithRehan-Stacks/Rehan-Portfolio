# 🌟 Muhammad Rehan - Premium Apple-Style Portfolio

An ultra-premium, cinematic portfolio website built with React + Tailwind CSS + Framer Motion + GSAP + Three.js. This portfolio feels like an Apple keynote experience—emotional, immersive, elegant, and minimal.

## ✨ Features

### Design Philosophy
- **Apple-style storytelling** with massive typography
- **Cinematic smooth scrolling** using Lenis
- **Minimal UI** with maximum impact
- **High-end motion design** with Framer Motion + GSAP
- **Dark luxury aesthetic** with pure black backgrounds
- **Glass morphism effects** and soft gradients
- **Interactive 3D elements** with Three.js

### Sections

1. **🎬 Cinematic Hero** - Full-screen immersive introduction
   - Animated heading with gradient text
   - 3D glowing orb with floating particles
   - Smooth scroll indicator
   - Mouse-follow glow effect

2. **📖 About Story** - Personal journey as a cinematic experience
   - Horizontal scroll storytelling
   - Animated text reveals
   - Statistics display
   - Sticky scroll scenes

3. **💎 Premium Skills** - Floating hologram skill panels
   - Interactive skill cards with glow effects
   - Proficiency indicators
   - Glassmorphism design
   - Hover animations

4. **🚀 Projects Showcase** - Apple-style product launches
   - Full-screen project layouts
   - Cinematic reveal animations
   - Project mockups
   - GitHub & Live demo links

5. **🐙 GitHub Intelligence** - Futuristic analytics dashboard
   - Dynamic GitHub stats
   - Animated counters
   - Contribution analytics
   - Floating panels

6. **🗓️ Vision Timeline** - Futuristic roadmap
   - Vertical cinematic scroll
   - Glowing milestone markers
   - Animated reveals
   - Ambient lighting

7. **💬 Premium Testimonials** - Luxury testimonial cards
   - Floating cards with depth
   - Star ratings
   - Slow hover animations
   - Glass UI design

8. **📮 Contact Experience** - Luxurious contact section
   - Cinematic form animations
   - Elegant input fields
   - Hover lighting effects
   - Social media integration

9. **🎨 Cinematic Footer** - Apple-style footer
   - Minimal design
   - Navigation links
   - Social icons
   - Copyright notice

### Advanced Features

- ✅ **Smooth Scrolling** - Lenis-powered premium scrolling
- ✅ **Scroll Progress** - Animated progress bar
- ✅ **Dynamic Cursor** - Custom animated cursor
- ✅ **3D Graphics** - Three.js + React Three Fiber
- ✅ **Responsive Design** - Mobile, tablet, desktop
- ✅ **Performance Optimized** - Lazy loading, code splitting
- ✅ **SEO Ready** - Semantic HTML, meta tags
- ✅ **Accessibility** - WCAG compliant

## 🛠️ Tech Stack

- **React 19.2.6** - UI framework
- **Vite** - Build tool
- **Tailwind CSS 4.3.0** - Utility-first CSS
- **Framer Motion** - React animations
- **GSAP** - Advanced animations
- **Three.js** - 3D graphics
- **React Three Fiber** - React renderer for Three.js
- **Lenis** - Smooth scrolling
- **React Icons** - Icon library
- **Lucide React** - Modern icons

## 📁 Project Structure

```
src/
├── components/
│   ├── 3D/                    # Three.js components
│   │   ├── GlowingOrb.jsx
│   │   ├── FloatingParticles.jsx
│   │   └── Scene3D.jsx
│   ├── Layout/                # Layout components
│   │   ├── SmoothScrollProvider.jsx
│   │   └── DynamicCursor.jsx
│   └── Sections/              # Page sections
│       ├── Hero.jsx
│       ├── About.jsx
│       ├── Skills.jsx
│       ├── Projects.jsx
│       ├── GithubIntel.jsx
│       ├── Timeline.jsx
│       ├── Testimonials.jsx
│       ├── Contact.jsx
│       └── Footer.jsx
├── hooks/                     # Custom React hooks
│   ├── useScrollAnimation.js
│   ├── useMouseGlow.js
│   ├── useParallax.js
│   └── index.js
├── data/                      # Static data
│   ├── skills.js
│   ├── projects.js
│   ├── timeline.js
│   └── testimonials.js
├── utils/
│   ├── animations/            # Animation utilities
│   │   └── textAnimations.js
│   ├── constants/             # Constants
│   │   ├── colors.js
│   │   └── timings.js
│   └── cn.js                  # Class name utility
├── styles/
│   └── global.css             # Global styles
├── App.jsx
├── index.css
└── main.jsx
```

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ and npm/yarn

### Installation

1. **Clone or extract the project**
```bash
cd "new folder"
```

2. **Install dependencies** (already done)
```bash
npm install
```

3. **Run development server**
```bash
npm run dev
```

4. **Open in browser**
Navigate to `http://localhost:5173`

## 🎨 Customization

### Colors
Edit [src/utils/constants/colors.js](src/utils/constants/colors.js) to customize the color scheme.

### Content
Update content in [src/data/](src/data/) files:
- `skills.js` - Add/edit skills
- `projects.js` - Add/edit projects
- `timeline.js` - Add/edit timeline events
- `testimonials.js` - Add/edit testimonials

### Sections
Each section is in [src/components/Sections/](src/components/Sections/). Customize text, animations, and styling.

### Animations
- GSAP animations: [src/utils/animations/textAnimations.js](src/utils/animations/textAnimations.js)
- Framer Motion variants: See each component file
- Custom hooks: [src/hooks/](src/hooks/)

## 📦 Building for Production

### Build the project
```bash
npm run build
```

This creates an optimized build in the `dist/` folder.

### Preview production build locally
```bash
npm run preview
```

## 🌐 Deployment

### Option 1: Deploy to Vercel (Recommended)

Vercel is optimized for Vite projects and provides excellent performance.

1. **Install Vercel CLI**
```bash
npm install -g vercel
```

2. **Deploy**
```bash
vercel
```

3. **Follow the prompts** to connect your GitHub account and deploy

**Configuration:** Vercel automatically detects Vite. No additional setup needed.

### Option 2: Deploy to Netlify

1. **Install Netlify CLI**
```bash
npm install -g netlify-cli
```

2. **Connect and deploy**
```bash
netlify deploy --prod --dir=dist
```

Or use the Netlify UI:
- Push code to GitHub
- Connect repository in Netlify dashboard
- Build settings will be auto-configured

**netlify.toml configuration** (optional):
```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### Option 3: Deploy to GitHub Pages

1. **Update vite.config.js**
```javascript
export default {
  base: '/repository-name/',
  // ... rest of config
}
```

2. **Add deployment script to package.json**
```json
{
  "scripts": {
    "build": "vite build",
    "deploy": "npm run build && gh-pages -d dist"
  }
}
```

3. **Deploy**
```bash
npm run deploy
```

### Option 4: Deploy to Self-Hosted Server

1. **Build for production**
```bash
npm run build
```

2. **Upload `dist/` folder** to your server

3. **Configure web server** (nginx example):
```nginx
server {
    listen 80;
    server_name yourdomain.com;

    root /var/www/portfolio/dist;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    gzip on;
    gzip_types text/plain text/css text/javascript application/javascript;
}
```

## ⚡ Performance Tips

- Images are lazy-loaded
- Code splitting via React.lazy()
- Optimized animations with GPU acceleration
- Production bundle: ~150KB (gzipped)

## 🔍 SEO

The portfolio includes:
- Semantic HTML structure
- Meta tags for social sharing
- Structured data (JSON-LD ready)
- Mobile-friendly design
- Fast page load times

## ♿ Accessibility

- WCAG 2.1 compliant
- Keyboard navigation support
- Screen reader friendly
- Color contrast ratios > 7:1
- Focus indicators on interactive elements

## 📱 Browser Support

- Chrome/Edge: ✅ Latest 2 versions
- Firefox: ✅ Latest 2 versions
- Safari: ✅ Latest 2 versions
- Mobile browsers: ✅ All modern versions

## 🐛 Troubleshooting

### Tailwind CSS not applying?
Restart dev server after changing Tailwind config.

### Animations feel slow?
Check GPU acceleration in browser DevTools. Disable other heavy extensions.

### 3D scene not loading?
Ensure WebGL is supported. Check browser console for errors.

### Smooth scroll not working?
Lenis is initialized in `SmoothScrollProvider`. Ensure it's wrapping the app in `App.jsx`.

## 📚 Resources

- [React Documentation](https://react.dev)
- [Framer Motion Docs](https://www.framer.com/motion)
- [GSAP Documentation](https://greensock.com/docs/)
- [Three.js Documentation](https://threejs.org/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [Vite Guide](https://vitejs.dev)

## 📝 License

This portfolio is open source. Feel free to use it as a template for your own portfolio.

## 🤝 Connect

- **GitHub**: [CodeWithRehan-Stacks](https://github.com/CodeWithRehan-Stacks)
- **LinkedIn**: [Muhammad Rehan](https://www.linkedin.com/in/muhammad-rehan-b7110a362/)
- **Email**: contact@rehan.dev

---

**Built with ❤️ by Muhammad Rehan**

*Designed & Engineered for Excellence* 🚀
