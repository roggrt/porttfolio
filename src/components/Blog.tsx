//
// // src/components/Blog.tsx
// 'use client';
//
// import { useState, useEffect } from 'react';
// import { Search, Filter, Loader2 } from 'lucide-react';
// import Link from 'next/link';
// import Image from 'next/image';
// import {
//     getBlogPosts,
//     getCategories,
//     getTags,
//     searchBlogPosts,
// } from '@/lib/contentful';
//
// // Definimos interfaces más precisas
// interface ContentfulImage {
//     fields?: {
//         file: {
//             url: string;
//         };
//         title?: string;
//     };
// }
//
// interface ContentfulAuthor {
//     fields?: {
//         title?: string;
//     };
// }
//
// interface BlogPost {
//     sys: {
//         id: string;
//         createdAt: string;
//     };
//     fields: {
//         title: string;
//         body: {
//             content: Array<{
//                 content: Array<{
//                     value: string;
//                 }>;
//             }>;
//         };
//         image?: ContentfulImage;
//         featuredImageAltText?: string;
//         categories?: string[];
//         authorInfo?: ContentfulAuthor;
//     };
// }
//
// function BlogComponent() {
//     const [posts, setPosts] = useState<BlogPost[]>([]);
//     const [categories, setCategories] = useState<string[]>([]);
//     const [tags, setTags] = useState<string[]>([]);
//     const [selectedCategory, setSelectedCategory] = useState<string>('');
//     const [selectedTag, setSelectedTag] = useState<string>('');
//     const [searchQuery, setSearchQuery] = useState<string>('');
//     const [isLoading, setIsLoading] = useState(true);
//     const [showFilters, setShowFilters] = useState(false);
//
//     useEffect(() => {
//         const loadInitialData = async () => {
//             try {
//                 const [postsData, categoriesData, tagsData] = await Promise.all([
//                     getBlogPosts(),
//                     getCategories(),
//                     getTags()
//                 ]);
//                 setPosts(postsData);
//                 setCategories(categoriesData);
//                 setTags(tagsData);
//             } catch (error) {
//                 console.error('Error loading initial data:', error);
//             } finally {
//                 setIsLoading(false);
//             }
//         };
//
//         loadInitialData();
//     }, []);
//
//     // Función segura para obtener la URL de la imagen
//     const getImageUrl = (post: BlogPost): string | null => {
//         return post.fields.image?.fields?.file?.url
//             ? `https:${post.fields.image.fields.file.url}`
//             : null;
//     };
//
//     // Función segura para obtener el nombre del autor
//     const getAuthorName = (post: BlogPost): string | null => {
//         return post.fields.authorInfo?.fields?.title || null;
//     };
//
//     return (
//         <div className="min-h-screen pt-24 px-6">
//             <div className="max-w-7xl mx-auto">
//                 {/* Header */}
//                 <div className="mb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
//                     <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
//                         Blog
//                     </h1>
//
//                     {/* Búsqueda */}
//                     <div className="flex items-center gap-4 w-full md:w-auto">
//                         <div className="relative flex-1 md:w-64">
//                             <input
//                                 type="text"
//                                 placeholder="Buscar artículos..."
//                                 value={searchQuery}
//                                 onChange={(e) => setSearchQuery(e.target.value)}
//                                 className="w-full px-4 py-2 pl-10 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-accent-red dark:focus:ring-accent-yellow outline-none transition-all"
//                             />
//                             <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
//                         </div>
//                     </div>
//                 </div>
//
//                 {/* Lista de posts */}
//                 {isLoading ? (
//                     <div className="flex justify-center items-center min-h-[400px]">
//                         <Loader2 className="w-8 h-8 animate-spin text-accent-red dark:text-accent-yellow" />
//                     </div>
//                 ) : posts.length > 0 ? (
//                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                         {posts.map((post) => {
//                             const imageUrl = getImageUrl(post);
//                             const authorName = getAuthorName(post);
//
//                             return (
//                                 <article
//                                     key={post.sys.id}
//                                     className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all"
//                                 >
//                                     {imageUrl && (
//                                         <Link href={`/blog/${post.sys.id}`}>
//                                             <div className="relative h-48 w-full">
//                                                 <Image
//                                                     src={imageUrl}
//                                                     alt={post.fields.featuredImageAltText || post.fields.title}
//                                                     fill
//                                                     className="object-cover"
//                                                 />
//                                             </div>
//                                         </Link>
//                                     )}
//
//                                     <div className="p-6">
//                                         {/* Categorías */}
//                                         {post.fields.categories && post.fields.categories.length > 0 && (
//                                             <div className="flex flex-wrap gap-2 mb-3">
//                                                 {post.fields.categories.map((category) => (
//                                                     <span
//                                                         key={category}
//                                                         className="text-xs text-accent-red dark:text-accent-yellow bg-red-50 dark:bg-yellow-900/20 rounded-full px-3 py-1"
//                                                     >
//                                                         {category}
//                                                     </span>
//                                                 ))}
//                                             </div>
//                                         )}
//
//                                         <Link href={`/blog/${post.sys.id}`}>
//                                             <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 hover:text-accent-red dark:hover:text-accent-yellow transition-colors">
//                                                 {post.fields.title}
//                                             </h2>
//                                         </Link>
//
//                                         <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
//                                             {post.fields.body.content[0].content[0].value}
//                                         </p>
//
//                                         <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400">
//                                             <span>
//                                                 {new Date(post.sys.createdAt).toLocaleDateString('es-ES', {
//                                                     year: 'numeric',
//                                                     month: 'long',
//                                                     day: 'numeric'
//                                                 })}
//                                             </span>
//                                             {authorName && (
//                                                 <span>{authorName}</span>
//                                             )}
//                                         </div>
//                                     </div>
//                                 </article>
//                             );
//                         })}
//                     </div>
//                 ) : (
//                     <div className="text-center py-12">
//                         <p className="text-gray-600 dark:text-gray-400">
//                             No se encontraron artículos que coincidan con tu búsqueda.
//                         </p>
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// }
//
// export default BlogComponent;

