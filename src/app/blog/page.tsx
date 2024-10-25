// // // app/blog/page.tsx
// // import { getBlogPosts } from '@/lib/contentful';
// // import BlogCard from '@/components/blog/BlogCard';
// // import { motion } from 'framer-motion';
// //
// // export const revalidate = 3600; // Revalidate every hour
// //
// // export default async function BlogPage() {
// //     const posts = await getBlogPosts();
// //
// //     return (
// //         <div className="min-h-screen pt-24 px-6">
// //             <div className="max-w-7xl mx-auto">
// //                 <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
// //                     Blog
// //                 </h1>
// //
// //                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// //                     {posts.map((post, index) => (
// //                         <BlogCard
// //                             key={post.sys.id}
// //                             post={post}
// //                             index={index}
// //                         />
// //                     ))}
// //                 </div>
// //             </div>
// //         </div>
// //     );
// // }
//
// // src/app/blog/[slug]/page.tsx
// import { getBlogPostById, getRelatedPosts, formatContentfulDate } from '@/lib/contentful';
// import { notFound } from 'next/navigation';
// import Image from 'next/image';
// import Link from 'next/link';
// import { ArrowLeft, Calendar, User, Tag } from 'lucide-react';
//
// interface Props {
//     params: {
//         slug: string;
//     };
// }
//
// export async function generateMetadata({ params }: Props) {
//     const post = await getBlogPostById(params.slug);
//
//     if (!post) return { title: 'Post no encontrado' };
//
//     return {
//         title: post.fields.title,
//         description: post.fields.body.content[0].content[0].value.slice(0, 160),
//         openGraph: {
//             title: post.fields.title,
//             description: post.fields.body.content[0].content[0].value.slice(0, 160),
//             images: post.fields.image ? [`https:${post.fields.image.fields.file.url}`] : [],
//         },
//     };
// }
//
// export default async function BlogPostPage({ params }: Props) {
//     const post = await getBlogPostById(params.slug);
//
//     if (!post) {
//         notFound();
//     }
//
//     const relatedPosts = await getRelatedPosts(params.slug);
//
//     return (
//         <article className="min-h-screen pt-24 px-6 pb-12">
//             <div className="max-w-4xl mx-auto">
//                 {/* Navegación superior */}
//                 <Link
//                     href="/blog"
//                     className="inline-flex items-center text-sm text-gray-600 dark:text-gray-400 hover:text-accent-red dark:hover:text-accent-yellow mb-8 transition-colors"
//                 >
//                     <ArrowLeft className="w-4 h-4 mr-2" />
//                     Volver al blog
//                 </Link>
//
//                 {/* Encabezado del post */}
//                 <header className="mb-8">
//                     {/* Categorías */}
//                     {post.fields.categories && (
//                         <div className="flex flex-wrap gap-2 mb-4">
//                             {post.fields.categories.map((category) => (
//                                 <span
//                                     key={category}
//                                     className="px-3 py-1 rounded-full text-sm bg-red-50 dark:bg-yellow-900/20 text-accent-red dark:text-accent-yellow"
//                                 >
//                                     {category}
//                                 </span>
//                             ))}
//                         </div>
//                     )}
//
//                     {/* Título */}
//                     <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
//                         {post.fields.title}
//                     </h1>
//
//                     {/* Metadatos */}
//                     <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
//                         <div className="flex items-center gap-2">
//                             <Calendar className="w-4 h-4" />
//                             <time dateTime={post.sys.createdAt}>
//                                 {formatContentfulDate(post.sys.createdAt)}
//                             </time>
//                         </div>
//                         {post.fields.authorInfo && (
//                             <div className="flex items-center gap-2">
//                                 <User className="w-4 h-4" />
//                                 <span>{post.fields.authorInfo.fields.title}</span>
//                             </div>
//                         )}
//                     </div>
//                 </header>
//
//                 {/* Imagen destacada */}
//                 {post.fields.image && (
//                     <div className="relative aspect-video w-full mb-8 rounded-lg overflow-hidden">
//                         <Image
//                             src={`https:${post.fields.image.fields.file.url}`}
//                             alt={post.fields.featuredImageAltText || post.fields.title}
//                             fill
//                             className="object-cover"
//                             priority
//                         />
//                     </div>
//                 )}
//
//                 {/* Contenido del post */}
//                 <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
//                     {post.fields.body.content.map((content: any, index: number) => {
//                         switch (content.nodeType) {
//                             case 'paragraph':
//                                 return (
//                                     <p key={index}>
//                                         {content.content[0].value}
//                                     </p>
//                                 );
//                             case 'heading-2':
//                                 return (
//                                     <h2 key={index}>
//                                         {content.content[0].value}
//                                     </h2>
//                                 );
//                             case 'heading-3':
//                                 return (
//                                     <h3 key={index}>
//                                         {content.content[0].value}
//                                     </h3>
//                                 );
//                             case 'unordered-list':
//                                 return (
//                                     <ul key={index}>
//                                         {content.content.map((item: any, itemIndex: number) => (
//                                             <li key={itemIndex}>
//                                                 {item.content[0].content[0].value}
//                                             </li>
//                                         ))}
//                                     </ul>
//                                 );
//                             case 'ordered-list':
//                                 return (
//                                     <ol key={index}>
//                                         {content.content.map((item: any, itemIndex: number) => (
//                                             <li key={itemIndex}>
//                                                 {item.content[0].content[0].value}
//                                             </li>
//                                         ))}
//                                     </ol>
//                                 );
//                             default:
//                                 return null;
//                         }
//                     })}
//                 </div>
//
//                 {/* Tags */}
//                 {post.fields.tags && post.fields.tags.length > 0 && (
//                     <div className="mb-12">
//                         <div className="flex items-center gap-2 mb-4">
//                             <Tag className="w-4 h-4 text-gray-600 dark:text-gray-400" />
//                             <h3 className="font-medium text-gray-900 dark:text-white">
//                                 Tags
//                             </h3>
//                         </div>
//                         <div className="flex flex-wrap gap-2">
//                             {post.fields.tags.map((tag) => (
//                                 <span
//                                     key={tag}
//                                     className="px-3 py-1 rounded-full text-sm bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
//                                 >
//                                     {tag}
//                                 </span>
//                             ))}
//                         </div>
//                     </div>
//                 )}
//
//                 {/* Posts relacionados */}
//                 {relatedPosts.length > 0 && (
//                     <div className="border-t border-gray-200 dark:border-gray-800 pt-12">
//                         <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
//                             Posts relacionados
//                         </h2>
//                         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                             {relatedPosts.map((relatedPost) => (
//                                 <Link
//                                     key={relatedPost.sys.id}
//                                     href={`/blog/${relatedPost.sys.id}`}
//                                     className="group"
//                                 >
//                                     <article className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all">
//                                         {relatedPost.fields.image && (
//                                             <div className="relative h-48 w-full">
//                                                 <Image
//                                                     src={`https:${relatedPost.fields.image.fields.file.url}`}
//                                                     alt={relatedPost.fields.featuredImageAltText || relatedPost.fields.title}
//                                                     fill
//                                                     className="object-cover transition-transform duration-300 group-hover:scale-105"
//                                                 />
//                                             </div>
//                                         )}
//                                         <div className="p-6">
//                                             <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-accent-red dark:group-hover:text-accent-yellow transition-colors">
//                                                 {relatedPost.fields.title}
//                                             </h3>
//                                             <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2">
//                                                 {relatedPost.fields.body.content[0].content[0].value}
//                                             </p>
//                                         </div>
//                                     </article>
//                                 </Link>
//                             ))}
//                         </div>
//                     </div>
//                 )}
//             </div>
//         </article>
//     );
// }

// src/app/blog/page.tsx
import BlogComponent from '@/components/Blog';

export const metadata = {
    title: 'Blog - roggrt.dev',
    description: 'Artículos sobre desarrollo web, tecnología y programación',
};

export default function BlogPage() {
    return <BlogComponent />;
}