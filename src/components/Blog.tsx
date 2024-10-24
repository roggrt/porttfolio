// src/components/Blog.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Calendar, ExternalLink } from 'lucide-react';
import { useBlogPosts, type BlogPost } from '@/lib/hashnode';

const BlogCard = ({ post }: { post: BlogPost }) => {
    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('es-ES', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    return (
        <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="group"
        >
            <a
                href={`https://torisoftware.hashnode.dev/${post.slug}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
            >
                <div className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg
                            dark:shadow-gray-900/50 transform transition-all duration-300
                            hover:shadow-xl border border-gray-200 dark:border-gray-700">
                    {post.coverImage && (
                        <div className="aspect-video relative overflow-hidden">
                            <Image
                                src={post.coverImage}
                                alt={post.title}
                                width={600}
                                height={400}
                                className="object-cover w-full h-full transform transition-transform
                                         duration-300 group-hover:scale-105"
                            />
                        </div>
                    )}
                    <div className="p-6">
                        <div className="flex flex-wrap gap-2 mb-4">
                            {post.tags.map((tag) => (
                                <span
                                    key={tag.name}
                                    className="text-xs px-2 py-1 rounded-full bg-accent-red/10
                                             dark:bg-accent-yellow/10 text-accent-red
                                             dark:text-accent-yellow"
                                >
                                    {tag.name}
                                </span>
                            ))}
                        </div>
                        <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white
                                   group-hover:text-accent-red dark:group-hover:text-accent-yellow
                                   transition-colors">
                            {post.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                            {post.brief}
                        </p>
                        <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                            <div className="flex items-center gap-1">
                                <Calendar className="w-4 h-4" />
                                <span>{formatDate(post.dateAdded)}</span>
                            </div>
                            <span className="inline-flex items-center gap-1 text-accent-red
                                         dark:text-accent-yellow group-hover:gap-2 transition-all">
                                Leer más
                                <ExternalLink className="w-4 h-4" />
                            </span>
                        </div>
                    </div>
                </div>
            </a>
        </motion.article>
    );
};

export default function Blog() {
    const { posts, loading, error } = useBlogPosts();

    if (loading) {
        return (
            <section id="blog" className="py-20 bg-white dark:bg-gray-900">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex justify-center items-center min-h-[400px]">
                        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2
                                      border-accent-red dark:border-accent-yellow" />
                    </div>
                </div>
            </section>
        );
    }

    if (error) {
        return (
            <section id="blog" className="py-20 bg-white dark:bg-gray-900">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex justify-center items-center min-h-[400px]">
                        <p className="text-red-500 dark:text-red-400">{error}</p>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section id="blog" className="py-20 bg-white dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                        Blog
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Artículos sobre desarrollo web, diseño y tecnología
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.map((post) => (
                        <BlogCard key={post.slug} post={post} />
                    ))}
                </div>
            </div>
        </section>
    );
}