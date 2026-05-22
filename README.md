# Adrian Portfolio (Systems Builder)

Portfolio based on `davidhckh/portfolio-2025`, redesigned for a **systems-builder** narrative:
backend architecture, AI automation, operational platforms, and digital infrastructure.

## Stack

- Vue 3 + TypeScript + Vite
- GSAP + Lenis for motion/scroll
- three.js scene preserved for immersive hero/build intro
- Route-based system pages via `/project/:slug`

## Scripts

- `npm run dev`
- `npm run build`
- `npm run preview`
- `npm run typecheck`

## Content Structure

- Home narrative model: `src/content/home/`
- System previews: `src/content/projects/previews/{en,es}.ts`
- System detail pages: `src/content/projects/{en,es}/`
- Locale messages: `src/i18n/messages/namespaces/common/{en,es}.json`

## Branding Assets

- 642 logo (hero/header/preloader): `public/brand/`

## Legal Placeholders

- English: `public/legal.html`, `public/privacy.html`
- Spanish: `public/es/legal.html`, `public/es/privacy.html`
