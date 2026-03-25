# Utso Gharami - Portfolio

A high-end, interactive personal portfolio website built with React, Vite, and GSAP. 

## Features
- **Dynamic Hero Section**: Featuring a premium `ScrambleText` animation for "Automation Developer".
- **Interactive 3D Elements**: Uses Three.js for a cinematic experience.
- **Scroll-Linked Animations**: Powered by GSAP `ScrollTrigger` and `ScrollSmoother`.
- **Responsive Design**: Designed to look great on desktop and mobile devices.

## Tech Stack
- **Framework**: React 18
- **Build Tool**: Vite
- **Animations**: GSAP (SplitText, ScrambleText)
- **3D Engine**: Three.js / React Three Fiber

## Local Development

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Run Dev Server**:
   ```bash
   npm run dev
   ```

3. **Build for Production**:
   ```bash
   npm run build
   ```

## Deployment

### Deploy to Vercel (Recommended)
1. **Push your code** to a GitHub repository.
2. **Import the project** in the [Vercel Dashboard](https://vercel.com/new).
3. Vercel will automatically detect the **Vite** configuration.
4. Set the **Build Command** to `npm run build` and the **Output Directory** to `dist`.
5. Click **Deploy**.

### Deploy to GitHub Pages
1. Install the `gh-pages` package:
   ```bash
   npm install gh-pages --save-dev
   ```
2. Add a `base` property to your `vite.config.ts`:
   ```ts
   export default defineConfig({
     base: '/your-repo-name/',
     // ...
   })
   ```
3. Add deploy scripts to `package.json`:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```
4. Run `npm run deploy`.

---
*Built with ❤️ by Utso Gharami*
