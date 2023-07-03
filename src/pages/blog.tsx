import React from 'react';

import NewsPage from './../components/organisms/WordPress/NewsPage';
import Layout from './../components/organisms/WordPress/Layout';
import SEO from '../utils/seo';

export default function event() {

  return (
    <>
      <SEO
        title={"ニュース"}
        description={""}
      />
      <Layout >
        <NewsPage />
      </Layout>
    </>
  )
}
