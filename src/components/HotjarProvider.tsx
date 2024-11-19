// components/providers/HotjarProvider.tsx
'use client';

import { useEffect } from 'react';
import Hotjar from '@hotjar/browser';

const HotjarProvider = () => {
    useEffect(() => {
        const siteId = 5131870;
        const hotjarVersion = 6;

        Hotjar.init(siteId, hotjarVersion);
    }, []);

    return null;
};

export default HotjarProvider;