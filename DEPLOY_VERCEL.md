# Deploying invoicechain to Vercel

This document shows two ways to deploy the `invoicechain` Vite app to Vercel:

- Manual (recommended quick start)
- Automated (GitHub Actions)

Prerequisites
- Node.js (>=16)
- npm
- A Vercel account and the project created in your Vercel dashboard (optional if using the GitHub integration)

Manual deploy (quick)
1. Build the app locally:

```bash
npm ci
npm run build
```

2. From the Vercel dashboard, import the repository (or drag & drop the project folder) and set the build settings:

- Build command: `npm run build`
- Output directory: `dist`

3. Deploy — Vercel will run the build and publish the site.

Automated deploy with GitHub Actions

1. Add the following repository secrets in GitHub (Repository → Settings → Secrets & variables → Actions):

- `VERCEL_TOKEN` — a personal token from Vercel (Account Settings → Tokens)
- `VERCEL_ORG_ID` — your Vercel organization ID (found in project settings or Vercel dashboard)
- `VERCEL_PROJECT_ID` — your Vercel project ID (found in project settings)

2. The provided GitHub Action workflow (`.github/workflows/deploy-vercel.yml`) will:

- checkout the repo
- install dependencies (`npm ci`)
- run `npm run build`
- call Vercel to deploy to production

Notes
- Your project already uses Vite. The default build output directory is `dist`, which Vercel detects automatically when you set the build command as above.
- If your app uses any runtime secrets, configure them in the Vercel dashboard or set them as GitHub Secrets for the action.

Hindi (हिंदी में संक्षेप)

तेज़ शुरुआत के लिए:
1. लोकल बिल्ड करें: `npm ci` और `npm run build`
2. Vercel डैशबोर्ड पर अपना रिपॉज़िटरी इम्पोर्ट करें।
3. Build command: `npm run build`, Output directory: `dist` — फिर Deploy बटन दबाएँ।

ऑटो-डिप्लॉय (GitHub Actions) के लिए GitHub में तीन Secrets जोड़ें: `VERCEL_TOKEN`, `VERCEL_ORG_ID`, `VERCEL_PROJECT_ID`।

---
If you want, I can also add a Netlify `netlify.toml` or a GitHub Action that deploys to GitHub Pages instead — tell me which provider you prefer next.
