import React from 'react';

import dateFormat from "dateformat";

import { topDiv, topInformationDiv, breadcrumb, activeTag, closeTag, middleDiv, dateDiv, dateTagWrap, dateText, titleText, bottomDiv, thumbnailDiv, img, tag, tagList, month, day, recruitingTag, titleContainer, titleBorder, titleClass, subTitleClass } from './SingleActivity.css'
import { Link } from 'gatsby';

interface Props {
    post: any,
}

const SingleActivity = React.memo(({ post }: Props) => {

    return (
        <>
            <div className={thumbnailDiv}>
                <img className={img} src={post.featuredImage.node.sourceUrl} alt={post.title} loading="lazy" />
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
