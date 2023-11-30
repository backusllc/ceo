import { useQuery, gql } from '@apollo/client';

export const useGetPostSettings = () =>
  useQuery(query, { context: { clientName: 'wordpress' } });

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
`;
