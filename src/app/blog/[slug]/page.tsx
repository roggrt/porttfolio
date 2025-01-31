// // // //
// // // // 'use client';
// // // //
// // // // import React, { useState, useEffect, useCallback, useRef } from 'react';
// // // // import { useRouter } from 'next/navigation';
// // // // import Image from 'next/image';
// // // // import { motion, AnimatePresence } from 'framer-motion';
// // // // import {
// // // //     Loader2, Calendar, ArrowLeft, Twitter,
// // // //     Linkedin, Facebook, Link as LinkIcon,
// // // //     Tag, Copy, Check, Clock, Share2,
// // // //     BookOpen, ChevronRight, Mail
// // // // } from 'lucide-react';
// // // // import Navbar from '@/components/layout/Navbar';
// // // // import Footer from '@/components/layout/Footer';
// // // //
// // // // interface Asset {
// // // //     sys: { id: string; };
// // // //     fields: {
// // // //         file: {
// // // //             url: string;
// // // //             details: { image?: { width: number; height: number; }; };
// // // //         };
// // // //     };
// // // // }
// // // //
// // // // interface ContentfulResponse {
// // // //     items: BlogPost[];
// // // //     includes?: { Asset?: Asset[]; };
// // // // }
// // // //
// // // // interface BlogPost {
// // // //     sys: { id: string; createdAt: string; };
// // // //     fields: {
// // // //         title: string;
// // // //         slug: string;
// // // //         body: { content: RichTextNode[]; };
// // // //         image?: { sys: { id: string; }; };
// // // //         tags?: string[];
// // // //         readTime?: number;
// // // //     };
// // // // }
// // // //
// // // // interface RichTextNode {
// // // //     nodeType: string;
// // // //     content?: RichTextNode[];
// // // //     value?: string;
// // // //     data?: { uri?: string; };
// // // //     marks?: Array<{ type: string; }>;
// // // // }
// // // //
// // // // const fadeInUpVariants = {
// // // //     initial: { opacity: 0, y: 20 },
// // // //     animate: { opacity: 1, y: 0, transition: { duration: 0.6 } }
// // // // };
// // // //
// // // // const containerVariants = {
// // // //     hidden: { opacity: 0 },
// // // //     visible: {
// // // //         opacity: 1,
// // // //         transition: {
// // // //             staggerChildren: 0.1
// // // //         }
// // // //     }
// // // // };
// // // //
// // // // export default function BlogPostPage({ params }: { params: { slug: string } }) {
// // // //     const router = useRouter();
// // // //     const [post, setPost] = useState<BlogPost | null>(null);
// // // //     const [imageUrl, setImageUrl] = useState<string | null>(null);
// // // //     const [isLoading, setIsLoading] = useState(true);
// // // //     const [readingProgress, setReadingProgress] = useState(0);
// // // //     const [showShareTooltip, setShowShareTooltip] = useState(false);
// // // //     const [copiedCode, setCopiedCode] = useState<string | null>(null);
// // // //     const [showNewsletterPopup, setShowNewsletterPopup] = useState(false);
// // // //     const lastScrollPosition = useRef(0);
// // // //     const ticking = useRef(false);
// // // //
// // // //     const updateReadingProgress = useCallback(() => {
// // // //         const currentPosition = window.scrollY;
// // // //         const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
// // // //
// // // //         if (scrollHeight > 0) {
// // // //             const progress = Math.min(100, Math.max(0, (currentPosition / scrollHeight) * 100));
// // // //             if (Math.abs(progress - readingProgress) > 1) {
// // // //                 setReadingProgress(progress);
// // // //             }
// // // //         }
// // // //
// // // //         // Show newsletter popup when user reaches 70% of the article
// // // //         if ((currentPosition / scrollHeight) > 0.7 && !showNewsletterPopup) {
// // // //             setShowNewsletterPopup(true);
// // // //         }
// // // //     }, [readingProgress, showNewsletterPopup]);
// // // //
// // // //     useEffect(() => {
// // // //         const handleScroll = () => {
// // // //             lastScrollPosition.current = window.scrollY;
// // // //             if (!ticking.current) {
// // // //                 window.requestAnimationFrame(() => {
// // // //                     updateReadingProgress();
// // // //                     ticking.current = false;
// // // //                 });
// // // //                 ticking.current = true;
// // // //             }
// // // //         };
// // // //
// // // //         window.addEventListener('scroll', handleScroll, { passive: true });
// // // //         return () => window.removeEventListener('scroll', handleScroll);
// // // //     }, [updateReadingProgress]);
// // // //
// // // //     useEffect(() => {
// // // //         const controller = new AbortController();
// // // //
// // // //         const fetchPost = async () => {
// // // //             if (!params.slug) return;
// // // //
// // // //             try {
// // // //                 const response = await fetch(
// // // //                     `https://cdn.contentful.com/spaces/sfme6nh4wom2/environments/master/entries?content_type=blogPage&fields.slug=${params.slug}&include=10&access_token=jn7dH3bS0f5p6ypvIHavVJTRpfigF6QY9R1jOyHv7A4`,
// // // //                     { signal: controller.signal }
// // // //                 );
// // // //
// // // //                 if (!response.ok) throw new Error('Error al cargar el post');
// // // //
// // // //                 const data: ContentfulResponse = await response.json();
// // // //                 if (data.items.length === 0) return;
// // // //
// // // //                 const currentPost = data.items[0];
// // // //                 setPost(currentPost);
// // // //
// // // //                 if (currentPost.fields.image && data.includes?.Asset) {
// // // //                     const imageAsset = data.includes.Asset.find(
// // // //                         asset => asset.sys.id === currentPost.fields.image?.sys.id
// // // //                     );
// // // //                     if (imageAsset) setImageUrl(imageAsset.fields.file.url);
// // // //                 }
// // // //             } catch (error) {
// // // //                 if (!(error instanceof DOMException && error.name === 'AbortError')) {
// // // //                     console.error('Error fetching post:', error);
// // // //                 }
// // // //             } finally {
// // // //                 setIsLoading(false);
// // // //             }
// // // //         };
// // // //
// // // //         fetchPost();
// // // //         return () => controller.abort();
// // // //     }, [params.slug]);
// // // //
// // // //     const handleCodeCopy = useCallback(async (code: string) => {
// // // //         try {
// // // //             await navigator.clipboard.writeText(code);
// // // //             setCopiedCode(code);
// // // //             setTimeout(() => setCopiedCode(null), 2000);
// // // //         } catch (err) {
// // // //             console.error('Error copying code:', err);
// // // //         }
// // // //     }, []);
// // // //
// // // //     const renderRichText = useCallback((nodes: RichTextNode[]): React.ReactNode => {
// // // //         return nodes.map((node, index) => {
// // // //             const key = `node-${index}`;
// // // //
// // // //             switch (node.nodeType) {
// // // //                 case 'paragraph':
// // // //                     return (
// // // //                         <motion.p
// // // //                             key={key}
// // // //                             variants={fadeInUpVariants}
// // // //                             className="mb-6 text-gray-700 dark:text-gray-300 leading-relaxed"
// // // //                         >
// // // //                             {node.content?.map((content, i) => (
// // // //                                 <React.Fragment key={`${key}-content-${i}`}>
// // // //                                     {renderRichText([content])}
// // // //                                 </React.Fragment>
// // // //                             ))}
// // // //                         </motion.p>
// // // //                     );
// // // //                 case 'code-block':
// // // //                     const code = node.content?.[0]?.value || '';
// // // //                     const isCopied = code === copiedCode;
// // // //                     return (
// // // //                         <motion.div
// // // //                             key={key}
// // // //                             variants={fadeInUpVariants}
// // // //                             className="relative group mb-6"
// // // //                         >
// // // //                             <pre className="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto">
// // // //                                 <code>{code}</code>
// // // //                             </pre>
// // // //                             <button
// // // //                                 onClick={() => handleCodeCopy(code)}
// // // //                                 className="absolute top-2 right-2 p-2 bg-gray-800 rounded-md
// // // //                                          opacity-0 group-hover:opacity-100 transition-opacity"
// // // //                                 aria-label="Copiar código"
// // // //                             >
// // // //                                 {isCopied ? (
// // // //                                     <Check className="w-4 h-4 text-accent-yellow" />
// // // //                                 ) : (
// // // //                                     <Copy className="w-4 h-4 text-gray-400" />
// // // //                                 )}
// // // //                             </button>
// // // //                         </motion.div>
// // // //                     );
// // // //                 case 'heading-1':
// // // //                     return (
// // // //                         <motion.h1
// // // //                             key={key}
// // // //                             variants={fadeInUpVariants}
// // // //                             className="text-3xl font-bold mb-6 text-gray-900 dark:text-white"
// // // //                         >
// // // //                             {node.content?.map((content, i) => (
// // // //                                 <React.Fragment key={`${key}-content-${i}`}>
// // // //                                     {renderRichText([content])}
// // // //                                 </React.Fragment>
// // // //                             ))}
// // // //                         </motion.h1>
// // // //                     );
// // // //                 case 'heading-2':
// // // //                     return (
// // // //                         <motion.h2
// // // //                             key={key}
// // // //                             variants={fadeInUpVariants}
// // // //                             className="text-2xl font-bold mb-4 text-gray-900 dark:text-white"
// // // //                         >
// // // //                             {node.content?.map((content, i) => (
// // // //                                 <React.Fragment key={`${key}-content-${i}`}>
// // // //                                     {renderRichText([content])}
// // // //                                 </React.Fragment>
// // // //                             ))}
// // // //                         </motion.h2>
// // // //                     );
// // // //                 case 'text':
// // // //                     if (node.marks?.length) {
// // // //                         return node.marks.reduce((text, mark) => {
// // // //                             switch (mark.type) {
// // // //                                 case 'bold':
// // // //                                     return <strong key={key}>{text}</strong>;
// // // //                                 case 'italic':
// // // //                                     return <em key={key}>{text}</em>;
// // // //                                 case 'code':
// // // //                                     return (
// // // //                                         <code key={key} className="bg-gray-100 dark:bg-gray-800 rounded px-2 py-1">
// // // //                                             {text}
// // // //                                         </code>
// // // //                                     );
// // // //                                 default:
// // // //                                     return text;
// // // //                             }
// // // //                         }, <>{node.value}</>);
// // // //                     }
// // // //                     return node.value;
// // // //                 default:
// // // //                     return null;
// // // //             }
// // // //         });
// // // //     }, [copiedCode, handleCodeCopy]);
// // // //
// // // //     const sharePost = useCallback(async (platform: 'twitter' | 'linkedin' | 'facebook' | 'copy') => {
// // // //         const url = window.location.href;
// // // //         const title = post?.fields.title || '';
// // // //         const encodedUrl = encodeURIComponent(url);
// // // //         const encodedTitle = encodeURIComponent(title);
// // // //
// // // //         const shareUrls = {
// // // //             twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
// // // //             linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
// // // //             facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
// // // //         };
// // // //
// // // //         if (platform === 'copy') {
// // // //             try {
// // // //                 await navigator.clipboard.writeText(url);
// // // //                 setShowShareTooltip(true);
// // // //                 setTimeout(() => setShowShareTooltip(false), 2000);
// // // //             } catch (err) {
// // // //                 console.error('Error al copiar:', err);
// // // //             }
// // // //             return;
// // // //         }
// // // //
// // // //         window.open(shareUrls[platform], '_blank', 'noopener,noreferrer');
// // // //     }, [post?.fields.title]);
// // // //
// // // //     if (isLoading) {
// // // //         return (
// // // //             <motion.div
// // // //                 initial={{ opacity: 0 }}
// // // //                 animate={{ opacity: 1 }}
// // // //                 className="min-h-screen bg-gray-50 dark:bg-gray-900"
// // // //             >
// // // //                 <Navbar />
// // // //                 <div className="flex items-center justify-center min-h-[60vh]">
// // // //                     <Loader2 className="w-8 h-8 animate-spin text-accent-red dark:text-accent-yellow" />
// // // //                 </div>
// // // //                 <Footer />
// // // //             </motion.div>
// // // //         );
// // // //     }
// // // //
// // // //     if (!post) {
// // // //         return (
// // // //             <motion.div
// // // //                 initial={{ opacity: 0 }}
// // // //                 animate={{ opacity: 1 }}
// // // //                 className="min-h-screen bg-gray-50 dark:bg-gray-900"
// // // //             >
// // // //                 <Navbar />
// // // //                 <div className="flex items-center justify-center min-h-[60vh]">
// // // //                     <div className="text-center">
// // // //                         <p className="text-xl mb-4 text-gray-700 dark:text-gray-300">Post no encontrado</p>
// // // //                         <motion.button
// // // //                             whileHover={{ scale: 1.05 }}
// // // //                             whileTap={{ scale: 0.95 }}
// // // //                             onClick={() => router.push('/blog')}
// // // //                             className="flex items-center gap-2 text-accent-red dark:text-accent-yellow
// // // //                                      hover:opacity-80 transition-opacity mx-auto"
// // // //                         >
// // // //                             <ArrowLeft className="w-4 h-4" />
// // // //                             Volver al blog
// // // //                         </motion.button>
// // // //                     </div>
// // // //                 </div>
// // // //                 <Footer />
// // // //             </motion.div>
// // // //         );
// // // //     }
// // // //
// // // //     return (
// // // //         <>
// // // //             <Navbar />
// // // //             <motion.div
// // // //                 className="fixed top-0 left-0 w-full h-1 bg-gray-200 dark:bg-gray-700 z-50"
// // // //                 initial={{ opacity: 0 }}
// // // //                 animate={{ opacity: 1 }}
// // // //                 transition={{ delay: 0.5 }}
// // // //             >
// // // //                 <motion.div
// // // //                     className="h-full bg-accent-red dark:bg-accent-yellow"
// // // //                     style={{ width: `${readingProgress}%` }}
// // // //                     transition={{ duration: 0.1 }}
// // // //                 />
// // // //             </motion.div>
// // // //
// // // //             <main className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20">
// // // //                 <motion.div
// // // //                     className="max-w-7xl mx-auto px-4 py-12 flex flex-col lg:flex-row gap-12"
// // // //                     initial="hidden"
// // // //                     animate="visible"
// // // //                     variants={containerVariants}
// // // //                 >
// // // //                     {/* Main Content */}
// // // //                     <article className="flex-1 max-w-4xl">
// // // //                         <motion.header className="mb-8" variants={fadeInUpVariants}>
// // // //                             <motion.div
// // // //                                 className="flex items-center gap-2 text-accent-red dark:text-accent-yellow mb-4"
// // // //                                 variants={fadeInUpVariants}
// // // //                             >
// // // //                                 <BookOpen className="w-5 h-5" />
// // // //                                 <span className="text-sm font-medium">Blog</span>
// // // //                                 <ChevronRight className="w-4 h-4" />
// // // //                                 <span className="text-sm font-medium">Artículo</span>
// // // //                             </motion.div>
// // // //
// // // //                             <motion.h1
// // // //                                 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6"
// // // //                                 variants={fadeInUpVariants}
// // // //                             >
// // // //                                 {post.fields.title}
// // // //                             </motion.h1>
// // // //
// // // //                             <motion.div
// // // //                                 className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-6"
// // // //                                 variants={fadeInUpVariants}
// // // //                             >
// // // //                                 <span className="flex items-center gap-2">
// // // //                                     <Calendar className="w-4 h-4" />
// // // //                                     {new Date(post.sys.createdAt).toLocaleDateString('es-ES', {
// // // //                                         year: 'numeric',
// // // //                                         month: 'long',
// // // //                                         day: 'numeric'
// // // //                                     })}
// // // //                                 </span>
// // // //                                 {post.fields.readTime && (
// // // //
// // // //
// // // //
// // // //
// // // //
// // // //
// // // //
// // // //
// // // //
// // // //
// // // //
// // // //
// // // //
// // // //                                     <span className="flex items-center gap-2">
// // // //                                         <Clock className="w-4 h-4" />
// // // //                                         {post.fields.readTime} min de lectura
// // // //                                     </span>
// // // //                                 )}
// // // //                             </motion.div>
// // // //
// // // //                             {post.fields.tags && (
// // // //                                 <motion.div
// // // //                                     className="flex flex-wrap gap-2 mb-6"
// // // //                                     variants={fadeInUpVariants}
// // // //                                 >
// // // //                                     {post.fields.tags.map((tag) => (
// // // //                                         <span
// // // //                                             key={tag}
// // // //                                             className="flex items-center gap-1 px-3 py-1 bg-accent-red/10
// // // //                                                      dark:bg-accent-yellow/10 text-accent-red dark:text-accent-yellow
// // // //                                                      rounded-full text-sm hover:bg-accent-red/20
// // // //                                                      dark:hover:bg-accent-yellow/20 transition-colors"
// // // //                                         >
// // // //                                             <Tag className="w-3 h-3" />
// // // //                                             {tag}
// // // //                                         </span>
// // // //                                     ))}
// // // //                                 </motion.div>
// // // //                             )}
// // // //                         </motion.header>
// // // //
// // // //                         {imageUrl && (
// // // //                             <motion.div
// // // //                                 className="mb-8 rounded-2xl overflow-hidden shadow-xl"
// // // //                                 variants={fadeInUpVariants}
// // // //                             >
// // // //                                 <div className="relative aspect-video">
// // // //                                     <Image
// // // //                                         src={`https:${imageUrl}`}
// // // //                                         alt={post.fields.title}
// // // //                                         fill
// // // //                                         className="object-cover"
// // // //                                         priority
// // // //                                     />
// // // //                                 </div>
// // // //                             </motion.div>
// // // //                         )}
// // // //
// // // //                         <motion.div
// // // //                             className="prose prose-lg dark:prose-invert max-w-none mb-12"
// // // //                             variants={containerVariants}
// // // //                         >
// // // //                             {renderRichText(post.fields.body.content)}
// // // //                         </motion.div>
// // // //
// // // //                         {/* Author Section */}
// // // //                         <motion.div
// // // //                             className="bg-white dark:bg-gray-800 rounded-2xl p-6 mb-12 shadow-lg"
// // // //                             variants={fadeInUpVariants}
// // // //                         >
// // // //                             <div className="flex items-center gap-4">
// // // //                                 <Image
// // // //                                     src="/tori.jpeg"
// // // //                                     alt="Autor"
// // // //                                     width={64}
// // // //                                     height={64}
// // // //                                     className="rounded-full"
// // // //                                 />
// // // //                                 <div>
// // // //                                     <h3 className="font-semibold text-gray-900 dark:text-white">
// // // //                                         Roger Rojas
// // // //                                     </h3>
// // // //                                     <p className="text-gray-600 dark:text-gray-400">
// // // //                                         Software Architect & Full Stack Developer
// // // //                                     </p>
// // // //                                 </div>
// // // //                             </div>
// // // //                         </motion.div>
// // // //
// // // //                         {/* Share Section */}
// // // //                         <motion.div
// // // //                             className="border-t dark:border-gray-800 pt-8"
// // // //                             variants={fadeInUpVariants}
// // // //                         >
// // // //                             <div className="flex flex-wrap items-center gap-4">
// // // //                                 <span className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
// // // //                                     <Share2 className="w-5 h-5" />
// // // //                                     Compartir artículo:
// // // //                                 </span>
// // // //                                 <div className="flex gap-3">
// // // //                                     {[
// // // //                                         { platform: 'twitter', icon: Twitter },
// // // //                                         { platform: 'linkedin', icon: Linkedin },
// // // //                                         { platform: 'facebook', icon: Facebook }
// // // //                                     ].map(({ platform, icon: Icon }) => (
// // // //                                         <motion.button
// // // //                                             key={platform}
// // // //                                             whileHover={{ scale: 1.1 }}
// // // //                                             whileTap={{ scale: 0.9 }}
// // // //                                             onClick={() => sharePost(platform as 'twitter' | 'linkedin' | 'facebook')}
// // // //                                             className="p-2 rounded-full bg-gray-100 dark:bg-gray-800
// // // //                                                      hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
// // // //                                             aria-label={`Compartir en ${platform}`}
// // // //                                         >
// // // //                                             <Icon className="w-5 h-5 text-accent-red dark:text-accent-yellow" />
// // // //                                         </motion.button>
// // // //                                     ))}
// // // //                                     <div className="relative">
// // // //                                         <motion.button
// // // //                                             whileHover={{ scale: 1.1 }}
// // // //                                             whileTap={{ scale: 0.9 }}
// // // //                                             onClick={() => sharePost('copy')}
// // // //                                             className="p-2 rounded-full bg-gray-100 dark:bg-gray-800
// // // //                                                      hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
// // // //                                             aria-label="Copiar enlace"
// // // //                                         >
// // // //                                             <LinkIcon className="w-5 h-5 text-accent-red dark:text-accent-yellow" />
// // // //                                         </motion.button>
// // // //                                         <AnimatePresence>
// // // //                                             {showShareTooltip && (
// // // //                                                 <motion.div
// // // //                                                     initial={{ opacity: 0, y: 10 }}
// // // //                                                     animate={{ opacity: 1, y: 0 }}
// // // //                                                     exit={{ opacity: 0, y: 10 }}
// // // //                                                     className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2
// // // //                                                              px-3 py-1 bg-gray-900 text-white text-sm rounded shadow-lg"
// // // //                                                 >
// // // //                                                     ¡Enlace copiado!
// // // //                                                 </motion.div>
// // // //                                             )}
// // // //                                         </AnimatePresence>
// // // //                                     </div>
// // // //                                 </div>
// // // //                             </div>
// // // //                         </motion.div>
// // // //                     </article>
// // // //
// // // //                     {/* Sidebar */}
// // // //                     <aside className="w-full lg:w-80">
// // // //                         <div className="sticky top-24 space-y-6">
// // // //                             {/* Newsletter Card */}
// // // //                             <motion.div
// // // //                                 className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg"
// // // //                                 variants={fadeInUpVariants}
// // // //                             >
// // // //                                 <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
// // // //                                     📬 Newsletter
// // // //                                 </h4>
// // // //                                 <p className="text-gray-600 dark:text-gray-400 mb-6">
// // // //                                     Recibe las últimas actualizaciones y artículos directamente en tu correo.
// // // //                                 </p>
// // // //                                 <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
// // // //                                     <input
// // // //                                         type="email"
// // // //                                         placeholder="Tu correo electrónico"
// // // //                                         className="w-full px-4 py-2 rounded-lg border border-gray-300
// // // //                                                  dark:border-gray-600 focus:ring-2 focus:ring-accent-red
// // // //                                                  dark:focus:ring-accent-yellow dark:bg-gray-700 dark:text-white"
// // // //                                     />
// // // //                                     <motion.button
// // // //                                         whileHover={{ scale: 1.02 }}
// // // //                                         whileTap={{ scale: 0.98 }}
// // // //                                         type="submit"
// // // //                                         className="w-full px-4 py-2 bg-accent-red dark:bg-accent-yellow
// // // //                                                  text-white dark:text-gray-900 rounded-lg hover:opacity-90
// // // //                                                  transition-opacity flex items-center justify-center gap-2"
// // // //                                     >
// // // //                                         <Mail className="w-4 h-4" />
// // // //                                         Suscribirse
// // // //                                     </motion.button>
// // // //                                 </form>
// // // //                             </motion.div>
// // // //
// // // //                             {/* Related Posts */}
// // // //                             <motion.div
// // // //                                 className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg"
// // // //                                 variants={fadeInUpVariants}
// // // //                             >
// // // //                                 <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
// // // //                                     📚 Artículos Relacionados
// // // //                                 </h4>
// // // //                                 <div className="space-y-4">
// // // //                                     {/* Aquí irían los posts relacionados */}
// // // //                                 </div>
// // // //                             </motion.div>
// // // //                         </div>
// // // //                     </aside>
// // // //                 </motion.div>
// // // //
// // // //                 {/* Back to Blog Button */}
// // // //                 <motion.div
// // // //                     className="max-w-7xl mx-auto px-4 pb-12"
// // // //                     variants={fadeInUpVariants}
// // // //                     initial="initial"
// // // //                     animate="animate"
// // // //                 >
// // // //                     <motion.button
// // // //                         whileHover={{ x: -5 }}
// // // //                         onClick={() => router.push('/blog')}
// // // //                         className="flex items-center gap-2 text-accent-red dark:text-accent-yellow
// // // //                                  hover:opacity-80 transition-opacity"
// // // //                     >
// // // //                         <ArrowLeft className="w-5 h-5" />
// // // //                         Volver al blog
// // // //                     </motion.button>
// // // //                 </motion.div>
// // // //             </main>
// // // //             <Footer />
// // // //         </>
// // // //     );
// // // // }
// // //
// // //
// // //
// // //
// // // // src/app/blog/[slug]/page.tsx
// // // 'use client';
// // //
// // // import { useState, useEffect } from 'react';
// // // import Link from 'next/link';
// // // import Image from 'next/image';
// // // import { ArrowLeft } from 'lucide-react';
// // // import Navbar from '@/components/layout/Navbar';
// // // import Footer from '@/components/layout/Footer';
// // //
// // // interface Asset {
// // //     sys: { id: string; };
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
// // //
// // // interface ContentfulResponse {
// // //     items: BlogPost[];
// // //     includes?: {
// // //         Asset?: Asset[];
// // //     };
// // // }
// // //
// // // interface BlogPost {
// // //     sys: {
// // //         id: string;
// // //         createdAt: string;
// // //     };
// // //     fields: {
// // //         title: string;
// // //         body: {
// // //             content: Array<{
// // //                 nodeType: string;
// // //                 content: Array<{
// // //                     value: string;
// // //                     nodeType?: string;
// // //                     marks?: Array<{ type: string; }>;
// // //                 }>;
// // //             }>;
// // //         };
// // //         image?: {
// // //             sys: { id: string; };
// // //             fields?: {
// // //                 file: {
// // //                     url: string;
// // //                 };
// // //             };
// // //         };
// // //         tags?: string[];
// // //         author?: {
// // //             fields: {
// // //                 title: string;
// // //             };
// // //         };
// // //         slug: string;
// // //     };
// // // }
// // //
// // // export default function BlogPost({ params }: { params: { slug: string } }) {
// // //     const [post, setPost] = useState<BlogPost | null>(null);
// // //     const [imageUrl, setImageUrl] = useState<string | null>(null);
// // //     const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);
// // //     const [loading, setLoading] = useState(true);
// // //
// // //     useEffect(() => {
// // //         const fetchPost = async () => {
// // //             try {
// // //                 const response = await fetch(
// // //                     `https://cdn.contentful.com/spaces/sfme6nh4wom2/environments/master/entries?content_type=blogPage&fields.slug=${params.slug}&include=10&access_token=jn7dH3bS0f5p6ypvIHavVJTRpfigF6QY9R1jOyHv7A4`
// // //                 );
// // //                 const data: ContentfulResponse = await response.json();
// // //
// // //                 if (data.items.length > 0) {
// // //                     const currentPost = data.items[0];
// // //                     setPost(currentPost);
// // //
// // //                     if (currentPost.fields.image && data.includes?.Asset) {
// // //                         const imageAsset = data.includes.Asset.find(
// // //                             asset => asset.sys.id === currentPost.fields.image?.sys.id
// // //                         );
// // //                         if (imageAsset) {
// // //                             setImageUrl(imageAsset.fields.file.url);
// // //                         }
// // //                     }
// // //
// // //                     const allPostsResponse = await fetch(
// // //                         'https://cdn.contentful.com/spaces/sfme6nh4wom2/environments/master/entries?content_type=blogPage&access_token=jn7dH3bS0f5p6ypvIHavVJTRpfigF6QY9R1jOyHv7A4'
// // //                     );
// // //                     const allPostsData = await allPostsResponse.json();
// // //
// // //                     const related = allPostsData.items
// // //                         .filter(p =>
// // //                             p.sys.id !== currentPost.sys.id &&
// // //                             p.fields.tags?.some(tag =>
// // //                                 currentPost.fields.tags?.includes(tag)
// // //                             )
// // //                         )
// // //                         .slice(0, 3);
// // //
// // //                     setRelatedPosts(related);
// // //                 }
// // //             } catch (error) {
// // //                 console.error('Error:', error);
// // //             } finally {
// // //                 setLoading(false);
// // //             }
// // //         };
// // //
// // //         fetchPost();
// // //     }, [params.slug]);
// // //
// // //     const renderContent = (content: any) => {
// // //         if (content.nodeType === 'paragraph') {
// // //             return (
// // //                 <p className="mb-6 text-gray-800 dark:text-gray-200">
// // //                     {content.content?.map((item: any, index: number) => (
// // //                         <span key={index}>
// // //                             {item.value}
// // //                         </span>
// // //                     ))}
// // //                 </p>
// // //             );
// // //         }
// // //         if (content.nodeType === 'heading-2') {
// // //             return (
// // //                 <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
// // //                     {content.content?.map((item: any, index: number) => (
// // //                         <span key={index}>
// // //                             {item.value}
// // //                         </span>
// // //                     ))}
// // //                 </h2>
// // //             );
// // //         }
// // //         return null;
// // //     };
// // //
// // //     if (loading) {
// // //         return (
// // //             <>
// // //                 <Navbar />
// // //                 <div className="min-h-screen flex items-center justify-center">
// // //                     <p className="text-gray-800 dark:text-gray-200">Cargando...</p>
// // //                 </div>
// // //                 <Footer />
// // //             </>
// // //         );
// // //     }
// // //
// // //     if (!post) {
// // //         return (
// // //             <>
// // //                 <Navbar />
// // //                 <div className="min-h-screen flex items-center justify-center">
// // //                     <div className="text-center">
// // //                         <p className="text-xl mb-4 text-gray-800 dark:text-gray-200">Post no encontrado</p>
// // //                         <Link href="/blog" className="text-accent-red dark:text-accent-yellow hover:underline">
// // //                             Volver al blog
// // //                         </Link>
// // //                     </div>
// // //                 </div>
// // //                 <Footer />
// // //             </>
// // //         );
// // //     }
// // //
// // //     return (
// // //         <>
// // //             <Navbar />
// // //             <main className="min-h-screen bg-white dark:bg-gray-900">
// // //                 {/* Hero Section Reducido */}
// // //                 <div className="relative pt-20">
// // //                     {imageUrl && (
// // //                         <div className="relative h-[40vh] min-h-[300px]">
// // //                             <Image
// // //                                 src={`https:${imageUrl}`}
// // //                                 alt={post.fields.title}
// // //                                 fill
// // //                                 className="object-cover"
// // //                                 priority
// // //                             />
// // //                             <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/60" />
// // //                         </div>
// // //                     )}
// // //
// // //                     <div className={`relative ${imageUrl ? 'absolute inset-0' : 'pt-20'}`}>
// // //                         <div className="container mx-auto px-4 h-full flex items-center">
// // //                             <div className={`max-w-4xl mx-auto w-full ${
// // //                                 imageUrl
// // //                                     ? 'text-white'
// // //                                     : 'text-gray-900 dark:text-white'
// // //                             }`}>
// // //                                 <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
// // //                                     {post.fields.title}
// // //                                 </h1>
// // //
// // //                                 <div className={`flex items-center justify-center gap-4 mb-6 text-sm ${
// // //                                     imageUrl
// // //                                         ? 'text-white/90'
// // //                                         : 'text-gray-600 dark:text-gray-400'
// // //                                 }`}>
// // //                                     <time dateTime={post.sys.createdAt}>
// // //                                         {new Date(post.sys.createdAt).toLocaleDateString('es-ES', {
// // //                                             year: 'numeric',
// // //                                             month: 'long',
// // //                                             day: 'numeric'
// // //                                         })}
// // //                                     </time>
// // //                                     {post.fields.author?.fields?.title && (
// // //                                         <>
// // //                                             <span>•</span>
// // //                                             <span>{post.fields.author.fields.title}</span>
// // //                                         </>
// // //                                     )}
// // //                                 </div>
// // //
// // //                                 {post.fields.tags && (
// // //                                     <div className="flex flex-wrap justify-center gap-2">
// // //                                         {post.fields.tags.map(tag => (
// // //                                             <span
// // //                                                 key={tag}
// // //                                                 className={imageUrl
// // //                                                     ? 'px-3 py-1 rounded-full text-sm bg-white/10 text-white'
// // //                                                     : 'px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200'
// // //                                                 }
// // //                                             >
// // //                                                 {tag}
// // //                                             </span>
// // //                                         ))}
// // //                                     </div>
// // //                                 )}
// // //                             </div>
// // //                         </div>
// // //                     </div>
// // //                 </div>
// // //
// // //                 {/* Contenido */}
// // //                 <div className="container mx-auto px-4 py-12">
// // //                     <article className="max-w-3xl mx-auto">
// // //                         {post.fields.body.content.map((content, index) => (
// // //                             <div key={index}>
// // //                                 {renderContent(content)}
// // //                             </div>
// // //                         ))}
// // //                     </article>
// // //
// // //                     {/* Posts Relacionados */}
// // //                     {relatedPosts.length > 0 && (
// // //                         <section className="max-w-4xl mx-auto mt-16 pt-8 border-t border-gray-200 dark:border-gray-800">
// // //                             <h2 className="text-2xl font-bold mb-8 text-center text-gray-900 dark:text-white">
// // //                                 Artículos Relacionados
// // //                             </h2>
// // //                             <div className="grid md:grid-cols-3 gap-6">
// // //                                 {relatedPosts.map(relatedPost => (
// // //                                     <Link
// // //                                         href={`/blog/${relatedPost.fields.slug}`}
// // //                                         key={relatedPost.sys.id}
// // //                                         className="group block bg-gray-50 dark:bg-gray-800 rounded-lg
// // //                                                  shadow-sm hover:shadow-md transition-shadow overflow-hidden"
// // //                                     >
// // //                                         <div className="p-4">
// // //                                             <h3 className="font-semibold mb-2 line-clamp-2 text-gray-900
// // //                                                        dark:text-white group-hover:text-accent-red
// // //                                                        dark:group-hover:text-accent-yellow">
// // //                                                 {relatedPost.fields.title}
// // //                                             </h3>
// // //                                             <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-3">
// // //                                                 {relatedPost.fields.body.content[0]?.content[0]?.value}
// // //                                             </p>
// // //                                             {relatedPost.fields.tags && (
// // //                                                 <div className="mt-3 flex flex-wrap gap-2">
// // //                                                     {relatedPost.fields.tags.slice(0, 2).map(tag => (
// // //                                                         <span
// // //                                                             key={tag}
// // //                                                             className="text-xs bg-gray-200 dark:bg-gray-700
// // //                                                                      text-gray-800 dark:text-gray-200
// // //                                                                      px-2 py-1 rounded-full"
// // //                                                         >
// // //                                                             {tag}
// // //                                                         </span>
// // //                                                     ))}
// // //                                                 </div>
// // //                                             )}
// // //                                         </div>
// // //                                     </Link>
// // //                                 ))}
// // //                             </div>
// // //                         </section>
// // //                     )}
// // //
// // //                     {/* Botón Volver */}
// // //                     <div className="max-w-4xl mx-auto mt-12">
// // //                         <Link
// // //                             href="/blog"
// // //                             className="inline-flex items-center gap-2 text-accent-red
// // //                                      dark:text-accent-yellow hover:underline"
// // //                         >
// // //                             <ArrowLeft className="w-5 h-5" />
// // //                             Volver al blog
// // //                         </Link>
// // //                     </div>
// // //                 </div>
// // //             </main>
// // //             <Footer />
// // //         </>
// // //     );
// // // }
// //
// // 'use client';
// //
// // import { useState, useEffect } from 'react';
// // import Link from 'next/link';
// // import Image from 'next/image';
// // import { ArrowLeft } from 'lucide-react';
// // import Navbar from '@/components/layout/Navbar';
// // import Footer from '@/components/layout/Footer';
// //
// // interface Asset {
// //     sys: { id: string; };
// //     fields: {
// //         file: {
// //             url: string;
// //             details: { image?: { width: number; height: number; }; };
// //         };
// //     };
// // }
// //
// // interface ContentfulResponse {
// //     items: BlogPost[];
// //     includes?: { Asset?: Asset[]; };
// // }
// //
// // interface BlogPost {
// //     sys: { id: string; createdAt: string; };
// //     fields: {
// //         title: string;
// //         slug: string;
// //         body: {
// //             content: Array<{
// //                 nodeType: string;
// //                 content: Array<{
// //                     value: string;
// //                     nodeType?: string;
// //                     marks?: Array<{ type: string; }>;
// //                 }>;
// //             }>;
// //         };
// //         image?: {
// //             sys: { id: string; };
// //             fields?: {
// //                 file: {
// //                     url: string;
// //                 };
// //             };
// //         };
// //         tags?: string[];
// //         author?: {
// //             fields: {
// //                 title: string;
// //             };
// //         };
// //     };
// // }
// //
// // export default function BlogPost({ params }: { params: { slug: string } }) {
// //     const [post, setPost] = useState<BlogPost | null>(null);
// //     const [imageUrl, setImageUrl] = useState<string | null>(null);
// //     const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);
// //     const [loading, setLoading] = useState(true);
// //
// //     useEffect(() => {
// //         const fetchPost = async () => {
// //             try {
// //                 const response = await fetch(
// //                     `https://cdn.contentful.com/spaces/sfme6nh4wom2/environments/master/entries?content_type=blogPage&fields.slug=${params.slug}&include=10&access_token=jn7dH3bS0f5p6ypvIHavVJTRpfigF6QY9R1jOyHv7A4`
// //                 );
// //                 const data: ContentfulResponse = await response.json();
// //
// //                 if (data.items.length > 0) {
// //                     const currentPost = data.items[0];
// //                     setPost(currentPost);
// //
// //                     if (currentPost.fields.image && data.includes?.Asset) {
// //                         const imageAsset = data.includes.Asset.find(
// //                             asset => asset.sys.id === currentPost.fields.image?.sys.id
// //                         );
// //                         if (imageAsset) {
// //                             setImageUrl(imageAsset.fields.file.url);
// //                         }
// //                     }
// //
// //                     const allPostsResponse = await fetch(
// //                         'https://cdn.contentful.com/spaces/sfme6nh4wom2/environments/master/entries?content_type=blogPage&access_token=jn7dH3bS0f5p6ypvIHavVJTRpfigF6QY9R1jOyHv7A4'
// //                     );
// //                     const allPostsData = await allPostsResponse.json();
// //
// //                     const related = allPostsData.items
// //                         .filter(p =>
// //                             p.sys.id !== currentPost.sys.id &&
// //                             p.fields.tags?.some(tag =>
// //                                 currentPost.fields.tags?.includes(tag)
// //                             )
// //                         )
// //                         .slice(0, 3);
// //
// //                     setRelatedPosts(related);
// //                 }
// //             } catch (error) {
// //                 console.error('Error:', error);
// //             } finally {
// //                 setLoading(false);
// //             }
// //         };
// //
// //         fetchPost();
// //     }, [params.slug]);
// //
// //     const renderContent = (content: any) => {
// //         if (content.nodeType === 'paragraph') {
// //             return (
// //                 <p className="mb-6 text-gray-700 dark:text-gray-300">
// //                     {content.content?.map((item: any, index: number) => (
// //                         <span key={index}>{item.value}</span>
// //                     ))}
// //                 </p>
// //             );
// //         }
// //         if (content.nodeType === 'heading-2') {
// //             return (
// //                 <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">
// //                     {content.content?.map((item: any, index: number) => (
// //                         <span key={index}>{item.value}</span>
// //                     ))}
// //                 </h2>
// //             );
// //         }
// //         return null;
// //     };
// //
// //     if (loading) {
// //         return (
// //             <>
// //                 <Navbar />
// //                 <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900">
// //                     <p className="text-gray-700 dark:text-gray-300">Cargando...</p>
// //                 </div>
// //                 <Footer />
// //             </>
// //         );
// //     }
// //
// //     if (!post) {
// //         return (
// //             <>
// //                 <Navbar />
// //                 <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900">
// //                     <div className="text-center">
// //                         <p className="text-xl mb-4 text-gray-700 dark:text-gray-300">
// //                             Post no encontrado
// //                         </p>
// //                         <Link
// //                             href="/blog"
// //                             className="text-accent-red dark:text-accent-yellow hover:underline"
// //                         >
// //                             Volver al blog
// //                         </Link>
// //                     </div>
// //                 </div>
// //                 <Footer />
// //             </>
// //         );
// //     }
// //
// //     return (
// //         <>
// //             <Navbar />
// //             <main className="min-h-screen bg-white dark:bg-gray-900">
// //                 {/* Hero Section con gradiente */}
// //                 <div className="relative h-[60vh] min-h-[500px] w-full">
// //                     {/* Fondo con imagen o gradiente */}
// //                     <div className="absolute inset-0">
// //                         {imageUrl ? (
// //                             <>
// //                                 <Image
// //                                     src={`https:${imageUrl}`}
// //                                     alt={post.fields.title}
// //                                     fill
// //                                     className="object-cover"
// //                                     priority
// //                                 />
// //                                 {/* Gradiente sobre la imagen */}
// //                                 <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/80 to-black/90" />
// //                             </>
// //                         ) : (
// //                             // Gradiente cuando no hay imagen
// //                             <div className="absolute inset-0 bg-gradient-to-b from-gray-800 via-gray-900 to-black dark:from-gray-900 dark:via-gray-900 dark:to-black" />
// //                         )}
// //                     </div>
// //
// //                     {/* Contenido del Hero */}
// //                     <div className="relative h-full pt-20">
// //                         <div className="container mx-auto px-4 h-full flex items-center justify-center">
// //                             <div className="max-w-4xl w-full text-center">
// //                                 {/* Título */}
// //                                 <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
// //                                     {post.fields.title}
// //                                 </h1>
// //
// //                                 {/* Meta información */}
// //                                 <div className="flex items-center justify-center gap-4 mb-6 text-gray-200">
// //                                     <time dateTime={post.sys.createdAt}>
// //                                         {new Date(post.sys.createdAt).toLocaleDateString('es-ES', {
// //                                             year: 'numeric',
// //                                             month: 'long',
// //                                             day: 'numeric'
// //                                         })}
// //                                     </time>
// //                                     {post.fields.author?.fields?.title && (
// //                                         <>
// //                                             <span>•</span>
// //                                             <span>{post.fields.author.fields.title}</span>
// //                                         </>
// //                                     )}
// //                                 </div>
// //
// //                                 {/* Tags */}
// //                                 {post.fields.tags && (
// //                                     <div className="flex flex-wrap justify-center gap-2">
// //                                         {post.fields.tags.map(tag => (
// //                                             <span
// //                                                 key={tag}
// //                                                 className="px-3 py-1 rounded-full text-sm bg-white/20 text-white"
// //                                             >
// //                                                 {tag}
// //                                             </span>
// //                                         ))}
// //                                     </div>
// //                                 )}
// //                             </div>
// //                         </div>
// //                     </div>
// //                 </div>
// //
// //                 {/* Contenido del artículo */}
// //                 <div className="container mx-auto px-4 py-12">
// //                     <article className="max-w-3xl mx-auto">
// //                         {post.fields.body.content.map((content, index) => (
// //                             <div key={index}>
// //                                 {renderContent(content)}
// //                             </div>
// //                         ))}
// //                     </article>
// //
// //                     {/* Posts Relacionados */}
// //                     {relatedPosts.length > 0 && (
// //                         <section className="max-w-4xl mx-auto mt-16 pt-8 border-t border-gray-200 dark:border-gray-700">
// //                             <h2 className="text-2xl font-bold mb-8 text-center text-gray-800 dark:text-gray-100">
// //                                 Artículos Relacionados
// //                             </h2>
// //                             <div className="grid md:grid-cols-3 gap-6">
// //                                 {relatedPosts.map(relatedPost => (
// //                                     <Link
// //                                         href={`/blog/${relatedPost.fields.slug}`}
// //                                         key={relatedPost.sys.id}
// //                                         className="group block bg-gray-50 dark:bg-gray-800 rounded-lg
// //                                                  shadow-sm hover:shadow-md transition-shadow overflow-hidden"
// //                                     >
// //                                         <div className="p-4">
// //                                             <h3 className="font-semibold mb-2 line-clamp-2 text-gray-800
// //                                                        dark:text-gray-100 group-hover:text-accent-red
// //                                                        dark:group-hover:text-accent-yellow">
// //                                                 {relatedPost.fields.title}
// //                                             </h3>
// //                                             <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-3">
// //                                                 {relatedPost.fields.body.content[0]?.content[0]?.value}
// //                                             </p>
// //                                             {relatedPost.fields.tags && (
// //                                                 <div className="mt-3 flex flex-wrap gap-2">
// //                                                     {relatedPost.fields.tags.slice(0, 2).map(tag => (
// //                                                         <span
// //                                                             key={tag}
// //                                                             className="text-xs bg-gray-200 dark:bg-gray-700
// //                                                                      text-gray-700 dark:text-gray-300
// //                                                                      px-2 py-1 rounded-full"
// //                                                         >
// //                                                             {tag}
// //                                                         </span>
// //                                                     ))}
// //                                                 </div>
// //                                             )}
// //                                         </div>
// //                                     </Link>
// //                                 ))}
// //                             </div>
// //                         </section>
// //                     )}
// //
// //                     {/* Botón Volver */}
// //                     <div className="max-w-4xl mx-auto mt-12">
// //                         <Link
// //                             href="/blog"
// //                             className="inline-flex items-center gap-2 text-accent-red
// //                                      dark:text-accent-yellow hover:underline"
// //                         >
// //                             <ArrowLeft className="w-5 h-5" />
// //                             Volver al blog
// //                         </Link>
// //                     </div>
// //                 </div>
// //             </main>
// //             <Footer />
// //         </>
// //     );
// // }
//
//
// 'use client';
//
// import { useState, useEffect } from 'react';
// import Link from 'next/link';
// import Image from 'next/image';
// import { ArrowLeft } from 'lucide-react';
// import Navbar from '@/components/layout/Navbar';
// import Footer from '@/components/layout/Footer';
//
// // Interfaces se mantienen igual
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
//         body: {
//             content: Array<{
//                 nodeType: string;
//                 content: Array<{
//                     value: string;
//                     nodeType?: string;
//                     marks?: Array<{ type: string; }>;
//                     data?: any;
//                 }>;
//                 data?: any;
//             }>;
//         };
//         image?: {
//             sys: { id: string; };
//             fields?: {
//                 file: {
//                     url: string;
//                 };
//             };
//         };
//         tags?: string[];
//         author?: {
//             fields: {
//                 title: string;
//             };
//         };
//     };
// }
//
// export default function BlogPost({ params }: { params: { slug: string } }) {
//     const [post, setPost] = useState<BlogPost | null>(null);
//     const [imageUrl, setImageUrl] = useState<string | null>(null);
//     const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);
//     const [loading, setLoading] = useState(true);
//
//     // useEffect se mantiene igual
//     useEffect(() => {
//         const fetchPost = async () => {
//             try {
//                 const response = await fetch(
//                     `https://cdn.contentful.com/spaces/sfme6nh4wom2/environments/master/entries?content_type=blogPage&fields.slug=${params.slug}&include=10&access_token=jn7dH3bS0f5p6ypvIHavVJTRpfigF6QY9R1jOyHv7A4`
//                 );
//                 const data: ContentfulResponse = await response.json();
//
//                 if (data.items.length > 0) {
//                     const currentPost = data.items[0];
//                     setPost(currentPost);
//
//                     if (currentPost.fields.image && data.includes?.Asset) {
//                         const imageAsset = data.includes.Asset.find(
//                             asset => asset.sys.id === currentPost.fields.image?.sys.id
//                         );
//                         if (imageAsset) {
//                             setImageUrl(imageAsset.fields.file.url);
//                         }
//                     }
//
//                     const allPostsResponse = await fetch(
//                         'https://cdn.contentful.com/spaces/sfme6nh4wom2/environments/master/entries?content_type=blogPage&access_token=jn7dH3bS0f5p6ypvIHavVJTRpfigF6QY9R1jOyHv7A4'
//                     );
//                     const allPostsData = await allPostsResponse.json();
//
//                     const related = allPostsData.items
//                         .filter(p =>
//                             p.sys.id !== currentPost.sys.id &&
//                             p.fields.tags?.some(tag =>
//                                 currentPost.fields.tags?.includes(tag)
//                             )
//                         )
//                         .slice(0, 3);
//
//                     setRelatedPosts(related);
//                 }
//             } catch (error) {
//                 console.error('Error:', error);
//             } finally {
//                 setLoading(false);
//             }
//         };
//
//         fetchPost();
//     }, [params.slug]);
//
//     // NUEVO: Función para manejar los estilos de texto
//     const renderMark = (text: string, marks?: Array<{ type: string }>) => {
//         if (!marks) return text;
//
//         return marks.reduce((result, mark) => {
//             switch (mark.type) {
//                 case 'bold':
//                     return <strong key={mark.type}>{result}</strong>;
//                 case 'italic':
//                     return <em key={mark.type}>{result}</em>;
//                 case 'underline':
//                     return <u key={mark.type}>{result}</u>;
//                 case 'code':
//                     return <code key={mark.type} className="bg-gray-100 dark:bg-gray-800 px-1 rounded">{result}</code>;
//                 default:
//                     return result;
//             }
//         }, text);
//     };
//
//     // MODIFICADO: renderContent actualizado para manejar todos los tipos de nodos
//     const renderContent = (content: any) => {
//         switch (content.nodeType) {
//             case 'paragraph':
//                 return (
//                     <p className="mb-6 text-gray-700 dark:text-gray-300">
//                         {content.content?.map((item: any, index: number) => (
//                             <span key={index}>
//                                 {renderMark(item.value, item.marks)}
//                             </span>
//                         ))}
//                     </p>
//                 );
//             case 'heading-1':
//                 return (
//                     <h1 className="text-4xl font-bold mb-6 text-gray-900 dark:text-gray-100">
//                         {content.content?.map((item: any, index: number) => (
//                             <span key={index}>
//                                 {renderMark(item.value, item.marks)}
//                             </span>
//                         ))}
//                     </h1>
//                 );
//             case 'heading-2':
//                 return (
//                     <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-gray-100">
//                         {content.content?.map((item: any, index: number) => (
//                             <span key={index}>
//                                 {renderMark(item.value, item.marks)}
//                             </span>
//                         ))}
//                     </h2>
//                 );
//             case 'heading-3':
//                 return (
//                     <h3 className="text-2xl font-bold mb-3 text-gray-800 dark:text-gray-100">
//                         {content.content?.map((item: any, index: number) => (
//                             <span key={index}>
//                                 {renderMark(item.value, item.marks)}
//                             </span>
//                         ))}
//                     </h3>
//                 );
//             case 'heading-4':
//                 return (
//                     <h4 className="text-xl font-bold mb-2 text-gray-800 dark:text-gray-100">
//                         {content.content?.map((item: any, index: number) => (
//                             <span key={index}>
//                                 {renderMark(item.value, item.marks)}
//                             </span>
//                         ))}
//                     </h4>
//                 );
//             case 'heading-5':
//                 return (
//                     <h5 className="text-lg font-bold mb-2 text-gray-800 dark:text-gray-100">
//                         {content.content?.map((item: any, index: number) => (
//                             <span key={index}>
//                                 {renderMark(item.value, item.marks)}
//                             </span>
//                         ))}
//                     </h5>
//                 );
//             case 'heading-6':
//                 return (
//                     <h6 className="text-base font-bold mb-2 text-gray-800 dark:text-gray-100">
//                         {content.content?.map((item: any, index: number) => (
//                             <span key={index}>
//                                 {renderMark(item.value, item.marks)}
//                             </span>
//                         ))}
//                     </h6>
//                 );
//             case 'unordered-list':
//                 return (
//                     <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
//                         {content.content?.map((item: any, index: number) => (
//                             <li key={index}>
//                                 {item.content?.map((listItem: any, listIndex: number) => (
//                                     <span key={listIndex}>
//                                         {renderMark(listItem.value, listItem.marks)}
//                                     </span>
//                                 ))}
//                             </li>
//                         ))}
//                     </ul>
//                 );
//             case 'ordered-list':
//                 return (
//                     <ol className="list-decimal pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
//                         {content.content?.map((item: any, index: number) => (
//                             <li key={index}>
//                                 {item.content?.map((listItem: any, listIndex: number) => (
//                                     <span key={listIndex}>
//                                         {renderMark(listItem.value, listItem.marks)}
//                                     </span>
//                                 ))}
//                             </li>
//                         ))}
//                     </ol>
//                 );
//             case 'blockquote':
//                 return (
//                     <blockquote className="border-l-4 border-accent-red dark:border-accent-yellow pl-4 mb-6 italic text-gray-700 dark:text-gray-300">
//                         {content.content?.map((item: any, index: number) => (
//                             <span key={index}>
//                                 {renderMark(item.value, item.marks)}
//                             </span>
//                         ))}
//                     </blockquote>
//                 );
//             case 'hr':
//                 return <hr className="my-8 border-gray-200 dark:border-gray-700" />;
//             case 'hyperlink':
//                 return (
//                     <a
//                         href={content.data.uri}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="text-accent-red dark:text-accent-yellow hover:underline"
//                     >
//                         {content.content?.map((item: any, index: number) => (
//                             <span key={index}>
//                                 {renderMark(item.value, item.marks)}
//                             </span>
//                         ))}
//                     </a>
//                 );
//             case 'embedded-entry-block':
//             case 'embedded-asset-block':
//                 // Manejo de contenido incrustado si lo necesitas
//                 return null;
//             default:
//                 return null;
//         }
//     };
//
//     // El resto del componente se mantiene igual
//     if (loading) {
//         return (
//             <>
//                 <Navbar />
//                 <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900">
//                     <p className="text-gray-700 dark:text-gray-300">Cargando...</p>
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
//                 <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900">
//                     <div className="text-center">
//                         <p className="text-xl mb-4 text-gray-700 dark:text-gray-300">
//                             Post no encontrado
//                         </p>
//                         <Link
//                             href="/blog"
//                             className="text-accent-red dark:text-accent-yellow hover:underline"
//                         >
//                             Volver al blog
//                         </Link>
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
//             <main className="min-h-screen bg-white dark:bg-gray-900">
//                 {/* Hero Section con gradiente */}
//                 <div className="relative h-[60vh] min-h-[500px] w-full">
//                     <div className="absolute inset-0">
//                         {imageUrl ? (
//                             <>
//                                 <Image
//                                     src={`https:${imageUrl}`}
//                                     alt={post.fields.title}
//                                     fill
//                                     className="object-cover"
//                                     priority
//                                 />
//                                 <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/80 to-black/90" />
//                             </>
//                         ) : (
//                             <div className="absolute inset-0 bg-gradient-to-b from-gray-800 via-gray-900 to-black dark:from-gray-900 dark:via-gray-900 dark:to-black" />
//                         )}
//                     </div>
//
//                     <div className="relative h-full pt-20">
//                         <div className="container mx-auto px-4 h-full flex items-center justify-center">
//                             <div className="max-w-4xl w-full text-center">
//                                 <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
//                                     {post.fields.title}
//                                 </h1>
//
//                                 <div className="flex items-center justify-center gap-4 mb-6 text-gray-200">
//                                     <time dateTime={post.sys.createdAt}>
//                                         {new Date(post.sys.createdAt).toLocaleDateString('es-ES', {
//                                             year: 'numeric',
//                                             month: 'long',
//                                             day: 'numeric'
//                                         })}
//                                     </time>
//                                     {post.fields.author?.fields?.title && (
//                                         <>
//                                             <span>•</span>
//                                             <span>{post.fields.author.fields.title}</span>
//                                         </>
//                                     )}
//                                 </div>
//
//                                 {post.fields.tags && (
//                                     <div className="flex flex-wrap justify-center gap-2">
//                                         {post.fields.tags.map(tag => (
//                                             <span
//                                                 key={tag}
//                                                 className="px-3 py-1 rounded-full text-sm bg-white/20 text-white"
//                                             >
//                                                 {tag}
//                                             </span>
//                                         ))}
//                                     </div>
//                                 )}
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//
//                 <div className="container mx-auto px-4 py-12">
//                     <article className="max-w-3xl mx-auto">
//                         {post.fields.body.content.map((content, index) => (
//                             <div key={index}>
//                                 {renderContent(content)}
//                             </div>
//                         ))}
//                     </article>
//
//                     {relatedPosts.length > 0 && (
//                         <section className="max-w-4xl mx-auto mt-16 pt-8 border-t border-gray-200 dark:border-gray-700">
//                             <h2 className="text-2xl font-bold mb-8 text-center text-gray-800 dark:text-gray-100">
//                                 Artículos Relacionados
//                             </h2>
//                             <div className="grid md:grid-cols-3 gap-6">
//                                 {relatedPosts.map(relatedPost => (
//                                     <Link
//                                         href={`/blog/${relatedPost.fields.slug}`}
//                                         key={relatedPost.sys.id}
//                                         className="group block bg-gray-50 dark:bg-gray-800 rounded-lg
//                                                  shadow-sm hover:shadow-md transition-shadow overflow-hidden"
//                                     >
//                                         <div className="p-4">
//                                             <h3 className="font-semibold mb-2 line-clamp-2 text-gray-800
//                                                        dark:text-gray-100 group-hover:text-accent-red
//                                                        dark:group-hover:text-accent-yellow">
//                                                 {relatedPost.fields.title}
//                                             </h3>
//                                             <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-3">
//                                                 {relatedPost.fields.body.content[0]?.content[0]?.value}
//                                             </p>
//                                             {relatedPost.fields.tags && (
//                                                 <div className="mt-3 flex flex-wrap gap-2">
//                                                     {relatedPost.fields.tags.slice(0, 2).map(tag => (
//                                                         <span
//                                                             key={tag}
//                                                             className="text-xs bg-gray-200 dark:bg-gray-700
//                                                                      text-gray-700 dark:text-gray-300
//                                                                      px-2 py-1 rounded-full"
//                                                         >
//                                                             {tag}
//                                                         </span>
//                                                     ))}
//                                                 </div>
//                                             )}
//                                         </div>
//                                     </Link>
//                                 ))}
//                             </div>
//                         </section>
//                     )}
//
//                     <div className="max-w-4xl mx-auto mt-12">
//                         <Link
//                             href="/blog"
//                             className="inline-flex items-center gap-2 text-accent-red
//                                      dark:text-accent-yellow hover:underline"
//                         >
//                             <ArrowLeft className="w-5 h-5" />
//                             Volver al blog
//                         </Link>
//                     </div>
//                 </div>
//             </main>
//             <Footer />
//         </>
//     );
// }



