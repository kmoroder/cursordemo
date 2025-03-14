import Link from 'next/link';
import { getAllPosts } from '@/lib/api';
import { PostGrid } from '@/components/blog/post-grid';

export default async function HomePage() {
  const posts = await getAllPosts();
  const recentPosts = posts.slice(0, 3);

  return (
    <main className="container mx-auto px-4 py-16">
      <div className="space-y-16">
        {/* Hero Section */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <h1 className="text-5xl font-bold tracking-tight">
            Welcome to My Blog
          </h1>
          <p className="text-xl text-muted-foreground">
            A personal blog about technology, projects, and everything in between.
          </p>
        </div>

        {/* Recent Posts Section */}
        <div className="space-y-8">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-bold tracking-tight">Recent Posts</h2>
            <Link
              href="/blog"
              className="text-primary hover:underline"
            >
              View all posts →
            </Link>
          </div>
          <PostGrid posts={recentPosts} />
        </div>
      </div>
    </main>
  );
}
