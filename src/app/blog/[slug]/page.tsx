// // // // // // // // // // // // // src/app/blog/[slug]/page.tsx
// // // // // // // // // // // // import Navbar from '@/components/layout/Navbar';
// // // // // // // // // // // // import Footer from '@/components/layout/Footer';
// // // // // // // // // // // // import { getPostBySlug, getAllPosts } from '@/lib/contentful';
// // // // // // // // // // // //
// // // // // // // // // // // // // Generamos los parámetros estáticamente
// // // // // // // // // // // // export function generateStaticParams() {
// // // // // // // // // // // //     const posts = await getAllPosts();
// // // // // // // // // // // //     return posts.map((post) => ({
// // // // // // // // // // // //         slug: post.sys.id,
// // // // // // // // // // // //     }));
// // // // // // // // // // // // }
// // // // // // // // // // // //
// // // // // // // // // // // // interface PageProps {
// // // // // // // // // // // //     params: Promise<{
// // // // // // // // // // // //         slug: string;
// // // // // // // // // // // //     }>;
// // // // // // // // // // // // }
// // // // // // // // // // // //
// // // // // // // // // // // // export default async function BlogPost({ params }: PageProps) {
// // // // // // // // // // // //     // Obtener el slug de manera asíncrona
// // // // // // // // // // // //     const { slug } = await params;
// // // // // // // // // // // //     const post = await getPostBySlug(slug);
// // // // // // // // // // // //
// // // // // // // // // // // //     if (!post) {
// // // // // // // // // // // //         return (
// // // // // // // // // // // //             <>
// // // // // // // // // // // //                 <Navbar />
// // // // // // // // // // // //                 <main className="min-h-screen bg-white dark:bg-gray-900">
// // // // // // // // // // // //                     <div className="flex items-center justify-center min-h-screen">
// // // // // // // // // // // //                         <div className="text-gray-900 dark:text-white">Post no encontrado</div>
// // // // // // // // // // // //                     </div>
// // // // // // // // // // // //                 </main>
// // // // // // // // // // // //                 <Footer />
// // // // // // // // // // // //             </>
// // // // // // // // // // // //         );
// // // // // // // // // // // //     }
// // // // // // // // // // // //
// // // // // // // // // // // //     return (
// // // // // // // // // // // //         <>
// // // // // // // // // // // //             <Navbar />
// // // // // // // // // // // //             <main className="min-h-screen bg-white dark:bg-gray-900">
// // // // // // // // // // // //                 <article className="max-w-4xl mx-auto px-6 py-20">
// // // // // // // // // // // //                     <h1 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">
// // // // // // // // // // // //                         {post.fields.title}
// // // // // // // // // // // //                     </h1>
// // // // // // // // // // // //                     <div className="prose dark:prose-invert max-w-none">
// // // // // // // // // // // //                         {post.fields.body.content.map((block: any, index: number) => {
// // // // // // // // // // // //                             if (block.nodeType === 'paragraph') {
// // // // // // // // // // // //                                 return (
// // // // // // // // // // // //                                     <p key={index} className="mb-4 text-gray-600 dark:text-gray-400">
// // // // // // // // // // // //                                         {block.content[0]?.value}
// // // // // // // // // // // //                                     </p>
// // // // // // // // // // // //                                 );
// // // // // // // // // // // //                             }
// // // // // // // // // // // //                             if (block.nodeType === 'heading-2') {
// // // // // // // // // // // //                                 return (
// // // // // // // // // // // //                                     <h2 key={index} className="text-2xl font-bold my-6 text-gray-900 dark:text-white">
// // // // // // // // // // // //                                         {block.content[0]?.value}
// // // // // // // // // // // //                                     </h2>
// // // // // // // // // // // //                                 );
// // // // // // // // // // // //                             }
// // // // // // // // // // // //                             if (block.nodeType === 'unordered-list') {
// // // // // // // // // // // //                                 return (
// // // // // // // // // // // //                                     <ul key={index} className="list-disc pl-6 mb-4 text-gray-600 dark:text-gray-400">
// // // // // // // // // // // //                                         {block.content.map((item: any, itemIndex: number) => (
// // // // // // // // // // // //                                             <li key={itemIndex}>
// // // // // // // // // // // //                                                 {item.content[0].content[0]?.value}
// // // // // // // // // // // //                                             </li>
// // // // // // // // // // // //                                         ))}
// // // // // // // // // // // //                                     </ul>
// // // // // // // // // // // //                                 );
// // // // // // // // // // // //                             }
// // // // // // // // // // // //                             return null;
// // // // // // // // // // // //                         })}
// // // // // // // // // // // //                     </div>
// // // // // // // // // // // //                 </article>
// // // // // // // // // // // //             </main>
// // // // // // // // // // // //             <Footer />
// // // // // // // // // // // //         </>
// // // // // // // // // // // //     );
// // // // // // // // // // // // }
// // // // // // // // // // // //
// // // // // // // // // // // // export async function generateMetadata({ params }: PageProps) {
// // // // // // // // // // // //     const { slug } = await params;
// // // // // // // // // // // //     const post = await getPostBySlug(slug);
// // // // // // // // // // // //
// // // // // // // // // // // //     return {
// // // // // // // // // // // //         title: post?.fields.title || 'Blog Post',
// // // // // // // // // // // //         description: post?.fields.body.content[0]?.content[0]?.value.substring(0, 160),
// // // // // // // // // // // //     };
// // // // // // // // // // // // }
// // // // // // // // // // //
// // // // // // // // // // // import Navbar from '@/components/layout/Navbar';
// // // // // // // // // // // import Footer from '@/components/layout/Footer';
// // // // // // // // // // //
// // // // // // // // // // // interface PageProps {
// // // // // // // // // // //     params: { slug: string }
// // // // // // // // // // // }
// // // // // // // // // // //
// // // // // // // // // // // export default async function BlogPost({ params }: PageProps) {
// // // // // // // // // // //     const post = await getPostBySlug(params.slug);
// // // // // // // // // // //
// // // // // // // // // // //     function renderContent(block: any, index: number) {
// // // // // // // // // // //         if (block.nodeType === 'paragraph') {
// // // // // // // // // // //             return (
// // // // // // // // // // //                 <p key={index} className="mb-4 text-gray-600 dark:text-gray-400">
// // // // // // // // // // //                     {block.content[0]?.value}
// // // // // // // // // // //                 </p>
// // // // // // // // // // //             );
// // // // // // // // // // //         }
// // // // // // // // // // //
// // // // // // // // // // //         if (block.nodeType === 'heading-2') {
// // // // // // // // // // //             return (
// // // // // // // // // // //                 <h2 key={index} className="text-2xl font-bold my-6 text-gray-900 dark:text-white">
// // // // // // // // // // //                     {block.content[0]?.value}
// // // // // // // // // // //                 </h2>
// // // // // // // // // // //             );
// // // // // // // // // // //         }
// // // // // // // // // // //
// // // // // // // // // // //         if (block.nodeType === 'unordered-list') {
// // // // // // // // // // //             return (
// // // // // // // // // // //                 <ul key={index} className="list-disc pl-6 mb-4 text-gray-600 dark:text-gray-400">
// // // // // // // // // // //                     {block.content.map((item: any, itemIndex: number) => (
// // // // // // // // // // //                         <li key={itemIndex}>{item.content[0].content[0]?.value}</li>
// // // // // // // // // // //                     ))}
// // // // // // // // // // //                 </ul>
// // // // // // // // // // //             );
// // // // // // // // // // //         }
// // // // // // // // // // //
// // // // // // // // // // //         return null;
// // // // // // // // // // //     }
// // // // // // // // // // //
// // // // // // // // // // //     if (!post) {
// // // // // // // // // // //         return (
// // // // // // // // // // //             <>
// // // // // // // // // // //                 <Navbar />
// // // // // // // // // // //                 <main className="min-h-screen bg-white dark:bg-gray-900">
// // // // // // // // // // //                     <div className="flex items-center justify-center min-h-screen">
// // // // // // // // // // //                         <div className="text-gray-900 dark:text-white">Post no encontrado</div>
// // // // // // // // // // //                     </div>
// // // // // // // // // // //                 </main>
// // // // // // // // // // //                 <Footer />
// // // // // // // // // // //             </>
// // // // // // // // // // //         );
// // // // // // // // // // //     }
// // // // // // // // // // //
// // // // // // // // // // //     return (
// // // // // // // // // // //         <>
// // // // // // // // // // //             <Navbar />
// // // // // // // // // // //             <main className="min-h-screen bg-white dark:bg-gray-900">
// // // // // // // // // // //                 <article className="max-w-4xl mx-auto px-6 py-20">
// // // // // // // // // // //                     <h1 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">
// // // // // // // // // // //                         {post.fields.title}
// // // // // // // // // // //                     </h1>
// // // // // // // // // // //                     <div className="prose dark:prose-invert max-w-none">
// // // // // // // // // // //                         {/*{post.fields.body.content.map((block, index) => renderContent(block, index))}*/}
// // // // // // // // // // //                     </div>
// // // // // // // // // // //                 </article>
// // // // // // // // // // //             </main>
// // // // // // // // // // //             <Footer />
// // // // // // // // // // //         </>
// // // // // // // // // // //     );
// // // // // // // // // // // }
// // // // // // // // // //
// // // // // // // // // // // src/app/blog/[slug]/page.tsx
// // // // // // // // // // import { getBlogPostById, getRelatedPosts } from '@/lib/contentful';
// // // // // // // // // // import { notFound } from 'next/navigation';
// // // // // // // // // // import Image from 'next/image';
// // // // // // // // // // import Link from 'next/link';
// // // // // // // // // // import { ArrowLeft, Calendar, User, Tag } from 'lucide-react';
// // // // // // // // // //
// // // // // // // // // // interface ContentfulImage {
// // // // // // // // // //     fields?: {
// // // // // // // // // //         file: {
// // // // // // // // // //             url: string;
// // // // // // // // // //         };
// // // // // // // // // //         title?: string;
// // // // // // // // // //     };
// // // // // // // // // // }
// // // // // // // // // //
// // // // // // // // // // interface ContentfulAuthor {
// // // // // // // // // //     fields?: {
// // // // // // // // // //         title?: string;
// // // // // // // // // //     };
// // // // // // // // // // }
// // // // // // // // // //
// // // // // // // // // // interface BlogPost {
// // // // // // // // // //     sys: {
// // // // // // // // // //         id: string;
// // // // // // // // // //         createdAt: string;
// // // // // // // // // //     };
// // // // // // // // // //     fields: {
// // // // // // // // // //         title: string;
// // // // // // // // // //         body: {
// // // // // // // // // //             content: Array<{
// // // // // // // // // //                 nodeType: string;
// // // // // // // // // //                 content: Array<{
// // // // // // // // // //                     value: string;
// // // // // // // // // //                     nodeType: string;
// // // // // // // // // //                 }>;
// // // // // // // // // //                 data?: any;
// // // // // // // // // //             }>;
// // // // // // // // // //         };
// // // // // // // // // //         image?: ContentfulImage;
// // // // // // // // // //         featuredImageAltText?: string;
// // // // // // // // // //         categories?: string[];
// // // // // // // // // //         tags?: string[];
// // // // // // // // // //         authorInfo?: ContentfulAuthor;
// // // // // // // // // //     };
// // // // // // // // // // }
// // // // // // // // // //
// // // // // // // // // // interface Props {
// // // // // // // // // //     params: {
// // // // // // // // // //         slug: string;
// // // // // // // // // //     };
// // // // // // // // // // }
// // // // // // // // // //
// // // // // // // // // // // Generamos los metadatos dinámicamente
// // // // // // // // // // export async function generateMetadata({ params }: Props) {
// // // // // // // // // //     const post = await getBlogPostById(params.slug);
// // // // // // // // // //
// // // // // // // // // //     if (!post) return { title: 'Post no encontrado' };
// // // // // // // // // //
// // // // // // // // // //     const description = post.fields.body.content[0].content[0].value.slice(0, 160) + '...';
// // // // // // // // // //     const imageUrl = post.fields.image?.fields?.file?.url
// // // // // // // // // //         ? `https:${post.fields.image.fields.file.url}`
// // // // // // // // // //         : null;
// // // // // // // // // //
// // // // // // // // // //     return {
// // // // // // // // // //         title: `${post.fields.title} - roggrt.dev`,
// // // // // // // // // //         description,
// // // // // // // // // //         openGraph: {
// // // // // // // // // //             title: post.fields.title,
// // // // // // // // // //             description,
// // // // // // // // // //             ...(imageUrl && { images: [imageUrl] }),
// // // // // // // // // //         },
// // // // // // // // // //     };
// // // // // // // // // // }
// // // // // // // // // //
// // // // // // // // // // export default async function BlogPostPage({ params }: Props) {
// // // // // // // // // //     const post = await getBlogPostById(params.slug);
// // // // // // // // // //
// // // // // // // // // //     if (!post) {
// // // // // // // // // //         notFound();
// // // // // // // // // //     }
// // // // // // // // // //
// // // // // // // // // //     // Función para renderizar el contenido Rich Text de Contentful
// // // // // // // // // //     const renderContent = (content: any) => {
// // // // // // // // // //         if (!content) return null;
// // // // // // // // // //
// // // // // // // // // //         return content.content.map((item: any, index: number) => {
// // // // // // // // // //             switch (item.nodeType) {
// // // // // // // // // //                 case 'paragraph':
// // // // // // // // // //                     return (
// // // // // // // // // //                         <p key={index} className="mb-6 text-gray-700 dark:text-gray-300">
// // // // // // // // // //                             {item.content[0]?.value || ''}
// // // // // // // // // //                         </p>
// // // // // // // // // //                     );
// // // // // // // // // //                 case 'heading-1':
// // // // // // // // // //                     return (
// // // // // // // // // //                         <h1 key={index} className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
// // // // // // // // // //                             {item.content[0]?.value || ''}
// // // // // // // // // //                         </h1>
// // // // // // // // // //                     );
// // // // // // // // // //                 case 'heading-2':
// // // // // // // // // //                     return (
// // // // // // // // // //                         <h2 key={index} className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
// // // // // // // // // //                             {item.content[0]?.value || ''}
// // // // // // // // // //                         </h2>
// // // // // // // // // //                     );
// // // // // // // // // //                 case 'heading-3':
// // // // // // // // // //                     return (
// // // // // // // // // //                         <h3 key={index} className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
// // // // // // // // // //                             {item.content[0]?.value || ''}
// // // // // // // // // //                         </h3>
// // // // // // // // // //                     );
// // // // // // // // // //                 case 'unordered-list':
// // // // // // // // // //                     return (
// // // // // // // // // //                         <ul key={index} className="list-disc list-inside mb-6 text-gray-700 dark:text-gray-300">
// // // // // // // // // //                             {item.content.map((listItem: any, listIndex: number) => (
// // // // // // // // // //                                 <li key={listIndex}>{listItem.content[0].content[0]?.value || ''}</li>
// // // // // // // // // //                             ))}
// // // // // // // // // //                         </ul>
// // // // // // // // // //                     );
// // // // // // // // // //                 case 'ordered-list':
// // // // // // // // // //                     return (
// // // // // // // // // //                         <ol key={index} className="list-decimal list-inside mb-6 text-gray-700 dark:text-gray-300">
// // // // // // // // // //                             {item.content.map((listItem: any, listIndex: number) => (
// // // // // // // // // //                                 <li key={listIndex}>{listItem.content[0].content[0]?.value || ''}</li>
// // // // // // // // // //                             ))}
// // // // // // // // // //                         </ol>
// // // // // // // // // //                     );
// // // // // // // // // //                 default:
// // // // // // // // // //                     return null;
// // // // // // // // // //             }
// // // // // // // // // //         });
// // // // // // // // // //     };
// // // // // // // // // //
// // // // // // // // // //     const imageUrl = post.fields.image?.fields?.file?.url
// // // // // // // // // //         ? `https:${post.fields.image.fields.file.url}`
// // // // // // // // // //         : null;
// // // // // // // // // //
// // // // // // // // // //     const formattedDate = new Date(post.sys.createdAt).toLocaleDateString('es-ES', {
// // // // // // // // // //         year: 'numeric',
// // // // // // // // // //         month: 'long',
// // // // // // // // // //         day: 'numeric'
// // // // // // // // // //     });
// // // // // // // // // //
// // // // // // // // // //     return (
// // // // // // // // // //         <article className="min-h-screen pt-24 px-6 pb-12">
// // // // // // // // // //             <div className="max-w-4xl mx-auto">
// // // // // // // // // //                 {/* Navegación superior */}
// // // // // // // // // //                 <Link
// // // // // // // // // //                     href="/blog"
// // // // // // // // // //                     className="inline-flex items-center text-sm text-gray-600 dark:text-gray-400 hover:text-accent-red dark:hover:text-accent-yellow mb-8 transition-colors group"
// // // // // // // // // //                 >
// // // // // // // // // //                     <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
// // // // // // // // // //                     Volver al blog
// // // // // // // // // //                 </Link>
// // // // // // // // // //
// // // // // // // // // //                 {/* Encabezado */}
// // // // // // // // // //                 <header className="mb-8">
// // // // // // // // // //                     {post.fields.categories && post.fields.categories.length > 0 && (
// // // // // // // // // //                         <div className="flex flex-wrap gap-2 mb-4">
// // // // // // // // // //                             {post.fields.categories.map((category) => (
// // // // // // // // // //                                 <span
// // // // // // // // // //                                     key={category}
// // // // // // // // // //                                     className="px-3 py-1 rounded-full text-sm bg-red-50 dark:bg-yellow-900/20 text-accent-red dark:text-accent-yellow"
// // // // // // // // // //                                 >
// // // // // // // // // //                                     {category}
// // // // // // // // // //                                 </span>
// // // // // // // // // //                             ))}
// // // // // // // // // //                         </div>
// // // // // // // // // //                     )}
// // // // // // // // // //
// // // // // // // // // //                     <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
// // // // // // // // // //                         {post.fields.title}
// // // // // // // // // //                     </h1>
// // // // // // // // // //
// // // // // // // // // //                     <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
// // // // // // // // // //                         <div className="flex items-center gap-2">
// // // // // // // // // //                             <Calendar className="w-4 h-4" />
// // // // // // // // // //                             <time dateTime={post.sys.createdAt}>{formattedDate}</time>
// // // // // // // // // //                         </div>
// // // // // // // // // //                         {post.fields.authorInfo?.fields?.title && (
// // // // // // // // // //                             <div className="flex items-center gap-2">
// // // // // // // // // //                                 <User className="w-4 h-4" />
// // // // // // // // // //                                 <span>{post.fields.authorInfo.fields.title}</span>
// // // // // // // // // //                             </div>
// // // // // // // // // //                         )}
// // // // // // // // // //                     </div>
// // // // // // // // // //                 </header>
// // // // // // // // // //
// // // // // // // // // //                 {/* Imagen destacada */}
// // // // // // // // // //                 {imageUrl && (
// // // // // // // // // //                     <div className="relative aspect-video w-full mb-8 rounded-lg overflow-hidden">
// // // // // // // // // //                         <Image
// // // // // // // // // //                             src={imageUrl}
// // // // // // // // // //                             alt={post.fields.featuredImageAltText || post.fields.title}
// // // // // // // // // //                             fill
// // // // // // // // // //                             className="object-cover"
// // // // // // // // // //                             priority
// // // // // // // // // //                         />
// // // // // // // // // //                     </div>
// // // // // // // // // //                 )}
// // // // // // // // // //
// // // // // // // // // //                 {/* Contenido */}
// // // // // // // // // //                 <div className="prose prose-lg dark:prose-invert max-w-none">
// // // // // // // // // //                     {renderContent(post.fields.body)}
// // // // // // // // // //                 </div>
// // // // // // // // // //
// // // // // // // // // //                 {/* Tags */}
// // // // // // // // // //                 {post.fields.tags && post.fields.tags.length > 0 && (
// // // // // // // // // //                     <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800">
// // // // // // // // // //                         <div className="flex items-center gap-2 mb-4">
// // // // // // // // // //                             <Tag className="w-4 h-4 text-gray-600 dark:text-gray-400" />
// // // // // // // // // //                             <h3 className="font-medium text-gray-900 dark:text-white">
// // // // // // // // // //                                 Tags
// // // // // // // // // //                             </h3>
// // // // // // // // // //                         </div>
// // // // // // // // // //                         <div className="flex flex-wrap gap-2">
// // // // // // // // // //                             {post.fields.tags.map((tag) => (
// // // // // // // // // //                                 <span
// // // // // // // // // //                                     key={tag}
// // // // // // // // // //                                     className="px-3 py-1 rounded-full text-sm bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
// // // // // // // // // //                                 >
// // // // // // // // // //                                     {tag}
// // // // // // // // // //                                 </span>
// // // // // // // // // //                             ))}
// // // // // // // // // //                         </div>
// // // // // // // // // //                     </div>
// // // // // // // // // //                 )}
// // // // // // // // // //             </div>
// // // // // // // // // //         </article>
// // // // // // // // // //     );
// // // // // // // // // // }
// // // // // // // // //
// // // // // // // // // // src/app/blog/[slug]/page.tsx
// // // // // // // // // import { Suspense } from 'react';
// // // // // // // // // import { getBlogPostById } from '@/lib/contentful';
// // // // // // // // // import { notFound } from 'next/navigation';
// // // // // // // // // import Image from 'next/image';
// // // // // // // // // import Link from 'next/link';
// // // // // // // // // import { ArrowLeft, Calendar, User, Tag } from 'lucide-react';
// // // // // // // // // import Navbar from '@/components/layout/Navbar';
// // // // // // // // // import Footer from '@/components/layout/Footer';
// // // // // // // // //
// // // // // // // // // interface Props {
// // // // // // // // //     params: {
// // // // // // // // //         slug: string;
// // // // // // // // //     };
// // // // // // // // // }
// // // // // // // // //
// // // // // // // // // // Metadata generación
// // // // // // // // // export async function generateMetadata({ params: { slug } }: Props) {
// // // // // // // // //     const post = await getBlogPostById(slug);
// // // // // // // // //
// // // // // // // // //     if (!post) return { title: 'Post no encontrado' };
// // // // // // // // //
// // // // // // // // //     return {
// // // // // // // // //         title: `${post.fields.title} - roggrt.dev`,
// // // // // // // // //         description: post.fields.body.content[0].content[0].value.slice(0, 160),
// // // // // // // // //     };
// // // // // // // // // }
// // // // // // // // //
// // // // // // // // // async function PostContent({ slug }: { slug: string }) {
// // // // // // // // //     const post = await getBlogPostById(slug);
// // // // // // // // //
// // // // // // // // //     if (!post) {
// // // // // // // // //         notFound();
// // // // // // // // //     }
// // // // // // // // //
// // // // // // // // //     const imageUrl = post.fields.image?.fields?.file?.url
// // // // // // // // //         ? `https:${post.fields.image.fields.file.url}`
// // // // // // // // //         : null;
// // // // // // // // //
// // // // // // // // //     const formattedDate = new Date(post.sys.createdAt).toLocaleDateString('es-ES', {
// // // // // // // // //         year: 'numeric',
// // // // // // // // //         month: 'long',
// // // // // // // // //         day: 'numeric'
// // // // // // // // //     });
// // // // // // // // //
// // // // // // // // //     return (
// // // // // // // // //         <article className="max-w-4xl mx-auto">
// // // // // // // // //             {/* Navegación superior */}
// // // // // // // // //             <Link
// // // // // // // // //                 href="/blog"
// // // // // // // // //                 className="inline-flex items-center text-sm text-gray-600 dark:text-gray-400 hover:text-accent-red dark:hover:text-accent-yellow mb-8 transition-colors group"
// // // // // // // // //             >
// // // // // // // // //                 <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
// // // // // // // // //                 Volver al blog
// // // // // // // // //             </Link>
// // // // // // // // //
// // // // // // // // //             {/* Encabezado */}
// // // // // // // // //             <header className="mb-8">
// // // // // // // // //                 {post.fields.categories && (
// // // // // // // // //                     <div className="flex flex-wrap gap-2 mb-4">
// // // // // // // // //                         {post.fields.categories.map((category) => (
// // // // // // // // //                             <span
// // // // // // // // //                                 key={category}
// // // // // // // // //                                 className="px-3 py-1 rounded-full text-sm bg-red-50 dark:bg-yellow-900/20 text-accent-red dark:text-accent-yellow"
// // // // // // // // //                             >
// // // // // // // // //                                 {category}
// // // // // // // // //                             </span>
// // // // // // // // //                         ))}
// // // // // // // // //                     </div>
// // // // // // // // //                 )}
// // // // // // // // //
// // // // // // // // //                 <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
// // // // // // // // //                     {post.fields.title}
// // // // // // // // //                 </h1>
// // // // // // // // //
// // // // // // // // //                 <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
// // // // // // // // //                     <div className="flex items-center gap-2">
// // // // // // // // //                         <Calendar className="w-4 h-4" />
// // // // // // // // //                         <time dateTime={post.sys.createdAt}>{formattedDate}</time>
// // // // // // // // //                     </div>
// // // // // // // // //                     {post.fields.authorInfo?.fields?.title && (
// // // // // // // // //                         <div className="flex items-center gap-2">
// // // // // // // // //                             <User className="w-4 h-4" />
// // // // // // // // //                             <span>{post.fields.authorInfo.fields.title}</span>
// // // // // // // // //                         </div>
// // // // // // // // //                     )}
// // // // // // // // //                 </div>
// // // // // // // // //             </header>
// // // // // // // // //
// // // // // // // // //             {/* Imagen destacada */}
// // // // // // // // //             {imageUrl && (
// // // // // // // // //                 <div className="relative aspect-video w-full mb-8 rounded-lg overflow-hidden">
// // // // // // // // //                     <Image
// // // // // // // // //                         src={imageUrl}
// // // // // // // // //                         alt={post.fields.featuredImageAltText || post.fields.title}
// // // // // // // // //                         fill
// // // // // // // // //                         className="object-cover"
// // // // // // // // //                         priority
// // // // // // // // //                     />
// // // // // // // // //                 </div>
// // // // // // // // //             )}
// // // // // // // // //
// // // // // // // // //             {/* Contenido */}
// // // // // // // // //             <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
// // // // // // // // //                 {post.fields.body.content.map((content: any, index: number) => {
// // // // // // // // //                     switch (content.nodeType) {
// // // // // // // // //                         case 'paragraph':
// // // // // // // // //                             return (
// // // // // // // // //                                 <p key={index} className="mb-6 text-gray-700 dark:text-gray-300">
// // // // // // // // //                                     {content.content[0]?.value || ''}
// // // // // // // // //                                 </p>
// // // // // // // // //                             );
// // // // // // // // //                         case 'heading-2':
// // // // // // // // //                             return (
// // // // // // // // //                                 <h2 key={index} className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
// // // // // // // // //                                     {content.content[0]?.value || ''}
// // // // // // // // //                                 </h2>
// // // // // // // // //                             );
// // // // // // // // //                         case 'heading-3':
// // // // // // // // //                             return (
// // // // // // // // //                                 <h3 key={index} className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
// // // // // // // // //                                     {content.content[0]?.value || ''}
// // // // // // // // //                                 </h3>
// // // // // // // // //                             );
// // // // // // // // //                         case 'unordered-list':
// // // // // // // // //                             return (
// // // // // // // // //                                 <ul key={index} className="list-disc list-inside mb-6 ml-4 text-gray-700 dark:text-gray-300">
// // // // // // // // //                                     {content.content.map((item: any, itemIndex: number) => (
// // // // // // // // //                                         <li key={itemIndex}>
// // // // // // // // //                                             {item.content[0].content[0]?.value || ''}
// // // // // // // // //                                         </li>
// // // // // // // // //                                     ))}
// // // // // // // // //                                 </ul>
// // // // // // // // //                             );
// // // // // // // // //                         default:
// // // // // // // // //                             return null;
// // // // // // // // //                     }
// // // // // // // // //                 })}
// // // // // // // // //             </div>
// // // // // // // // //
// // // // // // // // //             {/* Tags */}
// // // // // // // // //             {post.fields.tags && post.fields.tags.length > 0 && (
// // // // // // // // //                 <div className="border-t border-gray-200 dark:border-gray-800 pt-8">
// // // // // // // // //                     <div className="flex items-center gap-2 mb-4">
// // // // // // // // //                         <Tag className="w-4 h-4 text-gray-600 dark:text-gray-400" />
// // // // // // // // //                         <h3 className="font-medium text-gray-900 dark:text-white">
// // // // // // // // //                             Tags
// // // // // // // // //                         </h3>
// // // // // // // // //                     </div>
// // // // // // // // //                     <div className="flex flex-wrap gap-2">
// // // // // // // // //                         {post.fields.tags.map((tag) => (
// // // // // // // // //                             <span
// // // // // // // // //                                 key={tag}
// // // // // // // // //                                 className="px-3 py-1 rounded-full text-sm bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
// // // // // // // // //                             >
// // // // // // // // //                                 {tag}
// // // // // // // // //                             </span>
// // // // // // // // //                         ))}
// // // // // // // // //                     </div>
// // // // // // // // //                 </div>
// // // // // // // // //             )}
// // // // // // // // //         </article>
// // // // // // // // //     );
// // // // // // // // // }
// // // // // // // // //
// // // // // // // // // export default async function BlogPostPage({ params }: Props) {
// // // // // // // // //     return (
// // // // // // // // //         <>
// // // // // // // // //             <Navbar />
// // // // // // // // //             <main className="min-h-screen pt-24 px-6 pb-12">
// // // // // // // // //                 <Suspense fallback={
// // // // // // // // //                     <div className="flex justify-center items-center min-h-[400px]">
// // // // // // // // //                         <div className="w-8 h-8 border-4 border-accent-red dark:border-accent-yellow border-t-transparent rounded-full animate-spin" />
// // // // // // // // //                     </div>
// // // // // // // // //                 }>
// // // // // // // // //                     <PostContent slug={params.slug} />
// // // // // // // // //                 </Suspense>
// // // // // // // // //             </main>
// // // // // // // // //             <Footer />
// // // // // // // // //         </>
// // // // // // // // //     );
// // // // // // // // // }

