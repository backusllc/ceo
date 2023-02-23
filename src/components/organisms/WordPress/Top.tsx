import React, { useContext, Suspense } from 'react';
import { GatsbyContext } from '../../../context/context';

import CategoryProducts from '../../../components/organisms/Shopify/CategoryProducts';
import { OgOneColumnHero } from '../../../components/organisms/Heroes/OgOneColumnHero';
import TextImage01 from '../../../components/organisms/WordPress/TextImage01';
import TextImage02 from '../../../components/organisms/WordPress/TextImage02';
import News from '../../../components/organisms/WordPress/News';
import Member from '../../../components/organisms/WordPress/Member';
import Logos from '../../../components/organisms/WordPress/Logos';
import AutoSlider from '../../../components/organisms/WordPress/AutoSlider';
import SNS from '../../../components/organisms/WordPress/SNS';
import TopTitle from '../../../components/organisms/WordPress/TopTitle';
import { useGetWordpressPostByCustomCategorySettings } from '../../../hooks/useGetWordpressPostByCustomCategorySettings';
import { useGetWordpressPostByCategorySettings } from '../../../hooks/useGetWordpressPostByCategorySettings';
import SocialSection from '../../../components/organisms/WordPress/SocialSection';
import Loading from "../../../components/organisms/Loading";
import Layout from '../../../components/organisms/WordPress/Layout';
import { Modal } from './Modal';
import SEO from '../../../utils/seo';


import { eventSection, newsSection, memberSection } from './Top.css'

export default function Index() {

    const { loading: postLoading, data: postLists } = useGetWordpressPostByCategorySettings({ slug: "event", count: 3, nextId: "" });
    const { loading: directorPostLoading, data: directorPostLists } = useGetWordpressPostByCategorySettings({ slug: "director", count: 999, nextId: "" });
    const { loading: memberPostLoading, data: memberPostLists } = useGetWordpressPostByCategorySettings({ slug: "member", count: 999, nextId: "" });
    const { loading: supporterPostLoading, data: supporterPostLists } = useGetWordpressPostByCategorySettings({ slug: "supporter", count: 999, nextId: "" });
    const { loading: customPostLoading, data: customPostLists } = useGetWordpressPostByCustomCategorySettings({ blogCount: 4, eventCount: 3, supportCount: 999, logoCount: 999 });
    const { isSidebarOpen } = useContext(GatsbyContext);
    // const [blockSelectorIsOpen, setBlockSelectorIsOpen] = React.useState(false);

    if (postLoading) { return <Loading /> }
    if (memberPostLoading) { return <Loading /> }
    if (directorPostLoading) { return <Loading /> }
    if (supporterPostLoading) { return <Loading /> }
    if (customPostLoading) { return <Loading /> }

    const postItems = postLists.categories.edges[0].node.posts.edges;
    const directorPostItems = directorPostLists.categories.edges[0].node.supports;
    const memberPostItems = memberPostLists.categories.edges[0].node.supports;
    const supporterPostItems = supporterPostLists.categories.edges[0].node.supports;
    const memberName = memberPostLists.categories.edges[0].node.name;
    const directorName = directorPostLists.categories.edges[0].node.name;
    const supporterName = supporterPostLists.categories.edges[0].node.name;

    const blogItems = customPostLists.blogs;
    const logoItems = customPostLists.logos;

    return (
        <>
            <Suspense fallback={<Loading />}>
                <SEO />
                <Layout >
                    {!isSidebarOpen &&
                        <>
                            <div>
                                <OgOneColumnHero />
                                <TextImage01 />
                                <AutoSlider />
                                <div className="inner" >
                                    <TopTitle Tag='h2' title='ACTIVITY' subTitle='活動概要' />
                                </div>
                                <TextImage02 flexDirection={"row"}
                                    textAlign={"right"}
                                    right={0}
                                    imageSrc={"/images/top_education"}
                                    imageAlt={"教育活動"}
                                    title="EDUCATION"
                                    content="教育活動"
                                    description="この激しい変化の真っ只中にある現代社会に必要とされるのは、変化を好機ととらえ、主体的に考え実践、実装していく人間だ。"
                                    toLink="/activity#education" />
                                <TextImage02 flexDirection={"row-reverse"}
                                    textAlign={"left"}
                                    left={0}
                                    imageSrc={"/images/top_community"}
                                    imageAlt={"コミュニティ"}
                                    title="COMMUNITY"
                                    content="コミュニティ"
                                    description="この激しい変化の真っ只中にある現代社会に必要とされるのは、変化を好機ととらえ、主体的に考え実践、実装していく人間だ。"
                                    toLink="/activity#community" />
                                <TextImage02 flexDirection={"row"}
                                    textAlign={"right"}
                                    right={0}
                                    imageSrc={"/images/top_event"}
                                    imageAlt={"イベント"}
                                    title="EVENT"
                                    content="イベント"
                                    description="この激しい変化の真っ只中にある現代社会に必要とされるのは、変化を好機ととらえ、主体的に考え実践、実装していく人間だ。"
                                    toLink="/activity#event" />
                                <section className={eventSection}>
                                    <div className="inner">
                                        <TopTitle Tag='h2' title='EVENT' subTitle='イベント情報' />
                                        <CategoryProducts dataSrc={postItems} title={"イベント"} slug="event" displayCount={3} />
                                    </div>
                                </section>
                                <section className={newsSection}>
                                    <div className="inner">
                                        <TopTitle Tag='h2' title='NEWS' subTitle='お知らせ' />
                                    </div>
                                    <News dataSrc={blogItems} title={"イベント"} slug="event" displayCount={4} />
                                </section>
                                <section className={memberSection} >
                                    <div className="inner">
                                        <TopTitle Tag='h2' title='MEMBER' subTitle='メンバー一覧' />
                                    </div>
                                    <Member categoryName={directorName} dataSrc={directorPostItems} />
                                    <Member categoryName={memberName} dataSrc={memberPostItems} />
                                    <Member categoryName={supporterName} dataSrc={supporterPostItems} />
                                    <Logos dataSrc={logoItems} />
                                </section>
                                <SocialSection />
                                <SNS />
                            </div >

                            {/* <Modal isShown={blockSelectorIsOpen} onClose={() => setBlockSelectorIsOpen(false)}>
                                <div >これが表示されるよ</div>
                            </Modal> */}
                        </>
                    }
                </Layout>
            </Suspense>
        </>
    );
};
