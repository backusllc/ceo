import React from 'react';

import SEO from '../../../utils/seo';
import SingleBlog from '../../../components/organisms/WordPress/SingleBlog';
import { gql } from '@apollo/client';
import { apolloClient } from '../../../context/shopifyContext';

const EventPage = ({ serverData: { singleData } }: any) => {
  return (
    <>
      <SEO
        title={singleData.title}
        lang={'ja'}
        description={singleData.content}
        img={singleData.featuredImage?.node.sourceUrl}
        alt={singleData.title}
      />
      <SingleBlog blog={singleData} />
    </>
  );
};

export default EventPage;

export async function getServerData(context: any) {
  const res = await getBlogDataServerSide(context.params.name);

  try {
    return {
      props: { singleData: res },
      status: 200,
      headers: {
        'Cache-Control':
          'public, max-age=10, s-maxage=60, stale-while-revalidate=240',
      },
    };
  } catch {
    return {
      singleData: [],
      status: 500,
    };
  }
}

export async function getBlogDataServerSide(slug: string) {
  const response = await apolloClient.query({
    fetchPolicy: 'no-cache',
    variables: { slug: slug },
    context: { clientName: 'wordpress' },
    query: gql`
      query ($slug: String!) {
        blogBy(slug: $slug) {
          id
          title
          date
          modified
          content
          slug
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
  return response.data.blogBy;
}
