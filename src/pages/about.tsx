import { GatsbyLinkProps } from 'gatsby';
import React from 'react';

import Title from '../components/organisms/WordPress/Title';
import TextImage03 from '../components/organisms/WordPress/TextImage03';
import Philosophy from '../components/organisms/WordPress/Philosophy';
import CompanyInfo from '../components/organisms/WordPress/CompanyInfo';
import Layout from '../components/organisms/WordPress/Layout'
import SNS from '../components/organisms/WordPress/SNS';
import SEO from '../utils/seo';

export default function service(props: GatsbyLinkProps<{}>) {

  return (
    <>
      <SEO
        title={"私たちについて"}
        description={"社会を牽引する意欲ある人に対し、起業、事業承継、プロ経営、どんな形であれ経営者として活躍する機会を提供し、社会に優秀な経営者を輩出していくことは、結果として社会の課題を解決することに繋がり、持続可能な社会の実現に貢献します"}
      />
      <Layout >
        <div className='inner' id="greeting">
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
