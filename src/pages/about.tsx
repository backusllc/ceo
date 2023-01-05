import { GatsbyLinkProps, graphql } from 'gatsby';
import React from 'react';

import Title from '../components/organisms/WordPress/Title';
import TextImage03 from '../components/organisms/WordPress/TextImage03';
import Philosophy from '../components/organisms/WordPress/Philosophy';
import CompanyInfo from '../components/organisms/WordPress/CompanyInfo';
import Layout from '../components/organisms/WordPress/Layout'
import SNS from '../components/organisms/WordPress/SNS';



export default function service(props: GatsbyLinkProps<{}>) {

  return (
    <>
      <Layout >
        <div className='inner'>
          <Title Tag='h1' title='ABOUT' subTitle='私たちについて' isPageTitle />
        </div>
        <TextImage03 flexDirection={"row-reverse"}
          textAlign={"right"}
          right={0}
          imageSrc={"/images/about_greeting.png"}
          imageAlt={"教育活動"}
          title="EDUCATION"
          content="教育活動"
        />
        <Philosophy />
        <CompanyInfo />
        <SNS />
      </Layout>
    </>
  )
}

export function Head() {
  return (
    <>
      <title>私たちについて | 一般社団法人日本CEO協会</title>
      <meta name="description" content="優秀な経営者・起業家を輩出することで、社会課題を解決し、持続可能な社会の実現を目指す。一般社団法人日本CEO協会のサービスをご紹介します。" />
      <meta property="og:url" content="https://jceoa.org/" />
      <meta property="og:title" content="私たちについて | 一般社団法人日本CEO協会" />
      <meta property="og:image" content="/static/images/logo.png" />
      <meta property="og:description" content="優秀な経営者・起業家を輩出することで、社会課題を解決し、持続可能な社会の実現を目指す。一般社団法人日本CEO協会のサービスをご紹介します。"></meta>
    </>
  )
}
