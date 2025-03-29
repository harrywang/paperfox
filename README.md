# Paperfox

Paperfox is an AI-first modern paper management system. 

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Authentication**: NextAuth.js
- **Database**: PostgreSQL with Prisma ORM
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Email Service**: Postmark
- **Package Manager**: pnpm

## Prerequisites

- Node.js 18.x or later
- pnpm 8.x or later
- PostgreSQL 16.x or later
- Postmark account (for email functionality)

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
# Database
DATABASE_URL="postgresql://user:password@localhost:5432/paperfox"

# NextAuth
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-key"

# Postmark
POSTMARK_API_KEY="your-postmark-api-key"

# App URL (for development)
NEXT_PUBLIC_APP_URL="http://localhost:3000"
```

## Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/paperfox.git
   cd paperfox
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Set up the database**
   ```bash
   # Create and apply migrations
   pnpm prisma migrate dev
   ```

4. **Start the development server**
   ```bash
   pnpm dev
   ```

5. **Initial Setup**
   - Visit `http://localhost:3000/setup`
   - Create your first admin account
   - After setup, you can sign in and access the dashboard

## Deployment

The application is designed to be deployed on Vercel or similar platforms that support Next.js applications. Make sure to:

1. Set up all required environment variables
2. Configure the database connection (we use Neon)
3. Set up Postmark for email functionality (configure your domain and sender signature)

## License

This project is licensed under the MIT License - see the LICENSE file for details.

