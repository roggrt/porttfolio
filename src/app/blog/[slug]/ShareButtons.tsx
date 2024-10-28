// src/app/blog/[slug]/ShareButtons.tsx
'use client';

import { Share2 } from 'lucide-react';

interface ShareButtonsProps {
    title: string;
}

export default function ShareButtons({ title }: ShareButtonsProps) {
    const handleShare = async () => {
        const shareData = {
            title: title,
            url: window.location.href,
        };

        try {
            if (navigator.share) {
                await navigator.share(shareData);
            } else {
                // Fallback para navegadores que no soportan Web Share API
                const url = encodeURIComponent(window.location.href);
                const text = encodeURIComponent(title);
                window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`, '_blank');
            }
        } catch (err) {
            console.log('Error sharing:', err);
        }
    };

    return (
        <button
            onClick={handleShare}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100 
                     dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 
                     dark:hover:bg-gray-700 transition-colors"
        >
            <Share2 className="w-4 h-4" />
            <span>Compartir</span>
        </button>
    );
}