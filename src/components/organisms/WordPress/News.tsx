import React from 'react';
import { Link } from 'gatsby';

import { wrapDiv, ul, li, img, link, imgDiv, text, more } from './News.css'

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
                                                <img className={img} src={item.node.featuredImage?.node.sourceUrl} alt={item.node.title} />
                                            </picture>
                                        </div>
                                        {isDisplayTitle && <h3 className={text}>{item.node.title}</h3>}
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
