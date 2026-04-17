## DESIGN.md Playground

This app previews a shared shadcn canvas with multiple hand-maintained `DESIGN.md` profiles.

The five supported source packs are vendored inside the repo under `content/design-md/` so deployment does not depend on any local absolute path:

- `ibm`
- `cursor`
- `stripe`
- `notion`
- `claude`

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

Open [http://localhost:3000/playground](http://localhost:3000/playground) with your browser to see the result.

## Source Content

Brand source files live in:

```text
content/design-md/<brand>/
```

Each brand folder currently includes:

- `DESIGN.md`
- `README.md`
- `preview.html`
- `preview-dark.html`

The app reads those files from relative paths at build time, which makes static deployment work on Vercel and similar platforms.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
