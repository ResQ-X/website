// import React, { useEffect, useState } from 'react';
// import { useRouter } from 'next/router';
// import Image from 'next/image';
// import { Calendar, Eye, User } from 'lucide-react';
// import { motion } from 'framer-motion';
// import { getPostById, incrementPostViews, BlogPost } from '@/server/blog';
// import RelatedPostsSection from '@/views/blog/RelatedPostsSection';

// const BlogDetails = () => {
//   const router = useRouter();
//   const { id } = router.query;
//   const [post, setPost] = useState<BlogPost | null>(null);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchPost = async () => {
//       if (!id || typeof id !== 'string') return;

//       try {
//         setIsLoading(true);
//         setError(null);
        
//         // Fetch post details
//         const postData = await getPostById(parseInt(id));
//         setPost(postData);
        
//         // Increment view count
//         await incrementPostViews(parseInt(id));
//       } catch (err) {
//         setError('Failed to load blog post');
//         console.error('Error:', err);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchPost();
//   }, [id]);

//   if (isLoading) {
//     return (
//       <div className="container mx-auto px-4 py-12">
//         <div className="text-center">
//           <p className="text-2xl text-gray-600">Loading post...</p>
//         </div>
//       </div>
//     );
//   }

//   if (error || !post) {
//     return (
//       <div className="container mx-auto px-4 py-12">
//         <div className="text-center text-red-600">
//           {error || 'Post not found'}
//         </div>
//       </div>
//     );
//   }

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5 }}
//       className="container mx-auto px-4 py-12"
//     >
//       <div className="max-w-4xl mx-auto">
//         {/* Header */}
//         <h1 className="text-4xl font-bold text-[#292219] mb-6">{post.title}</h1>
        
//         {/* Meta information */}
//         <div className="flex items-center gap-6 text-[#94908C] mb-8">
//           <div className="flex items-center">
//             <User size={16} className="mr-2" />
//             <span>{post.author}</span>
//           </div>
//           <div className="flex items-center">
//             <Calendar size={16} className="mr-2" />
//             <span>{post.time_since_post}</span>
//           </div>
//           <div className="flex items-center">
//             <Eye size={16} className="mr-2" />
//             <span>{post.formatted_views}</span>
//           </div>
//           <div className="px-3 py-1 bg-[#F5F5F5] rounded-full">
//             {post.category.name}
//           </div>
//         </div>

//         {/* Featured Image */}
//         <div className="relative h-[500px] mb-8 rounded-lg overflow-hidden">
//           <Image
//             src={post.featured_image_urls?.large || post.featured_image_urls?.original || "/images/home/blog/carImg2.jpeg"}
//             alt={post.title}
//             fill
//             className="object-cover"
//           />
//         </div>

//         {/* Content */}
//         <div className="prose max-w-none">
//           <p className="text-lg text-[#292219]">{post.description}</p>
//         </div>

//         {/* Related Posts */}
//         <div className="mt-16">
//           <RelatedPostsSection activeCategory={post.category} />
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// export default BlogDetails;