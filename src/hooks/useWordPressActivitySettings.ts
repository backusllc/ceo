import gql from 'graphql-tag';
import { useQuery } from "@apollo/client";

export const useWordPressActivitySettings = (slug: string) => useQuery(query, { context: { clientName: 'wordpress' }, variables: { slug: slug } });

const query = gql`
query ($slug: ID!) {
  activity(idType: SLUG, id: $slug)  {
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
  }
}
`
