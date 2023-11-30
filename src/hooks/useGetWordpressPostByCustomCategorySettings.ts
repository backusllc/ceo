import gql from 'graphql-tag';
import { useQuery } from "@apollo/client";

interface Props {
  blogCount: number,
  supportCount: number,
  logoCount: number,
}

export const useGetWordpressPostByCustomCategorySettings = ({
  blogCount,
  supportCount,
  logoCount }: Props) => useQuery(query, {
    context: { clientName: 'wordpress' },
    variables: {
      blogCount: blogCount,
      supportCount: supportCount,
      logoCount: logoCount
    }
  });

const query = gql`
query GetCustomPostType($blogCount: Int,$supportCount: Int,$logoCount: Int) {
  blogs(first: $blogCount, where: {orderby: {order: DESC, field: DATE}}) {
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
  supports(first: $supportCount, where: {orderby: {order: DESC, field: DATE}}) {
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
      }
    }
  }
  logos(first: $logoCount, where: {orderby: {order: DESC, field: DATE}}) {
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
      }
    }
  }
}
`