// src/components/Blog.tsx
'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Loader2 } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

interface BlogPost {
    sys: {
        id: string;
        createdAt: string;
    };
    fields: {
        title: string;
        body: {
            content: Array<{
                content: Array<{
                    value: string;
                }>;
            }>;
        };
        image?: {
            fields?: {
                file: {
                    url: string;
                };
            };
        };
        categories?: string[];
        authorInfo?: {
            fields?: {
                title: string;
            };
        };
    };
}

export default function BlogComponent() {
    const router = useRouter();
    const [posts, setPosts] = useState<BlogPost[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch(
                    'https://cdn.contentful.com/spaces/sfme6nh4wom2/environments/master/entries?content_type=blogPost&access_token=jn7dH3bS0f5p6ypvIHavVJTRpfigF6QY9R1jOyHv7A4'
                );
                const data = await response.json();
                setPosts(data.items);
            } catch (error) {
                console.error('Error fetching posts:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchPosts();
    }, []);

    const handlePostClick = (postId: string) => {
        router.push(`/blog/${postId}`);
    };

    return (
        <>
            <Navbar />
            <main className="min-h-screen pt-24 px-6">
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
                        Blog
                    </h1>

                    {isLoading ? (
                        <div className="flex justify-center items-center min-h-[400px]">
                            <Loader2 className="w-8 h-8 animate-spin text-accent-red dark:text-accent-yellow" />
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {posts.map((post) => (
                                <article
                                    key={post.sys.id}
                                    onClick={() => handlePostClick(post.sys.id)}
                                    className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all cursor-pointer"
                                >
                                    {post.fields.image?.fields?.file?.url && (
                                        <div className="relative h-48 w-full overflow-hidden">
                                            <Image
                                                src={`https:${post.fields.image.fields.file.url}`}
                                                alt={post.fields.title}
                                                fill
                                                className="object-cover hover:scale-105 transition-transform duration-300"
                                            />
                                        </div>
                                    )}

                                    <div className="p-6">
                                        {post.fields.categories && (
                                            <div className="flex flex-wrap gap-2 mb-3">
                                                {post.fields.categories.map((category) => (
                                                    <span
                                                        key={category}
                                                        className="text-xs text-accent-red dark:text-accent-yellow bg-red-50 dark:bg-yellow-900/20 rounded-full px-3 py-1"
                                                    >
                                                        {category}
                                                    </span>
                                                ))}
                                            </div>
                                        )}

                                        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 hover:text-accent-red dark:hover:text-accent-yellow transition-colors">
                                            {post.fields.title}
                                        </h2>

                                        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                                            {post.fields.body.content[0].content[0].value}
                                        </p>

                                        <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400">
                                            <span>
                                                {new Date(post.sys.createdAt).toLocaleDateString('es-ES', {
                                                    year: 'numeric',
                                                    month: 'long',
                                                    day: 'numeric'
                                                })}
                                            </span>
                                            {post.fields.authorInfo?.fields?.title && (
                                                <span>{post.fields.authorInfo.fields.title}</span>
                                            )}
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>
                    )}
                </div>
            </main>
            <Footer />
        </>
    );
}