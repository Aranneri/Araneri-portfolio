# Araneri Frontend + Portfolio

This repository now contains both the Araneri frontend application and the
static portfolio pages from the deployed Araneri portfolio site.

## Frontend

A cinematic, botanical storytelling frontend built with Next.js App Router,
TypeScript strict mode, Tailwind CSS, shadcn-style UI components, Framer Motion,
and Lucide icons.

### Setup

- Install dependencies: `npm install`
- Start the dev server: `npm run dev`
- Build for production: `npm run build`
- Run lint: `npm run lint`
- Format code: `npm run format`

### Architecture

- App Router pages live in `src/app`
- Components are grouped under `src/components` with layout, animations, shared,
  and ui subfolders
- Typed content lives in `src/data`
- Validation and security helpers live in `src/lib`
- Global styles live in `src/app/globals.css` and `src/styles/tokens.css`
- Placeholder images are in `public/images`

### Security Notes

- No `dangerouslySetInnerHTML` or unsanitized HTML rendering
- External links are validated and use `rel="noopener noreferrer"`
- Contact form input is validated and sanitized with Zod
- No client-side persistence of sensitive data
- Security headers are set in `next.config.ts`

### CSP Readiness

This frontend avoids inline scripts and unsafe eval. If you add third-party scripts,
prefer non-inline loading strategies and update CSP accordingly.

Typography is loaded via a CSS import from Google Fonts. If you require a fully
self-hosted CSP, download and serve the font files locally.

### Placeholder Assets

All images are placeholders and should be replaced with final assets when available.

## Portfolio Pages

This repository also includes the static portfolio pages published at the
Araneri GitHub Pages site.

### Portfolio Pages Included

- `Arsath.html`
- `Rubini.html`
- `Eaknath.html`
- `Ezhiloviya.html`
- `Guruaishwarya.html`
- `Kannan.html`
- `Kishore.html`
- `Madhumitha.html`
- `Mahaswetha.html`
- `Murugesan.html`
- `Prasanth.html`
- `Praveena.html`
- `Shrijesh.html`
- `Hariprasath.html`
- `Kamala.html`
- `Niranjanaa.html`
- `Pavithra.html`

### Usage

Open any of the `.html` files in a web browser to view the corresponding portfolio.

### GitHub Pages Deployment

The portfolio pages are available through GitHub Pages at:

`https://aranneri.github.io/Araneri-portfolio/`

Each member page can be opened directly, for example:

- `https://aranneri.github.io/Araneri-portfolio/Mahaswetha.html`
- `https://aranneri.github.io/Araneri-portfolio/Eaknath.html`
- `https://aranneri.github.io/Araneri-portfolio/Guruaishwarya.html`

### Notes

- The repository now combines the Next.js frontend source and standalone HTML
  portfolio pages.
- You can refactor the static portfolio content later to use a shared structure or
  a single homepage if desired.