// // // // // // // // // src/app/blog/[slug]/page.tsx
// // // // // // // // import Image from 'next/image';
// // // // // // // // import Link from 'next/link';
// // // // // // // // import { ArrowLeft, Calendar, User, Tag } from 'lucide-react';
// // // // // // // // import { notFound } from 'next/navigation';
// // // // // // // // import Navbar from '@/components/layout/Navbar';
// // // // // // // // import Footer from '@/components/layout/Footer';

// // // // // // // // interface Props {
// // // // // // // //     params: {
// // // // // // // //         slug: string;
// // // // // // // //     };
// // // // // // // // }

// // // // // // // // async function getData(slug: string) {
// // // // // // // //     const response = await fetch(
// // // // // // // //         `https://cdn.contentful.com/spaces/sfme6nh4wom2/environments/master/entries/${slug}?access_token=jn7dH3bS0f5p6ypvIHavVJTRpfigF6QY9R1jOyHv7A4`
// // // // // // // //     );

// // // // // // // //     if (!response.ok) {
// // // // // // // //         notFound();
// // // // // // // //     }

// // // // // // // //     return response.json();
// // // // // // // // }

// // // // // // // // export default async function BlogPostPage({ params }: Props) {
// // // // // // // //     const post = await getData(params.slug);

// // // // // // // //     if (!post) {
// // // // // // // //         notFound();
// // // // // // // //     }

