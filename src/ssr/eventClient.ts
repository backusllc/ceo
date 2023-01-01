import { gql } from '@apollo/client';

import { apolloClient } from '../context/shopifyContext';

export async function getEventDataServerSide(slug: string) {
  const response = await apolloClient.query({
    fetchPolicy: 'no-cache',
    variables: { slug: slug },
    context: { clientName: 'wordpress' },
    query: gql`
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
        `,
  });
  return response.data.postBy;
}
