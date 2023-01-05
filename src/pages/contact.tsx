import Layout from '../components/organisms/WordPress/Layout';
import React from 'react';
import ContactForm from '../components/organisms/Shopify/ContactForm';
import SEO from '../utils/seo';

export default function contact() {

  return (
    <>
      <SEO
        title={"お問い合わせ"}
      />
      <Layout >
        < ContactForm />
      </Layout>
    </>
  )
}
