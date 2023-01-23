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
                    <div className={topInformationDiv}>
                        <div className={tagList} >
                            {blog.tags?.edges.map((tagItem: any) => {
                                return <>
                                    <div id={tagItem.node.id} className={tag}>{tagItem.node.name}</div>
                                </>

                            })}
                        </div>
                        <div className={dateTagWrap}>
                            <div className={dateText} >
                                {dateFormat(blog.date, "yyyy.mm.dd")}
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
                    <h1 className={titleText} style={{ margin: 0 }}>{blog.title}</h1>
                </div>
                <div className={thumbnailDiv}>
                    <img src={blog.featuredImage.node.sourceUrl} alt={blog.title} loading="lazy" />
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
