import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'gatsby';
import dateFormat from "dateformat";

import { wrapDiv, ul, li, img, link, imgDiv, imageWrap, text, description, textDiv, tag, recruitingTag, tagList, activeTag, closeTag, ribbon, month, day } from './NewsList.css'

interface Props {
    dataSrc: any,
}

const NewsList = React.memo(({
    dataSrc,
}: Props) => {


    return (
        <>
            <div className={wrapDiv}>
                <ul className={ul}>
                    {
                        dataSrc &&
                        dataSrc
                            .map((item: any) => {
                                return <>
                                    <li key={item.node.id} className={li}>

                                        {/* <Link className={link} to={item.node.uri}></Link> */}
                                        <Link className={link} to={`/blog/post/${item.node.slug}`}></Link>
                                        <div className={imageWrap}>
                                            <div className={imgDiv}>
                                                <img className={img} src={item.node.featuredImage.node.sourceUrl} alt={item.node.title} loading="lazy" />
                                            </div>
                                        </div>
                                        <div className={textDiv}>
                                            <h3 className={text}>{item.node.title}</h3>
                                            <p className={description}>{item.node.content.replace(/<("[^"]*"|'[^']*'|[^'">])*>/g, '').substr(0, 100)}...</p>
                                            <div className={tagList} >
                                                {item.node.tags?.edges.map((tagItem: any) => {
                                                    return <>
                                                        <div id={tagItem.node.id} className={tag}>{tagItem.node.name}</div>
                                                    </>

                                                })}
                                            </div>
                                            <div>
                                                Posted  {dateFormat(item.node.date, "yyyy.mm.dd")}
                                            </div>
                                        </div>
                                    </li>
                                </>
                            })
                    }
                </ul>
            </div >
        </>
    );
});

export default NewsList;
