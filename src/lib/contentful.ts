// // // src/lib/contentful.ts
// // const CONTENTFUL_SPACE_ID = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
// // const CONTENTFUL_ACCESS_TOKEN = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;
// //
// // export interface BlogPost {
// //     sys: {
// //         id: string;
// //     };
// //     fields: {
// //         title: string;
// //         body: {
// //             content: any[];
// //         };
// //     };
// // }
// //
// // export async function getAllPosts(): Promise<BlogPost[]> {
// //     const res = await fetch(
// //         `https://cdn.contentful.com/spaces/${CONTENTFUL_SPACE_ID}/environments/master/entries?content_type=blogPost&access_token=${CONTENTFUL_ACCESS_TOKEN}`
// //     );
// //     const data = await res.json();
// //     return data.items;
// // }
// //
// // export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
// //     const posts = await getAllPosts();
// //     return posts.find(post => post.sys.id === slug) || null;
// // }
//
//
// // src/lib/contentful.ts
// export interface ContentfulNode {
//     nodeType: string;
//     content: Array<{
//         nodeType: string;
//         value?: string;
//         content?: Array<{
//             nodeType: string;
//             value: string;
//         }>;
//     }>;
// }
//
// export interface BlogPost {
//     sys: {
//         id: string;
//     };
//     fields: {
//         title: string;
//         body: {
//             content: ContentfulNode[];
//         };
//     };
// }
//
//
// export interface Category {
//     name: string;
//     slug: string;
//     count: number;
// }
//
// export interface BlogPostMeta {
//     readingTime: number;
//     publishDate: string;
//     category: string;
// }
//
// export async function getAllPosts(): Promise<BlogPost[]> {
//     const res = await fetch(
//         `https://cdn.contentful.com/spaces/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}/environments/master/entries?content_type=blogPost&access_token=${process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN}`,
//         { next: { revalidate: 3600 } }
//     );
//
//     if (!res.ok) {
//         throw new Error('Failed to fetch posts');
//     }
//
//     const data = await res.json();
//     return data.items;
// }
//
// export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
//     const posts = await getAllPosts();
//     return posts.find(post => post.sys.id === slug) || null;
// }


// lib/contentful.ts





// Tipos de Contentful
export interface Asset {
    fields: {
        title: string;
        description: string;
        file: {
            url: string;
            details: {
                size: number;
                image?: {
                    width: number;
                    height: number;
                }
            };
            fileName: string;
            contentType: string;
        }
    }
}

export interface Author {
    fields: {
        title: string;
        body: {
            nodeType: string;
            content: Array<{
                nodeType: string;
                content: Array<{
                    value: string;
                    nodeType: string;
                }>
            }>
        }
    }
}

export interface BlogPost {
    sys: {
        id: string;
        createdAt: string;
        updatedAt: string;
    };
    fields: {
        title: string;
        body: {
            nodeType: string;
            content: Array<{
                nodeType: string;
                content: Array<{
                    value: string;
                    nodeType: string;
                }>
            }>
        };
        image?: {
            fields: Asset['fields']
        };
        recommendedPosts?: Array<{
            sys: {
                id: string;
            }
        }>;
        featuredImageAltText?: string;
        authorInfo?: {
            fields: Author['fields']
        };
        categories?: string[];
        tags?: string[];
    };
}

export interface ContentfulResponse {
    sys: {
        type: string;
    };
    total: number;
    skip: number;
    limit: number;
    items: BlogPost[];
    includes?: {
        Asset?: Asset[];
    };
    errors?: Array<{
        sys: {
            id: string;
            type: string;
        };
        details: {
            type: string;
            linkType: string;
            id: string;
        };
    }>;
}

// Configuración
const SPACE_ID = 'sfme6nh4wom2';
const ACCESS_TOKEN = 'jn7dH3bS0f5p6ypvIHavVJTRpfigF6QY9R1jOyHv7A4';
const ENVIRONMENT = 'master';

// URLs base
const BASE_URL = `https://cdn.contentful.com/spaces/${SPACE_ID}/environments/${ENVIRONMENT}`;
const PREVIEW_URL = `https://preview.contentful.com/spaces/${SPACE_ID}/environments/${ENVIRONMENT}`;

// Headers comunes
const headers = {
    Authorization: `Bearer ${ACCESS_TOKEN}`,
};

/**
 * Obtiene todos los posts del blog
 */
