import React from 'react';

import SEO from '../../../utils/seo';
import { useWordPressBlogSettings } from '../../../hooks/useWordPressBlogSettings'
import SingleBlog from '../../../components/organisms/WordPress/SingleBlog';
import { getBlogDataServerSide } from '../../../ssr/blogClient'

const EventPage = ({ serverData: { singleData } }: any) => {

    return (
        <>
            <SEO
                title={singleData.title}
                lang={'ja'}
                description={singleData.content}
                img={singleData.featuredImage.node.sourceUrl}
                alt={singleData.title}
            />
            <SingleBlog blog={singleData} />
        </>
    )
}

export default EventPage;

export async function getServerData(context: any) {

    const res = await getBlogDataServerSide(context.params.name);

    try {
        return {
            props: { singleData: res },
            status: 200,
            headers: {
                "Cache-Control": 'public, max-age=10, s-maxage=60, stale-while-revalidate=240',
            },
        };
    } catch {
        return {
            singleData: [],
            status: 500,
        };
    }
}

export async function config() {
    return (props: any) => {
        return {
            defer: true,
        };
    };
}
