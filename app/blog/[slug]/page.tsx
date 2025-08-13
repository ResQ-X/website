/* eslint-disable */
import React from "react";
import { Metadata } from "next";
import BlogDetailsClient from "@/components/blog/BlogDetailsClient";
import { getPostById, getAllPosts } from "@/server/blog";

type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

// Helper function to get post ID from slug
async function getPostIdBySlug(slug: string): Promise<number | null> {
  const allPosts = await getAllPosts();
  const post = allPosts.find((p) => p.slug === slug);
  return post ? post.id : null;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const postId = await getPostIdBySlug(slug);

  if (!postId) {
    return {
      title: "Post Not Found",
      description: "The requested blog post could not be found.",
    };
  }

  const post = await getPostById(postId);

  if (!post) {
    return {
      title: "Post Not Found",
      description: "The requested blog post could not be found.",
    };
  }

  console.log("Posts by Id", post);

  return {
    title: post?.title || "Blog Post",
    description: post?.excerpt
      ? post.excerpt.replace(/<[^>]*>/g, "").slice(0, 160)
      : "Blog post description",
    keywords: "blog, article, post",
    openGraph: {
      title: post?.title || "Blog Post",
      description: post?.excerpt
        ? post.excerpt.replace(/<[^>]*>/g, "").slice(0, 160)
        : "Blog post description",
      images: [
        {
          url:
            post?.featured_image_urls?.original ||
            "/images/home/blog/carImg2.jpeg",
          alt: post?.title || "Blog Post",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post?.title || "Blog Post",
      description: post?.excerpt
        ? post.excerpt.replace(/<[^>]*>/g, "").slice(0, 160)
        : "Blog post description",
      images: [
        post?.featured_image_urls?.original || "/images/home/blog/carImg2.jpeg",
      ],
    },
  };
}

export default async function BlogDetailsPage({ params }: Props) {
  const { slug } = await params;
  const postId = await getPostIdBySlug(slug);

  if (!postId) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="text-center text-red-600">Post not found</div>
      </div>
    );
  }

  const post = await getPostById(postId);

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="text-center text-red-600">Post not found</div>
      </div>
    );
  }

  return <BlogDetailsClient posts={post} />;
}
