import { supabase } from './supabase';
import type { Post, Category } from './database';

export async function getAllPosts(): Promise<Post[]> {
  const { data, error } = await supabase
    .from('posts')
    .select(`
      *,
      categories (
        id,
        name,
        slug
      )
    `)
    .eq('published', true)
    .order('published_at', { ascending: false });

  if (error) {
    console.error('Error fetching posts:', error);
    return [];
  }

  return data || [];
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const { data, error } = await supabase
    .from('posts')
    .select(`
      *,
      categories (
        id,
        name,
        slug
      )
    `)
    .eq('slug', slug)
    .eq('published', true)
    .single();

  if (error) {
    console.error('Error fetching post:', error);
    return null;
  }

  return data;
}

export async function getAllCategories(): Promise<Category[]> {
  const { data, error } = await supabase
    .from('categories')
    .select('*')
    .order('name');

  if (error) {
    console.error('Error fetching categories:', error);
    return [];
  }

  return data || [];
} 