# KP Artist Website (Next.js + Tailwind)

Artsy, professional, and dynamic artist website built for Vercel.

## Quick Start

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Deploy to Vercel

1. Push this folder to GitHub.
2. In Vercel: **New Project** → import the repo.
3. Framework preset: **Next.js** (auto-detected)
4. Build command: `npm run build` (default)
5. Output: (default)

## Customize

- **Logo:** `public/kp-logo.png`
- **Booking email:** `components/AboutPressBook.tsx` → `BOOKING_EMAIL`
- **Embeds:** `components/MusicSection.tsx` → swap YouTube embed links
- **SEO:** `app/layout.tsx` metadata

## Color Palette

- Pink: `#ff4fd8` (blush)
- Silver: `#c9c9d6` (chrome)
- Black: `#05060a` (ink)
- White: `#f7f7fb` (pearl)

## Optional HTML Landing Page

- `public/landing.html` is included as a simple standalone HTML intro page.
- You can link to it at `/landing.html` after deployment.

## Dynamic YouTube Player

- The embedded player and playlist are dynamic (React state).
- Update the video IDs in `components/MusicSection.tsx`.
