# Next.js and Supabase Blog Template

A fullstack blog template built with Next.js and Supabase.

## Features

- ⚡️ Next.js 14+ with App Router
- 💾 Supabase for database for storage
- 🎨 Tailwind CSS for styling
- 📱 Responsive design
- 🔍 SEO optimized

## Getting Started

### Prerequisites

- Node.js 20+ (specified in .nvmrc)
- Supabase account

### Installation

1. Clone this repository
2. Run the initial setup script:
   ```bash
   chmod +x setup.sh
   ./setup.sh
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## Ideal Project Structure

```
src/
├── app/                 # Next.js App Router
│   ├── blog/            # Blog routes
│   ├── api/             # API routes
├── components/          # React components
│   ├── ui/              # Reusable UI components
│   ├── blog/            # Blog-specific components
├── lib/                 # Utility functions
│   ├── supabase.ts      # Supabase client
│   ├── utils.ts         # Utility functions
│   ├── api.ts           # API helpers
│   ├── database.types.ts # Supabase database types
```

## Database Setup

This template requires the following tables in your Supabase database:

1. `posts` - Blog posts
2. `categories` - Blog categories

Run the SQL setup script in your Supabase SQL editor:

```sql
-- Create tables
CREATE TABLE categories (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  name TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL
);

CREATE TABLE posts (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  content TEXT,
  featured_image TEXT,
  excerpt TEXT,
  category_id UUID REFERENCES categories(id),
  published BOOLEAN DEFAULT false,
  published_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL
);

-- Set up RLS policies
ALTER TABLE categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE posts ENABLE ROW LEVEL SECURITY;

-- Categories policies
CREATE POLICY "Categories are viewable by everyone" ON categories
  FOR SELECT USING (true);

CREATE POLICY "Only authenticated users can create categories" ON categories
  FOR INSERT WITH CHECK (auth.role() = 'authenticated');

-- Posts policies
CREATE POLICY "Published posts are viewable by everyone" ON posts
  FOR SELECT USING (published = true);

-- Set up realtime
BEGIN;
  DROP PUBLICATION IF EXISTS supabase_realtime;
  CREATE PUBLICATION supabase_realtime FOR TABLE posts, categories;
COMMIT;

-- Set up storage
INSERT INTO storage.buckets (id, name) VALUES ('blog_images', 'Blog Images');
```

## Deployment

This project can be deployed to Vercel:

```bash
npm run build
npm run start
```

## License

MIT