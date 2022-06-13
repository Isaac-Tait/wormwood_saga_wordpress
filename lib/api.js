const API_URL = process.env.WP_API_URL;

async function fetchAPI(query, { variables } = {}) {
    const headers = { 'Content-Type': 'application/json' };

    const res = await fetch(API_URL, {
        method: 'POST',
        headers,
        body: JSON.stringify({ query, variables })
    });
    
    const json = await res.json();
    if (json.errors) {
        console.error(json.errors);
        console.log('error details', query, variables);
        throw new Error('Failed to fetch API');
    }
    return json.data;
}

export async function getAllPosts(preview) {
    const data = await fetchAPI(
        `
        query AllPosts {
            posts {
              edges {
                node {
                  id
                  date
                  slug
                  title
                  content
                }
              }
            }
          }
        `
    );
    return data?.posts;
}

export async function getAllPostsWithSlug() {
    const data = await fetchAPI(
        `
        {
            posts {
                edges {
                    node {
                        slug
                    }
                }
            }
        }
        `);
    return data?.posts;    
}

export async function getPost(slug) {
    const data = await fetchAPI(
      `
      fragment PostFields on Post {
        title
        excerpt
        slug
        date
      }
      query PostBySlug($id: ID!, $idType: PostIdType!) {
        post(id: $id, idType: $idType) {
          ...PostFields
          content
        }
      }
    `,
      {
        variables: {
          id: slug,
          idType: 'SLUG'
        }
      }
    );
  
    return data;
  }