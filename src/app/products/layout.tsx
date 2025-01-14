// // // import { Metadata } from 'next'
// //
// // // export const metadata: Metadata = {
// // //     title: 'Soluciones Digitales | Desarrollo Web, Apps y Software | Torisoftt',
// // //     description: 'Encuentra la solución digital perfecta para tu negocio. Desarrollo web desde $199, apps móviles, sistemas personalizados y consultoría técnica en Ecuador.',
// // //     keywords: 'desarrollo web ecuador, aplicaciones móviles, software empresarial, consultoria it cuenca, software ecuador, paginas web, agencia web',
// // //     alternates: {
// // //         canonical: 'https://torisoftt.com/products'
// // //     },
// // //     openGraph: {
// // //         title: 'Soluciones Digitales | Torisoftt',
// // //         description: 'Desarrollo web, apps y software empresarial en Ecuador',
// // //         url: 'https://torisoftt.com/products',
// // //         siteName: 'Torisoftt',
// // //         locale: 'es_EC',
// // //         type: 'website',
// // //     }
// // // }
// //
// // // const servicesSchema = {
// // //     '@context': 'https://schema.org',
// // //     '@type': 'Organization',
// // //     'name': 'Torisoftt',
// // //     'url': 'https://torisoftt.com',
// // //     'areaServed': 'Ecuador',
// // //     'address': {
// // //         '@type': 'PostalAddress',
// // //         'addressLocality': 'Cuenca',
// // //         'addressRegion': 'Azuay',
// // //         'addressCountry': 'EC'
// // //     },
// // //     'hasOfferCatalog': {
// // //         '@type': 'OfferCatalog',
// // //         'name': 'Servicios Digitales',
// // //         'itemListElement': [
// // //             {
// // //                 '@type': ['Service', 'Product'],
// // //                 'name': 'Página Web Profesional',
// // //                 'description': 'Diseño UI/UX + Desarrollo WordPress optimizado',
// // //                 'serviceType': 'Web Development',
// // //                 'category': 'Web Development',
// // //                 'offers': {
// // //                     '@type': 'Offer',
// // //                     'price': '199',
// // //                     'priceCurrency': 'USD',
// // //                     'availability': 'https://schema.org/InStock',
// // //                     'priceValidUntil': '2024-12-31'
// // //                 }
// // //             },
// // //             {
// // //                 '@type': ['Service', 'Product'],
// // //                 'name': 'Sistema Empresarial',
// // //                 'description': 'Software personalizado para gestión y automatización',
// // //                 'serviceType': 'Business Software',
// // //                 'category': 'Business Software',
// // //                 'offers': {
// // //                     '@type': 'Offer',
// // //                     'price': '499',
// // //                     'priceCurrency': 'USD',
// // //                     'availability': 'https://schema.org/InStock',
// // //                     'priceValidUntil': '2024-12-31'
// // //                 }
// // //             },
// // //             {
// // //                 '@type': ['Service', 'Product'],
// // //                 'name': 'Aplicación Móvil',
// // //                 'description': 'Apps multiplataforma iOS/Android con Flutter',
// // //                 'serviceType': 'Mobile Development',
// // //                 'category': 'Mobile Development',
// // //                 'offers': {
// // //                     '@type': 'Offer',
// // //                     'price': '999',
// // //                     'priceCurrency': 'USD',
// // //                     'availability': 'https://schema.org/InStock',
// // //                     'priceValidUntil': '2024-12-31'
// // //                 }
// // //             },
// // //             {
// // //                 '@type': ['Service', 'Product'],
// // //                 'name': 'E-commerce',
// // //                 'description': 'Tienda online completa con WooCommerce',
// // //                 'serviceType': 'E-commerce',
// // //                 'category': 'E-commerce',
// // //                 'offers': {
// // //                     '@type': 'Offer',
// // //                     'price': '399',
// // //                     'priceCurrency': 'USD',
// // //                     'availability': 'https://schema.org/InStock',
// // //                     'priceValidUntil': '2024-12-31'
// // //                 }
// // //             },
// // //             {
// // //                 '@type': ['Service', 'Product'],
// // //                 'name': 'Base de Datos',
// // //                 'description': 'Diseño e implementación de BD empresarial',
// // //                 'serviceType': 'Database',
// // //                 'category': 'Database',
// // //                 'offers': {
// // //                     '@type': 'Offer',
// // //                     'price': '399',
// // //                     'priceCurrency': 'USD',
// // //                     'availability': 'https://schema.org/InStock',
// // //                     'priceValidUntil': '2024-12-31'
// // //                 }
// // //             },
// // //             {
// // //                 '@type': ['Service', 'Product'],
// // //                 'name': 'Consultoría IT',
// // //                 'description': 'Asesoría técnica y optimización',
// // //                 'serviceType': 'Consulting',
// // //                 'category': 'Consulting',
// // //                 'offers': {
// // //                     '@type': 'Offer',
// // //                     'price': '149',
// // //                     'priceCurrency': 'USD',
// // //                     'availability': 'https://schema.org/InStock',
// // //                     'priceValidUntil': '2024-12-31'
// // //                 }
// // //             }
// // //         ]
// // //     }
// // // }
// //
// // // export default function ProductsLayout({
// // //                                            children,
// // //                                        }: {
// // //     children: React.ReactNode
// // // }) {
// // //     return (
// // //         <>
// // //             <script
// // //                 type="application/ld+json"
// // //                 dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
// // //             />
// // //             {children}
// // //         </>
// // //     )
// // // }
// //
// //
// // import { Metadata } from 'next'
// //
// // export const metadata: Metadata = {
// //     title: 'Soluciones Digitales | Desarrollo Web, Apps y Software | Torisoftt',
// //     description: 'Encuentra la solución digital perfecta para tu negocio. Desarrollo web desde $199, apps móviles, sistemas personalizados y consultoría técnica.',
// //     keywords: 'desarrollo web, aplicaciones móviles, software empresarial, consultoria it, software, paginas web, agencia web',
// //     alternates: {
// //         canonical: 'https://torisoftt.com/products'
// //     },
// //     openGraph: {
// //         title: 'Soluciones Digitales | Torisoftt',
// //         description: 'Desarrollo web, apps y software empresarial',
// //         url: 'https://torisoftt.com/products',
// //         siteName: 'Torisoftt',
// //         locale: 'es',
// //         type: 'website',
// //         images: [
// //             {
// //                 url: 'https://torisoftt.com/projects/business-dashboard.jpg',
// //                 width: 1200,
// //                 height: 630,
// //                 alt: 'Torisoftt Soluciones Digitales'
// //             }
// //         ]
// //     }
// // }
// //
// // const servicesSchema = {
// //     '@context': 'https://schema.org',
// //     '@type': 'Organization',
// //     'name': 'Torisoftt',
// //     'url': 'https://torisoftt.com',
// //     'logo': 'https://torisoftt.com/favicon.png',
// //     'areaServed': {
// //         '@type': 'GeoCircle',
// //         'geoMidpoint': {
// //             '@type': 'GeoCoordinates',
// //             'latitude': '-2.9001',
// //             'longitude': '-79.0059'
// //         },
// //         'geoRadius': '40075000'
// //     },
// //     'address': {
// //         '@type': 'PostalAddress',
// //         'addressLocality': 'Cuenca',
// //         'addressRegion': 'Azuay',
// //         'addressCountry': 'EC'
// //     },
// //     'hasOfferCatalog': {
// //         '@type': 'OfferCatalog',
// //         'name': 'Digital Services & Software Solutions',
// //         'itemListElement': [
// //             {
// //                 '@type': ['Service', 'Product'],
// //                 'name': 'Professional Web Development',
// //                 'alternateName': 'Página Web Profesional',
// //                 'description': 'Custom Web Development & UI/UX Design with WordPress optimization',
// //                 'serviceType': 'Web Development',
// //                 'category': 'Web Development',
// //                 'image': 'https://torisoftt.com/projects/legal-landing.jpg', // Landing page como ejemplo de web development
// //                 'availableLanguage': ['es', 'en'],
// //                 'offers': {
// //                     '@type': 'Offer',
// //                     'price': '199',
// //                     'priceCurrency': 'USD',
// //                     'availability': 'https://schema.org/InStock',
// //                     'priceValidUntil': '2025-12-31',
// //                     'areaServed': {
// //                         '@type': 'Country',
// //                         'name': 'Worldwide'
// //                     },
// //                     'shippingDetails': {
// //                         '@type': 'OfferShippingDetails',
// //                         'deliveryTime': {
// //                             '@type': 'ShippingDeliveryTime',
// //                             'handlingTime': {
// //                                 '@type': 'QuantitativeValue',
// //                                 'minValue': '1',
// //                                 'maxValue': '3',
// //                                 'unitCode': 'DAY'
// //                             }
// //                         },
// //                         'shippingDestination': {
// //                             '@type': 'DefinedRegion',
// //                             'addressCountry': ['*']
// //                         }
// //                     },
// //                     'hasMerchantReturnPolicy': {
// //                         '@type': 'MerchantReturnPolicy',
// //                         'returnPolicyCategory': 'https://schema.org/MerchantReturnFiniteReturnWindow',
// //                         'returnTime': {
// //                             '@type': 'DateTime',
// //                             'value': 'P30D'
// //                         }
// //                     }
// //                 }
// //             },
// //             {
// //                 '@type': ['Service', 'Product'],
// //                 'name': 'Enterprise Software Solutions',
// //                 'alternateName': 'Sistema Empresarial',
// //                 'description': 'Custom software development for business automation and management',
// //                 'serviceType': 'Business Software',
// //                 'category': 'Business Software',
// //                 'image': 'https://torisoftt.com/projects/business-dashboard.jpg', // Dashboard empresarial
// //                 'availableLanguage': ['es', 'en'],
// //                 'offers': {
// //                     '@type': 'Offer',
// //                     'price': '499',
// //                     'priceCurrency': 'USD',
// //                     'availability': 'https://schema.org/InStock',
// //                     'priceValidUntil': '2025-12-31',
// //                     'areaServed': {
// //                         '@type': 'Country',
// //                         'name': 'Worldwide'
// //                     },
// //                     'shippingDetails': {
// //                         '@type': 'OfferShippingDetails',
// //                         'deliveryTime': {
// //                             '@type': 'ShippingDeliveryTime',
// //                             'handlingTime': {
// //                                 '@type': 'QuantitativeValue',
// //                                 'minValue': '5',
// //                                 'maxValue': '10',
// //                                 'unitCode': 'DAY'
// //                             }
// //                         },
// //                         'shippingDestination': {
// //                             '@type': 'DefinedRegion',
// //                             'addressCountry': ['*']
// //                         }
// //                     },
// //                     'hasMerchantReturnPolicy': {
// //                         '@type': 'MerchantReturnPolicy',
// //                         'returnPolicyCategory': 'https://schema.org/MerchantReturnFiniteReturnWindow',
// //                         'returnTime': {
// //                             '@type': 'DateTime',
// //                             'value': 'P30D'
// //                         }
// //                     }
// //                 }
// //             },
// //             {
// //                 '@type': ['Service', 'Product'],
// //                 'name': 'Mobile App Development',
// //                 'alternateName': 'Aplicación Móvil',
// //                 'description': 'Cross-platform mobile app development for iOS and Android',
// //                 'serviceType': 'Mobile Development',
// //                 'category': 'Mobile Development',
// //                 'image': 'https://torisoftt.com/projects/finance-app.jpg', // App financiera como ejemplo
// //                 'availableLanguage': ['es', 'en'],
// //                 'offers': {
// //                     '@type': 'Offer',
// //                     'price': '999',
// //                     'priceCurrency': 'USD',
// //                     'availability': 'https://schema.org/InStock',
// //                     'priceValidUntil': '2025-12-31',
// //                     'areaServed': {
// //                         '@type': 'Country',
// //                         'name': 'Worldwide'
// //                     },
// //                     'shippingDetails': {
// //                         '@type': 'OfferShippingDetails',
// //                         'deliveryTime': {
// //                             '@type': 'ShippingDeliveryTime',
// //                             'handlingTime': {
// //                                 '@type': 'QuantitativeValue',
// //                                 'minValue': '7',
// //                                 'maxValue': '14',
// //                                 'unitCode': 'DAY'
// //                             }
// //                         },
// //                         'shippingDestination': {
// //                             '@type': 'DefinedRegion',
// //                             'addressCountry': ['*']
// //                         }
// //                     },
// //                     'hasMerchantReturnPolicy': {
// //                         '@type': 'MerchantReturnPolicy',
// //                         'returnPolicyCategory': 'https://schema.org/MerchantReturnFiniteReturnWindow',
// //                         'returnTime': {
// //                             '@type': 'DateTime',
// //                             'value': 'P30D'
// //                         }
// //                     }
// //                 }
// //             },
// //             {
// //                 '@type': ['Service', 'Product'],
// //                 'name': 'E-commerce Development',
// //                 'alternateName': 'E-commerce',
// //                 'description': 'Complete online store development with WooCommerce',
// //                 'serviceType': 'E-commerce',
// //                 'category': 'E-commerce',
// //                 'image': 'https://torisoftt.com/projects/shoe-store.jpg', // Tienda online como ejemplo
// //                 'availableLanguage': ['es', 'en'],
// //                 'offers': {
// //                     '@type': 'Offer',
// //                     'price': '399',
// //                     'priceCurrency': 'USD',
// //                     'availability': 'https://schema.org/InStock',
// //                     'priceValidUntil': '2025-12-31',
// //                     'areaServed': {
// //                         '@type': 'Country',
// //                         'name': 'Worldwide'
// //                     },
// //                     'shippingDetails': {
// //                         '@type': 'OfferShippingDetails',
// //                         'deliveryTime': {
// //                             '@type': 'ShippingDeliveryTime',
// //                             'handlingTime': {
// //                                 '@type': 'QuantitativeValue',
// //                                 'minValue': '3',
// //                                 'maxValue': '7',
// //                                 'unitCode': 'DAY'
// //                             }
// //                         },
// //                         'shippingDestination': {
// //                             '@type': 'DefinedRegion',
// //                             'addressCountry': ['*']
// //                         }
// //                     },
// //                     'hasMerchantReturnPolicy': {
// //                         '@type': 'MerchantReturnPolicy',
// //                         'returnPolicyCategory': 'https://schema.org/MerchantReturnFiniteReturnWindow',
// //                         'returnTime': {
// //                             '@type': 'DateTime',
// //                             'value': 'P30D'
// //                         }
// //                     }
// //                 }
// //             },
// //             {
// //                 '@type': ['Service', 'Product'],
// //                 'name': 'Database Solutions',
// //                 'alternateName': 'Base de Datos',
// //                 'description': 'Enterprise database design and implementation',
// //                 'serviceType': 'Database',
// //                 'category': 'Database',
// //                 'image': 'https://torisoftt.com/projects/dashboard-analytics.jpg', // Dashboard analítico como ejemplo de solución de datos
// //                 'availableLanguage': ['es', 'en'],
// //                 'offers': {
// //                     '@type': 'Offer',
// //                     'price': '399',
// //                     'priceCurrency': 'USD',
// //                     'availability': 'https://schema.org/InStock',
// //                     'priceValidUntil': '2025-12-31',
// //                     'areaServed': {
// //                         '@type': 'Country',
// //                         'name': 'Worldwide'
// //                     },
// //                     'shippingDetails': {
// //                         '@type': 'OfferShippingDetails',
// //                         'deliveryTime': {
// //                             '@type': 'ShippingDeliveryTime',
// //                             'handlingTime': {
// //                                 '@type': 'QuantitativeValue',
// //                                 'minValue': '3',
// //                                 'maxValue': '7',
// //                                 'unitCode': 'DAY'
// //                             }
// //                         },
// //                         'shippingDestination': {
// //                             '@type': 'DefinedRegion',
// //                             'addressCountry': ['*']
// //                         }
// //                     },
// //                     'hasMerchantReturnPolicy': {
// //                         '@type': 'MerchantReturnPolicy',
// //                         'returnPolicyCategory': 'https://schema.org/MerchantReturnFiniteReturnWindow',
// //                         'returnTime': {
// //                             '@type': 'DateTime',
// //                             'value': 'P30D'
// //                         }
// //                     }
// //                 }
// //             },
// //             {
// //                 '@type': ['Service', 'Product'],
// //                 'name': 'IT Consulting',
// //                 'alternateName': 'Consultoría IT',
// //                 'description': 'Technical consulting and optimization services',
// //                 'serviceType': 'Consulting',
// //                 'category': 'Consulting',
// //                 'image': 'https://torisoftt.com/projects/business-dashboard1.jpg', // Dashboard de análisis como ejemplo de consultoría
// //                 'availableLanguage': ['es', 'en'],
// //                 'offers': {
// //                     '@type': 'Offer',
// //                     'price': '149',
// //                     'priceCurrency': 'USD',
// //                     'availability': 'https://schema.org/InStock',
// //                     'priceValidUntil': '2025-12-31',
// //                     'areaServed': {
// //                         '@type': 'Country',
// //                         'name': 'Worldwide'
// //                     },
// //                     'shippingDetails': {
// //                         '@type': 'OfferShippingDetails',
// //                         'deliveryTime': {
// //                             '@type': 'ShippingDeliveryTime',
// //                             'handlingTime': {
// //                                 '@type': 'QuantitativeValue',
// //                                 'minValue': '1',
// //                                 'maxValue': '2',
// //                                 'unitCode': 'DAY'
// //                             }
// //                         },
// //                         'shippingDestination': {
// //                             '@type': 'DefinedRegion',
// //                             'addressCountry': ['*']
// //                         }
// //                     },
// //                     'hasMerchantReturnPolicy': {
// //                         '@type': 'MerchantReturnPolicy',
// //                         'returnPolicyCategory': 'https://schema.org/MerchantReturnFiniteReturnWindow',
// //                         'returnTime': {
// //                             '@type': 'DateTime',
// //                             'value': 'P30D'
// //                         }
// //                     }
// //                 }
// //             }
// //         ]
// //     }
// // }
// //
// // export default function ProductsLayout({
// //     children,
// // }: {
// //     children: React.ReactNode
// // }) {
// //     return (
// //         <>
// //             <script
// //                 type="application/ld+json"
// //                 dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
// //             />
// //             {children}
// //         </>
// //     )
// // }
//
// import { Metadata } from 'next'
//
// export const metadata: Metadata = {
//     title: 'Soluciones Digitales | Desarrollo Web, Apps y Software | Torisoftt',
//     description: 'Encuentra la solución digital perfecta para tu negocio. Desarrollo web desde $199, apps móviles, sistemas personalizados y consultoría técnica.',
//     keywords: 'desarrollo web, aplicaciones móviles, software empresarial, consultoria it, software, paginas web, agencia web',
//     alternates: {
//         canonical: 'https://torisoftt.com/products'
//     },
//     openGraph: {
//         title: 'Soluciones Digitales | Torisoftt',
//         description: 'Desarrollo web, apps y software empresarial',
//         url: 'https://torisoftt.com/products',
//         siteName: 'Torisoftt',
//         locale: 'es',
//         type: 'website',
//         images: [
//             {
//                 url: 'https://torisoftt.com/projects/business-dashboard.jpg',
//                 width: 1200,
//                 height: 630,
//                 alt: 'Torisoftt Soluciones Digitales'
//             }
//         ]
//     }
// }
//
// const servicesSchema = {
//     '@context': 'https://schema.org',
//     '@type': 'Organization',
//     'name': 'Torisoftt',
//     'url': 'https://torisoftt.com',
//     'logo': {
//         '@type': 'ImageObject',
//         'url': 'https://torisoftt.com/favicon.png'
//     },
//     'areaServed': {
//         '@type': 'GeoCircle',
//         'geoMidpoint': {
//             '@type': 'GeoCoordinates',
//             'latitude': -2.9001,
//             'longitude': -79.0059
//         },
//         'geoRadius': 40075000
//     },
//     'address': {
//         '@type': 'PostalAddress',
//         'addressLocality': 'Cuenca',
//         'addressRegion': 'Azuay',
//         'addressCountry': {
//             '@type': 'Country',
//             'name': 'Ecuador',
//             'alternateName': 'EC'
//         }
//     },
//     'hasOfferCatalog': {
//         '@type': 'OfferCatalog',
//         'name': 'Digital Services & Software Solutions',
//         'itemListElement': [
//             {
//                 '@type': 'Service',
//                 'name': 'Professional Web Development',
//                 'alternateName': 'Página Web Profesional',
//                 'description': 'Custom Web Development & UI/UX Design with WordPress optimization',
//                 'serviceType': 'Web Development',
//                 'category': 'Web Development',
//                 'image': {
//                     '@type': 'ImageObject',
//                     'url': 'https://torisoftt.com/projects/legal-landing.jpg'
//                 },
//                 'offers': {
//                     '@type': 'Offer',
//                     'price': '199',
//                     'priceCurrency': 'USD',
//                     'availability': 'https://schema.org/InStock',
//                     'priceValidUntil': '2025-12-31',
//                     'areaServed': {
//                         '@type': 'Country',
//                         'name': 'Worldwide'
//                     },
//                     'deliveryTime': {
//                         '@type': 'ShippingDeliveryTime',
//                         'handlingTime': {
//                             '@type': 'QuantitativeValue',
//                             'minValue': 1,
//                             'maxValue': 3,
//                             'unitCode': 'DAY'
//                         }
//                     }
//                 }
//             },
//             {
//                 '@type': 'Service',
//                 'name': 'Enterprise Software Solutions',
//                 'alternateName': 'Sistema Empresarial',
//                 'description': 'Custom software development for business automation and management',
//                 'serviceType': 'Business Software',
//                 'category': 'Business Software',
//                 'image': {
//                     '@type': 'ImageObject',
//                     'url': 'https://torisoftt.com/projects/business-dashboard.jpg'
//                 },
//                 'offers': {
//                     '@type': 'Offer',
//                     'price': '499',
//                     'priceCurrency': 'USD',
//                     'availability': 'https://schema.org/InStock',
//                     'priceValidUntil': '2025-12-31',
//                     'areaServed': {
//                         '@type': 'Country',
//                         'name': 'Worldwide'
//                     },
//                     'deliveryTime': {
//                         '@type': 'ShippingDeliveryTime',
//                         'handlingTime': {
//                             '@type': 'QuantitativeValue',
//                             'minValue': 5,
//                             'maxValue': 10,
//                             'unitCode': 'DAY'
//                         }
//                     }
//                 }
//             },
//             {
//                 '@type': 'Service',
//                 'name': 'Mobile App Development',
//                 'alternateName': 'Aplicación Móvil',
//                 'description': 'Cross-platform mobile app development for iOS and Android',
//                 'serviceType': 'Mobile Development',
//                 'category': 'Mobile Development',
//                 'image': {
//                     '@type': 'ImageObject',
//                     'url': 'https://torisoftt.com/projects/finance-app.jpg'
//                 },
//                 'offers': {
//                     '@type': 'Offer',
//                     'price': '999',
//                     'priceCurrency': 'USD',
//                     'availability': 'https://schema.org/InStock',
//                     'priceValidUntil': '2025-12-31',
//                     'areaServed': {
//                         '@type': 'Country',
//                         'name': 'Worldwide'
//                     },
//                     'deliveryTime': {
//                         '@type': 'ShippingDeliveryTime',
//                         'handlingTime': {
//                             '@type': 'QuantitativeValue',
//                             'minValue': 7,
//                             'maxValue': 14,
//                             'unitCode': 'DAY'
//                         }
//                     }
//                 }
//             }
//         ]
//     }
// }
//
// export default function ProductsLayout({
//                                            children,
//                                        }: {
//     children: React.ReactNode
// }) {
//     return (
//         <>
//             <script
//                 type="application/ld+json"
//                 dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
//             />
//             {children}
//         </>
//     )
// }