// // // // // // // //     const imageUrl = post.fields.image?.fields?.file?.url
// // // // // // // //         ? `https:${post.fields.image.fields.file.url}`
// // // // // // // //         : null;

// // // // // // // //     const formattedDate = new Date(post.sys.createdAt).toLocaleDateString('es-ES', {
// // // // // // // //         year: 'numeric',
// // // // // // // //         month: 'long',
// // // // // // // //         day: 'numeric'
// // // // // // // //     });

// // // // // // // //     return (
// // // // // // // //         <>
// // // // // // // //             <Navbar />
// // // // // // // //             <main className="min-h-screen pt-24 px-6 pb-12">
// // // // // // // //                 <article className="max-w-4xl mx-auto">
// // // // // // // //                     {/* Navegación superior */}
// // // // // // // //                     <Link
// // // // // // // //                         href="/blog"
// // // // // // // //                         className="inline-flex items-center text-sm text-gray-600 dark:text-gray-400 hover:text-accent-red dark:hover:text-accent-yellow mb-8 transition-colors group"
// // // // // // // //                     >
// // // // // // // //                         <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
// // // // // // // //                         Volver al blog
// // // // // // // //                     </Link>

// // // // // // // //                     {/* Encabezado */}
// // // // // // // //                     <header className="mb-8">
// // // // // // // //                         {post.fields.categories && (
// // // // // // // //                             <div className="flex flex-wrap gap-2 mb-4">
// // // // // // // //                                 {post.fields.categories.map((category: string) => (
// // // // // // // //                                     <span
// // // // // // // //                                         key={category}
// // // // // // // //                                         className="px-3 py-1 rounded-full text-sm bg-red-50 dark:bg-yellow-900/20 text-accent-red dark:text-accent-yellow"
// // // // // // // //                                     >
// // // // // // // //                                         {category}
// // // // // // // //                                     </span>
// // // // // // // //                                 ))}
// // // // // // // //                             </div>
// // // // // // // //                         )}

// // // // // // // //                         <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
// // // // // // // //                             {post.fields.title}
// // // // // // // //                         </h1>

// // // // // // // //                         <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
// // // // // // // //                             <div className="flex items-center gap-2">
// // // // // // // //                                 <Calendar className="w-4 h-4" />
// // // // // // // //                                 <time dateTime={post.sys.createdAt}>{formattedDate}</time>
// // // // // // // //                             </div>
// // // // // // // //                             {post.fields.authorInfo?.fields?.title && (
// // // // // // // //                                 <div className="flex items-center gap-2">
// // // // // // // //                                     <User className="w-4 h-4" />
// // // // // // // //                                     <span>{post.fields.authorInfo.fields.title}</span>
// // // // // // // //                                 </div>
// // // // // // // //                             )}
// // // // // // // //                         </div>
// // // // // // // //                     </header>

// // // // // // // //                     {/* Imagen destacada */}
// // // // // // // //                     {imageUrl && (
// // // // // // // //                         <div className="relative aspect-video w-full mb-8 rounded-lg overflow-hidden">
// // // // // // // //                             <Image
// // // // // // // //                                 src={imageUrl}
// // // // // // // //                                 alt={post.fields.featuredImageAltText || post.fields.title}
// // // // // // // //                                 fill
// // // // // // // //                                 className="object-cover"
// // // // // // // //                                 priority
// // // // // // // //                             />
// // // // // // // //                         </div>
// // // // // // // //                     )}

// // // // // // // //                     {/* Contenido */}
// // // // // // // //                     <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
// // // // // // // //                         {post.fields.body.content.map((content: any, index: number) => {
// // // // // // // //                             switch (content.nodeType) {
// // // // // // // //                                 case 'paragraph':
// // // // // // // //                                     return (
// // // // // // // //                                         <p key={index} className="mb-6 text-gray-700 dark:text-gray-300">
// // // // // // // //                                             {content.content[0]?.value || ''}
// // // // // // // //                                         </p>
// // // // // // // //                                     );
// // // // // // // //                                 case 'heading-2':
// // // // // // // //                                     return (
// // // // // // // //                                         <h2 key={index} className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
// // // // // // // //                                             {content.content[0]?.value || ''}
// // // // // // // //                                         </h2>
// // // // // // // //                                     );
// // // // // // // //                                 case 'heading-3':
// // // // // // // //                                     return (
// // // // // // // //                                         <h3 key={index} className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
// // // // // // // //                                             {content.content[0]?.value || ''}
// // // // // // // //                                         </h3>
// // // // // // // //                                     );
// // // // // // // //                                 case 'unordered-list':
// // // // // // // //                                     return (
// // // // // // // //                                         <ul key={index} className="list-disc list-inside mb-6 ml-4 text-gray-700 dark:text-gray-300">
// // // // // // // //                                             {content.content.map((item: any, itemIndex: number) => (
// // // // // // // //                                                 <li key={itemIndex}>
// // // // // // // //                                                     {item.content[0].content[0]?.value || ''}
// // // // // // // //                                                 </li>
// // // // // // // //                                             ))}
// // // // // // // //                                         </ul>
// // // // // // // //                                     );
// // // // // // // //                                 default:
// // // // // // // //                                     return null;
// // // // // // // //                             }
// // // // // // // //                         })}
// // // // // // // //                     </div>

// // // // // // // //                     {/* Tags */}
// // // // // // // //                     {post.fields.tags && post.fields.tags.length > 0 && (
// // // // // // // //                         <div className="border-t border-gray-200 dark:border-gray-800 pt-8">
// // // // // // // //                             <div className="flex items-center gap-2 mb-4">
// // // // // // // //                                 <Tag className="w-4 h-4 text-gray-600 dark:text-gray-400" />
// // // // // // // //                                 <h3 className="font-medium text-gray-900 dark:text-white">
// // // // // // // //                                     Tags
// // // // // // // //                                 </h3>
// // // // // // // //                             </div>
// // // // // // // //                             <div className="flex flex-wrap gap-2">
// // // // // // // //                                 {post.fields.tags.map((tag: string) => (
// // // // // // // //                                     <span
// // // // // // // //                                         key={tag}
// // // // // // // //                                         className="px-3 py-1 rounded-full text-sm bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
// // // // // // // //                                     >
// // // // // // // //                                         {tag}
// // // // // // // //                                     </span>
// // // // // // // //                                 ))}
// // // // // // // //                             </div>
// // // // // // // //                         </div>
// // // // // // // //                     )}
// // // // // // // //                 </article>
// // // // // // // //             </main>
// // // // // // // //             <Footer />
// // // // // // // //         </>
// // // // // // // //     );
// // // // // // // // }


// // // // // // // // src/app/blog/[slug]/page.tsx
// // // // // // // import Image from 'next/image';
// // // // // // // import Link from 'next/link';
// // // // // // // import { ArrowLeft, Calendar, User, Tag, Clock, Share2 } from 'lucide-react';
// // // // // // // import { notFound } from 'next/navigation';
// // // // // // // import Navbar from '@/components/layout/Navbar';
// // // // // // // import Footer from '@/components/layout/Footer';

// // // // // // // interface Props {
// // // // // // //     params: {
// // // // // // //         slug: string;
// // // // // // //     };
// // // // // // // }

// // // // // // // // Función para obtener los datos con manejo de errores mejorado
// // // // // // // async function getData(slug: string) {
// // // // // // //     try {
// // // // // // //         const response = await fetch(
// // // // // // //             `https://cdn.contentful.com/spaces/sfme6nh4wom2/environments/master/entries/${slug}?access_token=jn7dH3bS0f5p6ypvIHavVJTRpfigF6QY9R1jOyHv7A4`,
// // // // // // //             { next: { revalidate: 3600 } } // Revalidar cada hora
// // // // // // //         );

// // // // // // //         if (!response.ok) {
// // // // // // //             throw new Error('Failed to fetch post');
// // // // // // //         }

// // // // // // //         return response.json();
// // // // // // //     } catch (error) {
// // // // // // //         console.error('Error fetching post:', error);
// // // // // // //         return null;
// // // // // // //     }
// // // // // // // }

// // // // // // // // Marcar la página como dinámica
// // // // // // // export const dynamic = 'force-dynamic';

// // // // // // // export default async function BlogPostPage({ params }: Props) {
// // // // // // //     // Esperar a que los datos estén disponibles
// // // // // // //     const post = await getData(await Promise.resolve(params.slug));

// // // // // // //     if (!post) {
// // // // // // //         notFound();
// // // // // // //     }

// // // // // // //     const imageUrl = post.fields.image?.fields?.file?.url
// // // // // // //         ? `https:${post.fields.image.fields.file.url}`
// // // // // // //         : null;

// // // // // // //     const formattedDate = new Date(post.sys.createdAt).toLocaleDateString('es-ES', {
// // // // // // //         year: 'numeric',
// // // // // // //         month: 'long',
// // // // // // //         day: 'numeric'
// // // // // // //     });

// // // // // // //     // Calcular tiempo de lectura estimado
// // // // // // //     const wordCount = post.fields.body.content.reduce((count: number, content: any) => {
// // // // // // //         if (content.content?.[0]?.value) {
// // // // // // //             return count + content.content[0].value.split(/\s+/).length;
// // // // // // //         }
// // // // // // //         return count;
// // // // // // //     }, 0);
// // // // // // //     const readingTime = Math.ceil(wordCount / 200); // 200 palabras por minuto

// // // // // // //     return (
// // // // // // //         <>
// // // // // // //             <Navbar />
// // // // // // //             <main className="min-h-screen bg-gray-50 dark:bg-gray-900">
// // // // // // //                 {/* Hero Section */}
// // // // // // //                 <div className="w-full bg-white dark:bg-gray-800 pt-24 pb-12">
// // // // // // //                     <div className="max-w-4xl mx-auto px-6">
// // // // // // //                         <Link
// // // // // // //                             href="/blog"
// // // // // // //                             className="inline-flex items-center text-sm text-gray-600 dark:text-gray-400 
// // // // // // //                                    hover:text-accent-red dark:hover:text-accent-yellow mb-8 
// // // // // // //                                    transition-colors group"
// // // // // // //                         >
// // // // // // //                             <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
// // // // // // //                             Volver al blog
// // // // // // //                         </Link>

// // // // // // //                         <header className="mb-8">
// // // // // // //                             {post.fields.categories && (
// // // // // // //                                 <div className="flex flex-wrap gap-2 mb-4">
// // // // // // //                                     {post.fields.categories.map((category: string) => (
// // // // // // //                                         <span
// // // // // // //                                             key={category}
// // // // // // //                                             className="px-3 py-1 rounded-full text-sm bg-accent-red/10 
// // // // // // //                                                    dark:bg-accent-yellow/10 text-accent-red 
// // // // // // //                                                    dark:text-accent-yellow font-medium"
// // // // // // //                                         >
// // // // // // //                                             {category}
// // // // // // //                                         </span>
// // // // // // //                                     ))}
// // // // // // //                                 </div>
// // // // // // //                             )}

// // // // // // //                             <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
// // // // // // //                                 {post.fields.title}
// // // // // // //                             </h1>

