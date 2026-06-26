# JAMstack Blog

A tech blog built with **Next.js** and deployed on **Vercel**, demonstrating the JAMstack architecture with Static Site Generation (SSG).

## Stack

- **Framework:** Next.js 14 (Pages Router)
- **Rendering:** Static Site Generation via `getStaticProps` / `getStaticPaths`
- **Styling:** CSS Modules
- **Deployment:** Vercel
- **CI/CD:** GitHub Actions

## Project Structure

```
jamstack-blog/
├── pages/
│   ├── index.js           # Home page — lists all posts
│   ├── _app.js            # Global layout (Header + Footer)
│   └── posts/
│       └── [slug].js      # Dynamic post page (SSG)
├── components/
│   ├── Header.jsx
│   ├── PostCard.jsx
│   └── Footer.jsx
├── lib/
│   └── api.js             # Data layer — returns post list and individual posts
├── styles/
│   └── globals.css
└── .github/
    └── workflows/
        └── deploy.yml     # CI/CD pipeline
```

## How JAMstack Works Here

At build time, Next.js calls `getStaticProps` and `getStaticPaths` to pre-render every page into static HTML files. No server runs at request time — files are served directly from a CDN.

```
push to main → GitHub Actions → npm run build → static HTML → Vercel CDN
```

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build for Production

```bash
npm run build
npm start
```

## Deploy

Every push to `main` triggers the GitHub Actions workflow in `.github/workflows/deploy.yml`, which builds the project and deploys it to Vercel automatically.

To configure the deployment, add these secrets to your GitHub repository:

| Secret | Description |
|---|---|
| `VERCEL_TOKEN` | Your Vercel API token |
| `VERCEL_ORG_ID` | Your Vercel organization ID |
| `VERCEL_PROJECT_ID` | Your Vercel project ID |
