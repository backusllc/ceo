import gql from 'graphql-tag';
import { useQuery } from "@apollo/react-hooks";

export const useGetWordpressEvents = () => useQuery(query, { context: { clientName: 'wordpress' } });

const query = gql`
query GetEvents {
  posts(
    first:9999
    where: {orderby: {order: DESC, field: DATE}, stati: PUBLISH}
  ) {
    edges {
      node {
        id
        title
        date
        uri
        excerpt
        content
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
        commonACF {
          displayenddate
        }
        tags {
          edges {
            node {
              name
              id
            }
          }
        }
      }
    }
    pageInfo {
      offsetPagination {
        hasMore
        hasPrevious
        total
      }
    }
  }
}
`