// // // // // // //                             <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 dark:text-gray-400">
// // // // // // //                                 <div className="flex items-center gap-2">
// // // // // // //                                     <Calendar className="w-4 h-4" />
// // // // // // //                                     <time dateTime={post.sys.createdAt}>{formattedDate}</time>
// // // // // // //                                 </div>
// // // // // // //                                 {post.fields.authorInfo?.fields?.title && (
// // // // // // //                                     <div className="flex items-center gap-2">
// // // // // // //                                         <User className="w-4 h-4" />
// // // // // // //                                         <span>{post.fields.authorInfo.fields.title}</span>
// // // // // // //                                     </div>
// // // // // // //                                 )}
// // // // // // //                                 <div className="flex items-center gap-2">
// // // // // // //                                     <Clock className="w-4 h-4" />
// // // // // // //                                     <span>{readingTime} min de lectura</span>
// // // // // // //                                 </div>
// // // // // // //                             </div>
// // // // // // //                         </header>
// // // // // // //                     </div>
// // // // // // //                 </div>

// // // // // // //                 <article className="max-w-4xl mx-auto px-6 py-12">
// // // // // // //                     {/* Imagen destacada */}
// // // // // // //                     {imageUrl && (
// // // // // // //                         <div className="relative aspect-video w-full mb-12 rounded-xl overflow-hidden 
// // // // // // //                                     shadow-lg border border-gray-200 dark:border-gray-700">
// // // // // // //                             <Image
// // // // // // //                                 src={imageUrl}
// // // // // // //                                 alt={post.fields.featuredImageAltText || post.fields.title}
// // // // // // //                                 fill
// // // // // // //                                 className="object-cover"
// // // // // // //                                 priority
// // // // // // //                             />
// // // // // // //                         </div>
// // // // // // //                     )}

// // // // // // //                     {/* Social Share - Ejemplo de UI */}
// // // // // // //                     <div className="flex items-center gap-4 mb-8 pt-4 pb-8 border-b border-gray-200 dark:border-gray-700">
// // // // // // //                         <span className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-2">
// // // // // // //                             <Share2 className="w-4 h-4" />
// // // // // // //                             Compartir
// // // // // // //                         </span>
// // // // // // //                         <div className="flex gap-2">
// // // // // // //                             {/* Aquí puedes agregar botones de compartir en redes sociales */}
// // // // // // //                         </div>
// // // // // // //                     </div>

// // // // // // //                     {/* Contenido */}
// // // // // // //                     <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
// // // // // // //                         {post.fields.body.content.map((content: any, index: number) => {
// // // // // // //                             switch (content.nodeType) {
// // // // // // //                                 case 'paragraph':
// // // // // // //                                     return (
// // // // // // //                                         <p key={index} className="mb-6 text-gray-700 dark:text-gray-300 leading-relaxed">
// // // // // // //                                             {content.content[0]?.value || ''}
// // // // // // //                                         </p>
// // // // // // //                                     );
// // // // // // //                                 case 'heading-2':
// // // // // // //                                     return (
// // // // // // //                                         <h2 key={index} className="text-2xl font-bold mb-4 text-gray-900 dark:text-white mt-12">
// // // // // // //                                             {content.content[0]?.value || ''}
// // // // // // //                                         </h2>
// // // // // // //                                     );
// // // // // // //                                 case 'heading-3':
// // // // // // //                                     return (
// // // // // // //                                         <h3 key={index} className="text-xl font-semibold mb-4 text-gray-900 dark:text-white mt-8">
// // // // // // //                                             {content.content[0]?.value || ''}
// // // // // // //                                         </h3>
// // // // // // //                                     );
// // // // // // //                                 case 'unordered-list':
// // // // // // //                                     return (
// // // // // // //                                         <ul key={index} className="list-disc list-inside mb-6 ml-4 space-y-2 
// // // // // // //                                                                text-gray-700 dark:text-gray-300">
// // // // // // //                                             {content.content.map((item: any, itemIndex: number) => (
// // // // // // //                                                 <li key={itemIndex} className="leading-relaxed">
// // // // // // //                                                     {item.content[0].content[0]?.value || ''}
// // // // // // //                                                 </li>
// // // // // // //                                             ))}
// // // // // // //                                         </ul>
// // // // // // //                                     );
// // // // // // //                                 default:
// // // // // // //                                     return null;
// // // // // // //                             }
// // // // // // //                         })}
// // // // // // //                     </div>

// // // // // // //                     {/* Tags */}
// // // // // // //                     {post.fields.tags && post.fields.tags.length > 0 && (
// // // // // // //                         <div className="border-t border-gray-200 dark:border-gray-700 pt-8">
// // // // // // //                             <div className="flex items-center gap-2 mb-4">
// // // // // // //                                 <Tag className="w-4 h-4 text-accent-red dark:text-accent-yellow" />
// // // // // // //                                 <h3 className="font-medium text-gray-900 dark:text-white">
// // // // // // //                                     Tags relacionados
// // // // // // //                                 </h3>
// // // // // // //                             </div>
// // // // // // //                             <div className="flex flex-wrap gap-2">
// // // // // // //                                 {post.fields.tags.map((tag: string) => (
// // // // // // //                                     <span
// // // // // // //                                         key={tag}
// // // // // // //                                         className="px-4 py-2 rounded-lg text-sm bg-gray-100 dark:bg-gray-800 
// // // // // // //                                                text-gray-700 dark:text-gray-300 hover:bg-gray-200 
// // // // // // //                                                dark:hover:bg-gray-700 transition-colors cursor-pointer"
// // // // // // //                                     >
// // // // // // //                                         {tag}
// // // // // // //                                     </span>
// // // // // // //                                 ))}
// // // // // // //                             </div>
// // // // // // //                         </div>
// // // // // // //                     )}
// // // // // // //                 </article>
// // // // // // //             </main>
// // // // // // //             <Footer />
// // // // // // //         </>
// // // // // // //     );
// // // // // // // }

// // // // // // //descomentar esto en caso de falla electrica general

// // // // // // // src/app/blog/[slug]/page.tsx
// // // // // // 'use client';

// // // // // // import { useEffect, useState } from 'react';
// // // // // // import Image from 'next/image';
// // // // // // import Link from 'next/link';
// // // // // // import { ArrowLeft, Calendar, User, Facebook, Twitter, Linkedin, ArrowRight } from 'lucide-react';
// // // // // // import Navbar from '@/components/layout/Navbar';
// // // // // // import Footer from '@/components/layout/Footer';

// // // // // // interface BlogPost {
// // // // // //   sys: {
// // // // // //     id: string;
// // // // // //     createdAt: string;
// // // // // //   };
// // // // // //   fields: {
// // // // // //     title: string;
// // // // // //     body: any;
// // // // // //     image: {
// // // // // //       fields: {
// // // // // //         file: {
// // // // // //           url: string;
// // // // // //         };
// // // // // //       };
// // // // // //     };
// // // // // //     authorInfo: {
// // // // // //       fields: {
// // // // // //         title: string;
// // // // // //       };
// // // // // //     };
// // // // // //     categories: string[];
// // // // // //     tags: string[];
// // // // // //     recommendedPosts: any[];
// // // // // //   };
// // // // // // }

// // // // // // export default function BlogPostPage({ params }: { params: { slug: string } }) {
// // // // // //   const [post, setPost] = useState<BlogPost | null>(null);
// // // // // //   const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);
// // // // // //   const [isLoading, setIsLoading] = useState(true);

// // // // // //   useEffect(() => {
// // // // // //     const fetchPost = async () => {
// // // // // //       try {
// // // // // //         const response = await fetch(
// // // // // //           `https://cdn.contentful.com/spaces/sfme6nh4wom2/environments/master/entries/${params.slug}?access_token=jn7dH3bS0f5p6ypvIHavVJTRpfigF6QY9R1jOyHv7A4`
// // // // // //         );
// // // // // //         const data = await response.json();
// // // // // //         setPost(data);
        
// // // // // //         // Fetch related posts
// // // // // //         if (data.fields.recommendedPosts) {
// // // // // //           const recommendedResponse = await fetch(
// // // // // //             `https://cdn.contentful.com/spaces/sfme6nh4wom2/environments/master/entries?content_type=blogPost&limit=3&access_token=jn7dH3bS0f5p6ypvIHavVJTRpfigF6QY9R1jOyHv7A4`
// // // // // //           );
// // // // // //           const recommendedData = await recommendedResponse.json();
// // // // // //           setRelatedPosts(recommendedData.items);
// // // // // //         }
// // // // // //       } catch (error) {
// // // // // //         console.error('Error fetching post:', error);
// // // // // //       } finally {
// // // // // //         setIsLoading(false);
// // // // // //       }
// // // // // //     };

// // // // // //     fetchPost();
// // // // // //   }, [params.slug]);

// // // // // //   if (isLoading || !post) {
// // // // // //     return <div className="min-h-screen">Loading...</div>;
// // // // // //   }

// // // // // //   const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
// // // // // //   const postTitle = encodeURIComponent(post.fields.title);

// // // // // //   const handleShare = (platform: string) => {
// // // // // //     const shareUrls = {
// // // // // //       facebook: `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`,
// // // // // //       twitter: `https://twitter.com/intent/tweet?url=${shareUrl}&text=${postTitle}`,
// // // // // //       linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`
// // // // // //     };

// // // // // //     window.open(shareUrls[platform as keyof typeof shareUrls], '_blank', 'width=600,height=400');
// // // // // //   };

// // // // // //   return (
// // // // // //     <>
// // // // // //       <Navbar />
// // // // // //       <main className="min-h-screen bg-white dark:bg-gray-900">
// // // // // //         <article className="max-w-4xl mx-auto px-6 pt-24 pb-12">
// // // // // //           <Link
// // // // // //             href="/blog"
// // // // // //             className="inline-flex items-center text-sm text-gray-600 dark:text-gray-400 hover:text-accent-red 
// // // // // //                      dark:hover:text-accent-yellow mb-8 transition-colors group"
// // // // // //           >
// // // // // //             <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
// // // // // //             Volver al blog
// // // // // //           </Link>

// // // // // //           {/* Header */}
// // // // // //           <header className="mb-8">
// // // // // //             <div className="flex flex-wrap gap-2 mb-4">
// // // // // //               {post.fields.categories?.map((category) => (
// // // // // //                 <span
// // // // // //                   key={category}
// // // // // //                   className="px-3 py-1 rounded-full text-sm bg-accent-red/10 dark:bg-accent-yellow/10 
// // // // // //                          text-accent-red dark:text-accent-yellow"
// // // // // //                 >
// // // // // //                   {category}
// // // // // //                 </span>
// // // // // //               ))}
// // // // // //             </div>

// // // // // //             <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
// // // // // //               {post.fields.title}
// // // // // //             </h1>

// // // // // //             <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
// // // // // //               <time className="flex items-center gap-2">
// // // // // //                 <Calendar className="w-4 h-4" />
// // // // // //                 {new Date(post.sys.createdAt).toLocaleDateString('es-ES', {
// // // // // //                   year: 'numeric',
// // // // // //                   month: 'long',
// // // // // //                   day: 'numeric'
// // // // // //                 })}
// // // // // //               </time>
// // // // // //               {post.fields.authorInfo && (
// // // // // //                 <span className="flex items-center gap-2">
// // // // // //                   <User className="w-4 h-4" />
// // // // // //                   {post.fields.authorInfo.fields.title}
// // // // // //                 </span>
// // // // // //               )}
// // // // // //             </div>
// // // // // //           </header>

// // // // // //           {/* Featured Image */}
// // // // // //           {post.fields.image && (
// // // // // //             <div className="relative aspect-video w-full mb-8 rounded-xl overflow-hidden shadow-lg">
// // // // // //               <Image
// // // // // //                 src={`https:${post.fields.image.fields.file.url}`}
// // // // // //                 alt={post.fields.title}
// // // // // //                 fill
// // // // // //                 className="object-cover"
// // // // // //                 priority
// // // // // //               />
// // // // // //             </div>
// // // // // //           )}

// // // // // //           {/* Social Share */}
// // // // // //           <div className="flex items-center gap-4 mb-8 pb-4 border-b border-gray-200 dark:border-gray-700">
// // // // // //             <span className="text-sm text-gray-600 dark:text-gray-400">Compartir:</span>
// // // // // //             <button
// // // // // //               onClick={() => handleShare('facebook')}
// // // // // //               className="p-2 hover:bg-accent-red/10 dark:hover:bg-accent-yellow/10 rounded-full transition-colors"
// // // // // //               aria-label="Compartir en Facebook"
// // // // // //             >
// // // // // //               <Facebook className="w-5 h-5 text-accent-red dark:text-accent-yellow" />
// // // // // //             </button>
// // // // // //             <button
// // // // // //               onClick={() => handleShare('twitter')}
// // // // // //               className="p-2 hover:bg-accent-red/10 dark:hover:bg-accent-yellow/10 rounded-full transition-colors"
// // // // // //               aria-label="Compartir en Twitter"
// // // // // //             >
// // // // // //               <Twitter className="w-5 h-5 text-accent-red dark:text-accent-yellow" />
// // // // // //             </button>
// // // // // //             <button
// // // // // //               onClick={() => handleShare('linkedin')}
// // // // // //               className="p-2 hover:bg-accent-red/10 dark:hover:bg-accent-yellow/10 rounded-full transition-colors"
// // // // // //               aria-label="Compartir en LinkedIn"
// // // // // //             >
// // // // // //               <Linkedin className="w-5 h-5 text-accent-red dark:text-accent-yellow" />
// // // // // //             </button>
// // // // // //           </div>

// // // // // //           {/* Content */}
// // // // // //           <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
// // // // // //             {post.fields.body.content.map((content: any, index: number) => {
// // // // // //               switch (content.nodeType) {
// // // // // //                 case 'paragraph':
// // // // // //                   return (
// // // // // //                     <p key={index} className="text-gray-700 dark:text-gray-300 mb-6">
// // // // // //                       {content.content[0]?.value || ''}
// // // // // //                     </p>
// // // // // //                   );
// // // // // //                 case 'heading-2':
// // // // // //                   return (
// // // // // //                     <h2 key={index} className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
// // // // // //                       {content.content[0]?.value || ''}
// // // // // //                     </h2>
// // // // // //                   );
// // // // // //                 default:
// // // // // //                   return null;
// // // // // //               }
// // // // // //             })}
// // // // // //           </div>

