import gql from 'graphql-tag';
import { useQuery } from "@apollo/client";

interface Props {
  slug: "support" | "logo" | "event" | "blog",
  count: number,
  nextId: string,
}

export const useGetWordpressPostByCategorySettings = ({ slug, count, nextId }: Props) => useQuery(query, { context: { clientName: 'wordpress' }, variables: { slug: slug, first: count, after: nextId } });

const query = gql`
query GetPostByCategory($slug: [String] = "", $after: String, $first: Int) {
  categories(where: {slug: $slug}) {
    edges {
      node {
        name
        posts(first: $first
          , after: $after
          , where: {orderby: {order: DESC, field: DATE}}
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
        }
        supports (first: $first
          ,where: {orderby: {order: DESC, field: DATE}}) {
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
        }
      }
    }
  }
}
`
