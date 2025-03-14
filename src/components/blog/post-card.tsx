import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import type { Post } from '@/lib/database';

interface PostCardProps {
  post: Post;
}

export function PostCard({ post }: PostCardProps) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <Card className="overflow-hidden h-full hover:shadow-lg transition-shadow">
        {post.featured_image && (
          <div className="aspect-video relative">
            <Image
              src={post.featured_image}
              alt={post.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        )}
        <CardHeader>
          <div className="space-y-2">
            {post.categories && (
              <Badge variant="secondary">{post.categories.name}</Badge>
            )}
            <h2 className="text-2xl font-bold tracking-tight">{post.title}</h2>
            <p className="text-muted-foreground">
              {new Date(post.published_at || post.created_at).toLocaleDateString(
                'en-US',
                {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric',
                }
              )}
            </p>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground line-clamp-3">{post.excerpt}</p>
        </CardContent>
        <CardFooter>
          <p className="text-sm text-muted-foreground">Read more →</p>
        </CardFooter>
      </Card>
    </Link>
  );
} 