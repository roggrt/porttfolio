//
//
// // // // app/blog/[slug]/page.tsx
// // // 'use client';
//
// // // import { useState, useEffect } from 'react';
// // // import { useRouter } from 'next/navigation';
// // // import Image from 'next/image';
// // // import { motion } from 'framer-motion';
// // // import { Loader2, Calendar, ArrowLeft, Twitter, Linkedin, Facebook, Link, Tag } from 'lucide-react';
// // // import Navbar from '@/components/layout/Navbar';
// // // import Footer from '@/components/layout/Footer';
//
// // // interface ContentfulResponse {
// // //     items: BlogPost[];
// // //     includes?: {
// // //         Asset?: Asset[];
// // //     };
// // // }
//
// // // interface Asset {
// // //     sys: {
// // //         id: string;
// // //     };
// // //     fields: {
// // //         file: {
// // //             url: string;
// // //             details: {
// // //                 image?: {
// // //                     width: number;
// // //                     height: number;
// // //                 };
// // //             };
// // //         };
// // //     };
// // // }
//
// // // interface BlogPost {
// // //     sys: {
// // //         id: string;
// // //         createdAt: string;
// // //     };
// // //     fields: {
// // //         title: string;
// // //         slug: string;
// // //         body: {
// // //             content: RichTextNode[];
// // //         };
// // //         image?: {
// // //             sys: {
// // //                 id: string;
// // //             };
// // //         };
// // //         tags?: string[];
// // //         readTime?: number;
// // //     };
// // // }
//
// // // interface RichTextNode {
// // //     nodeType: string;
// // //     content?: RichTextNode[];
// // //     value?: string;
// // //     data?: {
// // //         uri?: string;
// // //     };
// // //     marks?: Array<{
// // //         type: string;
// // //     }>;
// // // }
//
// // // export default function BlogPostPage({ params }: { params: { slug: string } }) {
// // //     const router = useRouter();
// // //     const [post, setPost] = useState<BlogPost | null>(null);
// // //     const [imageUrl, setImageUrl] = useState<string | null>(null);
// // //     const [isLoading, setIsLoading] = useState(true);
// // //     const [readingProgress, setReadingProgress] = useState(0);
// // //     const [showShareTooltip, setShowShareTooltip] = useState(false);
//
// // //     useEffect(() => {
// // //         const updateReadingProgress = () => {
// // //             const currentPosition = window.scrollY;
// // //             const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
// // //             const progress = (currentPosition / scrollHeight) * 100;
// // //             setReadingProgress(progress);
// // //         };
//
// // //         window.addEventListener('scroll', updateReadingProgress);
// // //         return () => window.removeEventListener('scroll', updateReadingProgress);
// // //     }, []);
//
// // //     useEffect(() => {
// // //         const fetchPost = async () => {
// // //             try {
// // //                 const response = await fetch(
// // //                     `https://cdn.contentful.com/spaces/sfme6nh4wom2/environments/master/entries?content_type=blogPage&fields.slug=${params.slug}&include=10&access_token=jn7dH3bS0f5p6ypvIHavVJTRpfigF6QY9R1jOyHv7A4`
// // //                 );
//
// // //                 if (!response.ok) {
// // //                     throw new Error('Error al cargar el post');
// // //                 }
//
// // //                 const data: ContentfulResponse = await response.json();
//
// // //                 if (data.items.length === 0) {
// // //                     return;
// // //                 }
//
// // //                 const currentPost = data.items[0];
// // //                 setPost(currentPost);
//
// // //                 if (currentPost.fields.image && data.includes?.Asset) {
// // //                     const imageAsset = data.includes.Asset.find(
// // //                         asset => asset.sys.id === currentPost.fields.image?.sys.id
// // //                     );
// // //                     if (imageAsset) {
// // //                         setImageUrl(imageAsset.fields.file.url);
// // //                     }
// // //                 }
// // //             } catch (error) {
// // //                 console.error('Error fetching post:', error);
// // //             } finally {
// // //                 setIsLoading(false);
// // //             }
// // //         };
//
// // //         fetchPost();
// // //     }, [params.slug]);
//
// // //     const renderRichText = (nodes: RichTextNode[]): JSX.Element[] => {
// // //         return nodes.map((node, index) => {
// // //             switch (node.nodeType) {
// // //                 case 'paragraph':
// // //                     return (
// // //                         <p key={index} className="mb-6 text-gray-700 dark:text-gray-300 leading-relaxed">
// // //                             {node.content?.map((content, i) => renderRichText([content])[0])}
// // //                         </p>
// // //                     );
// // //                 case 'heading-1':
// // //                     return (
// // //                         <h1 key={index} className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
// // //                             {node.content?.map((content, i) => renderRichText([content])[0])}
// // //                         </h1>
// // //                     );
// // //                 case 'heading-2':
// // //                     return (
// // //                         <h2 key={index} className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
// // //                             {node.content?.map((content, i) => renderRichText([content])[0])}
// // //                         </h2>
// // //                     );
// // //                 case 'text':
// // //                     if (node.marks && node.marks.length > 0) {
// // //                         return node.marks.reduce((text, mark) => {
// // //                             switch (mark.type) {
// // //                                 case 'bold':
// // //                                     return <strong key={index}>{text}</strong>;
// // //                                 case 'italic':
// // //                                     return <em key={index}>{text}</em>;
// // //                                 case 'underline':
// // //                                     return <u key={index}>{text}</u>;
// // //                                 case 'code':
// // //                                     return (
// // //                                         <code key={index} className="bg-gray-100 dark:bg-gray-800 rounded px-2 py-1">
// // //                                             {text}
// // //                                         </code>
// // //                                     );
// // //                                 default:
// // //                                     return text;
// // //                             }
// // //                         }, <>{node.value}</>);
// // //                     }
// // //                     return <>{node.value}</>;
// // //                 default:
// // //                     return <>{node.value}</>;
// // //             }
// // //         });
// // //     };
//
// // //     const sharePost = async (platform: 'twitter' | 'linkedin' | 'facebook' | 'copy') => {
// // //         const url = window.location.href;
// // //         const title = post?.fields.title || '';
// // //         const encodedUrl = encodeURIComponent(url);
// // //         const encodedTitle = encodeURIComponent(title);
//
// // //         const shareUrls = {
// // //             twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
// // //             linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
// // //             facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
// // //         };
//
// // //         if (platform === 'copy') {
// // //             try {
// // //                 await navigator.clipboard.writeText(url);
// // //                 setShowShareTooltip(true);
// // //                 setTimeout(() => setShowShareTooltip(false), 2000);
// // //             } catch (err) {
// // //                 console.error('Error al copiar:', err);
// // //             }
// // //             return;
// // //         }
//
// // //         window.open(shareUrls[platform], '_blank');
// // //     };
//
// // //     if (isLoading) {
// // //         return (
// // //             <>
// // //                 <Navbar />
// // //                 <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
// // //                     <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
// // //                 </div>
// // //                 <Footer />
// // //             </>
// // //         );
// // //     }
//
// // //     if (!post) {
// // //         return (
// // //             <>
// // //                 <Navbar />
// // //                 <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
// // //                     <div className="text-center">
// // //                         <p className="text-xl mb-4">Post no encontrado</p>
// // //                         <button
// // //                             onClick={() => router.push('/blog')}
// // //                             className="text-blue-600 hover:underline flex items-center gap-2 justify-center"
// // //                         >
// // //                             <ArrowLeft size={20} />
// // //                             Volver al blog
// // //                         </button>
// // //                     </div>
// // //                 </div>
// // //                 <Footer />
// // //             </>
// // //         );
// // //     }
//
// // //     return (
// // //         <>
// // //             <Navbar />
// // //             {/* Reading Progress Bar */}
// // //             <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 dark:bg-gray-700 z-50">
// // //                 <div
// // //                     className="h-full bg-blue-600 dark:bg-blue-400 transition-all duration-150"
// // //                     style={{ width: `${readingProgress}%` }}
// // //                 />
// // //             </div>
//
// // //             <main className="min-h-screen bg-gray-50 dark:bg-gray-900">
// // //                 <article className="max-w-4xl mx-auto px-4 pt-20 pb-12">
// // //                     {/* Title and Meta */}
// // //                     <div className="mb-8">
// // //                         <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
// // //                             {post.fields.title}
// // //                         </h1>
//
// // //                         <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-6">
// // //                             <span className="flex items-center gap-2">
// // //                                 <Calendar className="w-4 h-4" />
// // //                                 {new Date(post.sys.createdAt).toLocaleDateString('es-ES', {
// // //                                     year: 'numeric',
// // //                                     month: 'long',
// // //                                     day: 'numeric'
// // //                                 })}
// // //                             </span>
// // //                             {post.fields.readTime && (
// // //                                 <span>· {post.fields.readTime} min de lectura</span>
// // //                             )}
// // //                         </div>
//
// // //                         {/* Tags */}
// // //                         {post.fields.tags && (
// // //                             <div className="flex flex-wrap gap-2 mb-6">
// // //                                 {post.fields.tags.map((tag) => (
// // //                                     <span
// // //                                         key={tag}
// // //                                         className="flex items-center gap-1 px-3 py-1 bg-blue-100 dark:bg-blue-900
// // //                                                  text-blue-800 dark:text-blue-200 rounded-full text-sm"
// // //                                     >
// // //                                         <Tag className="w-3 h-3" />
// // //                                         {tag}
// // //                                     </span>
// // //                                 ))}
// // //                             </div>
// // //                         )}
// // //                     </div>
//
// // //                     {/* Featured Image */}
// // //                     {imageUrl && (
// // //                         <div className="mb-8 rounded-lg overflow-hidden shadow-lg">
// // //                             <div className="relative aspect-[16/9]">
// // //                                 <Image
// // //                                     src={`https:${imageUrl}`}
// // //                                     alt={post.fields.title}
// // //                                     fill
// // //                                     className="object-contain"
// // //                                     priority
// // //                                 />
// // //                             </div>
// // //                         </div>
// // //                     )}
//
// // //                     {/* Content */}
// // //                     <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
// // //                         {renderRichText(post.fields.body.content)}
// // //                     </div>
//
// // //                     {/* Share Buttons */}
// // //                     <div className="border-t dark:border-gray-800 pt-8">
// // //                         <div className="flex flex-wrap items-center gap-4">
// // //                             <span className="text-gray-600 dark:text-gray-400">
// // //                                 Compartir artículo:
// // //                             </span>
// // //                             <div className="flex gap-3">
// // //                                 <button
// // //                                     onClick={() => sharePost('twitter')}
// // //                                     className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200
// // //                                              dark:hover:bg-gray-700 transition-colors"
// // //                                     aria-label="Compartir en Twitter"
// // //                                 >
// // //                                     <Twitter className="w-5 h-5 text-gray-600 dark:text-gray-400" />
// // //                                 </button>
// // //                                 <button
// // //                                     onClick={() => sharePost('linkedin')}
// // //                                     className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200
// // //                                              dark:hover:bg-gray-700 transition-colors"
// // //                                     aria-label="Compartir en LinkedIn"
// // //                                 >
// // //                                     <Linkedin className="w-5 h-5 text-gray-600 dark:text-gray-400" />
// // //                                 </button>
// // //                                 <button
// // //                                     onClick={() => sharePost('facebook')}
// // //                                     className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200
// // //                                              dark:hover:bg-gray-700 transition-colors"
// // //                                     aria-label="Compartir en Facebook"
// // //                                 >
// // //                                     <Facebook className="w-5 h-5 text-gray-600 dark:text-gray-400" />
// // //                                 </button>
// // //                                 <div className="relative">
// // //                                     <button
// // //                                         onClick={() => sharePost('copy')}
// // //                                         className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200
// // //                                                  dark:hover:bg-gray-700 transition-colors"
// // //                                         aria-label="Copiar enlace"
// // //                                     >
// // //                                         <Link className="w-5 h-5 text-gray-600 dark:text-gray-400" />
// // //                                     </button>
// // //                                     {showShareTooltip && (
// // //                                         <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2
// // //                                                       px-3 py-1 bg-gray-900 text-white text-sm rounded shadow-lg">
// // //                                             ¡Enlace copiado!
// // //                                         </div>
// // //                                     )}
// // //                                 </div>
// // //                             </div>
// // //                         </div>
// // //                     </div>
//
// // //                     {/* Back Button */}
// // //                     <div className="mt-12">
// // //                         <button
// // //                             onClick={() => router.push('/blog')}
// // //                             className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline"
// // //                         >
// // //                             <ArrowLeft className="w-5 h-5" />
// // //                             Volver al blog
// // //                         </button>
// // //                     </div>
// // //                 </article>
// // //             </main>
// // //             <Footer />
// // //         </>
// // //     );
// // // }
// // // app/blog/[slug]/page.tsx
// // 'use client';
//
// // import React, { useState, useEffect } from 'react';
// // import { useRouter } from 'next/navigation';
// // import Image from 'next/image';
// // import { motion } from 'framer-motion';
// // import { Loader2, Calendar, ArrowLeft, Twitter, Linkedin, Facebook, Link, Tag } from 'lucide-react';
// // import Navbar from '@/components/layout/Navbar';
// // import Footer from '@/components/layout/Footer';
//
// // interface Asset {
// //     sys: {
// //         id: string;
// //     };
// //     fields: {
// //         file: {
// //             url: string;
// //             details: {
// //                 image?: {
// //                     width: number;
// //                     height: number;
// //                 };
// //             };
// //         };
// //     };
// // }
//
// // interface ContentfulResponse {
// //     items: BlogPost[];
// //     includes?: {
// //         Asset?: Asset[];
// //     };
// // }
//
// // interface BlogPost {
// //     sys: {
// //         id: string;
// //         createdAt: string;
// //     };
// //     fields: {
// //         title: string;
// //         slug: string;
// //         body: {
// //             content: RichTextNode[];
// //         };
// //         image?: {
// //             sys: {
// //                 id: string;
// //             };
// //         };
// //         tags?: string[];
// //         readTime?: number;
// //     };
// // }
//
// // interface RichTextNode {
// //     nodeType: string;
// //     content?: RichTextNode[];
// //     value?: string;
// //     data?: {
// //         uri?: string;
// //     };
// //     marks?: Array<{
// //         type: string;
// //     }>;
// //     key?: string; // Añadimos key como propiedad opcional
// // }
//
// // export default function BlogPostPage({ params }: { params: { slug: string } }) {
// //     const router = useRouter();
// //     const [post, setPost] = useState<BlogPost | null>(null);
// //     const [imageUrl, setImageUrl] = useState<string | null>(null);
// //     const [isLoading, setIsLoading] = useState(true);
// //     const [readingProgress, setReadingProgress] = useState(0);
// //     const [showShareTooltip, setShowShareTooltip] = useState(false);
//
// //     useEffect(() => {
// //         const updateReadingProgress = () => {
// //             const currentPosition = window.scrollY;
// //             const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
// //             const progress = (currentPosition / scrollHeight) * 100;
// //             setReadingProgress(progress);
// //         };
//
// //         window.addEventListener('scroll', updateReadingProgress);
// //         return () => window.removeEventListener('scroll', updateReadingProgress);
// //     }, []);
//
// //     useEffect(() => {
// //         const fetchPost = async () => {
// //             if (!params.slug) return;
//
// //             try {
// //                 const response = await fetch(
// //                     `https://cdn.contentful.com/spaces/sfme6nh4wom2/environments/master/entries?content_type=blogPage&fields.slug=${params.slug}&include=10&access_token=jn7dH3bS0f5p6ypvIHavVJTRpfigF6QY9R1jOyHv7A4`
// //                 );
//
// //                 if (!response.ok) {
// //                     throw new Error('Error al cargar el post');
// //                 }
//
// //                 const data: ContentfulResponse = await response.json();
//
// //                 if (data.items.length === 0) {
// //                     return;
// //                 }
//
// //                 const currentPost = data.items[0];
// //                 setPost(currentPost);
//
// //                 if (currentPost.fields.image && data.includes?.Asset) {
// //                     const imageAsset = data.includes.Asset.find(
// //                         asset => asset.sys.id === currentPost.fields.image?.sys.id
// //                     );
// //                     if (imageAsset) {
// //                         setImageUrl(imageAsset.fields.file.url);
// //                     }
// //                 }
// //             } catch (error) {
// //                 console.error('Error fetching post:', error);
// //             } finally {
// //                 setIsLoading(false);
// //             }
// //         };
//
// //         fetchPost();
// //     }, [params.slug]);
//
// //     // Función mejorada para renderizar el contenido rico con keys únicas
// //     const renderRichText = (nodes: RichTextNode[], parentIndex: string = ''): JSX.Element[] => {
// //         return nodes.map((node, index) => {
// //             const uniqueKey = `${parentIndex}-${index}`;
//
// //             switch (node.nodeType) {
// //                 case 'paragraph':
// //                     return (
// //                         <p key={uniqueKey} className="mb-6 text-gray-700 dark:text-gray-300 leading-relaxed">
// //                             {node.content?.map((content, i) => renderRichText([content], uniqueKey)[0])}
// //                         </p>
// //                     );
// //                 case 'heading-1':
// //                     return (
// //                         <h1 key={uniqueKey} className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
// //                             {node.content?.map((content, i) => renderRichText([content], uniqueKey)[0])}
// //                         </h1>
// //                     );
// //                 case 'heading-2':
// //                     return (
// //                         <h2 key={uniqueKey} className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
// //                             {node.content?.map((content, i) => renderRichText([content], uniqueKey)[0])}
// //                         </h2>
// //                     );
// //                 case 'text':
// //                     if (node.marks && node.marks.length > 0) {
// //                         return node.marks.reduce((text, mark, i) => {
// //                             const markKey = `${uniqueKey}-mark-${i}`;
// //                             switch (mark.type) {
// //                                 case 'bold':
// //                                     return <strong key={markKey}>{text}</strong>;
// //                                 case 'italic':
// //                                     return <em key={markKey}>{text}</em>;
// //                                 case 'underline':
// //                                     return <u key={markKey}>{text}</u>;
// //                                 case 'code':
// //                                     return (
// //                                         <code key={markKey} className="bg-gray-100 dark:bg-gray-800 rounded px-2 py-1">
// //                                             {text}
// //                                         </code>
// //                                     );
// //                                 default:
// //                                     return text;
// //                             }
// //                         }, <React.Fragment key={uniqueKey}>{node.value}</React.Fragment>);
// //                     }
// //                     return <React.Fragment key={uniqueKey}>{node.value}</React.Fragment>;
// //                 default:
// //                     return <React.Fragment key={uniqueKey}>{node.value}</React.Fragment>;
// //             }
// //         });
// //     };
//
// //     const sharePost = async (platform: 'twitter' | 'linkedin' | 'facebook' | 'copy') => {
// //         const url = window.location.href;
// //         const title = post?.fields.title || '';
// //         const encodedUrl = encodeURIComponent(url);
// //         const encodedTitle = encodeURIComponent(title);
//
// //         const shareUrls = {
// //             twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
// //             linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
// //             facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
// //         };
//
// //         if (platform === 'copy') {
// //             try {
// //                 await navigator.clipboard.writeText(url);
// //                 setShowShareTooltip(true);
// //                 setTimeout(() => setShowShareTooltip(false), 2000);
// //             } catch (err) {
// //                 console.error('Error al copiar:', err);
// //             }
// //             return;
// //         }
//
// //         window.open(shareUrls[platform], '_blank');
// //     };
//
// //     if (isLoading) {
// //         return (
// //             <>
// //                 <Navbar />
// //                 <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
// //                     <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
// //                 </div>
// //                 <Footer />
// //             </>
// //         );
// //     }
//
// //     if (!post) {
// //         return (
// //             <>
// //                 <Navbar />
// //                 <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
// //                     <div className="text-center">
// //                         <p className="text-xl mb-4">Post no encontrado</p>
// //                         <button
// //                             onClick={() => router.push('/blog')}
// //                             className="flex items-center gap-2 text-blue-600 hover:underline mx-auto"
// //                         >
// //                             <ArrowLeft className="w-4 h-4" />
// //                             Volver al blog
// //                         </button>
// //                     </div>
// //                 </div>
// //                 <Footer />
// //             </>
// //         );
// //     }
//
// //     return (
// //         <>
// //             <Navbar />
// //             {/* Reading Progress Bar */}
// //             <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 dark:bg-gray-700 z-50">
// //                 <div
// //                     className="h-full bg-blue-600 dark:bg-blue-400 transition-all duration-150"
// //                     style={{ width: `${readingProgress}%` }}
// //                 />
// //             </div>
//
// //             <main className="min-h-screen bg-gray-50 dark:bg-gray-900">
// //                 <article className="max-w-4xl mx-auto px-4 pt-20 pb-12">
// //                     {/* Title and Meta */}
// //                     <div className="mb-8">
// //                         <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
// //                             {post.fields.title}
// //                         </h1>
//
// //                         <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-6">
// //                             <span className="flex items-center gap-2">
// //                                 <Calendar className="w-4 h-4" />
// //                                 {new Date(post.sys.createdAt).toLocaleDateString('es-ES', {
// //                                     year: 'numeric',
// //                                     month: 'long',
// //                                     day: 'numeric'
// //                                 })}
// //                             </span>
// //                         </div>
//
// //                         {/* Tags */}
// //                         {post.fields.tags && (
// //                             <div className="flex flex-wrap gap-2 mb-6">
// //                                 {post.fields.tags.map((tag) => (
// //                                     <span
// //                                         key={tag}
// //                                         className="flex items-center gap-1 px-3 py-1 bg-blue-100 dark:bg-blue-900
// //                                                  text-blue-800 dark:text-blue-200 rounded-full text-sm"
// //                                     >
// //                                         <Tag className="w-3 h-3" />
// //                                         {tag}
// //                                     </span>
// //                                 ))}
// //                             </div>
// //                         )}
// //                     </div>
//
// //                     {/* Featured Image */}
// //                     {imageUrl && (
// //                         <div className="mb-8 rounded-lg overflow-hidden shadow-lg">
// //                             <div className="relative h-96">
// //                                 <Image
// //                                     src={`https:${imageUrl}`}
// //                                     alt={post.fields.title}
// //                                     fill
// //                                     className="object-contain"
// //                                     priority
// //                                 />
// //                             </div>
// //                         </div>
// //                     )}
//
// //                     {/* Content */}
// //                     <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
// //                         {renderRichText(post.fields.body.content)}
// //                     </div>
//
// //                     {/* Share Buttons */}
// //                     <div className="border-t dark:border-gray-800 pt-8">
// //                         <div className="flex flex-wrap items-center gap-4">
// //                             <span className="text-gray-600 dark:text-gray-400">
// //                                 Compartir artículo:
// //                             </span>
// //                             <div className="flex gap-3">
// //                                 {['twitter', 'linkedin', 'facebook'].map((platform) => (
// //                                     <button
// //                                         key={platform}
// //                                         onClick={() => sharePost(platform as 'twitter' | 'linkedin' | 'facebook')}
// //                                         className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200
// //                                                  dark:hover:bg-gray-700 transition-colors"
// //                                         aria-label={`Compartir en ${platform}`}
// //                                     >
// //                                         {platform === 'twitter' && <Twitter className="w-5 h-5 text-gray-600 dark:text-gray-400" />}
// //                                         {platform === 'linkedin' && <Linkedin className="w-5 h-5 text-gray-600 dark:text-gray-400" />}
// //                                         {platform === 'facebook' && <Facebook className="w-5 h-5 text-gray-600 dark:text-gray-400" />}
// //                                     </button>
// //                                 ))}
// //                                 <div className="relative">
// //                                     <button
// //                                         onClick={() => sharePost('copy')}
// //                                         className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200
// //                                                  dark:hover:bg-gray-700 transition-colors"
// //                                         aria-label="Copiar enlace"
// //                                     >
// //                                         <Link className="w-5 h-5 text-gray-600 dark:text-gray-400" />
// //                                     </button>
// //                                     {showShareTooltip && (
// //                                         <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2
// //                                                       px-3 py-1 bg-gray-900 text-white text-sm rounded shadow-lg">
// //                                             ¡Enlace copiado!
// //                                         </div>
// //                                     )}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                     </div>
//
// //                     {/* Back Button */}
// //                     <div className="mt-12">
// //                         <button
// //                             onClick={() => router.push('/blog')}
// //                             className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline"
// //                         >
// //                             <ArrowLeft className="w-5 h-5" />
// //                             Volver al blog
// //                         </button>
// //                     </div>
// //                 </article>
// //             </main>
// //             <Footer />
// //         </>
// //     );
// // }
//
//
// // app/blog/[slug]/page.tsx
//
// // 'use client';
//
// // import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react';
// // import { useRouter } from 'next/navigation';
// // import Image from 'next/image';
// // import { motion, AnimatePresence } from 'framer-motion';
// // import { Loader2, Calendar, ArrowLeft, Twitter, Linkedin, Facebook, Link, Tag, Copy, Check } from 'lucide-react';
// // import Navbar from '@/components/layout/Navbar';
// // import Footer from '@/components/layout/Footer';
//
// // interface Asset {
// //     sys: { id: string; };
// //     fields: {
// //         file: {
// //             url: string;
// //             details: { image?: { width: number; height: number; }; };
// //         };
// //     };
// // }
//
// // interface ContentfulResponse {
// //     items: BlogPost[];
// //     includes?: { Asset?: Asset[]; };
// // }
//
// // interface BlogPost {
// //     sys: { id: string; createdAt: string; };
// //     fields: {
// //         title: string;
// //         slug: string;
// //         body: { content: RichTextNode[]; };
// //         image?: { sys: { id: string; }; };
// //         tags?: string[];
// //         readTime?: number;
// //     };
// // }
//
// // interface RichTextNode {
// //     nodeType: string;
// //     content?: RichTextNode[];
// //     value?: string;
// //     data?: { uri?: string; };
// //     marks?: Array<{ type: string; }>;
// // }
//
// // export default function BlogPostPage({ params }: { params: { slug: string } }) {
// //     const router = useRouter();
// //     const [post, setPost] = useState<BlogPost | null>(null);
// //     const [imageUrl, setImageUrl] = useState<string | null>(null);
// //     const [isLoading, setIsLoading] = useState(true);
// //     const [readingProgress, setReadingProgress] = useState(0);
// //     const [showShareTooltip, setShowShareTooltip] = useState(false);
// //     const [copiedCode, setCopiedCode] = useState<string | null>(null);
// //     const lastScrollPosition = useRef(0);
// //     const ticking = useRef(false);
//
// //     // Optimizado manejo de scroll
// //     const updateReadingProgress = useCallback(() => {
// //         const currentPosition = window.scrollY;
// //         const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
//
// //         if (scrollHeight > 0) {
// //             const progress = Math.min(100, Math.max(0, (currentPosition / scrollHeight) * 100));
// //             if (Math.abs(progress - readingProgress) > 1) {
// //                 setReadingProgress(progress);
// //             }
// //         }
// //     }, [readingProgress]);
//
// //     useEffect(() => {
// //         const handleScroll = () => {
// //             lastScrollPosition.current = window.scrollY;
//
// //             if (!ticking.current) {
// //                 window.requestAnimationFrame(() => {
// //                     updateReadingProgress();
// //                     ticking.current = false;
// //                 });
// //                 ticking.current = true;
// //             }
// //         };
//
// //         window.addEventListener('scroll', handleScroll, { passive: true });
// //         return () => window.removeEventListener('scroll', handleScroll);
// //     }, [updateReadingProgress]);
//
// //     useEffect(() => {
// //         const controller = new AbortController();
//
// //         const fetchPost = async () => {
// //             if (!params.slug) return;
//
// //             try {
// //                 const response = await fetch(
// //                     `https://cdn.contentful.com/spaces/sfme6nh4wom2/environments/master/entries?content_type=blogPage&fields.slug=${params.slug}&include=10&access_token=jn7dH3bS0f5p6ypvIHavVJTRpfigF6QY9R1jOyHv7A4`,
// //                     { signal: controller.signal }
// //                 );
//
// //                 if (!response.ok) throw new Error('Error al cargar el post');
//
// //                 const data: ContentfulResponse = await response.json();
// //                 if (data.items.length === 0) return;
//
// //                 const currentPost = data.items[0];
// //                 setPost(currentPost);
//
// //                 if (currentPost.fields.image && data.includes?.Asset) {
// //                     const imageAsset = data.includes.Asset.find(
// //                         asset => asset.sys.id === currentPost.fields.image?.sys.id
// //                     );
// //                     if (imageAsset) setImageUrl(imageAsset.fields.file.url);
// //                 }
// //             } catch (error) {
// //                 if (!(error instanceof DOMException && error.name === 'AbortError')) {
// //                     console.error('Error fetching post:', error);
// //                 }
// //             } finally {
// //                 setIsLoading(false);
// //             }
// //         };
//
// //         fetchPost();
// //         return () => controller.abort();
// //     }, [params.slug]);
//
// //     const handleCodeCopy = useCallback(async (code: string) => {
// //         try {
// //             await navigator.clipboard.writeText(code);
// //             setCopiedCode(code);
// //             setTimeout(() => setCopiedCode(null), 2000);
// //         } catch (err) {
// //             console.error('Error copying code:', err);
// //         }
// //     }, []);
//
// //     const renderRichText = useCallback((nodes: RichTextNode[]): React.ReactNode => {
// //         return nodes.map((node, index) => {
// //             const key = `node-${index}`;
//
// //             switch (node.nodeType) {
// //                 case 'paragraph':
// //                     return (
// //                         <p key={key} className="mb-6 text-gray-700 dark:text-gray-300 leading-relaxed">
// //                             {node.content?.map((content, i) => (
// //                                 <React.Fragment key={`${key}-content-${i}`}>
// //                                     {renderRichText([content])}
// //                                 </React.Fragment>
// //                             ))}
// //                         </p>
// //                     );
// //                 case 'code-block':
// //                     const code = node.content?.[0]?.value || '';
// //                     const isCopied = code === copiedCode;
// //                     return (
// //                         <div key={key} className="relative group">
// //                             <pre className="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto">
// //                                 <code>{code}</code>
// //                             </pre>
// //                             <button
// //                                 onClick={() => handleCodeCopy(code)}
// //                                 className="absolute top-2 right-2 p-2 bg-gray-800 rounded-md
// //                                          opacity-0 group-hover:opacity-100 transition-opacity"
// //                                 aria-label="Copiar código"
// //                             >
// //                                 {isCopied ? (
// //                                     <Check className="w-4 h-4 text-green-400" />
// //                                 ) : (
// //                                     <Copy className="w-4 h-4 text-gray-400" />
// //                                 )}
// //                             </button>
// //                         </div>
// //                     );
// //                 case 'heading-1':
// //                     return (
// //                         <h1 key={key} className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
// //                             {node.content?.map((content, i) => (
// //                                 <React.Fragment key={`${key}-content-${i}`}>
// //                                     {renderRichText([content])}
// //                                 </React.Fragment>
// //                             ))}
// //                         </h1>
// //                     );
// //                 case 'heading-2':
// //                     return (
// //                         <h2 key={key} className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
// //                             {node.content?.map((content, i) => (
// //                                 <React.Fragment key={`${key}-content-${i}`}>
// //                                     {renderRichText([content])}
// //                                 </React.Fragment>
// //                             ))}
// //                         </h2>
// //                     );
// //                 case 'text':
// //                     if (node.marks?.length) {
// //                         return node.marks.reduce((text, mark) => {
// //                             switch (mark.type) {
// //                                 case 'bold':
// //                                     return <strong key={key}>{text}</strong>;
// //                                 case 'italic':
// //                                     return <em key={key}>{text}</em>;
// //                                 case 'code':
// //                                     return (
// //                                         <code key={key} className="bg-gray-100 dark:bg-gray-800 rounded px-2 py-1">
// //                                             {text}
// //                                         </code>
// //                                     );
// //                                 default:
// //                                     return text;
// //                             }
// //                         }, <>{node.value}</>);
// //                     }
// //                     return node.value;
// //                 default:
// //                     return null;
// //             }
// //         });
// //     }, [copiedCode, handleCodeCopy]);
//
// //     const sharePost = useCallback(async (platform: 'twitter' | 'linkedin' | 'facebook' | 'copy') => {
// //         const url = window.location.href;
// //         const title = post?.fields.title || '';
// //         const encodedUrl = encodeURIComponent(url);
// //         const encodedTitle = encodeURIComponent(title);
//
// //         const shareUrls = {
// //             twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
// //             linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
// //             facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
// //         };
//
// //         if (platform === 'copy') {
// //             try {
// //                 await navigator.clipboard.writeText(url);
// //                 setShowShareTooltip(true);
// //                 setTimeout(() => setShowShareTooltip(false), 2000);
// //             } catch (err) {
// //                 console.error('Error al copiar:', err);
// //             }
// //             return;
// //         }
//
// //         window.open(shareUrls[platform], '_blank', 'noopener,noreferrer');
// //     }, [post?.fields.title]);
//
// //     if (isLoading) {
// //         return (
// //             <>
// //                 <Navbar />
// //                 <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
// //                     <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
// //                 </div>
// //                 <Footer />
// //             </>
// //         );
// //     }
//
// //     if (!post) {
// //         return (
// //             <>
// //                 <Navbar />
// //                 <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
// //                     <div className="text-center">
// //                         <p className="text-xl mb-4">Post no encontrado</p>
// //                         <button
// //                             onClick={() => router.push('/blog')}
// //                             className="flex items-center gap-2 text-blue-600 hover:underline mx-auto"
// //                         >
// //                             <ArrowLeft className="w-4 h-4" />
// //                             Volver al blog
// //                         </button>
// //                     </div>
// //                 </div>
// //                 <Footer />
// //             </>
// //         );
// //     }
//
// //     return (
// //         <>
// //             <Navbar />
// //             <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 dark:bg-gray-700 z-50">
// //                 <motion.div
// //                     className="h-full bg-blue-600 dark:bg-blue-400"
// //                     style={{ width: `${readingProgress}%` }}
// //                     transition={{ duration: 0.1 }}
// //                 />
// //             </div>
//
// //             <main className="min-h-screen bg-gray-50 dark:bg-gray-900">
// //                 <div className="max-w-7xl mx-auto px-4 py-12 flex">
// //                     {/* Main Content */}
// //                     <article className="flex-1 max-w-4xl">
// //                         <header className="mb-8">
// //                             <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
// //                                 {post.fields.title}
// //                             </h1>
//
// //                             <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-6">
// //                                 <span className="flex items-center gap-2">
// //                                     <Calendar className="w-4 h-4" />
// //                                     {new Date(post.sys.createdAt).toLocaleDateString('es-ES', {
// //                                         year: 'numeric',
// //                                         month: 'long',
// //                                         day: 'numeric'
// //                                     })}
// //                                 </span>
// //                                 {post.fields.readTime && (
// //                                     <span>· {post.fields.readTime} min de lectura</span>
// //                                 )}
// //                             </div>
//
// //                             {post.fields.tags && (
// //                                 <div className="flex flex-wrap gap-2 mb-6">
// //                                     {post.fields.tags.map((tag) => (
// //                                         <span
// //                                             key={tag}
// //                                             className="flex items-center gap-1 px-3 py-1 bg-blue-100
// //                                                      dark:bg-blue-900 text-blue-800 dark:text-blue-200
// //                                                      rounded-full text-sm"
// //                                         >
// //                                             <Tag className="w-3 h-3" />
// //                                             {tag}
// //                                         </span>
// //                                     ))}
// //                                 </div>
// //                             )}
// //                         </header>
//
// //                         {imageUrl && (
// //                             <div className="mb-8 rounded-lg overflow-hidden">
// //                                 <div className="relative h-96">
// //                                     <Image
// //                                         src={`https:${imageUrl}`}
// //                                         alt={post.fields.title}
// //                                         fill
// //                                         className="object-contain"
// //                                         priority
// //                                     />
// //                                 </div>
// //                             </div>
// //                         )}
//
// //                         <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
// //                             {renderRichText(post.fields.body.content)}
// //                         </div>
//
// //                         {/* CTA Section */}
// //                         <div className="my-12 p-6 bg-blue-50 dark:bg-blue-900 rounded-xl shadow-sm">
// //                             <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
// //                                 ¿Quieres aprender más sobre desarrollo web?
// //                             </h3>
// //                             <p className="text-gray-600 dark:text-gray-300 mb-6">
// //                                 Suscríbete a nuestro newsletter para recibir tutoriales, noticias y recursos
// //                                 exclusivos directamente en tu bandeja de entrada.
// //                             </p>
// //                             <form className="flex gap-4" onSubmit={(e) => e.preventDefault()}>
// //                                 <input
// //                                     type="email"
// //                                     placeholder="Tu correo electrónico"
// //                                     className="flex-1 px-4 py-2 rounded-lg border border-gray-300
// //                                              dark:border-gray-600 focus:ring-2 focus:ring-blue-500
// //                                              dark:bg-gray-800 dark:text-white"
// //                                 />
// //                                 <button
// //                                     type="submit"
// //                                     className="px-6 py-2 bg-blue-600 text-white rounded-lg
// //                                              hover:bg-blue-700 transition-colors"
// //                                 >
// //                                     Suscribirse
// //                                 </button>
// //                             </form>
// //                         </div>
//
// //                         {/* Share Buttons */}
// //                         <div className="border-t dark:border-gray-800 pt-8">
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// //                         <div className="flex flex-wrap items-center gap-4">
// //                                 <span className="text-gray-600 dark:text-gray-400">
// //                                     Compartir artículo:
// //                                 </span>
// //                                 <div className="flex gap-3">
// //                                     {[
// //                                         { platform: 'twitter', icon: Twitter },
// //                                         { platform: 'linkedin', icon: Linkedin },
// //                                         { platform: 'facebook', icon: Facebook }
// //                                     ].map(({ platform, icon: Icon }) => (
// //                                         <button
// //                                             key={platform}
// //                                             onClick={() => sharePost(platform as 'twitter' | 'linkedin' | 'facebook')}
// //                                             className="p-2 rounded-full bg-gray-100 dark:bg-gray-800
// //                                                      hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
// //                                             aria-label={`Compartir en ${platform}`}
// //                                         >
// //                                             <Icon className="w-5 h-5 text-gray-600 dark:text-gray-400" />
// //                                         </button>
// //                                     ))}
// //                                     <div className="relative">
// //                                         <button
// //                                             onClick={() => sharePost('copy')}
// //                                             className="p-2 rounded-full bg-gray-100 dark:bg-gray-800
// //                                                      hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
// //                                             aria-label="Copiar enlace"
// //                                         >
// //                                             <Link className="w-5 h-5 text-gray-600 dark:text-gray-400" />
// //                                         </button>
// //                                         <AnimatePresence>
// //                                             {showShareTooltip && (
// //                                                 <motion.div
// //                                                     initial={{ opacity: 0, y: 10 }}
// //                                                     animate={{ opacity: 1, y: 0 }}
// //                                                     exit={{ opacity: 0, y: 10 }}
// //                                                     className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2
// //                                                              px-3 py-1 bg-gray-900 text-white text-sm rounded shadow-lg"
// //                                                 >
// //                                                     ¡Enlace copiado!
// //                                                 </motion.div>
// //                                             )}
// //                                         </AnimatePresence>
// //                                     </div>
// //                                 </div>
// //                             </div>
// //                         </div>
// //                     </article>
//
// //                     {/* Sidebar CTA (fixed position) */}
// //                     <aside className="hidden xl:block w-80 ml-8">
// //                         <div className="sticky top-24">
// //                             <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
// //                                 <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
// //                                     📚 Recursos Gratuitos
// //                                 </h4>
// //                                 <p className="text-gray-600 dark:text-gray-400 mb-6">
// //                                     Descarga nuestra guía completa sobre desarrollo web y mejores prácticas.
// //                                 </p>
// //                                 <button
// //                                     onClick={() => {}} // Implementar lógica de descarga
// //                                     className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg
// //                                              hover:bg-blue-700 transition-colors text-center"
// //                                 >
// //                                     Descargar Guía
// //                                 </button>
// //                             </div>
//
// //                             <div className="mt-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
// //                                 <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
// //                                     💡 Tips Semanales
// //                                 </h4>
// //                                 <p className="text-gray-600 dark:text-gray-400 mb-6">
// //                                     Recibe consejos y trucos de desarrollo directamente en tu correo.
// //                                 </p>
// //                                 <form onSubmit={(e) => e.preventDefault()}>
// //                                     <input
// //                                         type="email"
// //                                         placeholder="Tu email"
// //                                         className="w-full px-4 py-2 mb-4 rounded-lg border border-gray-300
// //                                                  dark:border-gray-600 dark:bg-gray-700 dark:text-white"
// //                                     />
// //                                     <button
// //                                         type="submit"
// //                                         className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg
// //                                                  hover:bg-blue-700 transition-colors"
// //                                     >
// //                                         Suscribirse
// //                                     </button>
// //                                 </form>
// //                             </div>
// //                         </div>
// //                     </aside>
// //                 </div>
//
// //                 {/* Back to Blog Button */}
// //                 <div className="max-w-4xl mx-auto px-4 mb-12">
// //                     <button
// //                         onClick={() => router.push('/blog')}
// //                         className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline"
// //                     >
// //                         <ArrowLeft className="w-5 h-5" />
// //                         Volver al blog
// //                     </button>
// //                 </div>
// //             </main>
// //             <Footer />
// //         </>
// //     );
// // }
//
//
//
// 'use client';
//
// import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react';
// import { useRouter } from 'next/navigation';
// import Image from 'next/image';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Loader2, Calendar, ArrowLeft, Twitter, Linkedin, Facebook, Link, Tag, Copy, Check } from 'lucide-react';
// import Navbar from '@/components/layout/Navbar';
// import Footer from '@/components/layout/Footer';
//
// interface Asset {
//     sys: { id: string; };
//     fields: {
//         file: {
//             url: string;
//             details: { image?: { width: number; height: number; }; };
//         };
//     };
// }
//
// interface ContentfulResponse {
//     items: BlogPost[];
//     includes?: { Asset?: Asset[]; };
// }
//
// interface BlogPost {
//     sys: { id: string; createdAt: string; };
//     fields: {
//         title: string;
//         slug: string;
//         body: { content: RichTextNode[]; };
//         image?: { sys: { id: string; }; };
//         tags?: string[];
//         readTime?: number;
//     };
// }
//
// interface RichTextNode {
//     nodeType: string;
//     content?: RichTextNode[];
//     value?: string;
//     data?: { uri?: string; };
//     marks?: Array<{ type: string; }>;
// }
//
//
// export default function BlogPostPage({ params }: { params: { slug: string } }) {
//     const router = useRouter();
//     const [post, setPost] = useState<BlogPost | null>(null);
//     const [imageUrl, setImageUrl] = useState<string | null>(null);
//     const [isLoading, setIsLoading] = useState(true);
//     const [readingProgress, setReadingProgress] = useState(0);
//     const [showShareTooltip, setShowShareTooltip] = useState(false);
//     const [copiedCode, setCopiedCode] = useState<string | null>(null);
//     const lastScrollPosition = useRef(0);
//     const ticking = useRef(false);
//
//     // Optimizado manejo de scroll
//     const updateReadingProgress = useCallback(() => {
//         const currentPosition = window.scrollY;
//         const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
//
//         if (scrollHeight > 0) {
//             const progress = Math.min(100, Math.max(0, (currentPosition / scrollHeight) * 100));
//             if (Math.abs(progress - readingProgress) > 1) {
//                 setReadingProgress(progress);
//             }
//         }
//     }, [readingProgress]);
//
//     useEffect(() => {
//         const handleScroll = () => {
//             lastScrollPosition.current = window.scrollY;
//
//             if (!ticking.current) {
//                 window.requestAnimationFrame(() => {
//                     updateReadingProgress();
//                     ticking.current = false;
//                 });
//                 ticking.current = true;
//             }
//         };
//
//         window.addEventListener('scroll', handleScroll, { passive: true });
//         return () => window.removeEventListener('scroll', handleScroll);
//     }, [updateReadingProgress]);
//
//     useEffect(() => {
//         const controller = new AbortController();
//
//         const fetchPost = async () => {
//             if (!params.slug) return;
//
//             try {
//                 const response = await fetch(
//                     `https://cdn.contentful.com/spaces/sfme6nh4wom2/environments/master/entries?content_type=blogPage&fields.slug=${params.slug}&include=10&access_token=jn7dH3bS0f5p6ypvIHavVJTRpfigF6QY9R1jOyHv7A4`,
//                     { signal: controller.signal }
//                 );
//
//                 if (!response.ok) throw new Error('Error al cargar el post');
//
//                 const data: ContentfulResponse = await response.json();
//                 if (data.items.length === 0) return;
//
//                 const currentPost = data.items[0];
//                 setPost(currentPost);
//
//                 if (currentPost.fields.image && data.includes?.Asset) {
//                     const imageAsset = data.includes.Asset.find(
//                         asset => asset.sys.id === currentPost.fields.image?.sys.id
//                     );
//                     if (imageAsset) setImageUrl(imageAsset.fields.file.url);
//                 }
//             } catch (error) {
//                 if (!(error instanceof DOMException && error.name === 'AbortError')) {
//                     console.error('Error fetching post:', error);
//                 }
//             } finally {
//                 setIsLoading(false);
//             }
//         };
//
//         fetchPost();
//         return () => controller.abort();
//     }, [params.slug]);
//
//     const handleCodeCopy = useCallback(async (code: string) => {
//         try {
//             await navigator.clipboard.writeText(code);
//             setCopiedCode(code);
//             setTimeout(() => setCopiedCode(null), 2000);
//         } catch (err) {
//             console.error('Error copying code:', err);
//         }
//     }, []);
//
//     const renderRichText = useCallback((nodes: RichTextNode[]): React.ReactNode => {
//         return nodes.map((node, index) => {
//             const key = `node-${index}`;
//
//             switch (node.nodeType) {
//                 case 'paragraph':
//                     return (
//                         <p key={key} className="mb-6 text-gray-700 dark:text-gray-300 leading-relaxed">
//                             {node.content?.map((content, i) => (
//                                 <React.Fragment key={`${key}-content-${i}`}>
//                                     {renderRichText([content])}
//                                 </React.Fragment>
//                             ))}
//                         </p>
//                     );
//                 case 'code-block':
//                     const code = node.content?.[0]?.value || '';
//                     const isCopied = code === copiedCode;
//                     return (
//                         <div key={key} className="relative group">
//                             <pre className="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto">
//                                 <code>{code}</code>
//                             </pre>
//                             <button
//                                 onClick={() => handleCodeCopy(code)}
//                                 className="absolute top-2 right-2 p-2 bg-gray-800 rounded-md
//                                          opacity-0 group-hover:opacity-100 transition-opacity"
//                                 aria-label="Copiar código"
//                             >
//                                 {isCopied ? (
//                                     <Check className="w-4 h-4 text-green-400" />
//                                 ) : (
//                                     <Copy className="w-4 h-4 text-gray-400" />
//                                 )}
//                             </button>
//                         </div>
//                     );
//                 case 'heading-1':
//                     return (
//                         <h1 key={key} className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
//                             {node.content?.map((content, i) => (
//                                 <React.Fragment key={`${key}-content-${i}`}>
//                                     {renderRichText([content])}
//                                 </React.Fragment>
//                             ))}
//                         </h1>
//                     );
//                 case 'heading-2':
//                     return (
//                         <h2 key={key} className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
//                             {node.content?.map((content, i) => (
//                                 <React.Fragment key={`${key}-content-${i}`}>
//                                     {renderRichText([content])}
//                                 </React.Fragment>
//                             ))}
//                         </h2>
//                     );
//                 case 'text':
//                     if (node.marks?.length) {
//                         return node.marks.reduce((text, mark) => {
//                             switch (mark.type) {
//                                 case 'bold':
//                                     return <strong key={key}>{text}</strong>;
//                                 case 'italic':
//                                     return <em key={key}>{text}</em>;
//                                 case 'code':
//                                     return (
//                                         <code key={key} className="bg-gray-100 dark:bg-gray-800 rounded px-2 py-1">
//                                             {text}
//                                         </code>
//                                     );
//                                 default:
//                                     return text;
//                             }
//                         }, <>{node.value}</>);
//                     }
//                     return node.value;
//                 default:
//                     return null;
//             }
//         });
//     }, [copiedCode, handleCodeCopy]);
//
//     const sharePost = useCallback(async (platform: 'twitter' | 'linkedin' | 'facebook' | 'copy') => {
//         const url = window.location.href;
//         const title = post?.fields.title || '';
//         const encodedUrl = encodeURIComponent(url);
//         const encodedTitle = encodeURIComponent(title);
//
//         const shareUrls = {
//             twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
//             linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
//             facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
//         };
//
//         if (platform === 'copy') {
//             try {
//                 await navigator.clipboard.writeText(url);
//                 setShowShareTooltip(true);
//                 setTimeout(() => setShowShareTooltip(false), 2000);
//             } catch (err) {
//                 console.error('Error al copiar:', err);
//             }
//             return;
//         }
//
//         window.open(shareUrls[platform], '_blank', 'noopener,noreferrer');
//     }, [post?.fields.title]);
//
//     if (isLoading) {
//         return (
//             <>
//                 <Navbar />
//                 <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
//                     <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
//                 </div>
//                 <Footer />
//             </>
//         );
//     }
//
//     if (!post) {
//         return (
//             <>
//                 <Navbar />
//                 <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
//                     <div className="text-center">
//                         <p className="text-xl mb-4">Post no encontrado</p>
//                         <button
//                             onClick={() => router.push('/blog')}
//                             className="flex items-center gap-2 text-blue-600 hover:underline mx-auto"
//                         >
//                             <ArrowLeft className="w-4 h-4" />
//                             Volver al blog
//                         </button>
//                     </div>
//                 </div>
//                 <Footer />
//             </>
//         );
//     }
//
//     return (
//         <>
//             <Navbar />
//             <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 dark:bg-gray-700 z-50">
//                 <motion.div
//                     className="h-full bg-blue-600 dark:bg-blue-400"
//                     style={{ width: `${readingProgress}%` }}
//                     transition={{ duration: 0.1 }}
//                 />
//             </div>
//
//             <main className="min-h-screen bg-gray-50 dark:bg-gray-900">
//                 <div className="max-w-7xl mx-auto px-4 py-12 flex">
//                     {/* Main Content */}
//                     <article className="flex-1 max-w-4xl">
//                         <header className="mb-8">
//                             <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
//                                 {post.fields.title}
//                             </h1>
//
//                             <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-6">
//                                 <span className="flex items-center gap-2">
//                                     <Calendar className="w-4 h-4" />
//                                     {new Date(post.sys.createdAt).toLocaleDateString('es-ES', {
//                                         year: 'numeric',
//                                         month: 'long',
//                                         day: 'numeric'
//                                     })}
//                                 </span>
//                                 {post.fields.readTime && (
//                                     <span>· {post.fields.readTime} min de lectura</span>
//                                 )}
//                             </div>
//
//                             {post.fields.tags && (
//                                 <div className="flex flex-wrap gap-2 mb-6">
//                                     {post.fields.tags.map((tag) => (
//                                         <span
//                                             key={tag}
//                                             className="flex items-center gap-1 px-3 py-1 bg-blue-100
//                                                      dark:bg-blue-900 text-blue-800 dark:text-blue-200
//                                                      rounded-full text-sm"
//                                         >
//                                             <Tag className="w-3 h-3" />
//                                             {tag}
//                                         </span>
//                                     ))}
//                                 </div>
//                             )}
//                         </header>
//
//                         {imageUrl && (
//                             <div className="mb-8 rounded-lg overflow-hidden">
//                                 <div className="relative h-96">
//                                     <Image
//                                         src={`https:${imageUrl}`}
//                                         alt={post.fields.title}
//                                         fill
//                                         className="object-contain"
//                                         priority
//                                     />
//                                 </div>
//                             </div>
//                         )}
//
//                         <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
//                             {renderRichText(post.fields.body.content)}
//                         </div>
//
//                         {/* CTA Section */}
//                         <div className="my-12 p-6 bg-blue-50 dark:bg-blue-900 rounded-xl shadow-sm">
//                             <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
//                                 ¿Quieres aprender más sobre desarrollo web?
//                             </h3>
//                             <p className="text-gray-600 dark:text-gray-300 mb-6">
//                                 Suscríbete a nuestro newsletter para recibir tutoriales, noticias y recursos
//                                 exclusivos directamente en tu bandeja de entrada.
//                             </p>
//                             <form className="flex gap-4" onSubmit={(e) => e.preventDefault()}>
//                                 <input
//                                     type="email"
//                                     placeholder="Tu correo electrónico"
//                                     className="flex-1 px-4 py-2 rounded-lg border border-gray-300
//                                              dark:border-gray-600 focus:ring-2 focus:ring-blue-500
//                                              dark:bg-gray-800 dark:text-white"
//                                 />
//                                 <button
//                                     type="submit"
//                                     className="px-6 py-2 bg-blue-600 text-white rounded-lg
//                                              hover:bg-blue-700 transition-colors"
//                                 >
//                                     Suscribirse
//                                 </button>
//                             </form>
//                         </div>
//
//                         {/* Share Buttons */}
//                         <div className="border-t dark:border-gray-800 pt-8">
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//                         <div className="flex flex-wrap items-center gap-4">
//                                 <span className="text-gray-600 dark:text-gray-400">
//                                     Compartir artículo:
//                                 </span>
//                                 <div className="flex gap-3">
//                                     {[
//                                         { platform: 'twitter', icon: Twitter },
//                                         { platform: 'linkedin', icon: Linkedin },
//                                         { platform: 'facebook', icon: Facebook }
//                                     ].map(({ platform, icon: Icon }) => (
//                                         <button
//                                             key={platform}
//                                             onClick={() => sharePost(platform as 'twitter' | 'linkedin' | 'facebook')}
//                                             className="p-2 rounded-full bg-gray-100 dark:bg-gray-800
//                                                      hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
//                                             aria-label={`Compartir en ${platform}`}
//                                         >
//                                             <Icon className="w-5 h-5 text-gray-600 dark:text-gray-400" />
//                                         </button>
//                                     ))}
//                                     <div className="relative">
//                                         <button
//                                             onClick={() => sharePost('copy')}
//                                             className="p-2 rounded-full bg-gray-100 dark:bg-gray-800
//                                                      hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
//                                             aria-label="Copiar enlace"
//                                         >
//                                             <Link className="w-5 h-5 text-gray-600 dark:text-gray-400" />
//                                         </button>
//                                         <AnimatePresence>
//                                             {showShareTooltip && (
//                                                 <motion.div
//                                                     initial={{ opacity: 0, y: 10 }}
//                                                     animate={{ opacity: 1, y: 0 }}
//                                                     exit={{ opacity: 0, y: 10 }}
//                                                     className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2
//                                                              px-3 py-1 bg-gray-900 text-white text-sm rounded shadow-lg"
//                                                 >
//                                                     ¡Enlace copiado!
//                                                 </motion.div>
//                                             )}
//                                         </AnimatePresence>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </article>
//
//                     {/* Sidebar CTA (fixed position) */}
//                     <aside className="hidden xl:block w-80 ml-8">
//                         <div className="sticky top-24">
//                             <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
//                                 <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
//                                     📚 Recursos Gratuitos
//                                 </h4>
//                                 <p className="text-gray-600 dark:text-gray-400 mb-6">
//                                     Descarga nuestra guía completa sobre desarrollo web y mejores prácticas.
//                                 </p>
//                                 <button
//                                     onClick={() => {}} // Implementar lógica de descarga
//                                     className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg
//                                              hover:bg-blue-700 transition-colors text-center"
//                                 >
//                                     Descargar Guía
//                                 </button>
//                             </div>
//
//                             <div className="mt-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
//                                 <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
//                                     💡 Tips Semanales
//                                 </h4>
//                                 <p className="text-gray-600 dark:text-gray-400 mb-6">
//                                     Recibe consejos y trucos de desarrollo directamente en tu correo.
//                                 </p>
//                                 <form onSubmit={(e) => e.preventDefault()}>
//                                     <input
//                                         type="email"
//                                         placeholder="Tu email"
//                                         className="w-full px-4 py-2 mb-4 rounded-lg border border-gray-300
//                                                  dark:border-gray-600 dark:bg-gray-700 dark:text-white"
//                                     />
//                                     <button
//                                         type="submit"
//                                         className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg
//                                                  hover:bg-blue-700 transition-colors"
//                                     >
//                                         Suscribirse
//                                     </button>
//                                 </form>
//                             </div>
//                         </div>
//                     </aside>
//                 </div>
//
//                 {/* Back to Blog Button */}
//                 <div className="max-w-4xl mx-auto px-4 mb-12">
//                     <button
//                         onClick={() => router.push('/blog')}
//                         className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline"
//                     >
//                         <ArrowLeft className="w-5 h-5" />
//                         Volver al blog
//                     </button>
//                 </div>
//             </main>
//             <Footer />
//         </>
//     );
// }


