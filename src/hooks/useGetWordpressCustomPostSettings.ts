import gql from 'graphql-tag';
import { useQuery } from "@apollo/react-hooks";

interface Props {
  slug: "support" | "logo" | "blog",
  count: number,
  offset: number,
  tagIn: Array<String>,
}

export const useGetWordpressCustomPostSettings = () => useQuery(query, { context: { clientName: 'wordpress' } });

const query = gql`
query GetCustomPostType {
  blogs(
    where: {orderby: {order: DESC, field: DATE}, stati: PUBLISH}
  ) {
    edges {
      node {
        id
        title
        date
        uri
        slug
        content
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
        categories {
          edges {
            node {
              id
            }
          }
        }
        tags {
          edges {
            node {
              id
              name
            }
          }
        }
      }
    }
    pageInfo {
      offsetPagination {
        total
      }
    }
  }
  supports(where: {orderby: {order: DESC, field: DATE}}) {
    edges {
      node {
        id
        title
        date
        uri
        content
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
      }
    }
  }
  logos(where: {orderby: {order: DESC, field: DATE}}) {
    edges {
      node {
        id
        title
        date
        uri
        content
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
      }
    }
  }
}
`
