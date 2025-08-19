# Persona AI – Landing Page

A modern, responsive landing page for Persona AI, showcasing hero messaging, pricing tiers, smooth in-page navigation, and a newsletter/contact section. Built with React, Vite, Tailwind CSS, and Framer Motion.

![Persona AI Logo](public/favicon.svg)

**Tech Badges:**  
![JavaScript ES2023](https://img.shields.io/badge/JS-ES2023-F7DF1E?logo=javascript&logoColor=000)
![React 18](https://img.shields.io/badge/React-18-149ECA?logo=react&logoColor=white)
![Vite 6](https://img.shields.io/badge/Vite-6-646CFF?logo=vite&logoColor=white)
![Tailwind CSS 3](https://img.shields.io/badge/Tailwind_CSS-3-38B2AC?logo=tailwindcss&logoColor=white)
![Framer Motion 12](https://img.shields.io/badge/Framer_Motion-12-0055FF?logo=framer&logoColor=white)
![React Router 7](https://img.shields.io/badge/React_Router-7-CA4245?logo=react-router&logoColor=white)

## ✨ Features

- Hero section with animated gradient text + typewriter effect
- Smooth scroll navigation (Home, Features, Pricing, Contact)
- Responsive pricing section with toggleable billing frequency
- Reusable UI primitives (Button, Badge, Cards)
- Framer Motion micro-interactions & hover cursor effect in nav
- Newsletter / Contact call-to-action section
- Accessible semantic markup & keyboard-friendly components
- Custom favicon (gradient P)

## 🧱 Tech Stack

| Layer | Tools |
|-------|-------|
| Framework | React 18 + Vite |
| Styling | Tailwind CSS, custom utilities, gradient theming |
| Animation | Framer Motion, subtle transitions |
| Routing | React Router (single landing route + in-page anchors) |
| Utilities | class-variance-authority, tailwind-merge, clsx |

## 📁 Project Structure (Key)

```text
src/
  components/
    ui/ (buttons, badges, animated text, pricing cards)
    blocks/ (pricing section composition)
    global/ (layout wrappers Container / Wrapper)
  pages/
    Landing.jsx (assembles sections)
    Hero.jsx
    Pricing.jsx
    Features.jsx
    NewsletterSection.jsx (contact anchor)
  lib/
    utils.js (cn helper)
```

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Lint
npm run lint

# Production build
npm run build
```

Open <http://localhost:5173> in your browser.

## 🔧 Configuration

- Tailwind config: `tailwind.config.js`
- Aliases: `@` → `./src` (`vite.config.js`)
- Global styles & theme tokens: `src/index.css`

## 🧩 Component Highlights

- `PricingSection` manages frequency state and renders multiple `PricingCard` components.
- `SlideNavTabs` implements hover highlight + smooth scroll.
- `Button` uses CVA for variant + size composition.

## 🧪 Potential Enhancements

- Active nav highlighting on scroll (IntersectionObserver)
- Dark/light theme toggle
- SEO meta tags & Open Graph preview
- Deployment badge (Vercel / Netlify) + CI workflow
- Newsletter backend integration

## 🌐 Deployment

```bash
npm run build
# Deploy dist/ with your preferred host (Vercel, Netlify, etc.)
```

## 🛡️ License

Proprietary (no license file yet). Add one if open sourcing.

## 🤝 Contributing

Currently a focused landing page. Fork and adapt as needed.

## 📬 Contact

Persona AI team – open an issue once public.

---
Made with React + Tailwind ✨