export async function getBlogPosts(options: {
    limit?: number;
    skip?: number;
    tag?: string;
    category?: string;
    orderBy?: string;
} = {}): Promise<BlogPost[]> {
    try {
        const searchParams = new URLSearchParams({
            content_type: 'blogPost',
            limit: (options.limit || 100).toString(),
            skip: (options.skip || 0).toString(),
            include: '2',
        });

        if (options.tag) {
            searchParams.append('fields.tags[in]', options.tag);
        }

        if (options.category) {
            searchParams.append('fields.categories[in]', options.category);
        }

        if (options.orderBy) {
            searchParams.append('order', options.orderBy);
        }

        const response = await fetch(
            `${BASE_URL}/entries?${searchParams.toString()}`,
            { headers }
        );

        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }

        const data: ContentfulResponse = await response.json();
        return data.items;
    } catch (error) {
        console.error('Error fetching blog posts:', error);
        throw error;
    }
}

export async function getBlogPostById(id: string) {
    const response = await fetch(
        `https://cdn.contentful.com/spaces/sfme6nh4wom2/environments/master/entries/${id}?access_token=jn7dH3bS0f5p6ypvIHavVJTRpfigF6QY9R1jOyHv7A4`
    );

    if (!response.ok) {
        if (response.status === 404) return null;
        throw new Error('Failed to fetch post');
    }

    return response.json();
}


/**
 * Obtiene las categorías disponibles
 */
export async function getCategories(): Promise<string[]> {
    try {
        const posts = await getBlogPosts();
        const categoriesSet = new Set<string>();

        posts.forEach(post => {
            post.fields.categories?.forEach(category => {
                categoriesSet.add(category);
            });
        });

        return Array.from(categoriesSet);
    } catch (error) {
        console.error('Error fetching categories:', error);
        throw error;
    }
}

/**
 * Obtiene los tags disponibles
 */
export async function getTags(): Promise<string[]> {
    try {
        const posts = await getBlogPosts();
        const tagsSet = new Set<string>();

        posts.forEach(post => {
            post.fields.tags?.forEach(tag => {
                tagsSet.add(tag);
            });
        });

        return Array.from(tagsSet);
    } catch (error) {
        console.error('Error fetching tags:', error);
        throw error;
    }
}

/**
 * Busca posts por texto
 */
export async function searchBlogPosts(query: string): Promise<BlogPost[]> {
    try {
        const searchParams = new URLSearchParams({
            content_type: 'blogPost',
            query,
            include: '2',
        });

        const response = await fetch(
            `${BASE_URL}/entries/search?${searchParams.toString()}`,
            { headers }
        );

        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }

        const data: ContentfulResponse = await response.json();
        return data.items;
    } catch (error) {
        console.error('Error searching blog posts:', error);
        throw error;
    }
}

/**
 * Obtiene los posts relacionados
 */
export async function getRelatedPosts(postId: string, limit = 3): Promise<BlogPost[]> {
    try {
        const post = await getBlogPostById(postId);
        if (!post) return [];

        const tags = post.fields.tags || [];
        const categories = post.fields.categories || [];

        if (tags.length === 0 && categories.length === 0) return [];

        const searchParams = new URLSearchParams({
            content_type: 'blogPost',
            limit: limit.toString(),
            'fields.sys.id[ne]': postId,
            include: '2',
        });

        if (tags.length > 0) {
            searchParams.append('fields.tags[in]', tags.join(','));
        }

        if (categories.length > 0) {
            searchParams.append('fields.categories[in]', categories.join(','));
        }

        const response = await fetch(
            `${BASE_URL}/entries?${searchParams.toString()}`,
            { headers }
        );

        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }

        const data: ContentfulResponse = await response.json();
        return data.items;
    } catch (error) {
        console.error('Error fetching related posts:', error);
        throw error;
    }
}

/**
 * Obtiene los últimos posts
 */
export async function getLatestPosts(limit = 5): Promise<BlogPost[]> {
    return getBlogPosts({
        limit,
        orderBy: '-sys.createdAt'
    });
}

/**
 * Extrae el texto plano del contenido Rich Text
 */
export function extractPlainText(content: any): string {
    if (!content || !content.content) return '';

    return content.content.reduce((text: string, node: any) => {
        if (node.nodeType === 'text') {
            return text + node.value;
        }
        if (node.content) {
            return text + extractPlainText(node);
        }
        return text;
    }, '');
}

/**
 * Formatea la fecha de Contentful
 */
export function formatContentfulDate(date: string): string {
    return new Date(date).toLocaleDateString('es-ES', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}