import { Metadata } from 'next';
import { getAllPosts } from '@/lib/api';
import { PostGrid } from '@/components/blog/post-grid';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Read my latest blog posts about technology, personal projects, and more.',
};

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">Blog</h1>
          <p className="text-xl text-muted-foreground">
            Read my latest blog posts about technology, personal projects, and more.
          </p>
        </div>
        <PostGrid posts={posts} />
      </div>
    </div>
  );
} 