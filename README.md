# Tinkerz Space - Marketing Website

A bold, vibrant marketing website for **Tinkerz Space** - a Future Tech & Innovation Maker Space focused on hands-on learning in Robotics, AI, Drone Technology, and Space Technology.

## 🚀 Features

- **Modern Design**: Bold & vibrant futuristic tech aesthetic
- **Fully Responsive**: Mobile-first design optimized for all devices
- **Smooth Animations**: Scroll-triggered fade-in animations
- **Fast Performance**: Built with Astro for optimal loading speeds
- **SEO Optimized**: Meta tags and Open Graph support

## 📋 Sections

1. **Hero** - Eye-catching landing section with CTAs
2. **Vision** - Mission and vision statement
3. **Problem** - Educational challenges addressed
4. **Who We Are** - Maker Space introduction and process flow
5. **Objectives** - Six core objectives in grid layout
6. **Technology Domains** - Five technology areas covered
7. **Facilities** - Seven facilities with descriptions
8. **What Students Learn** - Eight learning topics
9. **Why Now** - NEP 2020 and market demand
10. **Testimonials** - Student and parent testimonials
11. **Contact** - Contact form and information

## 🛠️ Tech Stack

- **Framework**: [Astro](https://astro.build)
- **Styling**: [Tailwind CSS](https://tailwindcss.com)
- **Icons**: SVG icons (inline)
- **Deployment**: GitHub Pages

## 📦 Installation

```bash
npm install
```

## 🧞 Commands

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `npm install`          | Installs dependencies                            |
| `npm run dev`          | Starts local dev server at `localhost:4321`      |
| `npm run build`        | Build your production site to `./dist/`          |
| `npm run preview`      | Preview your build locally, before deploying     |

## 🚀 Deployment to GitHub Pages

### Option 1: Automatic Deployment (Recommended)

1. **Configure Astro for GitHub Pages:**
   - Open `astro.config.mjs`
   - Uncomment and update the `site` and `base` properties:
     ```js
     site: 'https://yourusername.github.io',
     base: '/tinkerz-space', // Use '/' if repo name is 'yourusername.github.io'
     ```

2. **Enable GitHub Pages:**
   - Go to your repository Settings → Pages
   - Under "Source", select "GitHub Actions"

3. **Push to main branch:**
   - The GitHub Actions workflow (`.github/workflows/deploy.yml`) will automatically build and deploy your site

### Option 2: Manual Deployment

1. Build the site:
   ```bash
   npm run build
   ```

2. Push the `dist` folder to the `gh-pages` branch:
   ```bash
   git subtree push --prefix dist origin gh-pages
   ```

3. Configure GitHub Pages to use the `gh-pages` branch

## 🎨 Customization

### Colors

Edit `tailwind.config.js` to customize the color scheme:
- `dark-blue`: Main background colors
- `cyan`: Accent colors

### Content

- Update component files in `src/components/` to modify content
- Replace placeholder images with actual photos
- Update testimonials in `src/components/Testimonials.astro`

## 📝 Notes

- Placeholder images are used throughout - replace with actual photos
- Contact form currently shows an alert on submit - integrate with a backend service for production
- Testimonials are placeholders - replace with real testimonials

## 📄 License

This project is for Tinkerz Space.
