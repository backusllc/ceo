import gql from 'graphql-tag';
import { useQuery } from "@apollo/client";

export const useGetWordpressTags = () => useQuery(query, { context: { clientName: 'wordpress' } });

const query = gql`
query GetTags {
  tags(where: {orderby: COUNT, order: DESC}) {
    edges {
      node {
        id
        name
        posts {
          edges {
            node {
              id
            }
          }
        }
      }
    }
  }
}
`
