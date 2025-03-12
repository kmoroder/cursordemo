# Next.js and Supabase Blog Template

A fullstack blog template built with Next.js and Supabase.

## Features

- ⚡️ Next.js with App Router
- 💾 Supabase for database, auth, and storage
- 🎨 Tailwind CSS for styling
- 📝 Blog post creation and management
- 🔐 Authentication with Supabase Auth
- 🖼️ Image uploads with Supabase Storage
- 📱 Responsive design
- 🔍 SEO optimized

## Getting Started

### Prerequisites

- Node.js 18+ (specified in .nvmrc)
- Supabase account

### Installation

1. Clone this repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Copy `.env.example` to `.env.local` and update with your Supabase credentials:
   ```bash
   cp .env.example .env.local
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

## Project Structure

```
src/
├── app/                 # Next.js App Router
│   ├── (auth)/          # Authentication routes
│   ├── blog/            # Blog routes
│   ├── api/             # API routes
├── components/          # React components
│   ├── ui/              # Reusable UI components
│   ├── blog/            # Blog-specific components
│   ├── auth/            # Authentication components
├── lib/                 # Utility functions
│   ├── supabase.ts      # Supabase client
│   ├── utils.ts         # Utility functions
│   ├── api.ts           # API helpers
│   ├── database.types.ts # Supabase database types
```

## Deployment

This project can be deployed to Vercel:

```bash
npm run build
npm run start
```

## License

MIT