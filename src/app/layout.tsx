// // // import { ThemeProvider } from '@/components/providers/ThemeProvider'
// // // import HotjarProvider from '@/components/HotjarProvider'
// // // import './globals.css'
// // // import type { Metadata } from 'next'
// // // import { Analytics } from '@vercel/analytics/react'
// // // import Script from 'next/script'
// // // import { Inter, Montserrat } from 'next/font/google'
// // // import { SpeedInsights } from '@vercel/speed-insights/next'
// // // import MetaPixel from '@/components/MetaPixel'
// // //
// // // const inter = Inter({
// // //     subsets: ['latin'],
// // //     variable: '--font-inter',
// // //     display: 'swap',
// // // })
// // //
// // // const montserrat = Montserrat({
// // //     subsets: ['latin'],
// // //     variable: '--font-montserrat',
// // //     display: 'swap',
// // // })
// // //
// // // export const metadata: Metadata = {
// // //     title: 'Torisoftt | Desarrollo de Software & Soluciones Web',
// // //     description: 'Desarrollo de software y posicionamiento web en Ecuador especializada en crear sitios y páginas web robustas y escalables.',
// // //     keywords: 'desarrollo software, programación ecuador, aplicaciones web, sistemas empresariales',
// // //     icons: {
// // //         icon: '/favicon1.png',
// // //         shortcut: '/favicon1.png',
// // //         apple: '/favicon1.png',
// // //     },
// // //     openGraph: {
// // //         title: 'Torisoftt | Desarrollo de Software & Soluciones Web',
// // //         description: 'Agencia de desarrollo de software especializada en crear soluciones digitales.',
// // //         url: 'https://torisoftt.com',
// // //         siteName: 'Torisoftt',
// // //         images: [
// // //             {
// // //                 url: 'https://torisoftt.com/tori.jpeg',
// // //                 width: 960,
// // //                 height: 1280,
// // //                 alt: 'Torisoftt Logo'
// // //             }
// // //         ],
// // //         locale: 'es_EC',
// // //         type: 'website',
// // //     },
// // //     twitter: {
// // //         card: 'summary_large_image',
// // //         title: 'Torisoftt | Desarrollo de Software',
// // //         description: 'Soluciones de software robustas y escalables',
// // //         images: ['https://torisoftt.com/tori.jpeg'],
// // //     },
// // //     viewport: 'width=device-width, initial-scale=1',
// // //     themeColor: '#ffffff',
// // //     other: {
// // //         'trustpilot-one-time-domain-verification-id': '6f65b079-279e-490f-9575-e91a47079299'
// // //     }
// // // }
// // //
// // // export default function RootLayout({ children }: { children: React.ReactNode }) {
// // //     return (
// // //         <html
// // //             lang="es"
// // //             suppressHydrationWarning
// // //             className={`${inter.variable} ${montserrat.variable}`}
// // //         >
// // //         <head>
// // //             <meta name="trustpilot-one-time-domain-verification-id" content="6f65b079-279e-490f-9575-e91a47079299"/>
// // //         </head>
// // //         <body className="min-h-screen bg-background font-sans antialiased">
// // //         <ThemeProvider>
// // //             <HotjarProvider />
// // //             <MetaPixel />
// // //             <main>{children}</main>
// // //             <SpeedInsights />
// // //             <Analytics />
// // //         </ThemeProvider>
// // //
// // //         {/* Google Analytics */}
// // //         <Script
// // //             src="https://www.googletagmanager.com/gtag/js?id=G-8RTG6CG3GF"
// // //             strategy="afterInteractive"
// // //         />
// // //         <Script id="google-analytics" strategy="afterInteractive">
// // //             {`
// // //                 window.dataLayer = window.dataLayer || [];
// // //                 function gtag(){dataLayer.push(arguments);}
// // //                 gtag('js', new Date());
// // //                 gtag('config', 'G-8RTG6CG3GF', {
// // //                     page_path: window.location.pathname,
// // //                     debug_mode: ${process.env.NODE_ENV === 'development'}
// // //                 });
// // //             `}
// // //         </Script>
// // //         </body>
// // //         </html>
// // //     )
// // // }
// //
// //
// // import { ThemeProvider } from '@/components/providers/ThemeProvider'
// // import HotjarProvider from '@/components/HotjarProvider'
// // import './globals.css'
// // import type { Metadata } from 'next'
// // import { Analytics } from '@vercel/analytics/react'
// // import Script from 'next/script'
// // import { Inter, Montserrat } from 'next/font/google'
// // import { SpeedInsights } from '@vercel/speed-insights/next'
// // import MetaPixel from '@/components/MetaPixel'
// // import IubendaBanner from "@/components/IubendaBanner";
// //
// // import TawkToChat from '@/components/TawkToChat';
// //
// // declare global {
// //     interface Window {
// //         dataLayer: any[];
// //         gtag: (...args: any[]) => void;
// //         _iub: {
// //             csConfiguration: {
// //                 siteId: number;
// //                 cookiePolicyId: number;
// //                 lang: string;
// //                 storage: {
// //                     useSiteId: boolean;
// //                 };
// //             };
// //         };
// //     }
// // }
// //
// // const inter = Inter({
// //     subsets: ['latin'],
// //     variable: '--font-inter',
// //     display: 'swap',
// // })
// //
// // const montserrat = Montserrat({
// //     subsets: ['latin'],
// //     variable: '--font-montserrat',
// //     display: 'swap',
// // })
// //
// // export const metadata: Metadata = {
// //     title: 'Torisoftt | Desarrollo de Software & Soluciones Web',
// //     description: 'Desarrollo de software y posicionamiento web en Ecuador especializada en crear sitios y páginas web robustas y escalables.',
// //     keywords: 'desarrollo software, programación ecuador, aplicaciones web, sistemas empresariales',
// //     icons: {
// //         icon: '/favicon1.png',
// //         shortcut: '/favicon1.png',
// //         apple: '/favicon1.png',
// //     },
// //     openGraph: {
// //         title: 'Torisoftt | Desarrollo de Software & Soluciones Web',
// //         description: 'Agencia de desarrollo de software especializada en crear soluciones digitales.',
// //         url: 'https://torisoftt.com',
// //         siteName: 'Torisoftt',
// //         images: [
// //             {
// //                 url: 'https://torisoftt.com/tori.jpeg',
// //                 width: 960,
// //                 height: 1280,
// //                 alt: 'Torisoftt Logo'
// //             }
// //         ],
// //         locale: 'es_EC',
// //         type: 'website',
// //     },
// //     twitter: {
// //         card: 'summary_large_image',
// //         title: 'Torisoftt | Desarrollo de Software',
// //         description: 'Soluciones de software robustas y escalables',
// //         images: ['https://torisoftt.com/tori.jpeg'],
// //     },
// //     viewport: 'width=device-width, initial-scale=1',
// //     themeColor: '#ffffff',
// //     other: {
// //         'trustpilot-one-time-domain-verification-id': '6f65b079-279e-490f-9575-e91a47079299'
// //     }
// // }
// //
// // export default function RootLayout({ children }: { children: React.ReactNode }) {
// //     return (
// //         <html
// //             lang="es"
// //             suppressHydrationWarning
// //             className={`${inter.variable} ${montserrat.variable}`}
// //         >
// //         <head>
// //             <meta name="trustpilot-one-time-domain-verification-id" content="6f65b079-279e-490f-9575-e91a47079299"/>
// //         </head>
// //         <body className="min-h-screen bg-background font-sans antialiased">
// //         {/*<ThemeProvider>*/}
// //         {/*    <HotjarProvider />*/}
// //         {/*    <MetaPixel />*/}
// //         {/*    <main>{children}</main>*/}
// //         {/*    <SpeedInsights />*/}
// //         {/*    <Analytics />*/}
// //         {/*</ThemeProvider>*/}
// //
// //
// //         <ThemeProvider>
// //             <TawkToChat />
// //             <HotjarProvider />
// //             <MetaPixel />
// //             <main>{children}</main>
// //
// //             <SpeedInsights />
// //             <Analytics />
// //             <IubendaBanner />
// //         </ThemeProvider>
// //
// //         {/* Google Analytics */}
// //         <Script
// //             src="https://www.googletagmanager.com/gtag/js?id=G-8RTG6CG3GF"
// //             strategy="afterInteractive"
// //
// //         />
// //         <Script id="google-analytics" strategy="afterInteractive">
// //             {`
// //                     window.dataLayer = window.dataLayer || [];
// //                     function gtag(){window.dataLayer.push(arguments);}
// //                     window.gtag = gtag;
// //                     gtag('js', new Date());
// //
// //                     // Configuración por defecto de consentimiento
// //                     gtag('consent', 'default', {
// //                         'analytics_storage': 'denied',
// //                         'ad_storage': 'denied',
// //                         'ad_user_data': 'denied',
// //                         'ad_personalization': 'denied'
// //                     });
// //
// //                     gtag('config', 'G-8RTG6CG3GF', {
// //                         page_path: window.location.pathname,
// //                         debug_mode: ${process.env.NODE_ENV === 'development'}
// //                     });
// //                 `}
// //         </Script>
// //
// //         {/* Iubenda Scripts */}
// //         <Script id="iubenda-config" strategy="afterInteractive">
// //             {`
// //                     var _iub = _iub || [];
// //                     _iub.csConfiguration = {
// //                         "siteId":3912536,
// //                         "cookiePolicyId":13487800,
// //                         "lang":"es",
// //                         "storage":{"useSiteId":true}
// //                     };
// //                 `}
// //         </Script>
// //         <Script
// //             src="https://cs.iubenda.com/autoblocking/3912536.js"
// //             strategy="afterInteractive"
// //         />
// //         <Script
// //             src="//cdn.iubenda.com/cs/gpp/stub.js"
// //             strategy="afterInteractive"
// //         />
// //         <Script
// //             src="//cdn.iubenda.com/cs/iubenda_cs.js"
// //             strategy="afterInteractive"
// //             async
// //         />
// //         </body>
// //         </html>
// //     )
// // }
//
// // import { ThemeProvider } from '@/components/providers/ThemeProvider'
// // import HotjarProvider from '@/components/HotjarProvider'
// // import './globals.css'
// // import type { Metadata } from 'next'
// // import { Analytics } from '@vercel/analytics/react'
// // import Script from 'next/script'
// // import { Inter, Montserrat } from 'next/font/google'
// // import { SpeedInsights } from '@vercel/speed-insights/next'
// // import MetaPixel from '@/components/MetaPixel'
// //
// // const inter = Inter({
// //     subsets: ['latin'],
// //     variable: '--font-inter',
// //     display: 'swap',
// // })
// //
// // const montserrat = Montserrat({
// //     subsets: ['latin'],
// //     variable: '--font-montserrat',
// //     display: 'swap',
// // })
// //
// // export const metadata: Metadata = {
// //     title: 'Torisoftt | Desarrollo de Software & Soluciones Web',
// //     description: 'Desarrollo de software y posicionamiento web en Ecuador especializada en crear sitios y páginas web robustas y escalables.',
// //     keywords: 'desarrollo software, programación ecuador, aplicaciones web, sistemas empresariales',
// //     icons: {
// //         icon: '/favicon1.png',
// //         shortcut: '/favicon1.png',
// //         apple: '/favicon1.png',
// //     },
// //     openGraph: {
// //         title: 'Torisoftt | Desarrollo de Software & Soluciones Web',
// //         description: 'Agencia de desarrollo de software especializada en crear soluciones digitales.',
// //         url: 'https://torisoftt.com',
// //         siteName: 'Torisoftt',
// //         images: [
// //             {
// //                 url: 'https://torisoftt.com/tori.jpeg',
// //                 width: 960,
// //                 height: 1280,
// //                 alt: 'Torisoftt Logo'
// //             }
// //         ],
// //         locale: 'es_EC',
// //         type: 'website',
// //     },
// //     twitter: {
// //         card: 'summary_large_image',
// //         title: 'Torisoftt | Desarrollo de Software',
// //         description: 'Soluciones de software robustas y escalables',
// //         images: ['https://torisoftt.com/tori.jpeg'],
// //     },
// //     viewport: 'width=device-width, initial-scale=1',
// //     themeColor: '#ffffff',
// //     other: {
// //         'trustpilot-one-time-domain-verification-id': '6f65b079-279e-490f-9575-e91a47079299'
// //     }
// // }
// //
// // export default function RootLayout({ children }: { children: React.ReactNode }) {
// //     return (
// //         <html
// //             lang="es"
// //             suppressHydrationWarning
// //             className={`${inter.variable} ${montserrat.variable}`}
// //         >
// //         <head>
// //             <meta name="trustpilot-one-time-domain-verification-id" content="6f65b079-279e-490f-9575-e91a47079299"/>
// //         </head>
// //         <body className="min-h-screen bg-background font-sans antialiased">
// //         <ThemeProvider>
// //             <HotjarProvider />
// //             <MetaPixel />
// //             <main>{children}</main>
// //             <SpeedInsights />
// //             <Analytics />
// //         </ThemeProvider>
// //
// //         {/* Google Analytics */}
// //         <Script
// //             src="https://www.googletagmanager.com/gtag/js?id=G-8RTG6CG3GF"
// //             strategy="afterInteractive"
// //         />
// //         <Script id="google-analytics" strategy="afterInteractive">
// //             {`
// //                 window.dataLayer = window.dataLayer || [];
// //                 function gtag(){dataLayer.push(arguments);}
// //                 gtag('js', new Date());
// //                 gtag('config', 'G-8RTG6CG3GF', {
// //                     page_path: window.location.pathname,
// //                     debug_mode: ${process.env.NODE_ENV === 'development'}
// //                 });
// //             `}
// //         </Script>
// //         </body>
// //         </html>
// //     )
// // }
//
//
// import { ThemeProvider } from '@/components/providers/ThemeProvider'
// import HotjarProvider from '@/components/HotjarProvider'
// import './globals.css'
// import type { Metadata } from 'next'
// import { Analytics } from '@vercel/analytics/react'
// import Script from 'next/script'
// import { Inter, Montserrat } from 'next/font/google'
// import { SpeedInsights } from '@vercel/speed-insights/next'
// import MetaPixel from '@/components/MetaPixel'
// import IubendaBanner from "@/components/IubendaBanner";
//
// import TawkToChat from '@/components/TawkToChat';
//
// declare global {
//     interface Window {
//         dataLayer: any[];
//         gtag: (...args: any[]) => void;
//         _iub: {
//             csConfiguration: {
//                 siteId: number;
//                 cookiePolicyId: number;
//                 lang: string;
//                 storage: {
//                     useSiteId: boolean;
//                 };
//             };
//         };
//     }
// }
//
// const inter = Inter({
//     subsets: ['latin'],
//     variable: '--font-inter',
//     display: 'swap',
// })
//
// const montserrat = Montserrat({
//     subsets: ['latin'],
//     variable: '--font-montserrat',
//     display: 'swap',
// })
//
// export const metadata: Metadata = {
//     title: 'Torisoftt | Desarrollo de Software & Soluciones Web',
//     description: 'Desarrollo de software y posicionamiento web en Ecuador especializada en crear sitios y páginas web robustas y escalables.',
//     keywords: 'desarrollo software, programación ecuador, aplicaciones web, sistemas empresariales',
//     icons: {
//         icon: '/favicon1.png',
//         shortcut: '/favicon1.png',
//         apple: '/favicon1.png',
//     },
//     openGraph: {
//         title: 'Torisoftt | Desarrollo de Software & Soluciones Web',
//         description: 'Agencia de desarrollo de software especializada en crear soluciones digitales.',
//         url: 'https://torisoftt.com',
//         siteName: 'Torisoftt',
//         images: [
//             {
//                 url: 'https://torisoftt.com/tori.jpeg',
//                 width: 960,
//                 height: 1280,
//                 alt: 'Torisoftt Logo'
//             }
//         ],
//         locale: 'es_EC',
//         type: 'website',
//     },
//     twitter: {
//         card: 'summary_large_image',
//         title: 'Torisoftt | Desarrollo de Software',
//         description: 'Soluciones de software robustas y escalables',
//         images: ['https://torisoftt.com/tori.jpeg'],
//     },
//     viewport: 'width=device-width, initial-scale=1',
//     themeColor: '#ffffff',
//     other: {
//         'trustpilot-one-time-domain-verification-id': '6f65b079-279e-490f-9575-e91a47079299'
//     }
// }
//
// export default function RootLayout({ children }: { children: React.ReactNode }) {
//     return (
//         <html
//             lang="es"
//             suppressHydrationWarning
//             className={`${inter.variable} ${montserrat.variable}`}
//         >
//         <head>
//             <meta name="trustpilot-one-time-domain-verification-id" content="6f65b079-279e-490f-9575-e91a47079299"/>
//         </head>
//         <body className="min-h-screen bg-background font-sans antialiased">
//         {/*<ThemeProvider>*/}
//         {/*    <HotjarProvider />*/}
//         {/*    <MetaPixel />*/}
//         {/*    <main>{children}</main>*/}
//         {/*    <SpeedInsights />*/}
//         {/*    <Analytics />*/}
//         {/*</ThemeProvider>*/}
//
//
//         <ThemeProvider>
//             <TawkToChat />
//             <HotjarProvider />
//             <MetaPixel />
//             <main>{children}</main>
//
//             <SpeedInsights />
//             <Analytics />
//             <IubendaBanner />
//         </ThemeProvider>
//
//         {/* Google Analytics */}
//         <Script
//             src="https://www.googletagmanager.com/gtag/js?id=G-8RTG6CG3GF"
//             strategy="afterInteractive"
//
//         />
//         <Script id="google-analytics" strategy="afterInteractive">
//             {`
//                     window.dataLayer = window.dataLayer || [];
//                     function gtag(){window.dataLayer.push(arguments);}
//                     window.gtag = gtag;
//                     gtag('js', new Date());
//
//                     // Configuración por defecto de consentimiento
//                     gtag('consent', 'default', {
//                         'analytics_storage': 'denied',
//                         'ad_storage': 'denied',
//                         'ad_user_data': 'denied',
//                         'ad_personalization': 'denied'
//                     });
//
//                     gtag('config', 'G-8RTG6CG3GF', {
//                         page_path: window.location.pathname,
//                         debug_mode: ${process.env.NODE_ENV === 'development'}
//                     });
//                 `}
//         </Script>
//
//         {/* Iubenda Scripts */}
//         <Script id="iubenda-config" strategy="afterInteractive">
//             {`
//                     var _iub = _iub || [];
//                     _iub.csConfiguration = {
//                         "siteId":3912536,
//                         "cookiePolicyId":13487800,
//                         "lang":"es",
//                         "storage":{"useSiteId":true}
//                     };
//                 `}
//         </Script>
//         <Script
//             src="https://cs.iubenda.com/autoblocking/3912536.js"
//             strategy="afterInteractive"
//         />
//         <Script
//             src="//cdn.iubenda.com/cs/gpp/stub.js"
//             strategy="afterInteractive"
//         />
//         <Script
//             src="//cdn.iubenda.com/cs/iubenda_cs.js"
//             strategy="afterInteractive"
//             async
//         />
//         </body>
//         </html>
//     )
// }


