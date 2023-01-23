import React from 'react';
import { Link } from 'gatsby';

import { wrapDiv, ul, li, img, link, imgDiv, text, description, tag, recruitingTag, activeTag, closeTag, ribbon, month, day } from './CategoryActivities.css'

interface Props {
    slug: "support" | "logo" | "event" | "blog",
    isDisplayButton?: boolean,
    dataSrc: any,
}

const CategoryActivities = React.memo(({
    dataSrc
    , slug
    , isDisplayButton = true
}: Props) => {

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
                                        data-aos-delay={`${index * 100}`}
                                        data-aos-duration="1000"
                                        data-aos-easing="ease"
                                    >
                                        <Link className={link} to={item.node.uri}></Link>
                                        <div className={imgDiv}>
                                            <img className={img} src={item.node.featuredImage?.node.sourceUrl} alt={item.node.title} />
                                        </div>
                                        <h2 className={text}>{item.node.title}</h2>
                                        <p className={description}>{item.node.content.replace(/<("[^"]*"|'[^']*'|[^'">])*>/g, '').substr(0, 70)}...</p>
                                    </li>
                                </>
                            })
                    }
                </ul>
                {isDisplayButton &&
                    <div style={{ textAlign: 'center' }}>
                        <Link to={"/"} style={{ backgroundColor: '#000000', color: '#FFFFFF', padding: '2rem 10rem', display: 'inline-block', fontSize: '15px' }}>もっと見る</Link>
                    </div>
                }
            </div >
        </>
    );
});

export default CategoryActivities;
