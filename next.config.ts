// // import type { NextConfig } from "next";
// //
// // const nextConfig: NextConfig = {
// //   /* config options here */
// // };
// //
// // export default nextConfig;
//
//
// // next.config.mjs
// const nextConfig = {
//     images: {
//         remotePatterns: [
//             {
//                 protocol: 'https',
//                 hostname: 'cdn.hashnode.com',
//             },
//             {
//                 protocol: 'https',
//                 hostname: '**.hashnode.dev',
//             },
//             {
//                 protocol: 'https',
//                 hostname: 'hashnode.com',
//             },
//             {
//                 protocol: 'https',
//                 hostname: 'avatars.githubusercontent.com',
//             },
//         ],
//     },
//     async headers() {
//         return [
//             {
//                 source: '/api/:path*',
//                 headers: [
//                     { key: 'Access-Control-Allow-Credentials', value: 'true' },
//                     { key: 'Access-Control-Allow-Origin', value: '*' },
//                     { key: 'Access-Control-Allow-Methods', value: 'GET,OPTIONS,PATCH,DELETE,POST,PUT' },
//                     { key: 'Access-Control-Allow-Headers', value: 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization' },
//                 ],
//             },
//         ];
//     },
//     typescript: {
//         ignoreBuildErrors: false,
//     },
//     experimental: {
//         missingSuspenseWithCSRError: false,
//     }
// };
//
// export default nextConfig;


const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.hashnode.com',
            },
        ],
    },
};

export default nextConfig;