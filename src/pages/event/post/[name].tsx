import React from 'react';

import SEO from '../../../utils/seo';
import LinkButton from '../../../components/organisms/Shopify/LinkButton';
import {
    OgBanner,
    OgMegaHeader,
} from '../../../components/organisms';
import { useWordPressPostSettings } from '../../../hooks/useWordPressPostSettings'
import SingleEvent from '../../../components/organisms/WordPress/SingleEvent';
import { getEventDataServerSide } from '../../../ssr/eventClient'

const EventPage = ({ serverData: { singlePost } }) => {
    // const { singlePost } = serverData
    // console.log(singlePost);

    // const slug = props.params.name;
    // const { loading: articleLoading, data: articleData } = useWordPressPostSettings(slug);

    // if (articleLoading) return <div></div>;
    // const post = articleData.postBy;

    return (
        <>
            <SingleEvent post={singlePost} />
            {/* <OgBanner imageUrl='https://cdn.shopify.com/s/files/1/0582/1831/5820/files/img_news.png?v=1658567232' link="" maxWidth={"full"} marginBottom={'80'} /> */}
            {/* {articleData.blogs.edges.map(article => {
                return (
                    article.node.articleByHandle ?
                        ( */}
            {/* <div className="inner">
                <div style={{ display: "flex", justifyContent: "flex-start", gap: "2rem", height: "3rem", marginBottom: "1.8rem" }}>
                    <label style={{
                        fontSize: "15px",
                        verticalAlign: "middle",
                        alignSelf: "center",
                        backgroundColor: "#555555",
                        color: "#fff",
                        padding: "0.25rem 1.5rem",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        width: "110px"
                    }}>{post.title}</label>
                    <p style={{
                        fontSize: "15px",
                        margin: "0",
                        alignSelf: "center",
                        whiteSpace: "nowrap",
                        width: "100px",
                        overflow: "hidden",
                        fontWeight: "700",
                    }}>{dateFormat(post.date, "yyyy/mm/dd")}</p>
                </div>
                <div style={{ marginBottom: "1.25rem" }}>
                    <h2 style={{ fontSize: "1.5rem", fontWeight: "700" }}>{post.title}</h2>
                </div>
                <div style={{
                    marginBottom: "7rem",
                    padding: "1.5rem 0 4.5rem 0",
                    borderTop: "solid 1px #D9D9D9",
                    borderBottom: "solid 1px #D9D9D9",
                }}>
                    <p className='description'
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />
                </div>
            </div>
            <LinkButton link="news" text="← お知らせ一覧に戻る" /> */}
        </>
    )
}

export default EventPage;

export async function getServerData(context: any) {

    const res = await getEventDataServerSide(context.params.name);

    try {
        return {
            props: { singlePost: res },
            status: 200,
        };
    } catch {
        return {
            singlePost: [],
            status: 500,
        };
    }
}

