
// import { MetadataRoute } from 'next'

// // Función auxiliar para obtener la fecha actual en formato ISO
// const getCurrentDate = (): string => {
//   return new Date().toISOString()
// }

// // Constante para la URL base del sitio
// const SITE_URL = 'https://torisoftt.com' // Ajusta esto a tu dominio real

// // Interfaz para las rutas del sitio
// interface SitemapRoute {
//   url: string
//   lastModified?: string
//   changeFrequency?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'
//   priority?: number
// }

// // Rutas de servicios
// const serviceRoutes: SitemapRoute[] = [
//   {
//     url: '/services/backend-development',
//     changeFrequency: 'monthly',
//     priority: 0.8
//   },
//   {
//     url: '/services/design-systems',
//     changeFrequency: 'monthly',
//     priority: 0.8
//   },
//   {
//     url: '/services/frontend-development',
//     changeFrequency: 'monthly',
//     priority: 0.8
//   },
//   {
//     url: '/services/programa-de-partners',
//     changeFrequency: 'monthly',
//     priority: 0.7
//   },
//   {
//     url: '/services/seo-y-posicionamiento',
//     changeFrequency: 'monthly',
//     priority: 0.8
//   },
//   {
//     url: '/services/uiux-design',
//     changeFrequency: 'monthly',
//     priority: 0.8
//   },
//   {
//     url: '/services/wordpress',
//     changeFrequency: 'monthly',
//     priority: 0.8
//   }
// ]

// // Rutas principales
// const mainRoutes: SitemapRoute[] = [
//   {
//     url: '/',
//     changeFrequency: 'weekly',
//     priority: 1.0
//   },
//   {
//     url: '/blog',
//     changeFrequency: 'daily',
//     priority: 0.9
//   },
//   {
//     url: '/terms',
//     changeFrequency: 'yearly',
//     priority: 0.3
//   },
//   {
//     url: '/privacy',
//     changeFrequency: 'yearly',
//     priority: 0.3
//   }
// ]

// // Función principal del sitemap
// export default function sitemap(): MetadataRoute.Sitemap {
//   const currentDate = getCurrentDate()
  
//   // Combinar todas las rutas
//   const routes: SitemapRoute[] = [
//     ...mainRoutes,
//     ...serviceRoutes,
//   ]

//   // Mapear las rutas al formato requerido por Next.js
//   return routes.map(route => ({
//     url: `${SITE_URL}${route.url}`,
//     lastModified: route.lastModified || currentDate,
//     changeFrequency: route.changeFrequency,
//     priority: route.priority
//   }))
// }









import { MetadataRoute } from 'next'
import { getBlogPosts } from '@/lib/contentful'

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
    changeFrequency: 'weekly',
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

// Función principal del sitemap
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const currentDate = getCurrentDate()
  
  // Obtener posts del blog desde Contentful
  let blogPosts: SitemapRoute[] = []
  try {
    const posts = await getBlogPosts()
    blogPosts = posts.map(post => ({
      url: `/blog/${post.sys.id}`,
      lastModified: post.sys.updatedAt,
      changeFrequency: 'daily' as const,
      priority: 0.7
    }))
  } catch (error) {
    console.error('Error fetching blog posts for sitemap:', error)
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