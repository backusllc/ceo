import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'gatsby';
import dateFormat from "dateformat";

import { wrapDiv, ul, li, img, link, imgDiv, more, text, tag, recruitingTag, tagList, activeTag, closeTag, ribbon, month, day } from './CategoryProducts.css'

interface Props {
    title: string,
    slug: "support" | "logo" | "event" | "blog",
    displayCount: number,
    isDisplayTitle?: boolean,
    isDisplayText?: boolean,
    isDisplayButton?: boolean,
    dataSrc: any,
}

const CollectionSelection = React.memo(({
    dataSrc
    , slug
    , title
    , displayCount
    , isDisplayTitle = true
    , isDisplayText = true
    , isDisplayButton = true
}: Props) => {

    const months = ["JAN.", "FEB.", "MAR.", "APR.", "MAY.", "JUN.", "JUL.", "AUG.", "SEP.", "OCT.", "NOV.", "DEC."];
    const nowDatetime = Date.parse(new Date());

    return (
        <>
            <div className={wrapDiv}>
                <ul className={ul}>
                    {
                        dataSrc &&
                        dataSrc
                            .map((item, index) => {
                                return <>
                                    <li key={item.node.id} className={li}
                                        data-aos="fade"
                                        data-aos-delay={`${index % 3 * 100}`}
                                        data-aos-duration="500"
                                        data-aos-easing="ease"

                                    >
                                        <div className={ribbon}><small className={month}>{months[new Date(item.node.commonACF?.displayenddate).getMonth()]}</small><span className={day}>{new Date(item.node.commonACF?.displayenddate).getDate()}</span></div>
                                        <Link className={link} to={`/${slug}/post${item.node.uri}`}></Link>
                                        <div className={imgDiv}>
                                            <picture>
                                                <source type="image/webp" srcSet={`${item.node.featuredImage?.node.sourceUrl}.webp`} />
                                                <img className={img} src={item.node.featuredImage?.node.sourceUrl} alt={item.node.title} loading="lazy" />
                                            </picture>
                                        </div>
                                        <div className={recruitingTag} >
                                            {
                                                (!item.node.commonACF?.displayenddate || Date.parse(item.node.commonACF?.displayenddate) > nowDatetime) ?
                                                    <div className={activeTag}>募集中</div>
                                                    :
                                                    <div className={closeTag}>終了</div>
                                            }
                                        </div>
                                        {isDisplayTitle && <h3 className={text}>{item.node.title}</h3>}
                                        <div className={tagList} >
                                            {item.node.tags?.edges.map((tagItem: any) => {
                                                return <>
                                                    <div id={tagItem.node.id} className={tag}>#{tagItem.node.name}</div>
                                                </>

                                            })}
                                        </div>
                                        <div style={{ color: "#999999" }}>
                                            Posted  {dateFormat(item.node.date, "yyyy.mm.dd")}
                                        </div>
                                    </li>
                                </>
                            })
                    }
                </ul>
                {isDisplayButton &&
                    <div style={{ textAlign: 'center' }}>
                        <Link to={"/event"} className={more} >もっと見る</Link>
                    </div>
                }
            </div >
        </>
    );
});

export default CollectionSelection;
