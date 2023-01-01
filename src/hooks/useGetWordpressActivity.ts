import gql from 'graphql-tag';
import { useQuery } from "@apollo/react-hooks";

export const useGetWordpressActivity = () => useQuery(query, { context: { clientName: 'wordpress' } });

const query = gql`
query GetActivity {
  allActivity(
    first:9999
    where: {orderby: {order: DESC, field: DATE}, stati: PUBLISH}
  ) {
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
        categories {
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
        hasMore
        hasPrevious
        total
      }
    }
  }
}
`
