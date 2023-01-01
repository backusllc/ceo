import gql from 'graphql-tag';
import { useQuery } from "@apollo/react-hooks";

export const useGetPostSettings = () => useQuery(query, { context: { clientName: 'wordpress' } });

const query = gql`
query GetPosts {
    posts(first: 12) {
      edges {
        node {
          id
          title
        }
      }
    }
  }
`
