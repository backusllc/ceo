import React from 'react';

import SEO from '../../utils/seo';
import { useWordPressActivitySettings } from '../../hooks/useWordPressActivitySettings'
import SingleActivity from '../../components/organisms/WordPress/SingleActivity';

const EventPage = (props: any) => {
    const slug = props.params.name;
    const { loading: activityLoading, data: activityData } = useWordPressActivitySettings(slug);

    if (activityLoading) return <div></div>;
    const post = activityData.activity;

    return (
        <>
            <SingleActivity post={post} />
        </>
    )
}

export default EventPage;
