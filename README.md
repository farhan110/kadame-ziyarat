# Kadame Ziyarat Website

Premium Next.js 14 website for Kadame Ziyarat, a Hajj, Umrah and Iraq Ziyarat tour company from India.

## What is included

- Next.js 14 App Router structure
- Tailwind CSS design system using the requested gold, green, black, ivory and burgundy palette
- CMS style content layer in `lib/content.ts` for packages, blog posts, FAQs, testimonials and pages
- Dynamic static routes for all package, city, blog, visa and legal pages
- Sticky header, WhatsApp floating button and quick enquiry form
- FAQ JSON LD, Organization schema, Breadcrumb schema and Product schema
- Sitemap and robots routes for Vercel deployment
- Responsive mobile first layout with CSS reveal, glow and floating animations

## Run locally

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Deploy

Push the project to GitHub and import it into Vercel. The default build command is:

```bash
npm run build
```

## Content editing

Edit `lib/content.ts` to change package prices, page copy, blog topics, city pages, testimonials and FAQ answers. This file acts as a lightweight headless CMS layer and can later be swapped for Sanity, Contentful, Strapi or another CMS without changing the page renderer.
