import React from 'react';

import dateFormat from "dateformat";

import { topDiv, topInformationDiv, breadcrumb, activeTag, closeTag, middleDiv, dateDiv, dateTagWrap, dateText, titleText, bottomDiv, thumbnailDiv, tag, tagList, month, day, recruitingTag, titleContainer, titleBorder, titleClass, subTitleClass } from './SingleEvent.css'
import { Link } from 'gatsby';

interface Props {
    post: any,
}

const SingleEvent = React.memo(({ post }: Props) => {
    const months = ["JAN.", "FEB.", "MAR.", "APR.", "MAY.", "JUN.", "JUL.", "AUG.", "SEP.", "OCT.", "NOV.", "DEC."];
    const nowDatetime = new Date();

    return (
        <>
            <div className="inner page">
                <div className={topDiv}>
                    <div className={recruitingTag} >
                        {
                            (!post.commonACF?.displayenddate || post.commonACF?.displayenddate > nowDatetime.toLocaleString().replaceAll('/', '-')) ?
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
                                        <div id={tagItem.node.id} className={tag}>{tagItem.node.name}</div>
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
                    <h1 className={titleText}>{post.title}</h1>
                </div>
                <div className={bottomDiv}>
                </div>
                <div className={thumbnailDiv}>
                    <img src={post.featuredImage.node.sourceUrl} alt={post.title} />
                </div>
                <p dangerouslySetInnerHTML={{ __html: post.content }}
                />
            </div >
            {/* <LinkButton link="news" text="← お知らせ一覧に戻る" /> */}
        </>
    );
});

export default SingleEvent;
