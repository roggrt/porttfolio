// // // src/components/BlogCard.tsx
// // 'use client';
// // import Link from 'next/link';
// // import { motion } from 'framer-motion';
// // import { BlogPost } from '@/lib/contentful';
// //
// // interface BlogCardProps {
// //     post: BlogPost;
// // }
// //
// // export default function BlogCard({ post }: BlogCardProps) {
// //     return (
// //         <Link
// //             href={`/blog/${post.sys.id}`}
// //             className="block bg-white dark:bg-gray-900 rounded-xl shadow-lg
// //                 dark:shadow-gray-900/50 overflow-hidden transition-all
// //                 duration-300 hover:shadow-xl hover:-translate-y-1"
// //         >
// //             <div className="p-6">
// //                 <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
// //                     {post.fields.title}
// //                 </h3>
// //                 <p className="text-gray-600 dark:text-gray-400">
// //                     {post.fields.body.content[0]?.content[0]?.value.substring(0, 150)}...
// //                 </p>
// //             </div>
// //         </Link>
// //     );
// // }
//
// 'use client';
// import Link from 'next/link';
// import { BlogPost } from '@/lib/contentful';
//
// interface BlogCardProps {
//     post: BlogPost;
// }
//
// export default function BlogCard({ post }: BlogCardProps) {
//     return (
//         <Link
//             href={`/blog/${post.sys.id}`}
//             className="block bg-white dark:bg-gray-900 rounded-xl shadow-lg
//                 dark:shadow-gray-900/50 overflow-hidden transition-all
//                 duration-300 hover:shadow-xl hover:-translate-y-1"
//         >
//             <div className="p-6">
//                 <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
//                     {post.fields.title}
//                 </h3>
//                 <p className="text-gray-600 dark:text-gray-400">
//                     {post.fields.body.content[0]?.content[0]?.value.substring(0, 150)}...
//                 </p>
//             </div>
//         </Link>
//     );
// }

'use client';
import Link from 'next/link';
import { BlogPost } from '@/lib/contentful';

interface BlogCardProps {
    post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
    const excerpt = post.fields.body.content[0]?.content[0]?.value?.substring(0, 150) || '';

    return (
        <Link
            href={`/blog/${post.sys.id}`}
            className="block bg-white dark:bg-gray-900 rounded-xl shadow-lg
                dark:shadow-gray-900/50 overflow-hidden transition-all
                duration-300 hover:shadow-xl hover:-translate-y-1"
        >
            <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                    {post.fields.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                    {excerpt}...
                </p>
            </div>
        </Link>
    );
}