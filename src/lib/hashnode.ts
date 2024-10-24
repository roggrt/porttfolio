// // // // // src/lib/hashnode.ts
// // // // import { gql } from 'graphql-request';
// // // //
// // // // export const BLOG_POSTS_QUERY = gql`
// // // //   query GetUserArticles($page: Int!) {
// // // //     user(username: "roggrt") {
// // // //       publication {
// // // //         posts(page: $page) {
// // // //           title
// // // //           brief
// // // //           slug
// // // //           dateAdded
// // // //           coverImage
// // // //           tags {
// // // //             name
// // // //           }
// // // //         }
// // // //       }
// // // //     }
// // // //   }
// // // // `;
// // //
// // //
// // // import { gql } from 'graphql-request';
// // //
// // // export const BLOG_POSTS_QUERY = gql`
// // //   query GetUserArticles($page: Int!) {
// // //     user(username: "torisoftware") {
// // //       publication {
// // //         posts(page: $page) {
// // //           _id
// // //           title
// // //           brief
// // //           slug
// // //           dateAdded
// // //           coverImage
// // //           readTime
// // //           tags {
// // //             name
// // //           }
// // //         }
// // //       }
// // //     }
// // //   }
// // // `;
// // //
// // // export const BLOG_POST_QUERY = gql`
// // //   query GetArticle($slug: String!) {
// // //     post(slug: $slug, hostname: "torisoftware") {
// // //       title
// // //       brief
// // //       slug
// // //       dateAdded
// // //       coverImage
// // //       content
// // //       readTime
// // //       tags {
// // //         name
// // //       }
// // //     }
// // //   }
// // // `;
// // //
// // //
// // //
// // // src/lib/hashnode.ts
// // import { GraphQLClient, gql } from 'graphql-request';
// // import React from "react";
// //
// // const HASHNODE_API = 'https://api.hashnode.com';
// // const ACCESS_TOKEN = '595784e1-0af8-4768-82aa-025499fd95d1';
// //
// // const client = new GraphQLClient(HASHNODE_API, {
// //     headers: {
// //         Authorization: ACCESS_TOKEN,
// //         'Content-Type': 'application/json',
// //     },
// // });
// //
// // export const BLOG_POSTS_QUERY = gql`
// //   {
// //     user(username: "torisoftware") {
// //       publication {
// //         posts(page: 0) {
// //           title
// //           brief
// //           slug
// //           coverImage
// //           dateAdded
// //           tags {
// //             name
// //           }
// //         }
// //       }
// //     }
// //   }
// // `;
// //
// // // Interfaces para tipar la respuesta
// // interface Tag {
// //     name: string;
// // }
// //
// // export interface BlogPost {
// //     title: string;
// //     brief: string;
// //     slug: string;
// //     coverImage: string;
// //     dateAdded: string;
// //     tags: Tag[];
// // }
// //
// // interface Publication {
// //     posts: BlogPost[];
// // }
// //
// // interface User {
// //     publication: Publication;
// // }
// //
// // interface HashnodeResponse {
// //     user: User;
// // }
// //
// // export const fetchBlogPosts = async (): Promise<BlogPost[]> => {
// //     try {
// //         const response = await client.request<HashnodeResponse>(BLOG_POSTS_QUERY);
// //         if (!response?.user?.publication?.posts) {
// //             throw new Error('Invalid response structure');
// //         }
// //         return response.user.publication.posts;
// //     } catch (error) {
// //         console.error('Error fetching blog posts:', error);
// //         if (error instanceof Error) {
// //             throw new Error(`Failed to fetch blog posts: ${error.message}`);
// //         }
// //         throw new Error('Failed to fetch blog posts');
// //     }
// // };
// //
// // // Hook personalizado para obtener posts
// // export const useBlogPosts = () => {
// //     const [posts, setPosts] = React.useState<BlogPost[]>([]);
// //     const [loading, setLoading] = React.useState(true);
// //     const [error, setError] = React.useState<string | null>(null);
// //
// //     React.useEffect(() => {
// //         const loadPosts = async () => {
// //             try {
// //                 setLoading(true);
// //                 const data = await fetchBlogPosts();
// //                 setPosts(data);
// //             } catch (err) {
// //                 setError(err instanceof Error ? err.message : 'Error al cargar los posts');
// //                 console.error('Error loading posts:', err);
// //             } finally {
// //                 setLoading(false);
// //             }
// //         };
// //
// //         loadPosts();
// //     }, []);
// //
// //     return { posts, loading, error };
// // };
//
// import { GraphQLClient, gql } from 'graphql-request';
// import React from "react";
//
// const HASHNODE_API = 'https://api.hashnode.com';
// const ACCESS_TOKEN = '595784e1-0af8-4768-82aa-025499fd95d1';
//
// const client = new GraphQLClient(HASHNODE_API, {
//     headers: {
//         Authorization: `Bearer ${ACCESS_TOKEN}`,
//     },
// });
//
// export const BLOG_POSTS_QUERY = gql`
//   query GetUserArticles {
//     user(username: "torisoftware") {
//       publication {
//         posts(page: 0) {
//           edges {
//             node {
//               _id
//               title
//               brief
//               slug
//               dateAdded
//               coverImage
//               readTime
//               tags {
//                 name
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// `;
//
// interface Tag {
//     name: string;
// }
//
// export interface BlogPost {
//     _id: string;
//     title: string;
//     brief: string;
//     slug: string;
//     coverImage: string | null;
//     dateAdded: string;
//     readTime: number;
//     tags: Tag[];
// }
//
// interface Edge {
//     node: BlogPost;
// }
//
// interface HashnodeResponse {
//     user: {
//         publication: {
//             posts: {
//                 edges: Edge[];
//             };
//         };
//     };
// }
//
// export const fetchBlogPosts = async (): Promise<BlogPost[]> => {
//     try {
//         const response = await client.request<HashnodeResponse>(BLOG_POSTS_QUERY);
//         return response.user.publication.posts.edges.map(edge => edge.node);
//     } catch (error) {
//         console.error('Error detallado:', error);
//         throw new Error('Failed to fetch blog posts');
//     }
// };

// src/lib/hashnode.ts
import { GraphQLClient, gql } from 'graphql-request';
import { useState, useEffect } from 'react';

const HASHNODE_API = 'https://api.hashnode.com';
const ACCESS_TOKEN = '595784e1-0af8-4768-82aa-025499fd95d1';

const client = new GraphQLClient(HASHNODE_API, {
    headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
    },
});

export const BLOG_POSTS_QUERY = gql`
  query GetUserArticles {
    user(username: "torisoftware") {
      publication {
        posts(page: 0) {
          edges {
            node {
              _id
              title
              brief
              slug
              dateAdded
              coverImage
              readTime
              tags {
                name
              }
            }
          }
        }
      }
    }
  }
`;

interface Tag {
    name: string;
}

export interface BlogPost {
    _id: string;
    title: string;
    brief: string;
    slug: string;
    coverImage: string | null;
    dateAdded: string;
    readTime: number;
    tags: Tag[];
}

interface Edge {
    node: BlogPost;
}

interface HashnodeResponse {
    user: {
        publication: {
            posts: {
                edges: Edge[];
            };
        };
    };
}

export const useBlogPosts = () => {
    const [posts, setPosts] = useState<BlogPost[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await client.request<HashnodeResponse>(BLOG_POSTS_QUERY);
                const blogPosts = response.user.publication.posts.edges.map(edge => edge.node);
                setPosts(blogPosts);
            } catch (error) {
                console.error('Error fetching posts:', error);
                setError('Error al cargar los artículos');
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    return { posts, loading, error };
};