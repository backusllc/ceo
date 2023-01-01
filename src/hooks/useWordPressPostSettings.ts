import gql from 'graphql-tag';
import { useQuery } from "@apollo/react-hooks";

export const useWordPressPostSettings = (slug: string) => useQuery(query, { context: { clientName: 'wordpress' }, variables: { slug: slug } });

const query = gql`
query ($slug: String!) {
  postBy(slug: $slug) {
    id
    title
    date
    modified
    content
    commonACF {
      displayenddate
    }
    featuredImage {
      node {
        sourceUrl
        altText
      }
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
`
