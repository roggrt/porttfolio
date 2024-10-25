// // components/BlogPostContent.tsx
// 'use client';
//
// import { motion } from 'framer-motion';
// import { BlogPost } from '@/types/contentful';
//
// export default function BlogPostContent({ children }: { children: React.ReactNode }) {
//     return (
//         <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//         >
//             {children}
//         </motion.div>
//     );
// }

// components/BlogPostContent.tsx
'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface BlogPostContentProps {
    children: ReactNode;
}

const BlogPostContent: React.FC<BlogPostContentProps> = ({ children }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
        >
            {children}
        </motion.div>
    );
};

export default BlogPostContent;
