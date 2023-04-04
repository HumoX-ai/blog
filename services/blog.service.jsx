import { request, gql } from "graphql-request";

const graphAPI =
  "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clfz1tb3z6ptu01uo6n9scczl/master";

export const BlogsService = {
  async getAllBlogs() {
    const query = gql`
      query GetBlogs {
        blogs {
          excerpt
          id
          slug
          title
          createdAt
          image {
            url
          }
          author {
            name
            avatar {
              url
            }
          }
          category {
            label
            slug
          }
          description {
            text
          }
        }
      }
    `;

    const result = await request(graphAPI, query);
    return result.blogs;
  },

  async getLatestBlog() {
    const query = gql`
      query GetLatestBlog {
        blogs(last: 3) {
          id
          slug
          title
          createdAt
          image {
            url
          }
          description {
            text
          }
          author {
            name
            avatar {
              url
            }
          }
        }
      }
    `;

    const result = await request(graphAPI, query);
    return result.blogs;
  },

  async getCategories() {
    const query = gql`
      query GetCategories {
        categories {
          slug
          label
        }
      }
    `;
    const result = await request(graphAPI, query);
    return result.categories;
  },

  async getDetailedBlog(slug) {
    const query = gql`
      query GetDetailBlog($slug: String!) {
        blog(where: { slug: $slug }) {
          excerpt
          id
          slug
          title
          image {
            url
          }
          author {
            name
            avatar {
              url
            }
          }
          category {
            label
            slug
          }
          description {
            html
            text
          }
        }
      }
    `;

    const result = await request(graphAPI, query, { slug });
    return result.blog;
  },

  async getDetailedCategoriesBlog(slug) {
    const query = gql`
      query getCategoriesBlog($slug: String!) {
        blogs(where: { category: { slug: $slug } }) {
          excerpt
          id
          slug
          title
          createdAt
          image {
            url
          }
          author {
            name
            avatar {
              url
            }
          }
          category {
            label
            slug
          }
          description {
            text
          }
        }
      }
    `;
    const result = await request(graphAPI, query, { slug });
    return result.blogs;
  },
};
