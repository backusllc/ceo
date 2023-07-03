import React from 'react';

import Events from './../components/organisms/WordPress/Events';
import Layout from './../components/organisms/WordPress/Layout';
import SEO from '../utils/seo';

export default function event({ location }: any) {

  const hash = location.hash;

  return (
    <>
      <SEO
        title={"イベント"}
        description={""}
      />
      <Layout >
        <Events hash={hash} />
      </Layout>
    </>
  )
}
