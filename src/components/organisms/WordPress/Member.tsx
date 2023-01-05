import React from 'react';
import { wrapDiv, ul, li, img, imgDiv, postTitle, text, titleClass, titleContainer, } from './Member.css'

interface Props {
    dataSrc: any,
    categoryName: string,
}

const Member = React.memo(({ categoryName, dataSrc }: Props) => {

    return (
        <>
            <div className={`inner ${wrapDiv}`}>
                <div className={titleContainer}>
                    <h3 className={titleClass}>{categoryName}</h3>
                </div>
                <ul className={ul}>
                    {
                        dataSrc.edges.map((item: any) => {
                            return <>
                                <li key={item.node.id} className={li}>
                                    <div className={imgDiv}>
                                        <picture>
                                            <source type="image/webp" srcSet={`${item.node.featuredImage?.node.sourceUrl}.webp`} />
                                            <img className={img} src={item.node.featuredImage.node.sourceUrl} alt={item.node.title} loading="lazy" />
                                        </picture>
                                    </div>
                                    {item.node.tags.edges.map((item: any) => {
                                        return <>
                                            <div id={item.node.id} className={text}>{item.node.name}</div>
                                        </>
                                    })}
                                    <div className={postTitle}>{item.node.title}</div>
                                </li>
                            </>
                        })
                    }
                </ul>
            </div >
        </>
    );
});

export default Member;
