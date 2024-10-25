// // // // // src/app/blog/[slug]/page.tsx
// // // // import Navbar from '@/components/layout/Navbar';
// // // // import Footer from '@/components/layout/Footer';
// // // // import { getPostBySlug, getAllPosts } from '@/lib/contentful';
// // // //
// // // // // Generamos los parámetros estáticamente
// // // // export function generateStaticParams() {
// // // //     const posts = await getAllPosts();
// // // //     return posts.map((post) => ({
// // // //         slug: post.sys.id,
// // // //     }));
// // // // }
// // // //
// // // // interface PageProps {
// // // //     params: Promise<{
// // // //         slug: string;
// // // //     }>;
// // // // }
// // // //
// // // // export default async function BlogPost({ params }: PageProps) {
// // // //     // Obtener el slug de manera asíncrona
// // // //     const { slug } = await params;
// // // //     const post = await getPostBySlug(slug);
// // // //
// // // //     if (!post) {
// // // //         return (
// // // //             <>
// // // //                 <Navbar />
// // // //                 <main className="min-h-screen bg-white dark:bg-gray-900">
// // // //                     <div className="flex items-center justify-center min-h-screen">
// // // //                         <div className="text-gray-900 dark:text-white">Post no encontrado</div>
// // // //                     </div>
// // // //                 </main>
// // // //                 <Footer />
// // // //             </>
// // // //         );
// // // //     }
// // // //
// // // //     return (
// // // //         <>
// // // //             <Navbar />
// // // //             <main className="min-h-screen bg-white dark:bg-gray-900">
// // // //                 <article className="max-w-4xl mx-auto px-6 py-20">
// // // //                     <h1 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">
// // // //                         {post.fields.title}
// // // //                     </h1>
// // // //                     <div className="prose dark:prose-invert max-w-none">
// // // //                         {post.fields.body.content.map((block: any, index: number) => {
// // // //                             if (block.nodeType === 'paragraph') {
// // // //                                 return (
// // // //                                     <p key={index} className="mb-4 text-gray-600 dark:text-gray-400">
// // // //                                         {block.content[0]?.value}
// // // //                                     </p>
// // // //                                 );
// // // //                             }
// // // //                             if (block.nodeType === 'heading-2') {
// // // //                                 return (
// // // //                                     <h2 key={index} className="text-2xl font-bold my-6 text-gray-900 dark:text-white">
// // // //                                         {block.content[0]?.value}
// // // //                                     </h2>
// // // //                                 );
// // // //                             }
// // // //                             if (block.nodeType === 'unordered-list') {
// // // //                                 return (
// // // //                                     <ul key={index} className="list-disc pl-6 mb-4 text-gray-600 dark:text-gray-400">
// // // //                                         {block.content.map((item: any, itemIndex: number) => (
// // // //                                             <li key={itemIndex}>
// // // //                                                 {item.content[0].content[0]?.value}
// // // //                                             </li>
// // // //                                         ))}
// // // //                                     </ul>
// // // //                                 );
// // // //                             }
// // // //                             return null;
// // // //                         })}
// // // //                     </div>
// // // //                 </article>
// // // //             </main>
// // // //             <Footer />
// // // //         </>
// // // //     );
// // // // }
// // // //
// // // // export async function generateMetadata({ params }: PageProps) {
// // // //     const { slug } = await params;
// // // //     const post = await getPostBySlug(slug);
// // // //
// // // //     return {
// // // //         title: post?.fields.title || 'Blog Post',
// // // //         description: post?.fields.body.content[0]?.content[0]?.value.substring(0, 160),
// // // //     };
// // // // }
// // //
// // // import Navbar from '@/components/layout/Navbar';
// // // import Footer from '@/components/layout/Footer';
// // //
// // // interface PageProps {
// // //     params: { slug: string }
// // // }
// // //
// // // export default async function BlogPost({ params }: PageProps) {
// // //     const post = await getPostBySlug(params.slug);
// // //
// // //     function renderContent(block: any, index: number) {
// // //         if (block.nodeType === 'paragraph') {
// // //             return (
// // //                 <p key={index} className="mb-4 text-gray-600 dark:text-gray-400">
// // //                     {block.content[0]?.value}
// // //                 </p>
// // //             );
// // //         }
// // //
// // //         if (block.nodeType === 'heading-2') {
// // //             return (
// // //                 <h2 key={index} className="text-2xl font-bold my-6 text-gray-900 dark:text-white">
// // //                     {block.content[0]?.value}
// // //                 </h2>
// // //             );
// // //         }
// // //
// // //         if (block.nodeType === 'unordered-list') {
// // //             return (
// // //                 <ul key={index} className="list-disc pl-6 mb-4 text-gray-600 dark:text-gray-400">
// // //                     {block.content.map((item: any, itemIndex: number) => (
// // //                         <li key={itemIndex}>{item.content[0].content[0]?.value}</li>
// // //                     ))}
// // //                 </ul>
// // //             );
// // //         }
// // //
// // //         return null;
// // //     }
// // //
// // //     if (!post) {
// // //         return (
// // //             <>
// // //                 <Navbar />
// // //                 <main className="min-h-screen bg-white dark:bg-gray-900">
// // //                     <div className="flex items-center justify-center min-h-screen">
// // //                         <div className="text-gray-900 dark:text-white">Post no encontrado</div>
// // //                     </div>
// // //                 </main>
// // //                 <Footer />
// // //             </>
// // //         );
// // //     }
// // //
// // //     return (
// // //         <>
// // //             <Navbar />
// // //             <main className="min-h-screen bg-white dark:bg-gray-900">
// // //                 <article className="max-w-4xl mx-auto px-6 py-20">
// // //                     <h1 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">
// // //                         {post.fields.title}
// // //                     </h1>
// // //                     <div className="prose dark:prose-invert max-w-none">
// // //                         {/*{post.fields.body.content.map((block, index) => renderContent(block, index))}*/}
// // //                     </div>
// // //                 </article>
// // //             </main>
// // //             <Footer />
// // //         </>
// // //     );
// // // }
// //
// // // src/app/blog/[slug]/page.tsx
// // import { getBlogPostById, getRelatedPosts } from '@/lib/contentful';
// // import { notFound } from 'next/navigation';
// // import Image from 'next/image';
// // import Link from 'next/link';
// // import { ArrowLeft, Calendar, User, Tag } from 'lucide-react';
// //
// // interface ContentfulImage {
// //     fields?: {
// //         file: {
// //             url: string;
// //         };
// //         title?: string;
// //     };
// // }
// //
// // interface ContentfulAuthor {
// //     fields?: {
// //         title?: string;
// //     };
// // }
// //
// // interface BlogPost {
// //     sys: {
// //         id: string;
// //         createdAt: string;
// //     };
// //     fields: {
// //         title: string;
// //         body: {
// //             content: Array<{
// //                 nodeType: string;
// //                 content: Array<{
// //                     value: string;
// //                     nodeType: string;
// //                 }>;
// //                 data?: any;
// //             }>;
// //         };
// //         image?: ContentfulImage;
// //         featuredImageAltText?: string;
// //         categories?: string[];
// //         tags?: string[];
// //         authorInfo?: ContentfulAuthor;
// //     };
// // }
// //
// // interface Props {
// //     params: {
// //         slug: string;
// //     };
// // }
// //
// // // Generamos los metadatos dinámicamente
// // export async function generateMetadata({ params }: Props) {
// //     const post = await getBlogPostById(params.slug);
// //
// //     if (!post) return { title: 'Post no encontrado' };
// //
// //     const description = post.fields.body.content[0].content[0].value.slice(0, 160) + '...';
// //     const imageUrl = post.fields.image?.fields?.file?.url
// //         ? `https:${post.fields.image.fields.file.url}`
// //         : null;
// //
// //     return {
// //         title: `${post.fields.title} - roggrt.dev`,
// //         description,
// //         openGraph: {
// //             title: post.fields.title,
// //             description,
// //             ...(imageUrl && { images: [imageUrl] }),
// //         },
// //     };
// // }
// //
// // export default async function BlogPostPage({ params }: Props) {
// //     const post = await getBlogPostById(params.slug);
// //
// //     if (!post) {
// //         notFound();
// //     }
// //
// //     // Función para renderizar el contenido Rich Text de Contentful
// //     const renderContent = (content: any) => {
// //         if (!content) return null;
// //
// //         return content.content.map((item: any, index: number) => {
// //             switch (item.nodeType) {
// //                 case 'paragraph':
// //                     return (
// //                         <p key={index} className="mb-6 text-gray-700 dark:text-gray-300">
// //                             {item.content[0]?.value || ''}
// //                         </p>
// //                     );
// //                 case 'heading-1':
// //                     return (
// //                         <h1 key={index} className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
// //                             {item.content[0]?.value || ''}
// //                         </h1>
// //                     );
// //                 case 'heading-2':
// //                     return (
// //                         <h2 key={index} className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
// //                             {item.content[0]?.value || ''}
// //                         </h2>
// //                     );
// //                 case 'heading-3':
// //                     return (
// //                         <h3 key={index} className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
// //                             {item.content[0]?.value || ''}
// //                         </h3>
// //                     );
// //                 case 'unordered-list':
// //                     return (
// //                         <ul key={index} className="list-disc list-inside mb-6 text-gray-700 dark:text-gray-300">
// //                             {item.content.map((listItem: any, listIndex: number) => (
// //                                 <li key={listIndex}>{listItem.content[0].content[0]?.value || ''}</li>
// //                             ))}
// //                         </ul>
// //                     );
// //                 case 'ordered-list':
// //                     return (
// //                         <ol key={index} className="list-decimal list-inside mb-6 text-gray-700 dark:text-gray-300">
// //                             {item.content.map((listItem: any, listIndex: number) => (
// //                                 <li key={listIndex}>{listItem.content[0].content[0]?.value || ''}</li>
// //                             ))}
// //                         </ol>
// //                     );
// //                 default:
// //                     return null;
// //             }
// //         });
// //     };
// //
// //     const imageUrl = post.fields.image?.fields?.file?.url
// //         ? `https:${post.fields.image.fields.file.url}`
// //         : null;
// //
// //     const formattedDate = new Date(post.sys.createdAt).toLocaleDateString('es-ES', {
// //         year: 'numeric',
// //         month: 'long',
// //         day: 'numeric'
// //     });
// //
// //     return (
// //         <article className="min-h-screen pt-24 px-6 pb-12">
// //             <div className="max-w-4xl mx-auto">
// //                 {/* Navegación superior */}
// //                 <Link
// //                     href="/blog"
// //                     className="inline-flex items-center text-sm text-gray-600 dark:text-gray-400 hover:text-accent-red dark:hover:text-accent-yellow mb-8 transition-colors group"
// //                 >
// //                     <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
// //                     Volver al blog
// //                 </Link>
// //
// //                 {/* Encabezado */}
// //                 <header className="mb-8">
// //                     {post.fields.categories && post.fields.categories.length > 0 && (
// //                         <div className="flex flex-wrap gap-2 mb-4">
// //                             {post.fields.categories.map((category) => (
// //                                 <span
// //                                     key={category}
// //                                     className="px-3 py-1 rounded-full text-sm bg-red-50 dark:bg-yellow-900/20 text-accent-red dark:text-accent-yellow"
// //                                 >
// //                                     {category}
// //                                 </span>
// //                             ))}
// //                         </div>
// //                     )}
// //
// //                     <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
// //                         {post.fields.title}
// //                     </h1>
// //
// //                     <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
// //                         <div className="flex items-center gap-2">
// //                             <Calendar className="w-4 h-4" />
// //                             <time dateTime={post.sys.createdAt}>{formattedDate}</time>
// //                         </div>
// //                         {post.fields.authorInfo?.fields?.title && (
// //                             <div className="flex items-center gap-2">
// //                                 <User className="w-4 h-4" />
// //                                 <span>{post.fields.authorInfo.fields.title}</span>
// //                             </div>
// //                         )}
// //                     </div>
// //                 </header>
// //
// //                 {/* Imagen destacada */}
// //                 {imageUrl && (
// //                     <div className="relative aspect-video w-full mb-8 rounded-lg overflow-hidden">
// //                         <Image
// //                             src={imageUrl}
// //                             alt={post.fields.featuredImageAltText || post.fields.title}
// //                             fill
// //                             className="object-cover"
// //                             priority
// //                         />
// //                     </div>
// //                 )}
// //
// //                 {/* Contenido */}
// //                 <div className="prose prose-lg dark:prose-invert max-w-none">
// //                     {renderContent(post.fields.body)}
// //                 </div>
// //
// //                 {/* Tags */}
// //                 {post.fields.tags && post.fields.tags.length > 0 && (
// //                     <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800">
// //                         <div className="flex items-center gap-2 mb-4">
// //                             <Tag className="w-4 h-4 text-gray-600 dark:text-gray-400" />
// //                             <h3 className="font-medium text-gray-900 dark:text-white">
// //                                 Tags
// //                             </h3>
// //                         </div>
// //                         <div className="flex flex-wrap gap-2">
// //                             {post.fields.tags.map((tag) => (
// //                                 <span
// //                                     key={tag}
// //                                     className="px-3 py-1 rounded-full text-sm bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
// //                                 >
// //                                     {tag}
// //                                 </span>
// //                             ))}
// //                         </div>
// //                     </div>
// //                 )}
// //             </div>
// //         </article>
// //     );
// // }
//
// // src/app/blog/[slug]/page.tsx
// import { Suspense } from 'react';
// import { getBlogPostById } from '@/lib/contentful';
// import { notFound } from 'next/navigation';
// import Image from 'next/image';
// import Link from 'next/link';
// import { ArrowLeft, Calendar, User, Tag } from 'lucide-react';
// import Navbar from '@/components/layout/Navbar';
// import Footer from '@/components/layout/Footer';
//
// interface Props {
//     params: {
//         slug: string;
//     };
// }
//
// // Metadata generación
// export async function generateMetadata({ params: { slug } }: Props) {
//     const post = await getBlogPostById(slug);
//
//     if (!post) return { title: 'Post no encontrado' };
//
//     return {
//         title: `${post.fields.title} - roggrt.dev`,
//         description: post.fields.body.content[0].content[0].value.slice(0, 160),
//     };
// }
//
// async function PostContent({ slug }: { slug: string }) {
//     const post = await getBlogPostById(slug);
//
//     if (!post) {
//         notFound();
//     }
//
//     const imageUrl = post.fields.image?.fields?.file?.url
//         ? `https:${post.fields.image.fields.file.url}`
//         : null;
//
//     const formattedDate = new Date(post.sys.createdAt).toLocaleDateString('es-ES', {
//         year: 'numeric',
//         month: 'long',
//         day: 'numeric'
//     });
//
//     return (
//         <article className="max-w-4xl mx-auto">
//             {/* Navegación superior */}
//             <Link
//                 href="/blog"
//                 className="inline-flex items-center text-sm text-gray-600 dark:text-gray-400 hover:text-accent-red dark:hover:text-accent-yellow mb-8 transition-colors group"
//             >
//                 <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
//                 Volver al blog
//             </Link>
//
//             {/* Encabezado */}
//             <header className="mb-8">
//                 {post.fields.categories && (
//                     <div className="flex flex-wrap gap-2 mb-4">
//                         {post.fields.categories.map((category) => (
//                             <span
//                                 key={category}
//                                 className="px-3 py-1 rounded-full text-sm bg-red-50 dark:bg-yellow-900/20 text-accent-red dark:text-accent-yellow"
//                             >
//                                 {category}
//                             </span>
//                         ))}
//                     </div>
//                 )}
//
//                 <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
//                     {post.fields.title}
//                 </h1>
//
//                 <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
//                     <div className="flex items-center gap-2">
//                         <Calendar className="w-4 h-4" />
//                         <time dateTime={post.sys.createdAt}>{formattedDate}</time>
//                     </div>
//                     {post.fields.authorInfo?.fields?.title && (
//                         <div className="flex items-center gap-2">
//                             <User className="w-4 h-4" />
//                             <span>{post.fields.authorInfo.fields.title}</span>
//                         </div>
//                     )}
//                 </div>
//             </header>
//
//             {/* Imagen destacada */}
//             {imageUrl && (
//                 <div className="relative aspect-video w-full mb-8 rounded-lg overflow-hidden">
//                     <Image
//                         src={imageUrl}
//                         alt={post.fields.featuredImageAltText || post.fields.title}
//                         fill
//                         className="object-cover"
//                         priority
//                     />
//                 </div>
//             )}
//
//             {/* Contenido */}
//             <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
//                 {post.fields.body.content.map((content: any, index: number) => {
//                     switch (content.nodeType) {
//                         case 'paragraph':
//                             return (
//                                 <p key={index} className="mb-6 text-gray-700 dark:text-gray-300">
//                                     {content.content[0]?.value || ''}
//                                 </p>
//                             );
//                         case 'heading-2':
//                             return (
//                                 <h2 key={index} className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
//                                     {content.content[0]?.value || ''}
//                                 </h2>
//                             );
//                         case 'heading-3':
//                             return (
//                                 <h3 key={index} className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
//                                     {content.content[0]?.value || ''}
//                                 </h3>
//                             );
//                         case 'unordered-list':
//                             return (
//                                 <ul key={index} className="list-disc list-inside mb-6 ml-4 text-gray-700 dark:text-gray-300">
//                                     {content.content.map((item: any, itemIndex: number) => (
//                                         <li key={itemIndex}>
//                                             {item.content[0].content[0]?.value || ''}
//                                         </li>
//                                     ))}
//                                 </ul>
//                             );
//                         default:
//                             return null;
//                     }
//                 })}
//             </div>
//
//             {/* Tags */}
//             {post.fields.tags && post.fields.tags.length > 0 && (
//                 <div className="border-t border-gray-200 dark:border-gray-800 pt-8">
//                     <div className="flex items-center gap-2 mb-4">
//                         <Tag className="w-4 h-4 text-gray-600 dark:text-gray-400" />
//                         <h3 className="font-medium text-gray-900 dark:text-white">
//                             Tags
//                         </h3>
//                     </div>
//                     <div className="flex flex-wrap gap-2">
//                         {post.fields.tags.map((tag) => (
//                             <span
//                                 key={tag}
//                                 className="px-3 py-1 rounded-full text-sm bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
//                             >
//                                 {tag}
//                             </span>
//                         ))}
//                     </div>
//                 </div>
//             )}
//         </article>
//     );
// }
//
// export default async function BlogPostPage({ params }: Props) {
//     return (
//         <>
//             <Navbar />
//             <main className="min-h-screen pt-24 px-6 pb-12">
//                 <Suspense fallback={
//                     <div className="flex justify-center items-center min-h-[400px]">
//                         <div className="w-8 h-8 border-4 border-accent-red dark:border-accent-yellow border-t-transparent rounded-full animate-spin" />
//                     </div>
//                 }>
//                     <PostContent slug={params.slug} />
//                 </Suspense>
//             </main>
//             <Footer />
//         </>
//     );
// }

