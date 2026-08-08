# DV Engineer Portfolio — Vite + React

A dark, engineering-focused portfolio for a Design Verification profile.

## Stack
- Vite
- React
- Lucide React
- Plain CSS

## Run locally

```bash
npm install
npm run dev
```

Open the local URL shown by Vite.

## Build

```bash
npm run build
npm run preview
```

## Before publishing

Edit `src/data/projects.js` and replace placeholder GitHub URLs.

Also replace:
- `https://github.com/yourusername`
- `your.email@example.com`

with your real links.

## Deploy

### GitHub Pages
This project uses a relative Vite base (`./`), so it can be hosted under a repository path. Build with:

```bash
npm run build
```

Publish the `dist/` directory through GitHub Pages.

### Vercel
Import the GitHub repository into Vercel. The default Vite build is:

Build command:
`npm run build`

Output directory:
`dist`
