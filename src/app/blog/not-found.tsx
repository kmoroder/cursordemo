import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Post Not Found',
};

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-xl mx-auto text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Post Not Found</h1>
        <p className="text-xl text-muted-foreground">
          Sorry, we couldn't find the blog post you're looking for.
        </p>
        <div className="mt-8">
          <Link
            href="/blog"
            className="text-primary hover:underline"
          >
            ← Back to Blog
          </Link>
        </div>
      </div>
    </div>
  );
} 