// src/app/blog/[slug]/page.tsx
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Calendar, User, Tag } from 'lucide-react';
import { notFound } from 'next/navigation';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

interface Props {
    params: {
        slug: string;
    };
}

async function getData(slug: string) {
    const response = await fetch(
        `https://cdn.contentful.com/spaces/sfme6nh4wom2/environments/master/entries/${slug}?access_token=jn7dH3bS0f5p6ypvIHavVJTRpfigF6QY9R1jOyHv7A4`
    );

    if (!response.ok) {
        notFound();
    }

    return response.json();
}

export default async function BlogPostPage({ params }: Props) {
    const post = await getData(params.slug);

    if (!post) {
        notFound();
    }

    const imageUrl = post.fields.image?.fields?.file?.url
        ? `https:${post.fields.image.fields.file.url}`
        : null;

    const formattedDate = new Date(post.sys.createdAt).toLocaleDateString('es-ES', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    return (
        <>
            <Navbar />
            <main className="min-h-screen pt-24 px-6 pb-12">
                <article className="max-w-4xl mx-auto">
                    {/* Navegación superior */}
                    <Link
                        href="/blog"
                        className="inline-flex items-center text-sm text-gray-600 dark:text-gray-400 hover:text-accent-red dark:hover:text-accent-yellow mb-8 transition-colors group"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                        Volver al blog
                    </Link>

                    {/* Encabezado */}
                    <header className="mb-8">
                        {post.fields.categories && (
                            <div className="flex flex-wrap gap-2 mb-4">
                                {post.fields.categories.map((category: string) => (
                                    <span
                                        key={category}
                                        className="px-3 py-1 rounded-full text-sm bg-red-50 dark:bg-yellow-900/20 text-accent-red dark:text-accent-yellow"
                                    >
                                        {category}
                                    </span>
                                ))}
                            </div>
                        )}

                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                            {post.fields.title}
                        </h1>

                        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <time dateTime={post.sys.createdAt}>{formattedDate}</time>
                            </div>
                            {post.fields.authorInfo?.fields?.title && (
                                <div className="flex items-center gap-2">
                                    <User className="w-4 h-4" />
                                    <span>{post.fields.authorInfo.fields.title}</span>
                                </div>
                            )}
                        </div>
                    </header>

                    {/* Imagen destacada */}
                    {imageUrl && (
                        <div className="relative aspect-video w-full mb-8 rounded-lg overflow-hidden">
                            <Image
                                src={imageUrl}
                                alt={post.fields.featuredImageAltText || post.fields.title}
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    )}

                    {/* Contenido */}
                    <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
                        {post.fields.body.content.map((content: any, index: number) => {
                            switch (content.nodeType) {
                                case 'paragraph':
                                    return (
                                        <p key={index} className="mb-6 text-gray-700 dark:text-gray-300">
                                            {content.content[0]?.value || ''}
                                        </p>
                                    );
                                case 'heading-2':
                                    return (
                                        <h2 key={index} className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                                            {content.content[0]?.value || ''}
                                        </h2>
                                    );
                                case 'heading-3':
                                    return (
                                        <h3 key={index} className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                                            {content.content[0]?.value || ''}
                                        </h3>
                                    );
                                case 'unordered-list':
                                    return (
                                        <ul key={index} className="list-disc list-inside mb-6 ml-4 text-gray-700 dark:text-gray-300">
                                            {content.content.map((item: any, itemIndex: number) => (
                                                <li key={itemIndex}>
                                                    {item.content[0].content[0]?.value || ''}
                                                </li>
                                            ))}
                                        </ul>
                                    );
                                default:
                                    return null;
                            }
                        })}
                    </div>

                    {/* Tags */}
                    {post.fields.tags && post.fields.tags.length > 0 && (
                        <div className="border-t border-gray-200 dark:border-gray-800 pt-8">
                            <div className="flex items-center gap-2 mb-4">
                                <Tag className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                                <h3 className="font-medium text-gray-900 dark:text-white">
                                    Tags
                                </h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {post.fields.tags.map((tag: string) => (
                                    <span
                                        key={tag}
                                        className="px-3 py-1 rounded-full text-sm bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}
                </article>
            </main>
            <Footer />
        </>
    );
}