'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Loader2, Calendar, ArrowLeft, Twitter,
    Linkedin, Facebook, Link as LinkIcon,
    Tag, Copy, Check, Clock, Share2,
    BookOpen, ChevronRight, Mail
} from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

interface Asset {
    sys: { id: string; };
    fields: {
        file: {
            url: string;
            details: { image?: { width: number; height: number; }; };
        };
    };
}

interface ContentfulResponse {
    items: BlogPost[];
    includes?: { Asset?: Asset[]; };
}

interface BlogPost {
    sys: { id: string; createdAt: string; };
    fields: {
        title: string;
        slug: string;
        body: { content: RichTextNode[]; };
        image?: { sys: { id: string; }; };
        tags?: string[];
        readTime?: number;
    };
}

interface RichTextNode {
    nodeType: string;
    content?: RichTextNode[];
    value?: string;
    data?: { uri?: string; };
    marks?: Array<{ type: string; }>;
}

const fadeInUpVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

export default function BlogPostPage({ params }: { params: { slug: string } }) {
    const router = useRouter();
    const [post, setPost] = useState<BlogPost | null>(null);
    const [imageUrl, setImageUrl] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [readingProgress, setReadingProgress] = useState(0);
    const [showShareTooltip, setShowShareTooltip] = useState(false);
    const [copiedCode, setCopiedCode] = useState<string | null>(null);
    const [showNewsletterPopup, setShowNewsletterPopup] = useState(false);
    const lastScrollPosition = useRef(0);
    const ticking = useRef(false);

    const updateReadingProgress = useCallback(() => {
        const currentPosition = window.scrollY;
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;

        if (scrollHeight > 0) {
            const progress = Math.min(100, Math.max(0, (currentPosition / scrollHeight) * 100));
            if (Math.abs(progress - readingProgress) > 1) {
                setReadingProgress(progress);
            }
        }

        // Show newsletter popup when user reaches 70% of the article
        if ((currentPosition / scrollHeight) > 0.7 && !showNewsletterPopup) {
            setShowNewsletterPopup(true);
        }
    }, [readingProgress, showNewsletterPopup]);

    useEffect(() => {
        const handleScroll = () => {
            lastScrollPosition.current = window.scrollY;
            if (!ticking.current) {
                window.requestAnimationFrame(() => {
                    updateReadingProgress();
                    ticking.current = false;
                });
                ticking.current = true;
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [updateReadingProgress]);

    useEffect(() => {
        const controller = new AbortController();

        const fetchPost = async () => {
            if (!params.slug) return;

            try {
                const response = await fetch(
                    `https://cdn.contentful.com/spaces/sfme6nh4wom2/environments/master/entries?content_type=blogPage&fields.slug=${params.slug}&include=10&access_token=jn7dH3bS0f5p6ypvIHavVJTRpfigF6QY9R1jOyHv7A4`,
                    { signal: controller.signal }
                );

                if (!response.ok) throw new Error('Error al cargar el post');

                const data: ContentfulResponse = await response.json();
                if (data.items.length === 0) return;

                const currentPost = data.items[0];
                setPost(currentPost);

                if (currentPost.fields.image && data.includes?.Asset) {
                    const imageAsset = data.includes.Asset.find(
                        asset => asset.sys.id === currentPost.fields.image?.sys.id
                    );
                    if (imageAsset) setImageUrl(imageAsset.fields.file.url);
                }
            } catch (error) {
                if (!(error instanceof DOMException && error.name === 'AbortError')) {
                    console.error('Error fetching post:', error);
                }
            } finally {
                setIsLoading(false);
            }
        };

        fetchPost();
        return () => controller.abort();
    }, [params.slug]);

    const handleCodeCopy = useCallback(async (code: string) => {
        try {
            await navigator.clipboard.writeText(code);
            setCopiedCode(code);
            setTimeout(() => setCopiedCode(null), 2000);
        } catch (err) {
            console.error('Error copying code:', err);
        }
    }, []);

    const renderRichText = useCallback((nodes: RichTextNode[]): React.ReactNode => {
        return nodes.map((node, index) => {
            const key = `node-${index}`;

            switch (node.nodeType) {
                case 'paragraph':
                    return (
                        <motion.p
                            key={key}
                            variants={fadeInUpVariants}
                            className="mb-6 text-gray-700 dark:text-gray-300 leading-relaxed"
                        >
                            {node.content?.map((content, i) => (
                                <React.Fragment key={`${key}-content-${i}`}>
                                    {renderRichText([content])}
                                </React.Fragment>
                            ))}
                        </motion.p>
                    );
                case 'code-block':
                    const code = node.content?.[0]?.value || '';
                    const isCopied = code === copiedCode;
                    return (
                        <motion.div
                            key={key}
                            variants={fadeInUpVariants}
                            className="relative group mb-6"
                        >
                            <pre className="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto">
                                <code>{code}</code>
                            </pre>
                            <button
                                onClick={() => handleCodeCopy(code)}
                                className="absolute top-2 right-2 p-2 bg-gray-800 rounded-md
                                         opacity-0 group-hover:opacity-100 transition-opacity"
                                aria-label="Copiar código"
                            >
                                {isCopied ? (
                                    <Check className="w-4 h-4 text-accent-yellow" />
                                ) : (
                                    <Copy className="w-4 h-4 text-gray-400" />
                                )}
                            </button>
                        </motion.div>
                    );
                case 'heading-1':
                    return (
                        <motion.h1
                            key={key}
                            variants={fadeInUpVariants}
                            className="text-3xl font-bold mb-6 text-gray-900 dark:text-white"
                        >
                            {node.content?.map((content, i) => (
                                <React.Fragment key={`${key}-content-${i}`}>
                                    {renderRichText([content])}
                                </React.Fragment>
                            ))}
                        </motion.h1>
                    );
                case 'heading-2':
                    return (
                        <motion.h2
                            key={key}
                            variants={fadeInUpVariants}
                            className="text-2xl font-bold mb-4 text-gray-900 dark:text-white"
                        >
                            {node.content?.map((content, i) => (
                                <React.Fragment key={`${key}-content-${i}`}>
                                    {renderRichText([content])}
                                </React.Fragment>
                            ))}
                        </motion.h2>
                    );
                case 'text':
                    if (node.marks?.length) {
                        return node.marks.reduce((text, mark) => {
                            switch (mark.type) {
                                case 'bold':
                                    return <strong key={key}>{text}</strong>;
                                case 'italic':
                                    return <em key={key}>{text}</em>;
                                case 'code':
                                    return (
                                        <code key={key} className="bg-gray-100 dark:bg-gray-800 rounded px-2 py-1">
                                            {text}
                                        </code>
                                    );
                                default:
                                    return text;
                            }
                        }, <>{node.value}</>);
                    }
                    return node.value;
                default:
                    return null;
            }
        });
    }, [copiedCode, handleCodeCopy]);

    const sharePost = useCallback(async (platform: 'twitter' | 'linkedin' | 'facebook' | 'copy') => {
        const url = window.location.href;
        const title = post?.fields.title || '';
        const encodedUrl = encodeURIComponent(url);
        const encodedTitle = encodeURIComponent(title);

        const shareUrls = {
            twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
            linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
            facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
        };

        if (platform === 'copy') {
            try {
                await navigator.clipboard.writeText(url);
                setShowShareTooltip(true);
                setTimeout(() => setShowShareTooltip(false), 2000);
            } catch (err) {
                console.error('Error al copiar:', err);
            }
            return;
        }

        window.open(shareUrls[platform], '_blank', 'noopener,noreferrer');
    }, [post?.fields.title]);

    if (isLoading) {
        return (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="min-h-screen bg-gray-50 dark:bg-gray-900"
            >
                <Navbar />
                <div className="flex items-center justify-center min-h-[60vh]">
                    <Loader2 className="w-8 h-8 animate-spin text-accent-red dark:text-accent-yellow" />
                </div>
                <Footer />
            </motion.div>
        );
    }

    if (!post) {
        return (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="min-h-screen bg-gray-50 dark:bg-gray-900"
            >
                <Navbar />
                <div className="flex items-center justify-center min-h-[60vh]">
                    <div className="text-center">
                        <p className="text-xl mb-4 text-gray-700 dark:text-gray-300">Post no encontrado</p>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => router.push('/blog')}
                            className="flex items-center gap-2 text-accent-red dark:text-accent-yellow
                                     hover:opacity-80 transition-opacity mx-auto"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            Volver al blog
                        </motion.button>
                    </div>
                </div>
                <Footer />
            </motion.div>
        );
    }

    return (
        <>
            <Navbar />
            <motion.div
                className="fixed top-0 left-0 w-full h-1 bg-gray-200 dark:bg-gray-700 z-50"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
            >
                <motion.div
                    className="h-full bg-accent-red dark:bg-accent-yellow"
                    style={{ width: `${readingProgress}%` }}
                    transition={{ duration: 0.1 }}
                />
            </motion.div>

            <main className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20">
                <motion.div
                    className="max-w-7xl mx-auto px-4 py-12 flex flex-col lg:flex-row gap-12"
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                >
                    {/* Main Content */}
                    <article className="flex-1 max-w-4xl">
                        <motion.header className="mb-8" variants={fadeInUpVariants}>
                            <motion.div
                                className="flex items-center gap-2 text-accent-red dark:text-accent-yellow mb-4"
                                variants={fadeInUpVariants}
                            >
                                <BookOpen className="w-5 h-5" />
                                <span className="text-sm font-medium">Blog</span>
                                <ChevronRight className="w-4 h-4" />
                                <span className="text-sm font-medium">Artículo</span>
                            </motion.div>

                            <motion.h1
                                className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6"
                                variants={fadeInUpVariants}
                            >
                                {post.fields.title}
                            </motion.h1>

                            <motion.div
                                className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-6"
                                variants={fadeInUpVariants}
                            >
                                <span className="flex items-center gap-2">
                                    <Calendar className="w-4 h-4" />
                                    {new Date(post.sys.createdAt).toLocaleDateString('es-ES', {
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric'
                                    })}
                                </span>
                                {post.fields.readTime && (













                                    <span className="flex items-center gap-2">
                                        <Clock className="w-4 h-4" />
                                        {post.fields.readTime} min de lectura
                                    </span>
                                )}
                            </motion.div>

                            {post.fields.tags && (
                                <motion.div
                                    className="flex flex-wrap gap-2 mb-6"
                                    variants={fadeInUpVariants}
                                >
                                    {post.fields.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="flex items-center gap-1 px-3 py-1 bg-accent-red/10
                                                     dark:bg-accent-yellow/10 text-accent-red dark:text-accent-yellow
                                                     rounded-full text-sm hover:bg-accent-red/20
                                                     dark:hover:bg-accent-yellow/20 transition-colors"
                                        >
                                            <Tag className="w-3 h-3" />
                                            {tag}
                                        </span>
                                    ))}
                                </motion.div>
                            )}
                        </motion.header>

                        {imageUrl && (
                            <motion.div
                                className="mb-8 rounded-2xl overflow-hidden shadow-xl"
                                variants={fadeInUpVariants}
                            >
                                <div className="relative aspect-video">
                                    <Image
                                        src={`https:${imageUrl}`}
                                        alt={post.fields.title}
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                </div>
                            </motion.div>
                        )}

                        <motion.div
                            className="prose prose-lg dark:prose-invert max-w-none mb-12"
                            variants={containerVariants}
                        >
                            {renderRichText(post.fields.body.content)}
                        </motion.div>

                        {/* Author Section */}
                        <motion.div
                            className="bg-white dark:bg-gray-800 rounded-2xl p-6 mb-12 shadow-lg"
                            variants={fadeInUpVariants}
                        >
                            <div className="flex items-center gap-4">
                                <Image
                                    src="/tori.jpeg"
                                    alt="Autor"
                                    width={64}
                                    height={64}
                                    className="rounded-full"
                                />
                                <div>
                                    <h3 className="font-semibold text-gray-900 dark:text-white">
                                        Roger Rojas
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400">
                                        Software Architect & Full Stack Developer
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Share Section */}
                        <motion.div
                            className="border-t dark:border-gray-800 pt-8"
                            variants={fadeInUpVariants}
                        >
                            <div className="flex flex-wrap items-center gap-4">
                                <span className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                                    <Share2 className="w-5 h-5" />
                                    Compartir artículo:
                                </span>
                                <div className="flex gap-3">
                                    {[
                                        { platform: 'twitter', icon: Twitter },
                                        { platform: 'linkedin', icon: Linkedin },
                                        { platform: 'facebook', icon: Facebook }
                                    ].map(({ platform, icon: Icon }) => (
                                        <motion.button
                                            key={platform}
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.9 }}
                                            onClick={() => sharePost(platform as 'twitter' | 'linkedin' | 'facebook')}
                                            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800
                                                     hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                                            aria-label={`Compartir en ${platform}`}
                                        >
                                            <Icon className="w-5 h-5 text-accent-red dark:text-accent-yellow" />
                                        </motion.button>
                                    ))}
                                    <div className="relative">
                                        <motion.button
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.9 }}
                                            onClick={() => sharePost('copy')}
                                            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800
                                                     hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                                            aria-label="Copiar enlace"
                                        >
                                            <LinkIcon className="w-5 h-5 text-accent-red dark:text-accent-yellow" />
                                        </motion.button>
                                        <AnimatePresence>
                                            {showShareTooltip && (
                                                <motion.div
                                                    initial={{ opacity: 0, y: 10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, y: 10 }}
                                                    className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2
                                                             px-3 py-1 bg-gray-900 text-white text-sm rounded shadow-lg"
                                                >
                                                    ¡Enlace copiado!
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </article>

                    {/* Sidebar */}
                    <aside className="w-full lg:w-80">
                        <div className="sticky top-24 space-y-6">
                            {/* Newsletter Card */}
                            <motion.div
                                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg"
                                variants={fadeInUpVariants}
                            >
                                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                                    📬 Newsletter
                                </h4>
                                <p className="text-gray-600 dark:text-gray-400 mb-6">
                                    Recibe las últimas actualizaciones y artículos directamente en tu correo.
                                </p>
                                <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
                                    <input
                                        type="email"
                                        placeholder="Tu correo electrónico"
                                        className="w-full px-4 py-2 rounded-lg border border-gray-300
                                                 dark:border-gray-600 focus:ring-2 focus:ring-accent-red
                                                 dark:focus:ring-accent-yellow dark:bg-gray-700 dark:text-white"
                                    />
                                    <motion.button
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        type="submit"
                                        className="w-full px-4 py-2 bg-accent-red dark:bg-accent-yellow
                                                 text-white dark:text-gray-900 rounded-lg hover:opacity-90
                                                 transition-opacity flex items-center justify-center gap-2"
                                    >
                                        <Mail className="w-4 h-4" />
                                        Suscribirse
                                    </motion.button>
                                </form>
                            </motion.div>

                            {/* Related Posts */}
                            <motion.div
                                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg"
                                variants={fadeInUpVariants}
                            >
                                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                                    📚 Artículos Relacionados
                                </h4>
                                <div className="space-y-4">
                                    {/* Aquí irían los posts relacionados */}
                                </div>
                            </motion.div>
                        </div>
                    </aside>
                </motion.div>

                {/* Back to Blog Button */}
                <motion.div
                    className="max-w-7xl mx-auto px-4 pb-12"
                    variants={fadeInUpVariants}
                    initial="initial"
                    animate="animate"
                >
                    <motion.button
                        whileHover={{ x: -5 }}
                        onClick={() => router.push('/blog')}
                        className="flex items-center gap-2 text-accent-red dark:text-accent-yellow
                                 hover:opacity-80 transition-opacity"
                    >
                        <ArrowLeft className="w-5 h-5" />
                        Volver al blog
                    </motion.button>
                </motion.div>
            </main>
            <Footer />
        </>
    );
}