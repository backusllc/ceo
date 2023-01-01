import React from 'react';

import Events from './../components/organisms/WordPress/Events';
import Layout from './../components/organisms/WordPress/Layout';

export default function event({ location }: any) {

  const hash = location.hash;

  return (
    <>
      <Layout >
        <Events hash={hash} />
      </Layout>
    </>
  )
}
