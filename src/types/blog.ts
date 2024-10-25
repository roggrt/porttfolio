// src/types/blog.ts
export interface BlogPost {
    sys: {
        id: string;
    };
    title: string;
    slug: string;
    body: {
        json: any;
        links?: {
            assets?: {
                block?: {
                    sys: {
                        id: string;
                    };
                    url: string;
                    description: string;
                }[];
            };
        };
    };
    publishDate: string;
    categories: string[];
    featuredImage: {
        url: string;
        description?: string;
    };
}

export interface BlogPostCollection {
    data: {
        blogPostCollection: {
            items: BlogPost[];
        };
    };
}