'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';
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
        body: {
            content: Array<{
                nodeType: string;
                content: Array<{
                    value: string;
                    nodeType?: string;
                    marks?: Array<{ type: string; }>;
                    data?: any;
                }>;
                data?: any;
            }>;
        };
        image?: {
            sys: { id: string; };
            fields?: {
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
    };
}

export default function BlogPost({ params }: { params: { slug: string } }) {
    const [post, setPost] = useState<BlogPost | null>(null);
    const [imageUrl, setImageUrl] = useState<string | null>(null);
    const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await fetch(
                    `https://cdn.contentful.com/spaces/sfme6nh4wom2/environments/master/entries?content_type=blogPage&fields.slug=${params.slug}&include=10&access_token=jn7dH3bS0f5p6ypvIHavVJTRpfigF6QY9R1jOyHv7A4`
                );
                const data: ContentfulResponse = await response.json();

                if (data.items.length > 0) {
                    const currentPost = data.items[0];
                    setPost(currentPost);

                    if (currentPost.fields.image && data.includes?.Asset) {
                        const imageAsset = data.includes.Asset.find(
                            asset => asset.sys.id === currentPost.fields.image?.sys.id
                        );
                        if (imageAsset) {
                            setImageUrl(imageAsset.fields.file.url);
                        }
                    }

                    const allPostsResponse = await fetch(
                        'https://cdn.contentful.com/spaces/sfme6nh4wom2/environments/master/entries?content_type=blogPage&access_token=jn7dH3bS0f5p6ypvIHavVJTRpfigF6QY9R1jOyHv7A4'
                    );
                    const allPostsData = await allPostsResponse.json();

                    const related = allPostsData.items
                        .filter(p =>
                            p.sys.id !== currentPost.sys.id &&
                            p.fields.tags?.some(tag =>
                                currentPost.fields.tags?.includes(tag)
                            )
                        )
                        .slice(0, 3);

                    setRelatedPosts(related);
                }
            } catch (error) {
                console.error('Error:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchPost();
    }, [params.slug]);

    // Función para copiar al portapapeles
    const copyToClipboard = (text: string) => {
        navigator.clipboard.writeText(text);
    };

    // Función para renderizar marcas de texto
    const renderMark = (text: string, marks?: Array<{ type: string }>) => {
        if (!marks) return text;

        return marks.reduce((result, mark) => {
            switch (mark.type) {
                case 'bold':
                    return <strong key={mark.type}>{result}</strong>;
                case 'italic':
                    return <em key={mark.type}>{result}</em>;
                case 'underline':
                    return <u key={mark.type}>{result}</u>;
                case 'code':
                    return (
                        <code
                            key={mark.type}
                            className="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded font-mono text-sm"
                        >
                            {result}
                        </code>
                    );
                default:
                    return result;
            }
        }, text);
    };

    // Función principal para renderizar contenido
    const renderContent = (content: any) => {
        switch (content.nodeType) {
            case 'paragraph':
                return (
                    <p className="mb-6 text-gray-700 dark:text-gray-300">
                        {content.content?.map((item: any, index: number) => (
                            <span key={index}>
                                {renderMark(item.value, item.marks)}
                            </span>
                        ))}
                    </p>
                );
            case 'heading-1':
                return (
                    <h1 className="text-4xl font-bold mb-6 text-gray-900 dark:text-gray-100">
                        {content.content?.map((item: any, index: number) => (
                            <span key={index}>
                                {renderMark(item.value, item.marks)}
                            </span>
                        ))}
                    </h1>
                );
            case 'heading-2':
                return (
                    <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-gray-100">
                        {content.content?.map((item: any, index: number) => (
                            <span key={index}>
                                {renderMark(item.value, item.marks)}
                            </span>
                        ))}
                    </h2>
                );
            case 'heading-3':
                return (
                    <h3 className="text-2xl font-bold mb-3 text-gray-800 dark:text-gray-100">
                        {content.content?.map((item: any, index: number) => (
                            <span key={index}>
                                {renderMark(item.value, item.marks)}
                            </span>
                        ))}
                    </h3>
                );
            case 'heading-4':
                return (
                    <h4 className="text-xl font-bold mb-2 text-gray-800 dark:text-gray-100">
                        {content.content?.map((item: any, index: number) => (
                            <span key={index}>
                                {renderMark(item.value, item.marks)}
                            </span>
                        ))}
                    </h4>
                );
            case 'heading-5':
                return (
                    <h5 className="text-lg font-bold mb-2 text-gray-800 dark:text-gray-100">
                        {content.content?.map((item: any, index: number) => (
                            <span key={index}>
                                {renderMark(item.value, item.marks)}
                            </span>
                        ))}
                    </h5>
                );
            case 'heading-6':
                return (
                    <h6 className="text-base font-bold mb-2 text-gray-800 dark:text-gray-100">
                        {content.content?.map((item: any, index: number) => (
                            <span key={index}>
                                {renderMark(item.value, item.marks)}
                            </span>
                        ))}
                    </h6>
                );
            case 'unordered-list':
                return (
                    <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
                        {content.content?.map((item: any, index: number) => (
                            <li key={index}>
                                {item.content?.map((listItem: any, listIndex: number) => (
                                    <span key={listIndex}>
                                        {renderMark(listItem.value, listItem.marks)}
                                    </span>
                                ))}
                            </li>
                        ))}
                    </ul>
                );
            case 'ordered-list':
                return (
                    <ol className="list-decimal pl-6 mb-6 text-gray-700 dark:text-gray-300 space-y-2">
                        {content.content?.map((item: any, index: number) => (
                            <li key={index}>
                                {item.content?.map((listItem: any, listIndex: number) => (
                                    <span key={listIndex}>
                                        {renderMark(listItem.value, listItem.marks)}
                                    </span>
                                ))}
                            </li>
                        ))}
                    </ol>
                );
            case 'blockquote':
                return (
                    <blockquote className="border-l-4 border-accent-red dark:border-accent-yellow pl-4 mb-6 italic text-gray-700 dark:text-gray-300">
                        {content.content?.map((item: any, index: number) => (
                            <span key={index}>
                                {renderMark(item.value, item.marks)}
                            </span>
                        ))}
                    </blockquote>
                );
            case 'hr':
                return <hr className="my-8 border-gray-200 dark:border-gray-700" />;
            case 'hyperlink':
                return (
                    <a
                        href={content.data.uri}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent-red dark:text-accent-yellow hover:underline"
                    >
                        {content.content?.map((item: any, index: number) => (
                            <span key={index}>
                                {renderMark(item.value, item.marks)}
                            </span>
                        ))}
                    </a>
                );
            case 'code-block':
                const codeContent = content.content?.[0]?.value || '';
                return (
                    <div className="relative group mb-6">
                        <div className="absolute right-2 top-2 opacity-0 group-hover:opacity-100 transition-opacity">
                            <button
                                onClick={() => copyToClipboard(codeContent)}
                                className="bg-gray-700 dark:bg-gray-600 text-white px-3 py-1 rounded text-sm hover:bg-gray-600 dark:hover:bg-gray-500 transition-colors"
                            >
                                Copiar
                            </button>
                        </div>
                        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto">
                            <code className="font-mono text-sm text-gray-800 dark:text-gray-200">
                                {codeContent}
                            </code>
                        </pre>
                    </div>
                );
            case 'embedded-entry-block':
            case 'embedded-asset-block':
                return null;
            default:
                return null;
        }
    };

    if (loading) {
        return (
            <>
                <Navbar />
                <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900">
                    <p className="text-gray-700 dark:text-gray-300">Cargando...</p>
                </div>
                <Footer />
            </>
        );
    }

    if (!post) {
        return (
            <>
                <Navbar />
                <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900">
                    <div className="text-center">
                        <p className="text-xl mb-4 text-gray-700 dark:text-gray-300">
                            Post no encontrado
                        </p>
                        <Link
                            href="/blog"
                            className="text-accent-red dark:text-accent-yellow hover:underline"
                        >
                            Volver al blog
                        </Link>
                    </div>
                </div>
                <Footer />
            </>
        );
    }

    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-white dark:bg-gray-900">
                {/* Hero Section con gradiente */}
                <div className="relative h-[60vh] min-h-[500px] w-full">
                    <div className="absolute inset-0">
                        {imageUrl ? (
                            <>
                                <Image
                                    src={`https:${imageUrl}`}
                                    alt={post.fields.title}
                                    fill
                                    className="object-cover"
                                    priority
                                />
                                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/80 to-black/90" />
                            </>
                        ) : (
                            <div className="absolute inset-0 bg-gradient-to-b from-gray-800 via-gray-900 to-black dark:from-gray-900 dark:via-gray-900 dark:to-black" />
                        )}
                    </div>

                    <div className="relative h-full pt-20">
                        <div className="container mx-auto px-4 h-full flex items-center justify-center">
                            <div className="max-w-4xl w-full text-center">
                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
                                    {post.fields.title}
                                </h1>

                                <div className="flex items-center justify-center gap-4 mb-6 text-gray-200">
                                    <time dateTime={post.sys.createdAt}>
                                        {new Date(post.sys.createdAt).toLocaleDateString('es-ES', {
                                            year: 'numeric',
                                            month: 'long',
                                            day: 'numeric'
                                        })}
                                    </time>
                                    {post.fields.author?.fields?.title && (
                                        <>
                                            <span>•</span>
                                            <span>{post.fields.author.fields.title}</span>
                                        </>
                                    )}
                                </div>

                                {post.fields.tags && (
                                    <div className="flex flex-wrap justify-center gap-2">
                                        {post.fields.tags.map(tag => (
                                            <span
                                                key={tag}
                                                className="px-3 py-1 rounded-full text-sm bg-white/20 text-white"
                                            >
                {tag}
            </span>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container mx-auto px-4 py-12">
                    <article className="max-w-3xl mx-auto">
                        {post.fields.body.content.map((content, index) => (
                            <div key={index}>
                                {renderContent(content)}
                            </div>
                        ))}
                    </article>

                    {relatedPosts.length > 0 && (
                        <section className="max-w-4xl mx-auto mt-16 pt-8 border-t border-gray-200 dark:border-gray-700">
                            <h2 className="text-2xl font-bold mb-8 text-center text-gray-800 dark:text-gray-100">
                                Artículos Relacionados
                            </h2>
                            <div className="grid md:grid-cols-3 gap-6">
                                {relatedPosts.map(relatedPost => (
                                    <Link
                                        href={`/blog/${relatedPost.fields.slug}`}
                                        key={relatedPost.sys.id}
                                        className="group block bg-gray-50 dark:bg-gray-800 rounded-lg
                                                 shadow-sm hover:shadow-md transition-shadow overflow-hidden"
                                    >
                                        <div className="p-4">
                                            <h3 className="font-semibold mb-2 line-clamp-2 text-gray-800
                                                       dark:text-gray-100 group-hover:text-accent-red
                                                       dark:group-hover:text-accent-yellow">
                                                {relatedPost.fields.title}
                                            </h3>
                                            <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-3">
                                                {relatedPost.fields.body.content[0]?.content[0]?.value}
                                            </p>
                                            {relatedPost.fields.tags && (
                                                <div className="mt-3 flex flex-wrap gap-2">
                                                    {relatedPost.fields.tags.slice(0, 2).map(tag => (
                                                        <span
                                                            key={tag}
                                                            className="text-xs bg-gray-200 dark:bg-gray-700
                                                                     text-gray-700 dark:text-gray-300
                                                                     px-2 py-1 rounded-full"
                                                        >
                                                            {tag}
                                                        </span>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </section>
                    )}

                    <div className="max-w-4xl mx-auto mt-12">
                        <Link
                            href="/blog"
                            className="inline-flex items-center gap-2 text-accent-red
                                     dark:text-accent-yellow hover:underline"
                        >
                            <ArrowLeft className="w-5 h-5" />
                            Volver al blog
                        </Link>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}