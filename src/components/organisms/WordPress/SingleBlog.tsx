import React from 'react';

import dateFormat from "dateformat";

import { topDiv, topInformationDiv, breadcrumb, activeTag, closeTag, middleDiv, dateDiv, dateTagWrap, dateText, titleText, bottomDiv, thumbnailDiv, tag, tagList, month, day, recruitingTag, titleContainer, titleBorder, titleClass, subTitleClass } from './SingleBlog.css'
import { Link } from 'gatsby';

interface Props {
    blog: any,
}

const SingleBlog = React.memo(({ blog }: Props) => {

    return (
        <>
            <div className="inner page">
                <div className={topDiv}>
                    <div className={recruitingTag} >
                        {/* {
                            (!blog.commonACF?.displayenddate || blog.commonACF?.displayenddate > nowDatetime.toLocaleString().replaceAll('/', '-')) ?
                                <div className={activeTag}>募集中</div>
                                :
                                <div className={closeTag}>終了イベント</div>
                        } */}
                    </div>
                    <div className={topInformationDiv}>
                        <div className={dateText} >
                            {dateFormat(blog.date, "yyyy.mm.dd")}
                        </div>
                        <div className={dateTagWrap}>
                            <div className={tagList} >
                                {blog.tags?.edges.map((tagItem: any) => {
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
                                        <span itemProp='name'>ブログ</span>
                                    </Link>
                                    <meta itemProp='position' content='2' />
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>

                <div className={middleDiv}>
                    {/* <div className={dateDiv}>
                        <span className={month}>{months[new Date(blog.commonACF?.displayenddate).getMonth()]}</span><span className={day}>{new Date(blog.commonACF?.displayenddate).getDate()}</span>
                    </div> */}
                    <h1 className={titleText}>{blog.title}</h1>
                </div>
                <div className={bottomDiv}>
                </div>
                <div className={thumbnailDiv}>
                    <img src={blog.featuredImage.node.sourceUrl} alt={blog.title} />
                </div>
                <p dangerouslySetInnerHTML={{ __html: blog.content }}
                />
            </div >
            {/* <LinkButton link="news" text="← お知らせ一覧に戻る" /> */}
        </>
    );
});

export default SingleBlog;

// export const Head = () => {
//     return (
//         <>
//             <title>aaaaa</title>
//         </>
//     )
// }
