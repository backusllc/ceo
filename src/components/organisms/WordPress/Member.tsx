import React from 'react';
import { wrapDiv, ul, li, img, imgDiv, postTitle, textWrap, text, titleClass, titleContainer, } from './Member.css'
import { Modal } from './Modal';

interface Props {
    dataSrc: any,
    categoryName: string,
}

const Member = React.memo(({ categoryName, dataSrc }: Props) => {
    const [shoModal, setShoModal] = React.useState(false);
    const [imgSrc, setImgSrc] = React.useState("");

    const handleShowModal = (src: string) => {
        setShoModal(true);
        setImgSrc(src);
    };

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
                                <li key={item.node.id} className={li} onClick={() => handleShowModal(item.node.featuredImage?.node.sourceUrl)}>
                                    <div className={imgDiv}>
                                        <picture>
                                            <source type="image/webp" srcSet={`${item.node.featuredImage?.node.sourceUrl}.webp`} />
                                            <img className={img} src={item.node.featuredImage?.node.sourceUrl} alt={item.node.title} loading="lazy" />
                                        </picture>
                                    </div>
                                    <div className={textWrap}>
                                        <div className={text} dangerouslySetInnerHTML={{ __html: item.node.content }} />
                                        {/* {item.node.tags.edges.map((item: any) => {
                                            return <>
                                                <div id={item.node.id} className={text}>{item.node.name}</div>
                                            </>
                                        })} */}
                                    </div>
                                    <div className={postTitle}>{item.node.title}</div>
                                </li>
                            </>
                        })
                    }
                </ul>
            </div >
            <Modal isShown={shoModal} onClose={() => setShoModal(false)}>
                <picture>
                    <source type="image/webp" srcSet={`${imgSrc}.webp`} />
                    <img src={imgSrc} alt={"modal"} loading="lazy" />
                </picture>
                {/* <img src={imgSrc} /> */}
            </Modal>
        </>
    );
});

export default Member;
