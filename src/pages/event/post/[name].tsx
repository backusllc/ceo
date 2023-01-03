import React from 'react';

import SingleEvent from '../../../components/organisms/WordPress/SingleEvent';
import { getEventDataServerSide } from '../../../ssr/eventClient'

const EventPage = ({ serverData: { singlePost } }) => {

    return (
        <SingleEvent post={singlePost} />
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
