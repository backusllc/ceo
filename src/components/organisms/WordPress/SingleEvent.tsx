import React from 'react';

import dateFormat from "dateformat";

import { topDiv, topInformationDiv, breadcrumb, activeTag, closeTag, middleDiv, dateDiv, dateTagWrap, dateText, titleText, bottomDiv, thumbnailDiv, tag, tagList, month, day, recruitingTag, titleContainer, titleBorder, titleClass, subTitleClass } from './SingleEvent.css'
import { Link } from 'gatsby';

interface Props {
    post: any,
}

const SingleEvent = React.memo(({ post }: Props) => {
    const months = ["JAN.", "FEB.", "MAR.", "APR.", "MAY.", "JUN.", "JUL.", "AUG.", "SEP.", "OCT.", "NOV.", "DEC."];
    const nowDatetime = Date.parse(new Date());

    return (
        <>
            <div className="inner page">
                <div className={topDiv}>
                    <div className={recruitingTag} >
                        {
                            (!post.commonACF?.displayenddate || Date.parse(post.commonACF?.displayenddate) > nowDatetime) ?
                                <div className={activeTag}>募集中</div>
                                :
                                <div className={closeTag}>終了イベント</div>
                        }
                    </div>
                    <div className={topInformationDiv}>
                        <div className={dateText} >
                            {dateFormat(post.date, "yyyy.mm.dd")}
                        </div>
                        <div className={dateTagWrap}>
                            <div className={tagList} >
                                {post.tags?.edges.map((tagItem: any) => {
                                    return <>
                                        <div key={tagItem.node.id} className={tag}>{tagItem.node.name}</div>
                                    </>

                                })}
                            </div>
                            <ol itemScope itemType='https://schema.org/BreadcrumbList' className={`${breadcrumb} breadcrumb`}>
                                <li itemProp='itemListElement' itemScope
                                    itemType='https://schema.org/ListItem'>
                                    <Link itemProp='item' to="/">
                                        <span itemProp='name'>ホーム</span>
                                    </Link>
                                    <meta itemProp='position' content='1' />
                                </li>
                                <li itemProp='itemListElement' itemScope
                                    itemType='https://schema.org/ListItem'>
                                    <Link itemProp='item' to="/">
                                        <span itemProp='name'>イベント</span>
                                    </Link>
                                    <meta itemProp='position' content='2' />
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>

                <div className={middleDiv}>
                    <div className={dateDiv}>
                        <span className={month}>{months[new Date(post.commonACF?.displayenddate).getMonth()]}</span><span className={day}>{new Date(post.commonACF?.displayenddate).getDate()}</span>
                    </div>
                    <h1 className={titleText} style={{ marginBottom: 0 }}>{post.title}</h1>
                </div>
                <div className={thumbnailDiv}>
                    <picture>
                        <source type="image/webp" srcSet={`${post.featuredImage?.node.sourceUrl}.webp`} />
                        <img src={post.featuredImage?.node.sourceUrl} alt={post.title} loading="lazy" />
                    </picture>
                </div>
                <p dangerouslySetInnerHTML={{ __html: post.content }}
                />
            </div >
        </>
    );
});

export default SingleEvent;
