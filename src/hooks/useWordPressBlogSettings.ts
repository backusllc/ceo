import gql from 'graphql-tag';
import { useQuery } from "@apollo/client";

export const useWordPressBlogSettings = (slug: string) => useQuery(query, { context: { clientName: 'wordpress' }, variables: { slug: slug } });

const query = gql`
query ($slug: String!) {
  blogBy(slug: $slug) {
    id
    title
    date
    modified
    content
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
