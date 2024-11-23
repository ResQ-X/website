'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Calendar, ChevronLeft, Eye, User } from 'lucide-react';
import { motion } from 'framer-motion';
import { incrementPostViews, BlogPost, getPostById } from '@/server/blog';
import RelatedPostsSection from '@/views/blog/RelatedPostsSection';
import { HomeCtaSection } from "@/views/home/HomeCtaSection";
import { NavButton } from '@/components/navbar/NavButton';


type BlogDetailsClientProps = {
  id: string;
};

const BlogDetailsClient = ({ id }: BlogDetailsClientProps) => {
  const [post, setPost] = useState<BlogPost | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  function setDropdown(event: any) {
    const target = event.target as HTMLElement;
    const detailsElement = target.closest("details");
    if (detailsElement) {
      if (detailsElement.hasAttribute("open")) {
        detailsElement.removeAttribute("open");
      } else {
        detailsElement.setAttribute("open", "true");
      }
    }
  }

  function handleActiveDetails(keyValue: string, event: any) {
    const detailsElementList = Array.from(document.querySelectorAll("details"));
    if (detailsElementList.length !== 0) {
      detailsElementList.forEach((details, index) => {
        const keyAttr = details.getAttribute("data-key");
        if (keyAttr !== keyValue && details.hasAttribute("open")) {
          details.removeAttribute("open");
        }
      });
    }
  }

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const postData = await getPostById(parseInt(id));
        console.log("Fetched post data:", postData);  // Log fetched data
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

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="text-center">
          <p className="text-2xl text-gray-600">Loading post...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="text-center text-red-600">
          {error}
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="text-center text-red-600">
          Post not found
        </div>
      </div>
    );
  }

  return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="px-4 pt-[7rem] min-h-screen"
            >
            {/* Full-width background image with height of 733px */}
            <div
                className="relative rounded-[40px] flex flex-col items-center justify-center w-full h-[733px] mb-8 overflow-hidden"
                style={{
                backgroundImage: `url(${post.featured_image_urls?.large || post.featured_image_urls?.original || '/images/home/blog/carImg2.jpeg'})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                }}
            >
            <div className="absolute inset-0 rounded-[40px] bg-black opacity-10"></div>

                {/* "Go Back" Button */}
                <button
                onClick={() => window.history.back()}
                className="px-4 py-2 bg-transparent w-[127px] h-[44px] text-white rounded-[30px] border border-white  gap-[10px] flex items-center justify-center z-[10] font-bold mb-9"
                >
                <ChevronLeft size={18} />
                <span>Go Back</span>
                </button>

                {/* Title */}
                <h2
                className="text-white font-raleway z-[10] text-[68px] font-bold leading-tight tracking-tighter"
                style={{
                    textDecoration: 'none',
                    textUnderlinePosition: 'from-font',
                    textDecorationSkipInk: 'none',
                }}
                >
                {post.title}
                </h2>
            </div>

            {/* Content Layout */}
            <div className="px-[90px] pt-[30px] pb-[100px] mx-auto">
                {/* Category */}
                <div className="text-[18px] tracking-tighter text-[#FF8500] font-[600] mb-4 capitalize">{post.category.name}</div>

                {/* Description and Aside */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Description */}
                <div className="prose w-[800px] font-[400] text-[18px] tracking-tighter leading-[35.13px] text-[#444]">
                    <p>{post.description}</p>
                </div>

                {/* Aside: Share Post, People Also Read, Related Posts */}
                <div className="space-y-8 flex flex-col justify-center rounded-[40px] bg-opacity-90 items-center bg-black h-[30rem]">
                    <div className="text-[29px] tracking-[-2%] leading-[38.18px] w-[254px] text-center font-semibold text-[#FF8500] font-raleway">Get More Done Together With Us.</div>

                    <ul className="menu menu-horizontal px-1">
                        <NavButton
                            keyValue="getapp"
                            onSummaryClick={(e) => handleActiveDetails("getapp", e)}
                            onClick={(e) => setDropdown(e)}
                        />
                    </ul>
                    
                </div>
                </div>
            </div>

            <HomeCtaSection />
            <div className="mt-8">
                <RelatedPostsSection activeCategory={post.category} />
            </div>
    </motion.div>

  );
};

export default BlogDetailsClient;
