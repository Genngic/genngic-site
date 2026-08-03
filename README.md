# Genngic website

A React + Vite site for Genngic / Next Translate, built to match the `index.html` design
reference. Ready to deploy to Netlify.

## Run it locally

```bash
npm install
npm run dev
```

Then open the printed local URL (usually http://localhost:5173).

To produce a production build (the same thing Netlify runs):

```bash
npm run build
npm run preview   # serve the built dist/ folder locally to double check it
```

## Deploy to Netlify

1. Push this project to a GitHub/GitLab/Bitbucket repo (or drag-and-drop the `dist/`
   folder after `npm run build` onto https://app.netlify.com/drop for a quick one-off deploy).
2. In Netlify: **Add new site → Import an existing project**, pick the repo.
3. Build settings are already committed in `netlify.toml`:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Deploy. Netlify will give you a `*.netlify.app` URL immediately.

### Custom domain

In the Netlify site dashboard: **Domain settings → Add a custom domain**, enter your domain,
then either:
- point your domain's nameservers at Netlify DNS (Netlify manages everything, incl. HTTPS), or
- keep your current DNS provider and add the CNAME/A record Netlify shows you.

Netlify issues a free HTTPS certificate automatically once DNS is pointed at it.

## What to edit to make the site fully functional

Everything below is a "search for this file" checklist — nothing else in the codebase needs
touching for basic launch.

### 1. Contact email, social links, Google Play link
**File: `src/siteConfig.js`**
- `contactEmail` — shown if the notify form ever fails, used as your public contact address.
- `social.twitter` / `social.instagram` / `social.tiktok` — replace `"#"` with your real profile
  URLs. Remove any icon you don't use directly in `src/components/Footer.jsx`.
- `googlePlayUrl` — leave empty until Next Translate is published. Once you have a Play Store
  link, paste it in here; the "Coming soon" badge automatically becomes a real "Get it on Google
  Play" link (see `src/components/NextTranslate.jsx`).

### 2. Wire up the "Notify me" email form
The form in `src/components/Notify.jsx` is already wired to **Netlify Forms** — no backend or
email service needed:
- `index.html` has a hidden static `<form name="notify" data-netlify="true">` so Netlify's
  build bot detects and registers the form.
- Once deployed, submissions show up under your Netlify site → **Forms** tab, and you can turn
  on email notifications there (Site configuration → Forms → Form notifications) to get an email
  every time someone signs up.
- If you'd rather use Mailchimp/ConvertKit/Formspree instead, replace the `fetch` call inside
  `handleSubmit` in `src/components/Notify.jsx` with that service's API call.

### 3. Nav links, hero copy, feature text, footer columns
Every section is its own file in `src/components/`, each with an `// EDIT HERE` comment at the
top marking what's meant to be changed:
- `Nav.jsx` — top nav links + "Get notified" button
- `Hero.jsx` — headline, subheading, button labels
- `NextTranslate.jsx` — "our first app" section + the 3 feature cards
- `HowItWorks.jsx` — the 3-step explainer
- `About.jsx` — studio description
- `Footer.jsx` — footer link columns (social URLs come from `siteConfig.js`)

### 4. Logos / favicon
The three images you supplied are in `public/`:
- `genngic-mark.png` — used as the nav/footer logo mark and the browser tab favicon
- `genngic-wordmark.png` — used as the nav/footer wordmark
- `next-translate-icon-lg.png` — the app icon shown in the hero and app section

To swap any of them, replace the file in `public/` with the same filename (or update the
references in `src/index.css` — search for `brand-mark`/`brand-word` — and in
`src/components/Hero.jsx` / `NextTranslate.jsx` if you rename the files).

### 5. Page title, description, meta tags
**File: `index.html`** (project root, not `src/`) — the `<title>` and `<meta name="description">`
tags at the top.

### 6. Colors / fonts
**File: `src/index.css`** — all colors are CSS variables at the top of the file (`--silver-*`,
`--lime-*`). Fonts are loaded via Google Fonts `<link>` tags in `index.html` (Unbounded, Manrope,
JetBrains Mono).
