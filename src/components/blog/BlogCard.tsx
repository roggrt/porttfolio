// components/blog/BlogCard.tsx
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

interface BlogCardProps {
    post: any; // Tipo del post de Contentful
    index: number;
}

export default function BlogCard({ post, index }: BlogCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
            {post.fields.image && (
                <div className="relative h-48 w-full">
                    <Image
                        src={`https:${post.fields.image.fields.file.url}`}
                        alt={post.fields.featuredImageAltText || post.fields.title}
                        fill
                        className="object-cover"
                    />
                </div>
            )}

            <div className="p-6">
                <div className="flex gap-2 mb-3">
                    {post.fields.categories?.map((category: string) => (
                        <span
                            key={category}
                            className="text-xs text-accent-red dark:text-accent-yellow bg-red-50 dark:bg-yellow-900/20 rounded-full px-3 py-1"
                        >
                            {category}
                        </span>
                    ))}
                </div>

                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {post.fields.title}
                </h2>

                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                    {post.fields.body.content[0].content[0].value}
                </p>

                <Link
                    href={`/blog/${post.sys.id}`}
                    className="text-accent-red dark:text-accent-yellow hover:underline inline-flex items-center"
                >
                    Leer más
                    <svg
                        className="w-4 h-4 ml-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                        />
                    </svg>
                </Link>
            </div>
        </motion.div>
    );
}