import React from 'react';

import { wrapDiv, ul, li, img, imgDiv, titleClass, titleContainer, } from './Logos.css'

interface Props {
    dataSrc: any,
}

const Logos = React.memo(({ dataSrc }: Props) => {

    return (
        <>
            <div className={`inner ${wrapDiv}`}>
                <div className={titleContainer}>
                    <h3 className={titleClass}>サポート企業</h3>
                </div>
                <ul className={ul}>
                    {
                        dataSrc.edges.map((item: any) => {
                            return <>
                                <li key={item.node.id} className={li}>
                                    <div className={imgDiv}>
                                        <picture>
                                            <source type="image/webp" srcSet={`${item.node.featuredImage?.node.sourceUrl}.webp`} />
                                            <img className={img} src={item.node.featuredImage.node.sourceUrl} alt={item.node.title} loading="lazy"/>
                                        </picture>
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

export default Logos;