// // // // // //           {/* Related Posts */}
// // // // // //           {relatedPosts.length > 0 && (
// // // // // //             <section className="mt-16 border-t border-gray-200 dark:border-gray-700 pt-12">
// // // // // //               <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
// // // // // //                 Artículos relacionados
// // // // // //               </h2>
// // // // // //               <div className="grid md:grid-cols-3 gap-8">
// // // // // //                 {relatedPosts.map((relatedPost) => (
// // // // // //                   <Link
// // // // // //                     key={relatedPost.sys.id}
// // // // // //                     href={`/blog/${relatedPost.sys.id}`}
// // // // // //                     className="group"
// // // // // //                   >
// // // // // //                     <article className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm 
// // // // // //                                    hover:shadow-lg transition-all">
// // // // // //                       {relatedPost.fields.image && (
// // // // // //                         <div className="relative aspect-video">
// // // // // //                           <Image
// // // // // //                             src={`https:${relatedPost.fields.image.fields.file.url}`}
// // // // // //                             alt={relatedPost.fields.title}
// // // // // //                             fill
// // // // // //                             className="object-cover group-hover:scale-105 transition-transform duration-300"
// // // // // //                           />
// // // // // //                         </div>
// // // // // //                       )}
// // // // // //                       <div className="p-4">
// // // // // //                         <h3 className="font-semibold text-gray-900 dark:text-white mb-2 
// // // // // //                                    group-hover:text-accent-red dark:group-hover:text-accent-yellow">
// // // // // //                           {relatedPost.fields.title}
// // // // // //                         </h3>
// // // // // //                         <span className="text-sm text-gray-600 dark:text-gray-400">
// // // // // //                           {new Date(relatedPost.sys.createdAt).toLocaleDateString('es-ES', {
// // // // // //                             year: 'numeric',
// // // // // //                             month: 'short',
// // // // // //                             day: 'numeric'
// // // // // //                           })}
// // // // // //                         </span>
// // // // // //                       </div>
// // // // // //                     </article>
// // // // // //                   </Link>
// // // // // //                 ))}
// // // // // //               </div>
// // // // // //             </section>
// // // // // //           )}

// // // // // //           {/* CTA Section */}
// // // // // //           <section className="mt-16 bg-accent-red/10 dark:bg-accent-yellow/10 rounded-2xl p-8 text-center">
// // // // // //             <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
// // // // // //               ¿Necesitas ayuda con tu proyecto?
// // // // // //             </h2>
// // // // // //             <p className="text-gray-600 dark:text-gray-400 mb-6">
// // // // // //               Desarrollamos soluciones web personalizadas utilizando las últimas tecnologías
// // // // // //             </p>
// // // // // //             <Link
// // // // // //               href="/#contacto"
// // // // // //               className="inline-flex items-center gap-2 bg-accent-red hover:bg-accent-red/90 
// // // // // //                      dark:bg-accent-yellow dark:hover:bg-accent-yellow/90 text-white 
// // // // // //                      dark:text-gray-900 px-6 py-3 rounded-xl font-medium transition-colors"
// // // // // //             >
// // // // // //               Contactar ahora
// // // // // //               <ArrowRight className="w-4 h-4" />
// // // // // //             </Link>
// // // // // //           </section>
// // // // // //         </article>
// // // // // //       </main>
// // // // // //       <Footer />
// // // // // //     </>
// // // // // //   );
// // // // // // }


// // // // // // src/app/blog/[slug]/page.tsx
// // // // // 'use client';

// // // // // import { useEffect, useState } from 'react';
// // // // // import Image from 'next/image';
// // // // // import Link from 'next/link';
// // // // // import { ArrowLeft, ArrowRight, Calendar, User, Clock, Facebook, Twitter, Linkedin } from 'lucide-react';
// // // // // import Navbar from '@/components/layout/Navbar';
// // // // // import Footer from '@/components/layout/Footer';
// // // // // import {
// // // // //   type BlogPost,
// // // // //   getBlogPostById,
// // // // //   getRelatedPosts,
// // // // //   formatContentfulDate,
// // // // //   extractPlainText
// // // // // } from '@/lib/contentful';

// // // // // export default function BlogPostPage({ params }: { params: { slug: string } }) {
// // // // //   const [post, setPost] = useState<BlogPost | null>(null);
// // // // //   const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);
// // // // //   const [isLoading, setIsLoading] = useState(true);
// // // // //   const [error, setError] = useState<string | null>(null);

// // // // //   useEffect(() => {
// // // // //     async function fetchData() {
// // // // //       try {
// // // // //         setIsLoading(true);
// // // // //         const fetchedPost = await getBlogPostById(params.slug);
        
// // // // //         if (!fetchedPost) {
// // // // //           setError('Post not found');
// // // // //           return;
// // // // //         }

// // // // //         setPost(fetchedPost);

// // // // //         // Fetch related posts
// // // // //         const fetchedRelatedPosts = await getRelatedPosts(params.slug);
// // // // //         setRelatedPosts(fetchedRelatedPosts);
// // // // //       } catch (err) {
// // // // //         setError(err instanceof Error ? err.message : 'An error occurred');
// // // // //         console.error('Error fetching post:', err);
// // // // //       } finally {
// // // // //         setIsLoading(false);
// // // // //       }
// // // // //     }

// // // // //     fetchData();
// // // // //   }, [params.slug]);

// // // // //   const handleShare = (platform: 'facebook' | 'twitter' | 'linkedin') => {
// // // // //     if (typeof window === 'undefined' || !post) return;

// // // // //     const shareUrl = window.location.href;
// // // // //     const postTitle = encodeURIComponent(post.fields.title);

// // // // //     const shareUrls = {
// // // // //       facebook: `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`,
// // // // //       twitter: `https://twitter.com/intent/tweet?url=${shareUrl}&text=${postTitle}`,
// // // // //       linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`
// // // // //     };

// // // // //     window.open(shareUrls[platform], '_blank', 'width=600,height=400');
// // // // //   };

// // // // //   // Renderiza el contenido Rich Text
// // // // //   const renderContent = (content: BlogPost['fields']['body']['content']) => {
// // // // //     return content.map((item, index) => {
// // // // //       switch (item.nodeType) {
// // // // //         case 'paragraph':
// // // // //           return (
// // // // //             <p key={index} className="text-gray-700 dark:text-gray-300 mb-6">
// // // // //               {item.content?.[0]?.value || ''}
// // // // //             </p>
// // // // //           );
// // // // //         case 'heading-1':
// // // // //           return (
// // // // //             <h1 key={index} className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
// // // // //               {item.content?.[0]?.value || ''}
// // // // //             </h1>
// // // // //           );
// // // // //         case 'heading-2':
// // // // //           return (
// // // // //             <h2 key={index} className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
// // // // //               {item.content?.[0]?.value || ''}
// // // // //             </h2>
// // // // //           );
// // // // //         case 'heading-3':
// // // // //           return (
// // // // //             <h3 key={index} className="text-xl font-bold text-gray-900 dark:text-white mb-3">
// // // // //               {item.content?.[0]?.value || ''}
// // // // //             </h3>
// // // // //           );
// // // // //         default:
// // // // //           return null;
// // // // //       }
// // // // //     });
// // // // //   };

// // // // //   if (isLoading) {
// // // // //     return (
// // // // //       <div className="min-h-screen flex items-center justify-center">
// // // // //         <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-accent-red"></div>
// // // // //       </div>
// // // // //     );
// // // // //   }

// // // // //   if (error || !post) {
// // // // //     return (
// // // // //       <div className="min-h-screen flex flex-col items-center justify-center">
// // // // //         <h1 className="text-2xl font-bold mb-4">Error loading post</h1>
// // // // //         <p className="text-gray-600 mb-4">{error || 'Post not found'}</p>
// // // // //         <Link
// // // // //           href="/blog"
// // // // //           className="text-accent-red hover:text-accent-red/80 flex items-center gap-2"
// // // // //         >
// // // // //           <ArrowLeft className="w-4 h-4" />
// // // // //           Return to blog
// // // // //         </Link>
// // // // //       </div>
// // // // //     );
// // // // //   }

// // // // //   // Calcular tiempo de lectura (aproximadamente 200 palabras por minuto)
// // // // //   const readingTime = Math.ceil(
// // // // //     extractPlainText(post.fields.body).split(/\s+/).length / 200
// // // // //   );

// // // // //   return (
// // // // //     <>
// // // // //       <Navbar />
// // // // //       <main className="min-h-screen bg-white dark:bg-gray-900">
// // // // //         <article className="max-w-4xl mx-auto px-6 pt-24 pb-12">
// // // // //           {/* Back to blog link */}
// // // // //           <Link
// // // // //             href="/blog"
// // // // //             className="inline-flex items-center text-sm text-gray-600 dark:text-gray-400 
// // // // //                      hover:text-accent-red dark:hover:text-accent-yellow mb-8 transition-colors group"
// // // // //           >
// // // // //             <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
// // // // //             Volver al blog
// // // // //           </Link>

// // // // //           {/* Header */}
// // // // //           <header className="mb-8">
// // // // //             {post.fields.categories && (
// // // // //               <div className="flex flex-wrap gap-2 mb-4">
// // // // //                 {post.fields.categories.map((category) => (
// // // // //                   <span
// // // // //                     key={category}
// // // // //                     className="px-3 py-1 rounded-full text-sm bg-accent-red/10 dark:bg-accent-yellow/10 
// // // // //                            text-accent-red dark:text-accent-yellow"
// // // // //                   >
// // // // //                     {category}
// // // // //                   </span>
// // // // //                 ))}
// // // // //               </div>
// // // // //             )}

// // // // //             <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
// // // // //               {post.fields.title}
// // // // //             </h1>

// // // // //             <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
// // // // //               <time className="flex items-center gap-2">
// // // // //                 <Calendar className="w-4 h-4" />
// // // // //                 {formatContentfulDate(post.sys.createdAt)}
// // // // //               </time>

// // // // //               {post.fields.authorInfo?.fields?.title && (
// // // // //                 <span className="flex items-center gap-2">
// // // // //                   <User className="w-4 h-4" />
// // // // //                   {post.fields.authorInfo.fields.title}
// // // // //                 </span>
// // // // //               )}

// // // // //               <span className="flex items-center gap-2">
// // // // //                 <Clock className="w-4 h-4" />
// // // // //                 {readingTime} min de lectura
// // // // //               </span>
// // // // //             </div>
// // // // //           </header>

// // // // //           {/* Featured Image */}
// // // // //           {post.fields.image?.fields?.file?.url && (
// // // // //             <div className="relative aspect-video w-full mb-8 rounded-xl overflow-hidden shadow-lg">
// // // // //               <Image
// // // // //                 src={`https:${post.fields.image.fields.file.url}`}
// // // // //                 alt={post.fields.featuredImageAltText || post.fields.title}
// // // // //                 fill
// // // // //                 className="object-cover"
// // // // //                 priority
// // // // //                 sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
// // // // //               />
// // // // //             </div>
// // // // //           )}

// // // // //           {/* Social Share */}
// // // // //           <div className="flex items-center gap-4 mb-8 pb-4 border-b border-gray-200 dark:border-gray-700">
// // // // //             <span className="text-sm text-gray-600 dark:text-gray-400">Compartir:</span>
// // // // //             <button
// // // // //               onClick={() => handleShare('facebook')}
// // // // //               className="p-2 hover:bg-accent-red/10 dark:hover:bg-accent-yellow/10 rounded-full transition-colors"
// // // // //               aria-label="Compartir en Facebook"
// // // // //             >
// // // // //               <Facebook className="w-5 h-5 text-accent-red dark:text-accent-yellow" />
// // // // //             </button>
// // // // //             <button
// // // // //               onClick={() => handleShare('twitter')}
// // // // //               className="p-2 hover:bg-accent-red/10 dark:hover:bg-accent-yellow/10 rounded-full transition-colors"
// // // // //               aria-label="Compartir en Twitter"
// // // // //             >
// // // // //               <Twitter className="w-5 h-5 text-accent-red dark:text-accent-yellow" />
// // // // //             </button>
// // // // //             <button
// // // // //               onClick={() => handleShare('linkedin')}
// // // // //               className="p-2 hover:bg-accent-red/10 dark:hover:bg-accent-yellow/10 rounded-full transition-colors"
// // // // //               aria-label="Compartir en LinkedIn"
// // // // //             >
// // // // //               <Linkedin className="w-5 h-5 text-accent-red dark:text-accent-yellow" />
// // // // //             </button>
// // // // //           </div>

// // // // //           {/* Content */}
// // // // //           <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
// // // // //             {renderContent(post.fields.body.content)}
// // // // //           </div>

// // // // //           {/* Tags */}
// // // // //           {post.fields.tags && post.fields.tags.length > 0 && (
// // // // //             <div className="flex flex-wrap gap-2 mb-8">
// // // // //               {post.fields.tags.map((tag) => (
// // // // //                 <span
// // // // //                   key={tag}
// // // // //                   className="px-3 py-1 rounded-full text-sm bg-gray-100 dark:bg-gray-800 
// // // // //                          text-gray-700 dark:text-gray-300"
// // // // //                 >
// // // // //                   {tag}
// // // // //                 </span>
// // // // //               ))}
// // // // //             </div>
// // // // //           )}

