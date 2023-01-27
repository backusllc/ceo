import React from 'react';

import SEO from '../../../utils/seo';
import SingleEvent from '../../../components/organisms/WordPress/SingleEvent';
import { getEventDataServerSide } from '../../../ssr/eventClient'

const EventPage = ({ serverData: { singlePost } }) => {

    return (
        <>
            <SEO
                title={singlePost.title}
                lang={'ja'}
                description={singlePost.content}
                img={singlePost.featuredImage.node.sourceUrl}
                alt={singlePost.title}
            />
            <SingleEvent post={singlePost} />
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
            headers: {
                "Cache-Control": 'public, max-age=10, s-maxage=60, stale-while-revalidate=240',
            },
        };
    }
    catch {
        return {
            props: { singlePost: [] },
            status: 200,
        };
    }
}

export async function config() {
    return (props) => {
        return {
            defer: true,
        };
    };
}
