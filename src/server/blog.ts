// src/utils/api/blog.ts

// Types
export interface Category {
    id: number;
    name: string;
  }
  
  export interface BlogPost {
    id: number;
    title: string;
    description: string;
    slug: string;
    author: string;
    category: Category;
    created_at: string;
    updated_at: string;
    formatted_views: string;
    time_since_post: string;
    featured_image_urls: {
      original: string;
      thumbnail: string;
      medium: string;
      large: string;
    } | null;
  }
  
  const BASE_URL = 'http://localhost:8000/api';
  
  // API Helper Functions
  export async function getCategories(): Promise<Category[]> {
    try {
      const response = await fetch(`${BASE_URL}/categories/`);
      if (!response.ok) throw new Error('Failed to fetch categories');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching categories:', error);
      return [];
    }
  }
  
  export async function getPostsByCategory(categoryId: number): Promise<BlogPost[]> {
    try {
      const response = await fetch(`${BASE_URL}/posts/related_stories/?category=${categoryId}`);
      if (!response.ok) throw new Error('Failed to fetch posts');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching posts by category:', error);
      return [];
    }
  }
  
  export async function getAllPosts(): Promise<BlogPost[]> {
    try {
      const response = await fetch(`${BASE_URL}/posts/`);
      if (!response.ok) throw new Error('Failed to fetch posts');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching all posts:', error);
      return [];
    }
  }