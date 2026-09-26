# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# Start dev server (served at localhost:3000/jordaan-website-v2)
yarn start

# Production build (outputs to build/, sets PUBLIC_URL=/jordaan-website-v2)
yarn build

# Deploy to GitHub Pages
yarn deploy

# Watch and compile SCSS + Tailwind in parallel
yarn scss

# Watch only SCSS (src/Assets/scss → src/Assets/css)
yarn sass

# Watch Tailwind for global.css or pages.css individually
yarn tailwind
yarn pages
```

The project uses **CRACO** (not plain react-scripts) for build customization. Always use `yarn build` (which calls `craco build`) rather than `react-scripts build` directly.

The mail server is a separate Node process:
```bash
cd server && nodemon mail.js   # runs on port 8007
```

## Architecture

This is a **React 18 SPA** deployed to GitHub Pages under the `/jordaan-website-v2` subpath. The `PUBLIC_URL` environment variable controls asset and route prefixes — it is set at build time and differs between dev and production.

### Routing

`src/App.js` defines all routes via React Router v6. Every page is lazily imported. The `BrowserRouter` is initialized with `basename={process.env.PUBLIC_URL}` in `src/index.js`, so all `<Link>` and `<Route path=...>` values are relative to that base.

### Styling layers

Three compiled CSS files are imported in `src/index.js` in order:
1. `src/Assets/css/icons.css` — icon font declarations
2. `src/Assets/css/global.css` — Tailwind utilities (compiled from `src/Assets/css/global.css` source)
3. `src/Assets/css/pages.css` — page-specific Tailwind utilities

Plus `src/index.scss` for any global SCSS overrides.

Source SCSS lives in `src/Assets/scss/`. The Tailwind config (`tailwind.config.js`) uses **max-width breakpoints** (not the default min-width), custom brand colors (`jordaanYellow`, `jordaanText`), and custom font families (`Aller`, `Poppins`, `Turnpike`).

### Component organization

- `src/Components/` — generic reusable UI components (Header, Footers, Form, Buttons, etc.)
- `src/Components/Jordaan/` — practice-specific wrappers: `JordaanHeader`, `JordaanContactForm`, `JordaanTopNav`, `JordaanWhiteHeaderSection`. These are the Jordaan-branded versions of the generic components and are what pages actually use.
- `src/Pages/` — one file/folder per route; pages compose components and define page-level data inline or in sibling data files (e.g. `LandingData.jsx`)
- `src/Functions/` — shared utilities (`Utilities.js` has `sendEmail`, `resetForm`, `SetHeaderMenuPos`; `GlobalAnimations.js` exports Framer Motion variants)
- `src/Context/Context.jsx` — `GlobalContext` provides `headerHeight`, `footerHeight`, `isModalOpen`, and `customModal` state to all pages

### Asset paths

Images are referenced as `${process.env.PUBLIC_URL}/assets/img/...`. WebP images live in `public/assets/img/webp/`. Always use `process.env.PUBLIC_URL` as a prefix — bare paths break on the GitHub Pages subpath.

### Contact form / mail server

The contact form in `src/Components/Jordaan/JordaanContactForm.jsx` POSTs JSON to `process.env.REACT_APP_API_URL` (the full endpoint URL, not a base path). In production this is `public/send.php`, which `yarn build:hosting` copies into `build/` next to the site (GitHub Pages is static and cannot run a backend); its CORS allowlist is at the top of the file. For local dev, `.env.development` points at `server/mail.js` (Express + Nodemailer, port 8007, `/send`), which needs SMTP credentials in `server/.env` (`REACT_APP_SMTP_HOST`, `REACT_APP_SMTP_PORT`, `REACT_APP_SMTP_EMAIL`, `REACT_APP_SMTP_PASS`, optional `REACT_APP_CONTACT_EMAIL`). Both backends return `{status: "success" | "fail"}`; keep them in sync when changing the form fields.