// // // // //           {/* Related Posts */}
// // // // //           {relatedPosts.length > 0 && (
// // // // //             <section className="mt-16 border-t border-gray-200 dark:border-gray-700 pt-12">
// // // // //               <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
// // // // //                 Artículos relacionados
// // // // //               </h2>
// // // // //               <div className="grid md:grid-cols-3 gap-8">
// // // // //                 {relatedPosts.map((relatedPost) => (
// // // // //                   <Link
// // // // //                     key={relatedPost.sys.id}
// // // // //                     href={`/blog/${relatedPost.sys.id}`}
// // // // //                     className="group"
// // // // //                   >
// // // // //                     <article className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm 
// // // // //                                    hover:shadow-lg transition-all">
// // // // //                       {relatedPost.fields.image?.fields?.file?.url && (
// // // // //                         <div className="relative aspect-video">
// // // // //                           <Image
// // // // //                             src={`https:${relatedPost.fields.image.fields.file.url}`}
// // // // //                             alt={relatedPost.fields.title}
// // // // //                             fill
// // // // //                             className="object-cover group-hover:scale-105 transition-transform duration-300"
// // // // //                             sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
// // // // //                           />
// // // // //                         </div>
// // // // //                       )}
// // // // //                       <div className="p-4">
// // // // //                         <h3 className="font-semibold text-gray-900 dark:text-white mb-2 
// // // // //                                    group-hover:text-accent-red dark:group-hover:text-accent-yellow">
// // // // //                           {relatedPost.fields.title}
// // // // //                         </h3>
// // // // //                         <span className="text-sm text-gray-600 dark:text-gray-400">
// // // // //                           {formatContentfulDate(relatedPost.sys.createdAt)}
// // // // //                         </span>
// // // // //                       </div>
// // // // //                     </article>
// // // // //                   </Link>
// // // // //                 ))}
// // // // //               </div>
// // // // //             </section>
// // // // //           )}

// // // // //           {/* CTA Section */}
// // // // //           <section className="mt-16 bg-accent-red/10 dark:bg-accent-yellow/10 rounded-2xl p-8 text-center">
// // // // //             <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
// // // // //               ¿Necesitas ayuda con tu proyecto?
// // // // //             </h2>
// // // // //             <p className="text-gray-600 dark:text-gray-400 mb-6">
// // // // //               Desarrollamos soluciones web personalizadas utilizando las últimas tecnologías
// // // // //             </p>
// // // // //             <Link
// // // // //               href="/#contacto"
// // // // //               className="inline-flex items-center gap-2 bg-accent-red hover:bg-accent-red/90 
// // // // //                      dark:bg-accent-yellow dark:hover:bg-accent-yellow/90 text-white 
// // // // //                      dark:text-gray-900 px-6 py-3 rounded-xl font-medium transition-colors"
// // // // //             >
// // // // //               Contactar ahora
// // // // //               <ArrowRight className="w-4 h-4" />
// // // // //             </Link>
// // // // //           </section>
// // // // //         </article>
// // // // //       </main>
// // // // //       <Footer />
// // // // //     </>
// // // // //   );
// // // // // }



// // // // // app/blog/[slug]/page.tsx

// // // // 'use client';

// // // // import { useState, useEffect } from 'react';
// // // // import { useRouter } from 'next/navigation';
// // // // import Image from 'next/image';
// // // // import { Loader2 } from 'lucide-react';
// // // // import Navbar from '@/components/layout/Navbar';
// // // // import Footer from '@/components/layout/Footer';

// // // // interface BlogPost {
// // // //     sys: {
// // // //         id: string;
// // // //         createdAt: string;
// // // //     };
// // // //     fields: {
// // // //         title: string;
// // // //         body: {
// // // //             content: Array<{
// // // //                 content: Array<{
// // // //                     value: string;
// // // //                 }>;
// // // //             }>;
// // // //         };
// // // //         image?: {
// // // //             fields: {
// // // //                 file: {
// // // //                     url: string;
// // // //                 };
// // // //             };
// // // //         };
// // // //         tags?: string[];
// // // //         slug: string;
// // // //     };
// // // // }

// // // // export default function BlogPostPage({ params }: { params: { slug: string } }) {
// // // //     const router = useRouter();
// // // //     const [post, setPost] = useState<BlogPost | null>(null);
// // // //     const [isLoading, setIsLoading] = useState(true);

// // // //     useEffect(() => {
// // // //         const fetchPost = async () => {
// // // //             try {
// // // //                 const response = await fetch(
// // // //                     `https://cdn.contentful.com/spaces/sfme6nh4wom2/environments/master/entries?content_type=blogPage&fields.slug=${params.slug}&access_token=jn7dH3bS0f5p6ypvIHavVJTRpfigF6QY9R1jOyHv7A4`
// // // //                 );
// // // //                 const data = await response.json();
// // // //                 if (data.items.length > 0) {
// // // //                     setPost(data.items[0]);
// // // //                 }
// // // //             } catch (error) {
// // // //                 console.error('Error fetching post:', error);
// // // //             } finally {
// // // //                 setIsLoading(false);
// // // //             }
// // // //         };

// // // //         fetchPost();
// // // //     }, [params.slug]);

// // // //     if (isLoading) {
// // // //         return (
// // // //             <>
// // // //                 <Navbar />
// // // //                 <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
// // // //                     <Loader2 className="w-8 h-8 animate-spin text-accent-red dark:text-accent-yellow" />
// // // //                 </div>
// // // //                 <Footer />
// // // //             </>
// // // //         );
// // // //     }

// // // //     if (!post) {
// // // //         return (
// // // //             <>
// // // //                 <Navbar />
// // // //                 <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col items-center justify-center p-4">
// // // //                     <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
// // // //                         Artículo no encontrado
// // // //                     </h1>
// // // //                     <button
// // // //                         onClick={() => router.push('/blog')}
// // // //                         className="text-accent-red dark:text-accent-yellow hover:underline"
// // // //                     >
// // // //                         Volver al blog
// // // //                     </button>
// // // //                 </div>
// // // //                 <Footer />
// // // //             </>
// // // //         );
// // // //     }

// // // //     return (
// // // //         <>
// // // //             <Navbar />
// // // //             <main className="min-h-screen bg-gray-50 dark:bg-gray-900">
// // // //                 <article className="max-w-4xl mx-auto px-4 py-12">
// // // //                     {post.fields.image && (
// // // //                         <div className="relative w-full h-[400px] mb-8 rounded-lg overflow-hidden">
// // // //                             <Image
// // // //                                 src={`https:${post.fields.image.fields.file.url}`}
// // // //                                 alt={post.fields.title}
// // // //                                 fill
// // // //                                 className="object-cover"
// // // //                             />
// // // //                         </div>
// // // //                     )}

// // // //                     <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
// // // //                         {post.fields.title}
// // // //                     </h1>

// // // //                     {post.fields.tags && (
// // // //                         <div className="flex flex-wrap gap-2 mb-8">
// // // //                             {post.fields.tags.map((tag) => (
// // // //                                 <span
// // // //                                     key={tag}
// // // //                                     className="px-3 py-1 bg-accent-red/10 dark:bg-accent-yellow/10 
// // // //                                              text-accent-red dark:text-accent-yellow rounded-full text-sm"
// // // //                                 >
// // // //                                     {tag}
// // // //                                 </span>
// // // //                             ))}
// // // //                         </div>
// // // //                     )}

// // // //                     <div className="prose prose-lg dark:prose-invert max-w-none">
// // // //                         <p className="text-gray-600 dark:text-gray-400">
// // // //                             {post.fields.body.content[0].content[0].value}
// // // //                         </p>
// // // //                     </div>
// // // //                 </article>
// // // //             </main>
// // // //             <Footer />
// // // //         </>
// // // //     );
// // // // }

// // // // app/blog/[slug]/page.tsx




// // // 'use client';

// // // import { useState, useEffect } from 'react';
// // // import { useRouter } from 'next/navigation';
// // // import Image from 'next/image';
// // // import { motion } from 'framer-motion';
// // // import { Loader2, Calendar, ArrowLeft } from 'lucide-react';
// // // import Navbar from '@/components/layout/Navbar';
// // // import Footer from '@/components/layout/Footer';

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

// // // interface ContentfulResponse {
// // //     items: BlogPost[];
// // //     includes?: {
// // //         Asset?: Asset[];
// // //     };
// // // }

// // // interface BlogPost {
// // //     sys: {
// // //         id: string;
// // //         createdAt: string;
// // //     };
// // //     fields: {
// // //         title: string;
// // //         slug: string;
// // //         body: {
// // //             content: Array<{
// // //                 nodeType: string;
// // //                 content: Array<{
// // //                     value: string;
// // //                 }>;
// // //             }>;
// // //         };
// // //         image?: {
// // //             sys: {
// // //                 id: string;
// // //             };
// // //         };
// // //         tags?: string[];
// // //     };
// // // }

// // // export default function BlogPostPage({ params }: { params: { slug: string } }) {
// // //     const router = useRouter();
// // //     const [post, setPost] = useState<BlogPost | null>(null);
// // //     const [imageUrl, setImageUrl] = useState<string | null>(null);
// // //     const [isLoading, setIsLoading] = useState(true);

// // //     useEffect(() => {
// // //         const fetchPost = async () => {
// // //             try {
// // //                 // Añadimos include=10 para obtener los assets relacionados
// // //                 const response = await fetch(
// // //                     `https://cdn.contentful.com/spaces/sfme6nh4wom2/environments/master/entries?content_type=blogPage&fields.slug=${params.slug}&include=10&access_token=jn7dH3bS0f5p6ypvIHavVJTRpfigF6QY9R1jOyHv7A4`
// // //                 );
                
// // //                 if (!response.ok) {
// // //                     throw new Error('Error al cargar el post');
// // //                 }

// // //                 const data: ContentfulResponse = await response.json();
                
// // //                 if (data.items.length === 0) {
// // //                     return;
// // //                 }

// // //                 const currentPost = data.items[0];
// // //                 setPost(currentPost);

// // //                 // Manejamos la imagen si existe
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

// // //         fetchPost();
// // //     }, [params.slug]);

// // //     if (isLoading) {
// // //         return (
// // //             <>
// // //                 <Navbar />
// // //                 <div className="min-h-screen flex items-center justify-center">
// // //                     <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
// // //                 </div>
// // //                 <Footer />
// // //             </>
// // //         );
// // //     }

// // //     if (!post) {
// // //         return (
// // //             <>
// // //                 <Navbar />
// // //                 <div className="min-h-screen flex items-center justify-center">
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

// // //     return (
// // //         <>
// // //             <Navbar />
// // //             <main className="min-h-screen bg-gray-50 dark:bg-gray-900">
// // //                 {/* Hero Section with Image */}
// // //                 <div className="relative">
// // //                     {imageUrl ? (
// // //                         <div className="relative h-[60vh] w-full">
// // //                             <Image
// // //                                 src={`https:${imageUrl}`}
// // //                                 alt={post.fields.title}
// // //                                 fill
// // //                                 className="object-cover"
// // //                                 priority
// // //                             />
// // //                             <div className="absolute inset-0 bg-black/50" />
// // //                             <div className="absolute inset-0 flex items-center justify-center">
// // //                                 <div className="max-w-4xl mx-auto px-4 text-center">
// // //                                     <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
// // //                                         {post.fields.title}
// // //                                     </h1>
// // //                                     {post.fields.tags && (
// // //                                         <div className="flex flex-wrap gap-2 justify-center">
// // //                                             {post.fields.tags.map((tag) => (
// // //                                                 <span
// // //                                                     key={tag}
// // //                                                     className="px-3 py-1 bg-white/10 text-white rounded-full text-sm"
// // //                                                 >
// // //                                                     {tag}
// // //                                                 </span>
// // //                                             ))}
// // //                                         </div>
// // //                                     )}
// // //                                 </div>
// // //                             </div>
// // //                         </div>
// // //                     ) : (
// // //                         <div className="py-20 bg-gradient-to-r from-blue-600 to-blue-800">
// // //                             <div className="max-w-4xl mx-auto px-4 text-center">
// // //                                 <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
// // //                                     {post.fields.title}
// // //                                 </h1>
// // //                                 {post.fields.tags && (
// // //                                     <div className="flex flex-wrap gap-2 justify-center">
// // //                                         {post.fields.tags.map((tag) => (
// // //                                             <span
// // //                                                 key={tag}
// // //                                                 className="px-3 py-1 bg-white/10 text-white rounded-full text-sm"
// // //                                             >
// // //                                                 {tag}
// // //                                             </span>
// // //                                         ))}
// // //                                     </div>
// // //                                 )}
// // //                             </div>
// // //                         </div>
// // //                     )}
// // //                 </div>

// // //                 {/* Content Section */}
// // //                 <article className="max-w-4xl mx-auto px-4 py-12">
// // //                     <div className="mb-8 flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
// // //                         <span className="flex items-center gap-2">
// // //                             <Calendar className="w-4 h-4" />
// // //                             {new Date(post.sys.createdAt).toLocaleDateString('es-ES', {
// // //                                 year: 'numeric',
// // //                                 month: 'long',
// // //                                 day: 'numeric'
// // //                             })}
// // //                         </span>
// // //                     </div>

// // //                     <div className="prose prose-lg dark:prose-invert max-w-none">
// // //                         {post.fields.body.content.map((content, index) => (
// // //                             <p key={index} className="mb-4 text-gray-700 dark:text-gray-300">
// // //                                 {content.content[0].value}
// // //                             </p>
// // //                         ))}
// // //                     </div>

// // //                     <div className="mt-12">
// // //                         <button
// // //                             onClick={() => router.push('/blog')}
// // //                             className="flex items-center gap-2 text-blue-600 hover:underline"
// // //                         >
// // //                             <ArrowLeft size={20} />
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

// // import { useState, useEffect } from 'react';
// // import { useRouter } from 'next/navigation';
// // import Image from 'next/image';
// // import { motion } from 'framer-motion';
// // import { Loader2, Calendar, ArrowLeft, Twitter, Linkedin, Facebook, Link, Tag } from 'lucide-react';
// // import Navbar from '@/components/layout/Navbar';
// // import Footer from '@/components/layout/Footer';

// // interface ContentfulResponse {
// //     items: BlogPost[];
// //     includes?: {
// //         Asset?: Asset[];
// //     };
// // }

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
// // }

// // export default function BlogPostPage({ params }: { params: { slug: string } }) {
// //     const router = useRouter();
// //     const [post, setPost] = useState<BlogPost | null>(null);
// //     const [imageUrl, setImageUrl] = useState<string | null>(null);
// //     const [isLoading, setIsLoading] = useState(true);
// //     const [readingProgress, setReadingProgress] = useState(0);
// //     const [showShareTooltip, setShowShareTooltip] = useState(false);

// //     useEffect(() => {
// //         const updateReadingProgress = () => {
// //             const currentPosition = window.scrollY;
// //             const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
// //             const progress = (currentPosition / scrollHeight) * 100;
// //             setReadingProgress(progress);
// //         };

