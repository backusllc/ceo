import React from 'react';

import { topDiv, overLay, titleText, thumbnailDiv, img } from './SingleActivity.css'

interface Props {
    post: any,
}

const SingleActivity = React.memo(({ post }: Props) => {

    return (
        <>
            <div className={thumbnailDiv}>
                <div className={overLay} />
                <div className={img} style={{ backgroundColor: 'black', opacity: '0.5' }}></div>
                <img className={img} src={post.featuredImage?.node.sourceUrl} alt={post.title} loading="lazy" />
                <div className={`${topDiv} inner`}>
                    <h1 className={titleText}>{post.title}</h1>
                </div>
            </div>
            <div className="inner page">
                <p dangerouslySetInnerHTML={{ __html: post.content }}
                />
            </div >
        </>
    );
});

export default SingleActivity;
