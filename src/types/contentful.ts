import { Document } from '@contentful/rich-text-types';

export interface BlogPost {
    sys: {
        id: string;
        createdAt: string;
        updatedAt: string;
    };
    fields: {
        title: string;
        body: Document;
        image?: {
            fields: {
                file: {
                    url: string;
                    details: {
                        image: {
                            width: number;
                            height: number;
                        };
                    };
                };
                title?: string;
            };
        };
        recommendedPosts?: BlogPost[];
        seoMetadata?: {
            title?: string;
            description?: string;
            keywords?: string[];
        };
        openGraph?: {
            title?: string;
            description?: string;
            image?: string;
        };
        featuredImageAltText?: string;
        authorInfo?: {
            fields: {
                name: string;
                bio?: string;
                avatar?: {
                    fields: {
                        file: {
                            url: string;
                        };
                    };
                };
            };
        };
        categories?: string[];
        tags?: string[];
        relatedArticles?: BlogPost[];
        customUrl: string;
        readabilityMetrics?: {
            readingTime?: number;
            readabilityScore?: number;
        };
    };
}
