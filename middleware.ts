// // middleware.ts

// import createMiddleware from 'next-intl/middleware';
// import { NextResponse } from 'next/server';
// import type { NextRequest } from 'next/server';

// const locales = ['es', 'en', 'fr', 'de', 'pt'];
// const publicPages = ['/blog', '/services', '/privacy', '/terms'];

// // Create next-intl middleware
// const intlMiddleware = createMiddleware({
//     locales,
//     defaultLocale: 'es',
//     localePrefix: 'as-needed'
// });

// export default function middleware(request: NextRequest) {
//     const pathname = request.nextUrl.pathname;

//     // Check if the pathname should be handled by next-intl
//     const shouldHandleLocale = publicPages.some(page =>
//         pathname === page || pathname === `/${page}`
//     );

//     if (shouldHandleLocale) {
//         return intlMiddleware(request);
//     }

//     return NextResponse.next();
// }

// export const config = {
//     matcher: ['/', '/(es|en|fr|de|pt)/:path*', '/((?!api|_next|.*\\..*).*)']
// };