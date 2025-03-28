This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Prerequisites

- Node.js 18+ and pnpm
- PostgreSQL database
- [Prisma CLI](https://www.prisma.io/docs/getting-started/installation)

## Database Setup

1. Create a PostgreSQL database:
```bash
createdb paperfox
```

2. Set up your environment variables:
```bash
cp .env.example .env
```
Then update the `.env` file with your database credentials and generate a secure `NEXTAUTH_SECRET`:
```bash
openssl rand -base64 32
```

3. Run Prisma migrations:
```bash
pnpm prisma generate
pnpm prisma migrate dev --name init
pnpm prisma migrate dev
```

## Getting Started

First, run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Authentication

The project uses NextAuth.js with Prisma adapter for authentication. You can:

1. Register a new account at `/auth/register`
2. Sign in at `/auth/signin`
3. Protected routes are automatically redirected to the sign-in page

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [Prisma Documentation](https://www.prisma.io/docs) - learn about Prisma ORM.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