import { ThemeProvider } from '@/components/providers/ThemeProvider'
import HotjarProvider from '@/components/HotjarProvider'
import './globals.css'
import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'
import Script from 'next/script'
import { Inter, Montserrat } from 'next/font/google'
import { SpeedInsights } from '@vercel/speed-insights/next'
import MetaPixel from '@/components/MetaPixel'
import IubendaBanner from "@/components/IubendaBanner"

import TawkMessenger from "@/components/TawkToChat";

declare global {
    interface Window {
        dataLayer: any[];
        gtag: (...args: any[]) => void;
        _iub: {
            csConfiguration: {
                siteId: number;
                cookiePolicyId: number;
                lang: string;
                storage: {
                    useSiteId: boolean;
                };
            };
        };
        Tawk_API: any;
        Tawk_LoadStart: Date;
    }
}

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap',
})

const montserrat = Montserrat({
    subsets: ['latin'],
    variable: '--font-montserrat',
    display: 'swap',
})

export const metadata: Metadata = {
    title: 'Torisoftt | Desarrollo de Software & Soluciones Web',
    description: 'Desarrollo de software y posicionamiento web en Ecuador especializada en crear sitios y páginas web robustas y escalables.',
    keywords: 'desarrollo software, programación ecuador, aplicaciones web, sistemas empresariales',
    icons: {
        icon: '/favicon1.png',
        shortcut: '/favicon1.png',
        apple: '/favicon1.png',
    },
    openGraph: {
        title: 'Torisoftt | Desarrollo de Software & Soluciones Web',
        description: 'Agencia de desarrollo de software especializada en crear soluciones digitales.',
        url: 'https://torisoftt.com',
        siteName: 'Torisoftt',
        images: [
            {
                url: 'https://torisoftt.com/tori.jpeg',
                width: 960,
                height: 1280,
                alt: 'Torisoftt Logo'
            }
        ],
        locale: 'es_EC',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Torisoftt | Desarrollo de Software',
        description: 'Soluciones de software robustas y escalables',
        images: ['https://torisoftt.com/tori.jpeg'],
    },
    viewport: 'width=device-width, initial-scale=1',
    themeColor: '#ffffff',
    other: {
        'trustpilot-one-time-domain-verification-id': '6f65b079-279e-490f-9575-e91a47079299'
    }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html
            lang="es"
            suppressHydrationWarning
            className={`${inter.variable} ${montserrat.variable}`}
        >
        <head>
            <meta name="trustpilot-one-time-domain-verification-id" content="6f65b079-279e-490f-9575-e91a47079299"/>
            <Script id="tawkto" strategy="beforeInteractive">
                {`
                   var Tawk_API=Tawk_API||{};
                   Tawk_API.onLoad = function(){
                       Tawk_API.setAttributes({
                           name: 'Visitante',
                       }, function(error){});
                       
                       Tawk_API.onChatStarted = function(){
                           Tawk_API.sendMessage('¡Hola! 👋 Bienvenido a Torisoftt. Soy Santiago, ¿en qué puedo ayudarte hoy? 🚀', {
                               callback: function() {}
                           });
                       };
                   };
                   var Tawk_LoadStart=new Date();
                   (function(){
                       var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
                       s1.async=true;
                       s1.src='https://embed.tawk.to/679d24d13a842732607853b4/1iiutfkok';
                       s1.charset='UTF-8';  
                       s1.setAttribute('crossorigin','*');
                       s0.parentNode.insertBefore(s1,s0);
                   })();
               `}
            </Script>
        </head>
        <body className="min-h-screen bg-background font-sans antialiased">
        <ThemeProvider>
            <HotjarProvider />
            <MetaPixel />
            <main>{children}</main>
            <TawkMessenger />
            <SpeedInsights />
            <Analytics />
            <IubendaBanner />
        </ThemeProvider>

        {/* Google Analytics */}
        <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-8RTG6CG3GF"
            strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
            {`
                   window.dataLayer = window.dataLayer || [];
                   function gtag(){window.dataLayer.push(arguments);}
                   window.gtag = gtag;
                   gtag('js', new Date());
                   
                   gtag('consent', 'default', {
                       'analytics_storage': 'denied',
                       'ad_storage': 'denied',
                       'ad_user_data': 'denied',
                       'ad_personalization': 'denied'
                   });

                   gtag('config', 'G-8RTG6CG3GF', {
                       page_path: window.location.pathname,
                       debug_mode: ${process.env.NODE_ENV === 'development'}
                   });
               `}
        </Script>

        {/* Iubenda Scripts */}
        <Script id="iubenda-config" strategy="afterInteractive">
            {`
                   var _iub = _iub || [];
                   _iub.csConfiguration = {
                       "siteId":3912536,
                       "cookiePolicyId":13487800,
                       "lang":"es",
                       "storage":{"useSiteId":true}
                   };
               `}
        </Script>
        <Script
            src="https://cs.iubenda.com/autoblocking/3912536.js"
            strategy="afterInteractive"
        />
        <Script
            src="//cdn.iubenda.com/cs/gpp/stub.js"
            strategy="afterInteractive"
        />
        <Script
            src="//cdn.iubenda.com/cs/iubenda_cs.js"
            strategy="afterInteractive"
            async
        />
        </body>
        </html>
    )
}