// //         window.addEventListener('scroll', updateReadingProgress);
// //         return () => window.removeEventListener('scroll', updateReadingProgress);
// //     }, []);

// //     useEffect(() => {
// //         const fetchPost = async () => {
// //             try {
// //                 const response = await fetch(
// //                     `https://cdn.contentful.com/spaces/sfme6nh4wom2/environments/master/entries?content_type=blogPage&fields.slug=${params.slug}&include=10&access_token=jn7dH3bS0f5p6ypvIHavVJTRpfigF6QY9R1jOyHv7A4`
// //                 );
                
// //                 if (!response.ok) {
// //                     throw new Error('Error al cargar el post');
// //                 }

// //                 const data: ContentfulResponse = await response.json();
                
// //                 if (data.items.length === 0) {
// //                     return;
// //                 }

// //                 const currentPost = data.items[0];
// //                 setPost(currentPost);

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

// //         fetchPost();
// //     }, [params.slug]);

// //     const renderRichText = (nodes: RichTextNode[]): JSX.Element[] => {
// //         return nodes.map((node, index) => {
// //             switch (node.nodeType) {
// //                 case 'paragraph':
// //                     return (
// //                         <p key={index} className="mb-6 text-gray-700 dark:text-gray-300 leading-relaxed">
// //                             {node.content?.map((content, i) => renderRichText([content])[0])}
// //                         </p>
// //                     );
// //                 case 'heading-1':
// //                     return (
// //                         <h1 key={index} className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
// //                             {node.content?.map((content, i) => renderRichText([content])[0])}
// //                         </h1>
// //                     );
// //                 case 'heading-2':
// //                     return (
// //                         <h2 key={index} className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
// //                             {node.content?.map((content, i) => renderRichText([content])[0])}
// //                         </h2>
// //                     );
// //                 case 'text':
// //                     if (node.marks && node.marks.length > 0) {
// //                         return node.marks.reduce((text, mark) => {
// //                             switch (mark.type) {
// //                                 case 'bold':
// //                                     return <strong key={index}>{text}</strong>;
// //                                 case 'italic':
// //                                     return <em key={index}>{text}</em>;
// //                                 case 'underline':
// //                                     return <u key={index}>{text}</u>;
// //                                 case 'code':
// //                                     return (
// //                                         <code key={index} className="bg-gray-100 dark:bg-gray-800 rounded px-2 py-1">
// //                                             {text}
// //                                         </code>
// //                                     );
// //                                 default:
// //                                     return text;
// //                             }
// //                         }, <>{node.value}</>);
// //                     }
// //                     return <>{node.value}</>;
// //                 default:
// //                     return <>{node.value}</>;
// //             }
// //         });
// //     };

// //     const sharePost = async (platform: 'twitter' | 'linkedin' | 'facebook' | 'copy') => {
// //         const url = window.location.href;
// //         const title = post?.fields.title || '';
// //         const encodedUrl = encodeURIComponent(url);
// //         const encodedTitle = encodeURIComponent(title);

// //         const shareUrls = {
// //             twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
// //             linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
// //             facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
// //         };

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

// //         window.open(shareUrls[platform], '_blank');
// //     };

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

// //     if (!post) {
// //         return (
// //             <>
// //                 <Navbar />
// //                 <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
// //                     <div className="text-center">
// //                         <p className="text-xl mb-4">Post no encontrado</p>
// //                         <button
// //                             onClick={() => router.push('/blog')}
// //                             className="text-blue-600 hover:underline flex items-center gap-2 justify-center"
// //                         >
// //                             <ArrowLeft size={20} />
// //                             Volver al blog
// //                         </button>
// //                     </div>
// //                 </div>
// //                 <Footer />
// //             </>
// //         );
// //     }

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

// //             <main className="min-h-screen bg-gray-50 dark:bg-gray-900">
// //                 <article className="max-w-4xl mx-auto px-4 pt-20 pb-12">
// //                     {/* Title and Meta */}
// //                     <div className="mb-8">
// //                         <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
// //                             {post.fields.title}
// //                         </h1>
                        
// //                         <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-6">
// //                             <span className="flex items-center gap-2">
// //                                 <Calendar className="w-4 h-4" />
// //                                 {new Date(post.sys.createdAt).toLocaleDateString('es-ES', {
// //                                     year: 'numeric',
// //                                     month: 'long',
// //                                     day: 'numeric'
// //                                 })}
// //                             </span>
// //                             {post.fields.readTime && (
// //                                 <span>· {post.fields.readTime} min de lectura</span>
// //                             )}
// //                         </div>

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

// //                     {/* Featured Image */}
// //                     {imageUrl && (
// //                         <div className="mb-8 rounded-lg overflow-hidden shadow-lg">
// //                             <div className="relative aspect-[16/9]">
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

// //                     {/* Content */}
// //                     <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
// //                         {renderRichText(post.fields.body.content)}
// //                     </div>

// //                     {/* Share Buttons */}
// //                     <div className="border-t dark:border-gray-800 pt-8">
// //                         <div className="flex flex-wrap items-center gap-4">
// //                             <span className="text-gray-600 dark:text-gray-400">
// //                                 Compartir artículo:
// //                             </span>
// //                             <div className="flex gap-3">
// //                                 <button
// //                                     onClick={() => sharePost('twitter')}
// //                                     className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 
// //                                              dark:hover:bg-gray-700 transition-colors"
// //                                     aria-label="Compartir en Twitter"
// //                                 >
// //                                     <Twitter className="w-5 h-5 text-gray-600 dark:text-gray-400" />
// //                                 </button>
// //                                 <button
// //                                     onClick={() => sharePost('linkedin')}
// //                                     className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 
// //                                              dark:hover:bg-gray-700 transition-colors"
// //                                     aria-label="Compartir en LinkedIn"
// //                                 >
// //                                     <Linkedin className="w-5 h-5 text-gray-600 dark:text-gray-400" />
// //                                 </button>
// //                                 <button
// //                                     onClick={() => sharePost('facebook')}
// //                                     className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 
// //                                              dark:hover:bg-gray-700 transition-colors"
// //                                     aria-label="Compartir en Facebook"
// //                                 >
// //                                     <Facebook className="w-5 h-5 text-gray-600 dark:text-gray-400" />
// //                                 </button>
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
// // app/blog/[slug]/page.tsx
// 'use client';

// import React, { useState, useEffect } from 'react';
// import { useRouter } from 'next/navigation';
// import Image from 'next/image';
// import { motion } from 'framer-motion';
// import { Loader2, Calendar, ArrowLeft, Twitter, Linkedin, Facebook, Link, Tag } from 'lucide-react';
// import Navbar from '@/components/layout/Navbar';
// import Footer from '@/components/layout/Footer';

// interface Asset {
//     sys: {
//         id: string;
//     };
//     fields: {
//         file: {
//             url: string;
//             details: {
//                 image?: {
//                     width: number;
//                     height: number;
//                 };
//             };
//         };
//     };
// }

// interface ContentfulResponse {
//     items: BlogPost[];
//     includes?: {
//         Asset?: Asset[];
//     };
// }

// interface BlogPost {
//     sys: {
//         id: string;
//         createdAt: string;
//     };
//     fields: {
//         title: string;
//         slug: string;
//         body: {
//             content: RichTextNode[];
//         };
//         image?: {
//             sys: {
//                 id: string;
//             };
//         };
//         tags?: string[];
//         readTime?: number;
//     };
// }

// interface RichTextNode {
//     nodeType: string;
//     content?: RichTextNode[];
//     value?: string;
//     data?: {
//         uri?: string;
//     };
//     marks?: Array<{
//         type: string;
//     }>;
//     key?: string; // Añadimos key como propiedad opcional
// }

// export default function BlogPostPage({ params }: { params: { slug: string } }) {
//     const router = useRouter();
//     const [post, setPost] = useState<BlogPost | null>(null);
//     const [imageUrl, setImageUrl] = useState<string | null>(null);
//     const [isLoading, setIsLoading] = useState(true);
//     const [readingProgress, setReadingProgress] = useState(0);
//     const [showShareTooltip, setShowShareTooltip] = useState(false);

//     useEffect(() => {
//         const updateReadingProgress = () => {
//             const currentPosition = window.scrollY;
//             const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
//             const progress = (currentPosition / scrollHeight) * 100;
//             setReadingProgress(progress);
//         };

//         window.addEventListener('scroll', updateReadingProgress);
//         return () => window.removeEventListener('scroll', updateReadingProgress);
//     }, []);

//     useEffect(() => {
//         const fetchPost = async () => {
//             if (!params.slug) return;
            
//             try {
//                 const response = await fetch(
//                     `https://cdn.contentful.com/spaces/sfme6nh4wom2/environments/master/entries?content_type=blogPage&fields.slug=${params.slug}&include=10&access_token=jn7dH3bS0f5p6ypvIHavVJTRpfigF6QY9R1jOyHv7A4`
//                 );
                
//                 if (!response.ok) {
//                     throw new Error('Error al cargar el post');
//                 }

//                 const data: ContentfulResponse = await response.json();
                
//                 if (data.items.length === 0) {
//                     return;
//                 }

//                 const currentPost = data.items[0];
//                 setPost(currentPost);

//                 if (currentPost.fields.image && data.includes?.Asset) {
//                     const imageAsset = data.includes.Asset.find(
//                         asset => asset.sys.id === currentPost.fields.image?.sys.id
//                     );
//                     if (imageAsset) {
//                         setImageUrl(imageAsset.fields.file.url);
//                     }
//                 }
//             } catch (error) {
//                 console.error('Error fetching post:', error);
//             } finally {
//                 setIsLoading(false);
//             }
//         };

//         fetchPost();
//     }, [params.slug]);

//     // Función mejorada para renderizar el contenido rico con keys únicas
//     const renderRichText = (nodes: RichTextNode[], parentIndex: string = ''): JSX.Element[] => {
//         return nodes.map((node, index) => {
//             const uniqueKey = `${parentIndex}-${index}`;

//             switch (node.nodeType) {
//                 case 'paragraph':
//                     return (
//                         <p key={uniqueKey} className="mb-6 text-gray-700 dark:text-gray-300 leading-relaxed">
//                             {node.content?.map((content, i) => renderRichText([content], uniqueKey)[0])}
//                         </p>
//                     );
//                 case 'heading-1':
//                     return (
//                         <h1 key={uniqueKey} className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
//                             {node.content?.map((content, i) => renderRichText([content], uniqueKey)[0])}
//                         </h1>
//                     );
//                 case 'heading-2':
//                     return (
//                         <h2 key={uniqueKey} className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
//                             {node.content?.map((content, i) => renderRichText([content], uniqueKey)[0])}
//                         </h2>
//                     );
//                 case 'text':
//                     if (node.marks && node.marks.length > 0) {
//                         return node.marks.reduce((text, mark, i) => {
//                             const markKey = `${uniqueKey}-mark-${i}`;
//                             switch (mark.type) {
//                                 case 'bold':
//                                     return <strong key={markKey}>{text}</strong>;
//                                 case 'italic':
//                                     return <em key={markKey}>{text}</em>;
//                                 case 'underline':
//                                     return <u key={markKey}>{text}</u>;
//                                 case 'code':
//                                     return (
//                                         <code key={markKey} className="bg-gray-100 dark:bg-gray-800 rounded px-2 py-1">
//                                             {text}
//                                         </code>
//                                     );
//                                 default:
//                                     return text;
//                             }
//                         }, <React.Fragment key={uniqueKey}>{node.value}</React.Fragment>);
//                     }
//                     return <React.Fragment key={uniqueKey}>{node.value}</React.Fragment>;
//                 default:
//                     return <React.Fragment key={uniqueKey}>{node.value}</React.Fragment>;
//             }
//         });
//     };

//     const sharePost = async (platform: 'twitter' | 'linkedin' | 'facebook' | 'copy') => {
//         const url = window.location.href;
//         const title = post?.fields.title || '';
//         const encodedUrl = encodeURIComponent(url);
//         const encodedTitle = encodeURIComponent(title);

//         const shareUrls = {
//             twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
//             linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
//             facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
//         };

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

//         window.open(shareUrls[platform], '_blank');
//     };

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

//     return (
//         <>
//             <Navbar />
//             {/* Reading Progress Bar */}
//             <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 dark:bg-gray-700 z-50">
//                 <div
//                     className="h-full bg-blue-600 dark:bg-blue-400 transition-all duration-150"
//                     style={{ width: `${readingProgress}%` }}
//                 />
//             </div>

//             <main className="min-h-screen bg-gray-50 dark:bg-gray-900">
//                 <article className="max-w-4xl mx-auto px-4 pt-20 pb-12">
//                     {/* Title and Meta */}
//                     <div className="mb-8">
//                         <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
//                             {post.fields.title}
//                         </h1>
                        
//                         <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-6">
//                             <span className="flex items-center gap-2">
//                                 <Calendar className="w-4 h-4" />
//                                 {new Date(post.sys.createdAt).toLocaleDateString('es-ES', {
//                                     year: 'numeric',
//                                     month: 'long',
//                                     day: 'numeric'
//                                 })}
//                             </span>
//                         </div>

//                         {/* Tags */}
//                         {post.fields.tags && (
//                             <div className="flex flex-wrap gap-2 mb-6">
//                                 {post.fields.tags.map((tag) => (
//                                     <span
//                                         key={tag}
//                                         className="flex items-center gap-1 px-3 py-1 bg-blue-100 dark:bg-blue-900 
//                                                  text-blue-800 dark:text-blue-200 rounded-full text-sm"
//                                     >
//                                         <Tag className="w-3 h-3" />
//                                         {tag}
//                                     </span>
//                                 ))}
//                             </div>
//                         )}
//                     </div>

//                     {/* Featured Image */}
//                     {imageUrl && (
//                         <div className="mb-8 rounded-lg overflow-hidden shadow-lg">
//                             <div className="relative h-96">
//                                 <Image
//                                     src={`https:${imageUrl}`}
//                                     alt={post.fields.title}
//                                     fill
//                                     className="object-contain"
//                                     priority
//                                 />
//                             </div>
//                         </div>
//                     )}

//                     {/* Content */}
//                     <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
//                         {renderRichText(post.fields.body.content)}
//                     </div>

