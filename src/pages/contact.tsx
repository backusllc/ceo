import Layout from '../components/organisms/WordPress/Layout';
import React from 'react';
import ContactForm from '../components/organisms/Shopify/ContactForm';
import SEO from '../utils/seo';

export default function contact() {

  return (
    <>
      <SEO
        title={"お問い合わせ"}
        description={"お問い合わせは、下記フォームに必要事項をご記入のうえ、メッセージを送信してください。"}
      />
      <Layout >
        < ContactForm />
      </Layout>
    </>
  )
}
