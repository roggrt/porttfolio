// src/components/LanguageSelector.tsx

import { useRouter, usePathname } from 'next/navigation';
import { Globe } from 'lucide-react';

const languages = [
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'en', name: 'English', flag: '🇺🇸' }
];

export default function LanguageSelector() {
    const router = useRouter();
    const pathname = usePathname();

    const handleLanguageChange = (locale: string) => {
        const currentPath = pathname || '/';
        // Remove existing locale if present
        const pathWithoutLocale = currentPath.replace(/^\/[a-z]{2}/, '');
        const newPath = locale === 'es' ? pathWithoutLocale : `/${locale}${pathWithoutLocale}`;
        router.push(newPath);
    };

    return (
        <div className="relative group">
            <button className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
                <Globe className="w-5 h-5 text-accent-red dark:text-accent-yellow" />
                <div className="hidden md:flex gap-1">
                    {languages.map((lang) => (
                        <button
                            key={lang.code}
                            onClick={() => handleLanguageChange(lang.code)}
                            className="px-2 py-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700"
                        >
                            <span>{lang.flag}</span>
                        </button>
                    ))}
                </div>
            </button>
        </div>
    );
}