import React from 'react';
import { Link } from 'gatsby';
import dateFormat from "dateformat";

import { wrapDiv, ul, li, img, link, imgDiv, text, more, newsList, tagList, tag } from './News.css'

interface Props {
    title: string,
    slug: "support" | "logo" | "event" | "blog",
    displayCount: number,
    isDisplayTitle?: boolean,
    isDisplayText?: boolean,
    dataSrc: any,
}

const News = React.memo(({ dataSrc, slug, title, displayCount, isDisplayTitle = true, isDisplayText = true }: Props) => {

    return (
        <>
            <div className={`inner ${wrapDiv}`}>
                <ul className={ul}>
                    {
                        dataSrc.edges
                            .map((item, index) => {
                                return <>
                                    <li key={item.node.id} className={li}
                                        data-aos="fade-up"
                                        data-aos-delay={`${index * 150}`}
                                        data-aos-duration="1000"
                                        data-aos-easing="ease"
                                    >
                                        <Link className={link} to={item.node.uri}></Link>
                                        <div className={imgDiv}>
                                            <picture>
                                                <source type="image/webp" srcSet={`${item.node.featuredImage?.node.sourceUrl}.webp`} />
                                                <img className={img} src={item.node.featuredImage?.node.sourceUrl} alt={item.node.title} loading="lazy" />
                                            </picture>
                                        </div>
                                        {isDisplayTitle && <h3 className={text}>{item.node.title}</h3>}
                                        <div className={newsList}>
                                            <div className={tagList} >
                                                {item.node.tags?.edges.map((tagItem: any) => {
                                                    return <>
                                                        <div id={tagItem.node.id} className={tag}>{tagItem.node.name}</div>
                                                    </>

                                                })}
                                                {item.node.tags?.edges.length ? null : <div></div>}
                                            </div>
                                            <div style={{ color: "#999999" }}>
                                                Posted  {dateFormat(item.node.date, "yyyy.mm.dd")}
                                            </div>
                                        </div>
                                    </li>
                                </>
                            })
                    }
                </ul>
                <div style={{ textAlign: 'center' }}>
                    <Link to={"/blog"} className={more} >もっと見る</Link>
                </div>
            </div >
        </>
    );
});

export default News;
