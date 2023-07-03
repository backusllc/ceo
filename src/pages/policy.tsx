import Layout from '../components/organisms/WordPress/Layout';
import React from 'react';
import PrivacyPolicy from '../components/organisms/Shopify/PrivacyPolicy';
import SEO from '../utils/seo';

export default function contact() {

  return (
    <>
      <SEO
        title={"プライバシーポリシー"}
        description={""}
      />
      <Layout >
        < PrivacyPolicy />
      </Layout>
    </>
  )
}