import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Soluciones Digitales | Desarrollo Web, Apps y Software | Torisoftt',
    description: 'Encuentra la solución digital perfecta para tu negocio. Desarrollo web desde $199, apps móviles, sistemas personalizados y consultoría técnica.',
    keywords: 'desarrollo web, aplicaciones móviles, software empresarial, consultoria it, software, paginas web, agencia web',
    alternates: {
        canonical: 'https://torisoftt.com/products'
    },
    openGraph: {
        title: 'Soluciones Digitales | Torisoftt',
        description: 'Desarrollo web, apps y software empresarial',
        url: 'https://torisoftt.com/products',
        siteName: 'Torisoftt',
        locale: 'es',
        type: 'website',
        images: [
            {
                url: 'https://torisoftt.com/projects/business-dashboard.jpg',
                width: 1200,
                height: 630,
                alt: 'Torisoftt Soluciones Digitales'
            }
        ]
    }
}

const servicesSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    'name': 'Torisoftt',
    'url': 'https://torisoftt.com',
    'logo': {
        '@type': 'ImageObject',
        'url': 'https://torisoftt.com/favicon.png'
    },
    'areaServed': {
        '@type': 'GeoCircle',
        'geoMidpoint': {
            '@type': 'GeoCoordinates',
            'latitude': -2.9001,
            'longitude': -79.0059
        },
        'geoRadius': 40075000
    },
    'address': {
        '@type': 'PostalAddress',
        'addressLocality': 'Cuenca',
        'addressRegion': 'Azuay',
        'addressCountry': {
            '@type': 'Country',
            'name': 'Ecuador',
            'alternateName': 'EC'
        }
    },
    'hasOfferCatalog': {
        '@type': 'OfferCatalog',
        'name': 'Digital Services & Software Solutions',
        'itemListElement': [
            {
                '@type': 'Service',
                'name': 'Professional Web Development',
                'alternateName': 'Página Web Profesional',
                'description': 'Custom Web Development & UI/UX Design with WordPress optimization',
                'serviceType': 'Web Development',
                'category': 'Web Development',
                'image': {
                    '@type': 'ImageObject',
                    'url': 'https://torisoftt.com/projects/legal-landing.jpg'
                },
                'offers': {
                    '@type': 'Offer',
                    'price': '199',
                    'priceCurrency': 'USD',
                    'availability': 'https://schema.org/InStock',
                    'priceValidUntil': '2025-12-31',
                    'areaServed': {
                        '@type': 'Country',
                        'name': 'Worldwide'
                    }
                }
            },
            {
                '@type': 'Service',
                'name': 'Enterprise Software Solutions',
                'alternateName': 'Sistema Empresarial',
                'description': 'Custom software development for business automation and management',
                'serviceType': 'Business Software',
                'category': 'Business Software',
                'image': {
                    '@type': 'ImageObject',
                    'url': 'https://torisoftt.com/projects/business-dashboard.jpg'
                },
                'offers': {
                    '@type': 'Offer',
                    'price': '499',
                    'priceCurrency': 'USD',
                    'availability': 'https://schema.org/InStock',
                    'priceValidUntil': '2025-12-31',
                    'areaServed': {
                        '@type': 'Country',
                        'name': 'Worldwide'
                    }
                }
            },
            {
                '@type': 'Service',
                'name': 'Mobile App Development',
                'alternateName': 'Aplicación Móvil',
                'description': 'Cross-platform mobile app development for iOS and Android',
                'serviceType': 'Mobile Development',
                'category': 'Mobile Development',
                'image': {
                    '@type': 'ImageObject',
                    'url': 'https://torisoftt.com/projects/finance-app.jpg'
                },
                'offers': {
                    '@type': 'Offer',
                    'price': '999',
                    'priceCurrency': 'USD',
                    'availability': 'https://schema.org/InStock',
                    'priceValidUntil': '2025-12-31',
                    'areaServed': {
                        '@type': 'Country',
                        'name': 'Worldwide'
                    }
                }
            },
            {
                '@type': 'Service',
                'name': 'IT Consulting',
                'alternateName': 'Consultoría IT',
                'description': 'Technical consulting and optimization services',
                'serviceType': 'Consulting',
                'category': 'Consulting',
                'image': {
                    '@type': 'ImageObject',
                    'url': 'https://torisoftt.com/projects/business-dashboard1.jpg'
                },
                'offers': {
                    '@type': 'Offer',
                    'price': '149',
                    'priceCurrency': 'USD',
                    'availability': 'https://schema.org/InStock',
                    'priceValidUntil': '2025-12-31',
                    'areaServed': {
                        '@type': 'Country',
                        'name': 'Worldwide'
                    }
                }
            }
        ]
    }
}

export default function ProductsLayout({
                                           children,
                                       }: {
    children: React.ReactNode
}) {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
            />
            {children}
        </>
    )
}