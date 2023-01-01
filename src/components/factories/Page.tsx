import React, { useContext, useEffect } from 'react';

import { PageRuntimeSettings } from '../../types/PageSettings';
import { CommonRuntimeSettings } from '../../types/SiteSettings';

import CategoryProducts from '../../components/organisms/Shopify/CategoryProducts';
import Hero from './Hero';
// import { Helmet } from 'react-helmet';
import TextImage01 from '../../components/organisms/WordPress/TextImage01';
import TextImage02 from '../../components/organisms/WordPress/TextImage02';
import News from '../../components/organisms/WordPress/News';
import Member from '../../components/organisms/WordPress/Member';
import Logos from '../../components/organisms/WordPress/Logos';
import SNS from '../../components/organisms/WordPress/SNS';
import AutoSlider from '../organisms/WordPress/AutoSlider';
import Title from '../organisms/WordPress/Title';
import { useGetWordpressPostByCustomCategorySettings } from '../../hooks/useGetWordpressPostByCustomCategorySettings';
import { useGetWordpressPostByCategorySettings } from '../../hooks/useGetWordpressPostByCategorySettings';
import SocialSection from '../../components/organisms/WordPress/SocialSection';
import { GatsbyContext } from '../../context/context';

interface Props {
  commonSettings: CommonRuntimeSettings;
  pageSettings: PageRuntimeSettings;
}

export const Page = (props: Props) => {

  const { loading: postLoading, data: postLists } = useGetWordpressPostByCategorySettings({ slug: "event", count: 3, nextId: "" });
  const { loading: directorPostLoading, data: directorPostLists } = useGetWordpressPostByCategorySettings({ slug: "director", count: 999, nextId: "" });
  const { loading: supporterPostLoading, data: supporterPostLists } = useGetWordpressPostByCategorySettings({ slug: "supporter", count: 999, nextId: "" });
  const { loading: customPostLoading, data: customPostLists } = useGetWordpressPostByCustomCategorySettings({ blogCount: 4, eventCount: 3, supportCount: 999, logoCount: 999 });
  const { isSidebarOpen } = useContext(GatsbyContext);

  useEffect(() => {
    async function asyncFetchAllProducts() {
    };
    asyncFetchAllProducts();
  }, [])

  if (postLoading) { return <div></div>; }
  if (directorPostLoading) { return <div></div>; }
  if (supporterPostLoading) { return <div></div>; }
  if (customPostLoading) { return <div></div>; }

  const postItems = postLists.categories.edges[0].node.posts.edges;
  const directorPostItems = directorPostLists.categories.edges[0].node.supports;
  const supporterPostItems = supporterPostLists.categories.edges[0].node.supports;
  const directorName = directorPostLists.categories.edges[0].node.name;
  const supporterName = supporterPostLists.categories.edges[0].node.name;

  const blogItems = customPostLists.blogs;
  const logoItems = customPostLists.logos;

  return (
    <>
      {!isSidebarOpen &&
        <>
          {/* <Helmet>
            <script src="https://platform.twitter.com/widgets.js" />
            <script
              async
              defer
              crossOrigin="anonymous"
              src="https://connect.facebook.net/ja_JP/sdk.js#xfbml=1&version=v10.0"
              nonce="F5crYADj"
            />
          </Helmet> */}
          <div>
            <Hero settings={props.pageSettings.top} />
            <TextImage01 />
            <AutoSlider />
            <Title Tag='h2' title='ACTIVITY' subTitle='活動概要' />
            <TextImage02 flexDirection={"row"}
              textAlign={"right"}
              right={0}
              imageSrc={"https://xs893709.xsrv.jp/wp-content/uploads/2022/10/top_education.png"}
              imageAlt={"教育活動"}
              title="EDUCATION"
              content="教育活動"
              description="この激しい変化の真っ只中にある現代社会に必要とされるのは、変化を好機ととらえ、主体的に考え実践、実装していく人間だ。" />
            <TextImage02 flexDirection={"row-reverse"}
              textAlign={"left"}
              left={0}
              imageSrc={"https://xs893709.xsrv.jp/wp-content/uploads/2022/10/top_education.png"}
              imageAlt={"コミュニティ"}
              title="COMMUNITY"
              content="コミュニティ"
              description="この激しい変化の真っ只中にある現代社会に必要とされるのは、変化を好機ととらえ、主体的に考え実践、実装していく人間だ。" />
            <TextImage02 flexDirection={"row"}
              textAlign={"right"}
              right={0}
              imageSrc={"https://xs893709.xsrv.jp/wp-content/uploads/2022/10/top_education.png"}
              imageAlt={"イベント"}
              title="EVENT"
              content="イベント"
              description="この激しい変化の真っ只中にある現代社会に必要とされるのは、変化を好機ととらえ、主体的に考え実践、実装していく人間だ。" />
            <section>
              <Title Tag='h2' title='EVENT' subTitle='イベント情報' />
              <div className="inner">
                <CategoryProducts dataSrc={postItems} title={"イベント"} slug="event" displayCount={3} />
              </div>
            </section>
            <section>
              <Title Tag='h2' title='NEWS' subTitle='お知らせ' />
              <News dataSrc={blogItems} title={"イベント"} slug="event" displayCount={4} />
            </section>
            <section>
              <Title Tag='h2' title='MEMBER' subTitle='メンバー一覧' />
              <Member categoryName={directorName} dataSrc={directorPostItems} />
              <Member categoryName={supporterName} dataSrc={supporterPostItems} />
              <Logos dataSrc={logoItems} />
            </section>
            <SocialSection />
            <SNS />
          </div >
        </>
      }
    </>
  );
};
