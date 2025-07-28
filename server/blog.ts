// src/utils/api/blog.ts

// Types
export interface Category {
  id: number;
  name: string;
}

// export interface BlogPost {
//   id: number;
//   title: string;
//   description: string;
//   slug: string;
//   author: string;
//   category: Category;
//   created_at: string;
//   updated_at: string;
//   formatted_views: string;
//   time_since_post: string;
//   featured_image_urls: {
//     original: string;
//     thumbnail: string;
//     medium: string;
//     large: string;
//   } | null;
//   meta_keywords?: string;
//   meta_description?: string;
// }

export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  created_at: string;
  category: {
    name: string;
  };
  featured_image_urls: {
    large: string;
    original: string;
  } | null;
  meta_keywords?: string | string[] | null;
  meta_description?: string | null;
  description?: string; // For backward compatibility
}

// const BASE_URL = "https://resqx-blog.onrender.com/api";

const BASE_URL = "https://resqx.com.ng/wp-json/wp/v2";

// export async function getBlogPosts(): Promise<Category[]> {
//   try {
//     const response = await fetch(`${BASE_URL}/posts`);
//     if (!response.ok) throw new Error("Failed to fetch blog posts");
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error("Error fetching blog posts:", error);
//     return [];
//   }
// }

// API Helper Functions
export async function getCategories(): Promise<Category[]> {
  try {
    const response = await fetch(`${BASE_URL}/categories/`);
    if (!response.ok) throw new Error("Failed to fetch categories");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
}

export async function getPostsByCategory(
  categoryId: number
): Promise<BlogPost[]> {
  try {
    const response = await fetch(
      `${BASE_URL}/posts/related_stories/?category=${categoryId}`
    );
    if (!response.ok) throw new Error("Failed to fetch posts");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching posts by category:", error);
    return [];
  }
}

// export async function getAllPosts(): Promise<BlogPost[]> {
//   try {
//     const response = await fetch(`${BASE_URL}/posts`);
//     if (!response.ok) throw new Error("Failed to fetch posts");
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error("Error fetching all posts:", error);
//     return [];
//   }
// }

export async function getAllPosts(): Promise<BlogPost[]> {
  try {
    const response = await fetch(
      // "https://resqx.com.ng/wp-json/wp/v2/posts?_embed"
      `${BASE_URL}/posts`
    );
    if (!response.ok) throw new Error("Failed to fetch posts");

    const data = await response.json();

    return data.map(
      (post: {
        id: number;
        title: { rendered: string };
        slug: string;
        content: { rendered: string };
        excerpt: { rendered: string };
        date: string;
        _embedded?: {
          "wp:term"?: Array<Array<{ name: string }>>;
          "wp:featuredmedia"?: Array<{ source_url: string }>;
        };
      }) => ({
        id: post.id,
        title: post.title.rendered,
        slug: post.slug,
        content: post.content.rendered,
        excerpt: post.excerpt.rendered,
        created_at: post.date,
        category: {
          name: post._embedded?.["wp:term"]?.[0]?.[0]?.name ?? "Uncategorized",
        },
        featured_image_urls: {
          original:
            post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ??
            "/images/home/blog/carImg.jpeg",
        },
      })
    );
  } catch (error) {
    console.error("Error fetching all posts:", error);
    return [];
  }
}

export async function getPostById(id: number): Promise<BlogPost> {
  try {
    const response = await fetch(`${BASE_URL}/posts/${id}/?_embed`);
    if (!response.ok) {
      throw new Error("Failed to fetch post");
    }

    const post = await response.json();

    // Transform the WordPress API response to match our BlogPost interface
    return {
      id: post.id,
      title: post.title.rendered,
      slug: post.slug,
      content: post.content.rendered,
      excerpt: post.excerpt.rendered,
      created_at: post.date,
      category: {
        name: post._embedded?.["wp:term"]?.[0]?.[0]?.name ?? "Uncategorized",
      },
      featured_image_urls: {
        original:
          post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ??
          "/images/home/blog/carImg.jpeg",
        large:
          post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ??
          "/images/home/blog/carImg.jpeg",
      },
      meta_keywords: post.meta?.keywords || null,
      meta_description: post.meta?.description || null,
      description: post.excerpt.rendered, // For backward compatibility
    };
  } catch (error) {
    console.error("Error fetching post:", error);
    throw error;
  }
}

export async function incrementPostViews(
  id: number,
  title: string,
  description: string,
  categoryId: number
): Promise<{ status: string; views: number }> {
  try {
    const response = await fetch(`${BASE_URL}/posts/${id}/increment_views/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        description,
        category_id: categoryId, // You can pass this dynamically based on the post
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to increment views");
    }

    return await response.json();
  } catch (error) {
    console.error("Error incrementing views:", error);
    throw error;
  }
}
