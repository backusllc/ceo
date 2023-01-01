import React from 'react';

import Activity from '../components/organisms/WordPress/Activity';
import Layout from '../components/organisms/WordPress/Layout';

export default function event({ location }: any) {

  const hash = location.hash;

  return (
    <>
      <Layout >
        <Activity hash={hash} />
      </Layout>
    </>
  )
}
