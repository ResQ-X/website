import React from 'react';
import BlogDetailsClient from '@/views/blog/BlogDetailsClient';
import { getPostById, BlogPost } from '@/server/blog';

type Props = {
  params: {
    id: string;
  };
};

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
