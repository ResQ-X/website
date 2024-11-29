import React from 'react';
import { Metadata } from 'next';
import BlogDetailsClient from '@/views/blog/BlogDetailsClient';
import { getPostById, BlogPost } from '@/server/blog';

type Props = {
  params: {
    id: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = params;
  const post = await getPostById(parseInt(id));

  if (!post) {
    return {
      title: 'Post Not Found',
      description: 'The requested blog post could not be found'
    };
  }


  return {
    title: post.title,
    description: post.meta_description || post.description.substring(0, 160),
    keywords: post.meta_keywords,
    openGraph: {
      title: post.title,
      description: post.meta_description || post.description.substring(0, 160),
      images: post.featured_image_urls 
        ? [{ 
            url: post.featured_image_urls.large || post.featured_image_urls.original, 
            alt: post.title 
          }] 
        : []
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.meta_description || post.description.substring(0, 160),
      images: post.featured_image_urls 
        ? [post.featured_image_urls.large || post.featured_image_urls.original] 
        : []
    }
  };
}

const BlogDetailsPage = async ({ params }: Props) => {
  const { id } = params;

  // Fetch the post on the server side
  const post = await getPostById(parseInt(id));

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="text-center text-red-600">Post not found</div>
      </div>
    );
  }

  // Pass post data and id as props to the client-side component
  return <BlogDetailsClient id={id} />;
};

export default BlogDetailsPage;
