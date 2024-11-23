import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import { getPostsByCategory, BlogPost, Category } from '@/server/blog';

interface RelatedPostCardProps {
  post: BlogPost;
}

interface RelatedPostsSectionProps {
  activeCategory: Category | null;
}

const containerVariants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      staggerChildren: 0.15
    }
  }
};

const cardVariants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

const RelatedPostCard = ({ post }: RelatedPostCardProps) => {
  const formattedDate = new Date(post.created_at).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  });

  return (
    <Link href={`/blog/${post.id}`}>
      <motion.div 
        variants={cardVariants}
        className="group flex flex-col border rounded-lg overflow-hidden shadow-md mb-6 hover:shadow-lg transition-all duration-300 hover:border-[#FF8500] cursor-pointer"
      >
        <div className="relative h-64 overflow-hidden">
          <Image 
            src={post.featured_image_urls?.original || '/images/home/blog/carImg.jpeg'}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="p-4 flex flex-col justify-between h-64 bg-white">
          <div>
            <h3 className="text-xl text-[#292219] font-bold mb-2 line-clamp-2 group-hover:text-[#FF8500] transition-colors duration-300">
              {post.title}
            </h3>
            <p className="mb-4 text-[#292219] line-clamp-3">
              {post.description}
            </p>
          </div>
          <div className="flex items-center justify-end text-[#94908C]">
            <Calendar size={16} className="mr-2" />
            <span className="text-sm">{formattedDate}</span>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

const getRelatedCategoryId = (currentCategoryId: number): number => {
  if (!currentCategoryId) return 1;
  
  if (currentCategoryId >= 6) {
    return 1;
  } else if (currentCategoryId % 2 === 0) {
    return currentCategoryId + 1;
  } else {
    return currentCategoryId + 1;
  }
};

export default function RelatedPostsSection({ activeCategory }: RelatedPostsSectionProps) {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRelatedPosts = async () => {
      try {
        setIsLoading(true);
        setError(null);

        if (!activeCategory) return;

        let fetchedPosts = await getPostsByCategory(getRelatedCategoryId(activeCategory.id));
        
        if (!fetchedPosts || fetchedPosts.length === 0) {
          fetchedPosts = await getPostsByCategory(1);
          
          if (!fetchedPosts || fetchedPosts.length === 0) {
            for (let i = 2; i <= 6; i++) {
              fetchedPosts = await getPostsByCategory(i);
              if (fetchedPosts && fetchedPosts.length > 0) break;
            }
          }
        }

        if (!fetchedPosts || fetchedPosts.length === 0) {
          setError('No posts available at this time');
          return;
        }

        setPosts(fetchedPosts.slice(0, 4));
      } catch (err) {
        setError('Failed to load related posts');
        console.error('Error fetching related posts:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchRelatedPosts();
  }, [activeCategory]);

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center"
        >
          <p className="text-2xl text-gray-600">Loading related posts...</p>
        </motion.div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="text-center text-red-600">{error}</div>
      </div>
    );
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className="container mx-auto px-4 py-12"
    >
      <motion.h2 
        variants={cardVariants}
        className="font-semibold mb-[96px] text-center text-[#332414] w-full text-[64px]"
      >
        You might like
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {posts.map((post) => (
          <RelatedPostCard 
            key={post.id}
            post={post}
          />
        ))}
      </div>
    </motion.div>
  );
}