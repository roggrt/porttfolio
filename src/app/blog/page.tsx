

// src/app/blog/page.tsx
import BlogComponent from '@/components/Blog';

export const metadata = {
    title: 'Blog - roggrt.dev',
    description: 'Artículos sobre desarrollo webs, tecnología y programación',
};

export default function BlogPage() {
    return <BlogComponent />;
}