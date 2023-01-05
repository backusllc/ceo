import React from 'react';

import NewsPage from './../components/organisms/WordPress/NewsPage';
import Layout from './../components/organisms/WordPress/Layout';

export default function event() {

  return (
    <>
      <Layout >
        <NewsPage />
      </Layout>
    </>
  )
}

export function Head() {
  return (
    <>
      <title>ニュース | 一般社団法人日本CEO協会</title>
      <meta name="description" content="優秀な経営者・起業家を輩出することで、社会課題を解決し、持続可能な社会の実現を目指す。一般社団法人日本CEO協会のサービスをご紹介します。" />
      <meta property="og:url" content="https://jceoa.org/" />
      <meta property="og:title" content="ニュース | 一般社団法人日本CEO協会" />
      <meta property="og:image" content="/static/images/logo.png" />
      <meta property="og:description" content="優秀な経営者・起業家を輩出することで、社会課題を解決し、持続可能な社会の実現を目指す。一般社団法人日本CEO協会のサービスをご紹介します。"></meta>
    </>
  )
}
