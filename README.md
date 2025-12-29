This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


Setup instructions:

Initialize the Project 
npx create-next-app@latest.

Install Redux Toolkit and React Redux

npm install @reduxjs/toolkit react-redux react-hot-toast lucide-react axios

Start the Project
npm run dev


SEO Strategy

The application was designed with SEO and accessibility in mind:

Page-specific metadata for each page using Next.js Metadata API (export const metadata).

Open Graph meta tags for better social sharing.

Semantic HTML structure (<main>, <header>, <section>, <footer>).

Heading hierarchy: Proper use of <h1> , <h2> , <h3>.

Alt text: Every image includes meaningful alt attributes.

Mobile-friendly design: Ensured with Tailwind responsive utilities.

Lighthouse Performance Scores
Performance	94%
Accessibility	88%
Best Practices	96%
SEO	98%

Google Analytics (GA4) is integrated to track user engagement and page navigation:

Created a GA4 property and obtained the Measurement ID (G-ZVVXZLPFT2).

Integrated the GA script globally in app/layout.js using <Script> with afterInteractive strategy.

Implemented a custom GAListener component to automatically track route changes and page views.

Verified setup through Google Analytics → Realtime Reports.