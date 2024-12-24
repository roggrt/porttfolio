

import { MetadataRoute } from 'next'

// Tipos
interface Asset {
    fields: {
        file: {
            url: string;
        };
    };
}

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
            fields: Asset['fields']
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

interface ContentfulResponse {
    items: BlogPost[];
}

// Función auxiliar para obtener la fecha actual en formato ISO
const getCurrentDate = (): string => {
    return new Date().toISOString()
}

// Constante para la URL base del sitio
const SITE_URL = 'https://torisoftt.com'

// Interfaz para las rutas del sitio
interface SitemapRoute {
    url: string
    lastModified?: string
    changeFrequency?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'
    priority?: number
}

// Rutas de servicios
const serviceRoutes: SitemapRoute[] = [
    {
        url: '/services/backend-development',
        changeFrequency: 'monthly',
        priority: 0.8
    },
    {
        url: '/services/design-systems',
        changeFrequency: 'monthly',
        priority: 0.8
    },
    {
        url: '/services/frontend-development',
        changeFrequency: 'monthly',
        priority: 0.8
    },
    {
        url: '/services/programa-de-partners',
        changeFrequency: 'monthly',
        priority: 0.7
    },
    {
        url: '/services/seo-y-posicionamiento',
        changeFrequency: 'monthly',
        priority: 0.8
    },
    {
        url: '/services/uiux-design',
        changeFrequency: 'monthly',
        priority: 0.8
    },
    {
        url: '/services/wordpress',
        changeFrequency: 'monthly',
        priority: 0.8
    }
]

// Rutas principales
const mainRoutes: SitemapRoute[] = [
    {
        url: '/',
        changeFrequency: 'weekly',
        priority: 1.0
    },
    {
        url: '/blog',
        changeFrequency: 'daily',
        priority: 0.9
    },
    {
        url: '/terms',
        changeFrequency: 'yearly',
        priority: 0.3
    },
    {
        url: '/privacy',
        changeFrequency: 'yearly',
        priority: 0.3
    }
]

// Función para obtener los posts del blog
async function getBlogPosts(): Promise<BlogPost[]> {
    try {
        const response = await fetch(
            'https://cdn.contentful.com/spaces/sfme6nh4wom2/environments/master/entries?content_type=blogPage&access_token=jn7dH3bS0f5p6ypvIHavVJTRpfigF6QY9R1jOyHv7A4'
        );
        
        if (!response.ok) {
            throw new Error('Failed to fetch blog posts');
        }

        const data: ContentfulResponse = await response.json();
        return data.items;
    } catch (error) {
        console.error('Error fetching blog posts:', error);
        return [];
    }
}

// Función principal del sitemap
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const currentDate = getCurrentDate()
    
    // Obtener posts del blog desde Contentful
    let blogPosts: SitemapRoute[] = []
    try {
        const posts = await getBlogPosts()
        blogPosts = posts.map(post => ({
            url: `/blog/${post.fields.slug}`,
            lastModified: post.sys.createdAt,
            changeFrequency: 'daily' as const,
            priority: 0.7
        }))
    } catch (error) {
        console.error('Error processing blog posts for sitemap:', error)
    }

    // Combinar todas las rutas
    const routes: SitemapRoute[] = [
        ...mainRoutes,
        ...serviceRoutes,
        ...blogPosts
    ]

    // Mapear las rutas al formato requerido por Next.js
    return routes.map(route => ({
        url: `${SITE_URL}${route.url}`,
        lastModified: route.lastModified || currentDate,
        changeFrequency: route.changeFrequency,
        priority: route.priority
    }))
}