//                     {/* Share Buttons */}
//                     <div className="border-t dark:border-gray-800 pt-8">
//                         <div className="flex flex-wrap items-center gap-4">
//                             <span className="text-gray-600 dark:text-gray-400">
//                                 Compartir artículo:
//                             </span>
//                             <div className="flex gap-3">
//                                 {['twitter', 'linkedin', 'facebook'].map((platform) => (
//                                     <button
//                                         key={platform}
//                                         onClick={() => sharePost(platform as 'twitter' | 'linkedin' | 'facebook')}
//                                         className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 
//                                                  dark:hover:bg-gray-700 transition-colors"
//                                         aria-label={`Compartir en ${platform}`}
//                                     >
//                                         {platform === 'twitter' && <Twitter className="w-5 h-5 text-gray-600 dark:text-gray-400" />}
//                                         {platform === 'linkedin' && <Linkedin className="w-5 h-5 text-gray-600 dark:text-gray-400" />}
//                                         {platform === 'facebook' && <Facebook className="w-5 h-5 text-gray-600 dark:text-gray-400" />}
//                                     </button>
//                                 ))}
//                                 <div className="relative">
//                                     <button
//                                         onClick={() => sharePost('copy')}
//                                         className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 
//                                                  dark:hover:bg-gray-700 transition-colors"
//                                         aria-label="Copiar enlace"
//                                     >
//                                         <Link className="w-5 h-5 text-gray-600 dark:text-gray-400" />
//                                     </button>
//                                     {showShareTooltip && (
//                                         <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 
//                                                       px-3 py-1 bg-gray-900 text-white text-sm rounded shadow-lg">
//                                             ¡Enlace copiado!
//                                         </div>
//                                     )}
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                     {/* Back Button */}
//                     <div className="mt-12">
//                         <button
//                             onClick={() => router.push('/blog')}
//                             className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline"
//                         >
//                             <ArrowLeft className="w-5 h-5" />
//                             Volver al blog
//                         </button>
//                     </div>
//                 </article>
//             </main>
//             <Footer />
//         </>
//     );
// }


// app/blog/[slug]/page.tsx

// 'use client';

// import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react';
// import { useRouter } from 'next/navigation';
// import Image from 'next/image';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Loader2, Calendar, ArrowLeft, Twitter, Linkedin, Facebook, Link, Tag, Copy, Check } from 'lucide-react';
// import Navbar from '@/components/layout/Navbar';
// import Footer from '@/components/layout/Footer';

// interface Asset {
//     sys: { id: string; };
//     fields: {
//         file: {
//             url: string;
//             details: { image?: { width: number; height: number; }; };
//         };
//     };
// }

// interface ContentfulResponse {
//     items: BlogPost[];
//     includes?: { Asset?: Asset[]; };
// }

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

// interface RichTextNode {
//     nodeType: string;
//     content?: RichTextNode[];
//     value?: string;
//     data?: { uri?: string; };
//     marks?: Array<{ type: string; }>;
// }

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

//     // Optimizado manejo de scroll
//     const updateReadingProgress = useCallback(() => {
//         const currentPosition = window.scrollY;
//         const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        
//         if (scrollHeight > 0) {
//             const progress = Math.min(100, Math.max(0, (currentPosition / scrollHeight) * 100));
//             if (Math.abs(progress - readingProgress) > 1) {
//                 setReadingProgress(progress);
//             }
//         }
//     }, [readingProgress]);

//     useEffect(() => {
//         const handleScroll = () => {
//             lastScrollPosition.current = window.scrollY;
            
//             if (!ticking.current) {
//                 window.requestAnimationFrame(() => {
//                     updateReadingProgress();
//                     ticking.current = false;
//                 });
//                 ticking.current = true;
//             }
//         };

//         window.addEventListener('scroll', handleScroll, { passive: true });
//         return () => window.removeEventListener('scroll', handleScroll);
//     }, [updateReadingProgress]);

//     useEffect(() => {
//         const controller = new AbortController();

//         const fetchPost = async () => {
//             if (!params.slug) return;
            
//             try {
//                 const response = await fetch(
//                     `https://cdn.contentful.com/spaces/sfme6nh4wom2/environments/master/entries?content_type=blogPage&fields.slug=${params.slug}&include=10&access_token=jn7dH3bS0f5p6ypvIHavVJTRpfigF6QY9R1jOyHv7A4`,
//                     { signal: controller.signal }
//                 );
                
//                 if (!response.ok) throw new Error('Error al cargar el post');

//                 const data: ContentfulResponse = await response.json();
//                 if (data.items.length === 0) return;

//                 const currentPost = data.items[0];
//                 setPost(currentPost);

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

//         fetchPost();
//         return () => controller.abort();
//     }, [params.slug]);

//     const handleCodeCopy = useCallback(async (code: string) => {
//         try {
//             await navigator.clipboard.writeText(code);
//             setCopiedCode(code);
//             setTimeout(() => setCopiedCode(null), 2000);
//         } catch (err) {
//             console.error('Error copying code:', err);
//         }
//     }, []);

//     const renderRichText = useCallback((nodes: RichTextNode[]): React.ReactNode => {
//         return nodes.map((node, index) => {
//             const key = `node-${index}`;

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

//     const sharePost = useCallback(async (platform: 'twitter' | 'linkedin' | 'facebook' | 'copy') => {
//         const url = window.location.href;
//         const title = post?.fields.title || '';
//         const encodedUrl = encodeURIComponent(url);
//         const encodedTitle = encodeURIComponent(title);

//         const shareUrls = {
//             twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
//             linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
//             facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
//         };

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

//         window.open(shareUrls[platform], '_blank', 'noopener,noreferrer');
//     }, [post?.fields.title]);

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

//             <main className="min-h-screen bg-gray-50 dark:bg-gray-900">
//                 <div className="max-w-7xl mx-auto px-4 py-12 flex">
//                     {/* Main Content */}
//                     <article className="flex-1 max-w-4xl">
//                         <header className="mb-8">
//                             <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
//                                 {post.fields.title}
//                             </h1>
                            
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

//                         <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
//                             {renderRichText(post.fields.body.content)}
//                         </div>

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

//                         {/* Share Buttons */}
//                         <div className="border-t dark:border-gray-800 pt-8">


















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

import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Loader2, Calendar, ArrowLeft, Twitter, Linkedin, Facebook, Link, Tag, Copy, Check } from 'lucide-react';
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






















export default function BlogPostPage({ params }: { params: { slug: string } }) {
    const router = useRouter();
    const [post, setPost] = useState<BlogPost | null>(null);
    const [imageUrl, setImageUrl] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [readingProgress, setReadingProgress] = useState(0);
    const [showShareTooltip, setShowShareTooltip] = useState(false);
    const [copiedCode, setCopiedCode] = useState<string | null>(null);
    const lastScrollPosition = useRef(0);
    const ticking = useRef(false);

    // Optimizado manejo de scroll
    const updateReadingProgress = useCallback(() => {
        const currentPosition = window.scrollY;
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        
        if (scrollHeight > 0) {
            const progress = Math.min(100, Math.max(0, (currentPosition / scrollHeight) * 100));
            if (Math.abs(progress - readingProgress) > 1) {
                setReadingProgress(progress);
            }
        }
    }, [readingProgress]);

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
                        <p key={key} className="mb-6 text-gray-700 dark:text-gray-300 leading-relaxed">
                            {node.content?.map((content, i) => (
                                <React.Fragment key={`${key}-content-${i}`}>
                                    {renderRichText([content])}
                                </React.Fragment>
                            ))}
                        </p>
                    );
                case 'code-block':
                    const code = node.content?.[0]?.value || '';
                    const isCopied = code === copiedCode;
                    return (
                        <div key={key} className="relative group">
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
                                    <Check className="w-4 h-4 text-green-400" />
                                ) : (
                                    <Copy className="w-4 h-4 text-gray-400" />
                                )}
                            </button>
                        </div>
                    );
                case 'heading-1':
                    return (
                        <h1 key={key} className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                            {node.content?.map((content, i) => (
                                <React.Fragment key={`${key}-content-${i}`}>
                                    {renderRichText([content])}
                                </React.Fragment>
                            ))}
                        </h1>
                    );
                case 'heading-2':
                    return (
                        <h2 key={key} className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                            {node.content?.map((content, i) => (
                                <React.Fragment key={`${key}-content-${i}`}>
                                    {renderRichText([content])}
                                </React.Fragment>
                            ))}
                        </h2>
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
            <>
                <Navbar />
                <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
                    <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
                </div>
                <Footer />
            </>
        );
    }

    if (!post) {
        return (
            <>
                <Navbar />
                <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
                    <div className="text-center">
                        <p className="text-xl mb-4">Post no encontrado</p>
                        <button
                            onClick={() => router.push('/blog')}
                            className="flex items-center gap-2 text-blue-600 hover:underline mx-auto"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            Volver al blog
                        </button>
                    </div>
                </div>
                <Footer />
            </>
        );
    }

    return (
        <>
            <Navbar />
            <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 dark:bg-gray-700 z-50">
                <motion.div
                    className="h-full bg-blue-600 dark:bg-blue-400"
                    style={{ width: `${readingProgress}%` }}
                    transition={{ duration: 0.1 }}
                />
            </div>

            <main className="min-h-screen bg-gray-50 dark:bg-gray-900">
                <div className="max-w-7xl mx-auto px-4 py-12 flex">
                    {/* Main Content */}
                    <article className="flex-1 max-w-4xl">
                        <header className="mb-8">
                            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                                {post.fields.title}
                            </h1>
                            
                            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-6">
                                <span className="flex items-center gap-2">
                                    <Calendar className="w-4 h-4" />
                                    {new Date(post.sys.createdAt).toLocaleDateString('es-ES', {
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric'
                                    })}
                                </span>
                                {post.fields.readTime && (
                                    <span>· {post.fields.readTime} min de lectura</span>
                                )}
                            </div>

                            {post.fields.tags && (
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {post.fields.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="flex items-center gap-1 px-3 py-1 bg-blue-100 
                                                     dark:bg-blue-900 text-blue-800 dark:text-blue-200 
                                                     rounded-full text-sm"
                                        >
                                            <Tag className="w-3 h-3" />
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            )}
                        </header>

                        {imageUrl && (
                            <div className="mb-8 rounded-lg overflow-hidden">
                                <div className="relative h-96">
                                    <Image
                                        src={`https:${imageUrl}`}
                                        alt={post.fields.title}
                                        fill
                                        className="object-contain"
                                        priority
                                    />
                                </div>
                            </div>
                        )}

                        <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
                            {renderRichText(post.fields.body.content)}
                        </div>

                        {/* CTA Section */}
                        <div className="my-12 p-6 bg-blue-50 dark:bg-blue-900 rounded-xl shadow-sm">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                                ¿Quieres aprender más sobre desarrollo web?
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-6">
                                Suscríbete a nuestro newsletter para recibir tutoriales, noticias y recursos 
                                exclusivos directamente en tu bandeja de entrada.
                            </p>
                            <form className="flex gap-4" onSubmit={(e) => e.preventDefault()}>
                                <input
                                    type="email"
                                    placeholder="Tu correo electrónico"
                                    className="flex-1 px-4 py-2 rounded-lg border border-gray-300 
                                             dark:border-gray-600 focus:ring-2 focus:ring-blue-500 
                                             dark:bg-gray-800 dark:text-white"
                                />
                                <button
                                    type="submit"
                                    className="px-6 py-2 bg-blue-600 text-white rounded-lg 
                                             hover:bg-blue-700 transition-colors"
                                >
                                    Suscribirse
                                </button>
                            </form>
                        </div>

                        {/* Share Buttons */}
                        <div className="border-t dark:border-gray-800 pt-8">


















                        <div className="flex flex-wrap items-center gap-4">
                                <span className="text-gray-600 dark:text-gray-400">
                                    Compartir artículo:
                                </span>
                                <div className="flex gap-3">
                                    {[
                                        { platform: 'twitter', icon: Twitter },
                                        { platform: 'linkedin', icon: Linkedin },
                                        { platform: 'facebook', icon: Facebook }
                                    ].map(({ platform, icon: Icon }) => (
                                        <button
                                            key={platform}
                                            onClick={() => sharePost(platform as 'twitter' | 'linkedin' | 'facebook')}
                                            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 
                                                     hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                                            aria-label={`Compartir en ${platform}`}
                                        >
                                            <Icon className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                                        </button>
                                    ))}
                                    <div className="relative">
                                        <button
                                            onClick={() => sharePost('copy')}
                                            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 
                                                     hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                                            aria-label="Copiar enlace"
                                        >
                                            <Link className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                                        </button>
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
                        </div>
                    </article>

                    {/* Sidebar CTA (fixed position) */}
                    <aside className="hidden xl:block w-80 ml-8">
                        <div className="sticky top-24">
                            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
                                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                                    📚 Recursos Gratuitos
                                </h4>
                                <p className="text-gray-600 dark:text-gray-400 mb-6">
                                    Descarga nuestra guía completa sobre desarrollo web y mejores prácticas.
                                </p>
                                <button
                                    onClick={() => {}} // Implementar lógica de descarga
                                    className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg 
                                             hover:bg-blue-700 transition-colors text-center"
                                >
                                    Descargar Guía
                                </button>
                            </div>

                            <div className="mt-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
                                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                                    💡 Tips Semanales
                                </h4>
                                <p className="text-gray-600 dark:text-gray-400 mb-6">
                                    Recibe consejos y trucos de desarrollo directamente en tu correo.
                                </p>
                                <form onSubmit={(e) => e.preventDefault()}>
                                    <input
                                        type="email"
                                        placeholder="Tu email"
                                        className="w-full px-4 py-2 mb-4 rounded-lg border border-gray-300 
                                                 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                                    />
                                    <button
                                        type="submit"
                                        className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg 
                                                 hover:bg-blue-700 transition-colors"
                                    >
                                        Suscribirse
                                    </button>
                                </form>
                            </div>
                        </div>
                    </aside>
                </div>

                {/* Back to Blog Button */}
                <div className="max-w-4xl mx-auto px-4 mb-12">
                    <button
                        onClick={() => router.push('/blog')}
                        className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline"
                    >
                        <ArrowLeft className="w-5 h-5" />
                        Volver al blog
                    </button>
                </div>
            </main>
            <Footer />
        </>
    );
}