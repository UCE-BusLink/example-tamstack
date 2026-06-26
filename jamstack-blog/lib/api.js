const posts = [
  {
    slug: '1',
    title: 'Getting Started with JAMstack Architecture',
    excerpt: 'JAMstack decouples the frontend from the backend, delivering better performance, higher security, and easier scaling for modern web applications.',
    content: `JAMstack stands for JavaScript, APIs, and Markup — a modern web architecture that pre-builds every page at deploy time into static HTML files served from a global CDN.

Instead of rendering pages on a server at request time, the entire site is compiled during the build step. This means every visitor receives a pre-generated file, not a server response computed on the fly.

Key benefits include:
- Performance: Files served from CDN edge nodes closest to the user
- Security: No server-side runtime exposed to the public internet
- Scalability: CDN absorbs traffic spikes with zero configuration
- Developer workflow: Git-based deploys with instant rollbacks

Frameworks like Next.js, Gatsby, and Astro have made JAMstack development mainstream, letting teams ship production-ready sites in days rather than weeks.`,
    date: 'June 26, 2026',
  },
  {
    slug: '2',
    title: 'Static Site Generation vs Server-Side Rendering',
    excerpt: 'Choosing between SSG and SSR is one of the most important architectural decisions in Next.js. Here is how to pick the right one for your use case.',
    content: `Next.js gives you two primary rendering strategies: Static Site Generation (SSG) and Server-Side Rendering (SSR). Both produce valid HTML, but at different times.

Static Site Generation (SSG) runs getStaticProps at build time. The output is a set of HTML files stored on a CDN. Every visitor gets the same cached file — fast, cheap, and infinitely scalable. Use SSG for content that doesn't change with each request: blog posts, landing pages, documentation.

Server-Side Rendering (SSR) runs getServerSideProps on every request. The server generates a fresh HTML document for each visitor. Use SSR when the page must reflect data that changes frequently or depends on the authenticated user: dashboards, shopping carts, personalized feeds.

A common pattern is to start with SSG and layer in SSR or client-side fetching only for the parts that require real-time data. This hybrid approach keeps the majority of your site fast while preserving flexibility where it matters.`,
    date: 'June 26, 2026',
  },
  {
    slug: '3',
    title: 'Deploying Next.js to Vercel in 5 Minutes',
    excerpt: 'Vercel is built by the creators of Next.js and offers zero-configuration deploys, preview environments for every pull request, and global edge distribution.',
    content: `Vercel is the fastest way to get a Next.js application into production. The platform was built by the same team that created Next.js, so every framework feature is supported out of the box.

Getting started takes three steps:
1. Push your repository to GitHub, GitLab, or Bitbucket.
2. Import the repository in the Vercel dashboard.
3. Click Deploy.

Vercel reads your next.config.js, detects the framework, and runs npm run build automatically. The resulting static files are distributed across their global edge network, putting your content close to every visitor.

Every pull request gets its own preview URL — a full deployment of that branch, accessible to stakeholders before it merges. This eliminates the classic "works on my machine" problem and makes code review much more concrete.

Custom domains, HTTPS certificates, environment variables, and analytics are all managed in the same dashboard. There is no server to provision, no Nginx to configure, and no certificate to renew.`,
    date: 'June 25, 2026',
  },
  {
    slug: '4',
    title: 'GitHub Actions: Automate Your CI/CD Pipeline',
    excerpt: 'GitHub Actions lets you define automated workflows in YAML, triggered by pushes, pull requests, or schedules — directly inside your repository.',
    content: `Continuous Integration and Continuous Deployment (CI/CD) used to require dedicated infrastructure. GitHub Actions brings that pipeline directly into your repository as a YAML file under .github/workflows/.

A typical workflow for a Next.js project has three jobs: install, build, and deploy.

The install job runs npm ci to restore dependencies from the lock file — always faster and more deterministic than npm install. The build job runs npm run build to compile the static HTML. If the build fails, the deploy job never runs.

Secrets like API keys and deploy tokens are stored encrypted in the repository settings and injected as environment variables at runtime — they never appear in the workflow file or the build logs.

Triggers are flexible. A push to main can kick off a production deploy. A pull_request event can run tests and post a preview link. A cron schedule can rebuild the site nightly to pull in fresh content from a CMS.

The result is a fully auditable, version-controlled deployment process that any team member can read, review, and improve.`,
    date: 'June 25, 2026',
  },
  {
    slug: '5',
    title: 'CSS Modules: Scoped Styles Without Compromises',
    excerpt: 'CSS Modules solve the global namespace problem of plain CSS by generating unique class names at build time, eliminating style conflicts across components.',
    content: `CSS has one fundamental problem in large applications: everything is global. A class named .button in one file can accidentally override a .button class in another.

CSS Modules solve this by transforming every class name into a unique hash at build time. You write .button in Header.module.css and Next.js compiles it to something like Header_button__3Xk9z — guaranteed to never clash with any other component.

The syntax is standard CSS. There is no new language to learn, no runtime overhead, and no JavaScript-in-CSS. You import the module as a JavaScript object and reference class names as properties.

import styles from './Button.module.css';
<button className={styles.button}>Click</button>

This approach pairs well with component-driven architecture because each component owns its styles. Deleting a component automatically removes its styles — no orphaned CSS left behind.

For global styles — resets, typography, CSS variables — a single globals.css imported in _app.js handles everything that genuinely needs to be shared across the entire application.`,
    date: 'June 24, 2026',
  },
  {
    slug: '6',
    title: 'Fetching Data at Build Time with getStaticProps',
    excerpt: 'getStaticProps runs on the server at build time, not in the browser. It can call databases, read files, or fetch any API without exposing credentials to the client.',
    content: `getStaticProps is Next.js's mechanism for supplying data to a page at build time. The function runs in a Node.js environment during npm run build — never in the browser.

Because it runs server-side, you can safely use environment variables, database connections, or API keys that should never reach the client. The returned props are serialized into the HTML and injected as a JSON script tag — the component receives them as plain props with no additional fetching needed.

export async function getStaticProps() {
  const res = await fetch('https://api.example.com/posts');
  const posts = await res.json();
  return { props: { posts } };
}

The revalidate option turns SSG into Incremental Static Regeneration (ISR). With revalidate: 60, Next.js serves the cached page instantly but regenerates it in the background after 60 seconds — giving you the speed of static with the freshness of server rendering.

For pages with dynamic routes, getStaticPaths tells Next.js which parameter values to pre-render. Any slug not in the list returns a 404 when fallback is false, or renders on demand when fallback is 'blocking'.`,
    date: 'June 24, 2026',
  },
  {
    slug: '7',
    title: 'Web Performance: Core Web Vitals Explained',
    excerpt: 'Google uses Core Web Vitals as a ranking signal. Understanding LCP, FID, and CLS helps you build faster sites and improve both UX and search visibility.',
    content: `Core Web Vitals are a set of metrics Google uses to measure real-world user experience on the web. They directly influence search rankings and reflect how users actually perceive your site's performance.

Largest Contentful Paint (LCP) measures how long it takes for the largest visible element — usually a hero image or heading — to load. A good LCP is under 2.5 seconds. The most common fix is optimizing images: use next/image for automatic WebP conversion and lazy loading.

First Input Delay (FID) measures the time from a user's first interaction to the browser's response. A good FID is under 100 ms. Large JavaScript bundles are the primary culprit — code-splitting and dynamic imports reduce the amount of JS parsed on the main thread.

Cumulative Layout Shift (CLS) measures unexpected visual movement on the page. When an image loads and pushes content down, that's a layout shift. Always specify width and height on images and reserve space for ads or embeds with explicit dimensions.

Next.js addresses all three out of the box: next/image handles LCP and CLS, automatic code splitting reduces FID, and static generation eliminates server latency entirely.`,
    date: 'June 23, 2026',
  },
  {
    slug: '8',
    title: 'TypeScript in Next.js: Safer Code From Day One',
    excerpt: 'TypeScript catches type errors at compile time, improves IDE autocomplete, and makes refactoring large codebases significantly safer.',
    content: `TypeScript adds a static type system on top of JavaScript. Instead of discovering type mismatches at runtime — when a user triggers an error in production — you catch them the moment you write the code.

Next.js has first-class TypeScript support. Rename any file from .js to .tsx and the framework automatically generates a tsconfig.json and installs the necessary type definitions. No extra configuration required.

The most immediate benefit is autocomplete. Your IDE knows the shape of every object, so it can suggest properties, warn about missing fields, and catch typos before you even save the file.

interface Post {
  slug: string;
  title: string;
  content: string;
  date: string;
}

Typing component props eliminates an entire class of bugs. If a component expects a string and you pass a number, TypeScript refuses to compile. This contract between components makes refactoring safe — rename a prop and the compiler tells you every place that needs updating.

For Next.js-specific types, the framework exports GetStaticProps, GetStaticPaths, and GetServerSideProps. Using them ensures your data-fetching functions return the exact shape the page expects.`,
    date: 'June 23, 2026',
  },
  {
    slug: '9',
    title: 'REST vs GraphQL: Choosing the Right API for Your Project',
    excerpt: 'REST and GraphQL both expose data over HTTP, but they make very different trade-offs around flexibility, caching, and developer experience.',
    content: `REST and GraphQL solve the same problem — exposing data from a server to a client — but they take fundamentally different approaches.

REST organizes data around resources. Each resource has a URL: /posts, /posts/1, /users/42. The server decides what data each endpoint returns. This is simple to understand, easy to cache with HTTP, and supported by every HTTP client and proxy in existence.

GraphQL uses a single endpoint. The client sends a query describing exactly the fields it needs, and the server returns precisely that shape. This eliminates over-fetching (getting more data than needed) and under-fetching (needing multiple requests to assemble a single view).

For a JAMstack blog, REST is usually the right choice. The data requirements are well-defined, the response shapes don't change, and HTTP caching works perfectly with SSG. JSONPlaceholder, the API used in this project, is a REST API.

GraphQL shines in products with complex, interconnected data and many different client types — a mobile app, a web app, and a partner API all querying the same graph with different needs. The added complexity of a GraphQL layer pays off when your REST API would otherwise grow into dozens of bespoke endpoints.`,
    date: 'June 22, 2026',
  },
  {
    slug: '10',
    title: 'The Modern Frontend Stack in 2026',
    excerpt: 'From build tools to deployment platforms, the frontend ecosystem has matured dramatically. Here is what a production-grade stack looks like today.',
    content: `The frontend stack has stabilized around a set of tools that cover the full journey from development to production. Understanding each layer helps you make deliberate choices rather than following trends blindly.

Framework: Next.js remains the dominant choice for React applications that need both static and dynamic rendering. Astro is gaining ground for content-heavy sites where shipping zero JavaScript is a priority.

Language: TypeScript is the default for any project expected to grow beyond a single developer. The upfront cost of typing pays back quickly in maintainability.

Styling: CSS Modules for component-scoped styles, global CSS for design tokens and resets. Tailwind CSS is a valid alternative if you prefer utility classes; the two approaches are philosophically different but both work well.

Build tool: Turbopack (bundled with Next.js 15) for development, SWC for production transpilation. Both are written in Rust and dramatically faster than their JavaScript predecessors.

Deployment: Vercel for Next.js, Cloudflare Pages for static-only sites. Both offer edge distribution, preview deployments, and generous free tiers.

CI/CD: GitHub Actions for automation. One workflow file handles lint, type-check, build, and deploy in under three minutes.

This stack is not the only valid choice, but it is well-documented, widely adopted, and supported by large companies with strong incentives to keep it working.`,
    date: 'June 22, 2026',
  },
];

export function getAllPosts() {
  return posts.map(({ slug, title, excerpt, date }) => ({ slug, title, excerpt, date }));
}

export function getPostBySlug(slug) {
  return posts.find(p => p.slug === slug) ?? null;
}
