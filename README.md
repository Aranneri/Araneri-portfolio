# Araneri Frontend

A cinematic, botanical storytelling frontend built with Next.js App Router, TypeScript strict mode, Tailwind CSS, shadcn-style UI components, Framer Motion, and Lucide icons.

## Setup

- Install dependencies: `npm install`
- Start the dev server: `npm run dev`
- Build for production: `npm run build`
- Run lint: `npm run lint`
- Format code: `npm run format`

## Architecture

- App Router pages live in `src/app`
- Components are grouped under `src/components` with layout, animations, shared, and ui subfolders
- Typed content lives in `src/data`
- Validation and security helpers live in `src/lib`
- Global styles live in `src/app/globals.css` and `src/styles/tokens.css`
- Placeholder images are in `public/images`

## Security Notes

- No `dangerouslySetInnerHTML` or unsanitized HTML rendering
- External links are validated and use `rel="noopener noreferrer"`
- Contact form input is validated and sanitized with Zod
- No client-side persistence of sensitive data
- Security headers are set in `next.config.ts`

## CSP Readiness

This frontend avoids inline scripts and unsafe eval. If you add third-party scripts, prefer non-inline loading strategies and update CSP accordingly.

Typography is loaded via a CSS import from Google Fonts. If you require a fully self-hosted CSP, download and serve the font files locally.

## Placeholder Assets

All images are placeholders and should be replaced with final assets when available.
