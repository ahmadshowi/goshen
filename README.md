# PT Goshen Anugerah Sejahtera — Corporate Website

A premium, bilingual (Bahasa Indonesia / English) corporate landing page for a modern layer poultry
farming company, built with Next.js App Router, TypeScript, Tailwind CSS, and Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

```
app/                Next.js App Router entry (layout, page, global styles)
components/         All page sections as reusable components
lib/translations.ts Centralized ID/EN copy — edit text here
lib/LanguageContext.tsx  Language state (ID default, persisted to localStorage)
```

## Editing content

All copy lives in `lib/translations.ts` under `translations.id` and `translations.en`.
Update both objects together to keep the two languages in sync. Contact details live in
`contactInfo` at the bottom of the same file.

## Photography

Every image slot currently renders `components/ImagePlaceholder.tsx` — a styled duotone
placeholder (not a stock photo) so the layout ships without relying on unlicensed imagery.
Swap these for real farm photography before launch:

1. Add licensed photos to `public/images/`.
2. Replace the relevant `<ImagePlaceholder ... />` usage with Next.js `<Image src="/images/..." fill className="object-cover" alt="..." />`.

Sections using placeholders: Hero, Natural Farming, Modern Farming, Product, Sustainability/CSR,
Media (news thumbnails), Gallery.

## Build for production

```bash
npm run build
npm start
```

## Notes

- No backend, database, or CMS is wired up in this version — all content is static/local, as scoped.
- The contact section links directly to `tel:` and `mailto:` — no form submission backend included.
- Fonts: Fraunces (display), Inter (body), IBM Plex Mono (eyebrows/data), loaded via `next/font/google`.
