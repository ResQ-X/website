'use client';

import React, { useEffect, useState } from 'react';
import { ChevronLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import { incrementPostViews, BlogPost, getPostById } from '@/server/blog';
import RelatedPostsSection from '@/components/blog/RelatedPostsSection';
import arrow from "@/public/icons/arrow.png"
import Image from "next/image";


type BlogDetailsClientProps = {
  id: string;
};

const BlogDetailsClient = ({ id }: BlogDetailsClientProps) => {
  const [post, setPost] = useState<BlogPost | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const postData = await getPostById(parseInt(id));
        setPost(postData);
      } catch (err) {
        setError('Failed to load blog post');
        console.error('Error:', err);
      } finally {
        setIsLoading(false);
      }
    };
  
    fetchPost();
  }, [id]);

  useEffect(() => {
    if (post) {
      const incrementViewCount = async () => {
        try {
          await incrementPostViews(post.id, post.title, post.description, post.category.id);
        } catch (err) {
          console.error('Error:', err);
        }
      };
      incrementViewCount();
    }
  }, [post]);

  if (isLoading) return (
    <div className="min-h-screen">
      <div className="text-center"><p className="text-2xl text-white">Loading post...</p></div>
    </div>
  );

  if (error) return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center text-red-600">{error}</div>
    </div>
  );

  if (!post) return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center text-red-600">Post not found</div>
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="px-4 lg:px-8 lg:pt-6 pb-12 pt-[100px] mt-[100px] min-h-screen mx-auto relative"
    >
      <div className="flex items-center w-[213px] gap-[24px] mb-6">
        <button
          onClick={() => window.history.back()}
          className="flex w-[75px] gap-[12px] items-center text-white"
        >
          <Image src={arrow} alt="arrow left" className='scale-[-1] transform' priority />
          <span className="ml-1">Back</span>
        </button>
        
        <div className="flex font-normal text-[14px] items-center justify-center w-[107px] h-[28px] rounded-[6px] bg-[#FF8500] text-white capitalize text-sm">
          {post.category.name}
        </div>
      </div>

      <h1 className="text-4xl lg:text-[36px] font-semibold mb-4 w-full">
        {post.title}
      </h1>

      <p className="text-[#696A75] font-normal mb-8">
        {new Date(post.created_at).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        })}
      </p>

      <div
        className="w-full h-[721px] mb-12 rounded-[12px] overflow-hidden relative"
        style={{
          backgroundImage: `url(${post.featured_image_urls?.large || post.featured_image_urls?.original || '/images/home/blog/carImg2.jpeg'})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-[#14162466]"></div>
      </div>

      <div className="mx-auto relative">
        <div className="prose leading-[52px] prose-lg text-white w-full">
          <div dangerouslySetInnerHTML={{ __html: post.description }} />
        </div>
        <div className="absolute top-0 right-0 bg-orange bg-opacity-50 blur-[225px] w-[283px] h-[283px] z-[-1]"></div>
        <div className="absolute bottom-10 left-0 bg-orange bg-opacity-50 blur-[225px] w-[283px] h-[283px] z-[-1]"></div>
        <div className="absolute top-[50%] right-[50%] bg-orange bg-opacity-50 blur-[295px] w-[283px] h-[283px] z-[-1]"></div>


      </div>

      <div className="mt-16">
        <RelatedPostsSection activeCategory={post.category} />
      </div>
    </motion.div>
  );
};

export default BlogDetailsClient;