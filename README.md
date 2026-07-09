# TV Mount Company

Commercial landing page for a professional TV mounting and installation service.

## Tech Stack

- React
- Vite
- React Router
- SASS
- React Helmet Async
- React Leaflet / Leaflet
- ESLint

## Features

- Responsive landing page
- Quote quiz modal
- Lead forms prepared for future integration
- Project gallery modal
- Service area map
- Legal pages
- 404 page
- Error Boundary
- SEO meta tags
- Sitemap and robots.txt
- Web app manifest
- Lazy-loaded heavy sections

## Project Structure

```text
src/
  components/
  data/
  pages/
  styles/
  utils/
public/
api/
```

## Getting Started

Install dependencies:

```bash
npm install
```

Start development server:

```bash
npm run dev
```

Create production build:

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

Run linting:

```bash
npm run lint
```

## Telegram Lead Integration

The project includes a prepared Vercel serverless function:

```text
api/send-lead.js
```

Add these environment variables after deployment:

```env
TELEGRAM_BOT_TOKEN=
TELEGRAM_CHAT_ID=
```

A local example is provided in `.env.example`.

## Production Checklist

Before delivery or deployment:

- Remove `node_modules`
- Remove `dist` if sending source code
- Remove `.DS_Store` and `__MACOSX`
- Run `npm run lint`
- Run `npm run build`
- Check `robots.txt`
- Check `sitemap.xml`
- Run Lighthouse in Chrome
