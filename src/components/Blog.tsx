
// components/Blog.tsx
'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Loader2, Search, Calendar, User, ArrowRight } from 'lucide-react';
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
            fields: {
                file: {
                    url: string;
                };
            };
        };
        tags?: string[];
        author?: {
            fields: {
                title: string;
            };
        };
        slug: string;
    };
}

export default function BlogComponent() {
    const router = useRouter();
    const [posts, setPosts] = useState<BlogPost[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch(
                    'https://cdn.contentful.com/spaces/sfme6nh4wom2/environments/master/entries?content_type=blogPage&access_token=jn7dH3bS0f5p6ypvIHavVJTRpfigF6QY9R1jOyHv7A4'
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

    const handlePostClick = (slug: string) => {
        router.push(`/blog/${slug}`);
    };

    const getPostContent = (post: BlogPost) => {
        const content = post.fields.body?.content?.[0]?.content?.[0]?.value;
        return content || '';
    };

    const filteredPosts = posts.filter(post => 
        post.fields.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        getPostContent(post).toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-gray-50 dark:bg-gray-900">
                {/* Hero Section */}
                <section className="pt-24 pb-12 px-6 bg-white dark:bg-gray-800">
                    <div className="max-w-7xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-center max-w-3xl mx-auto"
                        >
                            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
                                Blog
                            </h1>
                            <p className="text-xl text-gray-600 dark:text-gray-400 mb-12">
                                Explora artículos sobre desarrollo web, tecnología y programación
                            </p>

                            {/* Search Bar */}
                            <div className="relative max-w-2xl mx-auto">
                                <input
                                    type="text"
                                    placeholder="Buscar artículos..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full px-6 py-4 rounded-xl bg-gray-100 dark:bg-gray-700 
                                             text-gray-900 dark:text-white border border-gray-200 dark:border-gray-600
                                             focus:outline-none focus:ring-2 focus:ring-accent-red dark:focus:ring-accent-yellow
                                             placeholder-gray-500 dark:placeholder-gray-400"
                                />
                                <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 
                                                text-gray-400 dark:text-gray-500 w-5 h-5" />
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Posts Grid Section */}
                <section className="py-12 px-6">
                    <div className="max-w-7xl mx-auto">
                        {isLoading ? (
                            <div className="flex flex-col items-center justify-center min-h-[400px] gap-4">
                                <Loader2 className="w-12 h-12 animate-spin text-accent-red dark:text-accent-yellow" />
                                <p className="text-gray-600 dark:text-gray-400">Cargando artículos...</p>
                            </div>
                        ) : (
                            <motion.div 
                                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                            >
                                {filteredPosts.map((post, index) => (
                                    <motion.article
                                        key={post.sys.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: index * 0.1 }}
                                        onClick={() => handlePostClick(post.fields.slug)}
                                        className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden 
                                                 border border-gray-200 dark:border-gray-700 shadow-sm 
                                                 hover:shadow-xl transition-all cursor-pointer"
                                    >
                                        {post.fields.image?.fields?.file?.url && (
                                            <div className="relative h-56 w-full overflow-hidden">
                                                <Image
                                                    src={`https:${post.fields.image.fields.file.url}`}
                                                    alt={post.fields.title}
                                                    fill
                                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                                />
                                            </div>
                                        )}

                                        <div className="p-6">
                                            {post.fields.tags && (
                                                <div className="flex flex-wrap gap-2 mb-4">
                                                    {post.fields.tags.map((tag) => (
                                                        <span
                                                            key={tag}
                                                            className="text-xs font-medium text-accent-red dark:text-accent-yellow 
                                                                     bg-accent-red/10 dark:bg-accent-yellow/10 rounded-full 
                                                                     px-3 py-1"
                                                        >
                                                            {tag}
                                                        </span>
                                                    ))}
                                                </div>
                                            )}

                                            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 
                                                       group-hover:text-accent-red dark:group-hover:text-accent-yellow 
                                                       transition-colors">
                                                {post.fields.title}
                                            </h2>

                                            <p className="text-gray-600 dark:text-gray-400 mb-6 line-clamp-3">
                                                {getPostContent(post)}
                                            </p>

                                            <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                                                <span className="flex items-center gap-2">
                                                    <Calendar className="w-4 h-4" />
                                                    {new Date(post.sys.createdAt).toLocaleDateString('es-ES', {
                                                        year: 'numeric',
                                                        month: 'long',
                                                        day: 'numeric'
                                                    })}
                                                </span>
                                                {post.fields.author?.fields?.title && (
                                                    <span className="flex items-center gap-2">
                                                        <User className="w-4 h-4" />
                                                        {post.fields.author.fields.title}
                                                    </span>
                                                )}
                                            </div>

                                            <div className="mt-6 flex items-center gap-2 text-accent-red 
                                                         dark:text-accent-yellow font-medium">
                                                Leer más
                                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                            </div>
                                        </div>
                                    </motion.article>
                                ))}
                            </motion.div>
                        )}

                        {!isLoading && filteredPosts.length === 0 && (
                            <div className="text-center py-12">
                                <p className="text-gray-600 dark:text-gray-400">
                                    No se encontraron artículos que coincidan con tu búsqueda.
                                </p>
                            </div>
                        )}
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}