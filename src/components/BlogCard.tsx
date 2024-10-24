// import React from 'react';
// import Image from 'next/image';
// import { motion } from 'framer-motion';
// import { Calendar, Clock, ExternalLink, BookOpen } from 'lucide-react';
// import type { BlogPost } from '@/lib/hashnode';
//
// const BlogCard = ({ post }: { post: BlogPost }) => {
//     const formatDate = (dateString: string) => {
//         return new Intl.DateTimeFormat('es-ES', {
//             year: 'numeric',
//             month: 'long',
//             day: 'numeric'
//         }).format(new Date(dateString));
//     };
//
//     return (
//         <motion.article
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//             className="group"
//         >
//             <a
//                 href={`https://torisoftware.hashnode.dev/${post.slug}`}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="block h-full"
//             >
//                 <div className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg
//                             dark:shadow-gray-900/50 transform transition-all duration-300
//                             hover:shadow-xl border border-gray-200 dark:border-gray-700
//                             hover:border-accent-red dark:hover:border-accent-yellow h-full
//                             flex flex-col">
//                     <div className="aspect-video relative overflow-hidden">
//                         {post.coverImage ? (
//                             <Image
//                                 src={post.coverImage}
//                                 alt={post.title}
//                                 width={600}
//                                 height={400}
//                                 className="object-cover w-full h-full transform transition-transform
//                                          duration-300 group-hover:scale-105"
//                             />
//                         ) : (
//                             <div className="w-full h-full bg-gradient-to-br from-accent-red/20 to-accent-yellow/20
//                                          dark:from-accent-red/10 dark:to-accent-yellow/10 flex items-center justify-center">
//                                 <BookOpen className="w-12 h-12 text-accent-red dark:text-accent-yellow opacity-50" />
//                             </div>
//                         )}
//                     </div>
//
//                     <div className="p-6 flex flex-col flex-grow">
//                         <div className="flex flex-wrap gap-2 mb-4">
//                             {post.tags.map((tag) => (
//                                 <span
//                                     key={tag.name}
//                                     className="text-xs px-2 py-1 rounded-full bg-accent-red/10
//                                              dark:bg-accent-yellow/10 text-accent-red
//                                              dark:text-accent-yellow capitalize"
//                                 >
//                                     {tag.name}
//                                 </span>
//                             ))}
//                         </div>
//
//                         <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white
//                                    group-hover:text-accent-red dark:group-hover:text-accent-yellow
//                                    transition-colors line-clamp-2">
//                             {post.title}
//                         </h3>
//
//                         <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3 flex-grow">
//                             {post.brief}
//                         </p>
//
//                         <div className="mt-auto">
//                             <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
//                                 <div className="flex items-center gap-4">
//                                     <div className="flex items-center gap-1">
//                                         <Calendar className="w-4 h-4" />
//                                         <span>{formatDate(post.dateAdded)}</span>
//                                     </div>
//                                     <div className="flex items-center gap-1">
//                                         <Clock className="w-4 h-4" />
//                                         <span>{post.readTime} min</span>
//                                     </div>
//                                 </div>
//                                 <span className="inline-flex items-center gap-1 text-accent-red
//                                              dark:text-accent-yellow group-hover:gap-2 transition-all">
//                                     Leer más
//                                     <ExternalLink className="w-4 h-4" />
//                                 </span>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </a>
//         </motion.article>
//     );
// };
//
// export default BlogCard;

// src/lib/hashnode.ts
import { GraphQLClient, gql } from 'graphql-request';
import { useState, useEffect } from 'react';

const HASHNODE_API = 'https://api.hashnode.com';
const ACCESS_TOKEN = '595784e1-0af8-4768-82aa-025499fd95d1';

const client = new GraphQLClient(HASHNODE_API, {
    headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
    },
});

export const BLOG_POSTS_QUERY = gql`
  query GetUserArticles {
    user(username: "torisoftware") {
      publication {
        posts(page: 0) {
          edges {
            node {
              _id
              title
              brief
              slug
              dateAdded
              coverImage
              readTime
              tags {
                name
              }
            }
          }
        }
      }
    }
  }
`;

interface Tag {
    name: string;
}

export interface BlogPost {
    _id: string;
    title: string;
    brief: string;
    slug: string;
    coverImage: string | null;
    dateAdded: string;
    readTime: number;
    tags: Tag[];
}

interface Edge {
    node: BlogPost;
}

interface HashnodeResponse {
    user: {
        publication: {
            posts: {
                edges: Edge[];
            };
        };
    };
}

export const useBlogPosts = () => {
    const [posts, setPosts] = useState<BlogPost[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await client.request<HashnodeResponse>(BLOG_POSTS_QUERY);
                const blogPosts = response.user.publication.posts.edges.map(edge => edge.node);
                setPosts(blogPosts);
            } catch (error) {
                console.error('Error fetching posts:', error);
                setError('Error al cargar los artículos');
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    return { posts, loading, error };
};