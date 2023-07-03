import React from 'react';

import Activity from '../components/organisms/WordPress/Activity';
import Layout from '../components/organisms/WordPress/Layout';
import SEO from '../utils/seo';

export default function event({ location }: any) {

  const hash = location.hash;

  return (
    <>
      <SEO
        title={"活動概要"}
        description={""}
      />
      <Layout >
        <Activity hash={hash} />
      </Layout>
    </>
  )
}
