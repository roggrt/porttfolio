// src/lib/api.ts
const BLOG_GRAPHQL_FIELDS = `
  sys {
    id
  }
  title
  slug
  body {
    json
    links {
      assets {
        block {
          sys {
            id
          }
          url
          description
        }
      }
    }
  }
  publishDate
  categories
  featuredImage {
    url
    description
  }
`;

async function fetchGraphQL(query: string, preview = false) {
    return fetch(
        `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${
                    preview
                        ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
                        : process.env.CONTENTFUL_ACCESS_TOKEN
                }`,
            },
            body: JSON.stringify({ query }),
            next: { tags: ['blog'] },
        }
    ).then((response) => response.json());
}

export async function getRecentPosts(limit = 3, preview = false) {
    const entries = await fetchGraphQL(
        `query {
      blogPostCollection(order: publishDate_DESC, limit: ${limit}, preview: ${preview ? "true" : "false"}) {
        items {
          ${BLOG_GRAPHQL_FIELDS}
        }
      }
    }`,
        preview
    );
    return entries?.data?.blogPostCollection?.items ?? [];
}

export async function getPostBySlug(slug: string, preview = false) {
    const entry = await fetchGraphQL(
        `query {
      blogPostCollection(where: { slug: "${slug}" }, limit: 1, preview: ${preview ? "true" : "false"}) {
        items {
          ${BLOG_GRAPHQL_FIELDS}
        }
      }
    }`,
        preview
    );
    return entry?.data?.blogPostCollection?.items?.[0] ?? null;
}