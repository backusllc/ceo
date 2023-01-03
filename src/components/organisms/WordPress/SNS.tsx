import { Link } from 'gatsby';
import React from 'react';
import { multiColumnGrid, multiColumnTileLeft, multiColumnTileRight, container, imageContainer, titleClass, descriptionClass, backgroundDiv, lineLink, contactLink } from './SNS.css'

const SNS = React.memo(() => {

    return (
        <>
            <div className="inner">
                <div className={multiColumnGrid} >
                    <div className={multiColumnTileLeft} >
                        <div className={container}>
                            <div className={imageContainer}>
                                <img src="/images/top_icon_line.png" alt="LINE公式アカウント" loading="lazy" />
                            </div>
                            <h3 className={titleClass}>LINE公式アカウントにて<br className="sp" />お役立ち情報を配信中！</h3>
                            <p className={descriptionClass}>LINEにて定期的にイベントやニュースなどを配信中。まずは気軽にお友達追加をよろしくお願いします。</p>
                        </div>
                        <a href="https://line.me/R/ti/p/%40844oqimc" target={'_blank'} rel={'noopener'} className={lineLink}>
                        </a>
                    </div>
                    <div className={multiColumnTileRight} >
                        <div className={container}>
                            <div className={imageContainer}>
                                <img src="/images/top_icon_mail.png" alt="お問い合わせはこちら" loading="lazy" />
                            </div>
                            <h3 className={titleClass}>お問い合わせはこちらから</h3>
                            <p className={descriptionClass}>社長輩出に向けて一緒に取り組んでいただける方や社長になりたい方などお気軽にお問い合わせください。</p>
                        </div>
                        <Link to={'/contact'} className={contactLink}>
                        </Link>
                    </div>
                </div>
                <div className={backgroundDiv} />
            </div>
        </>
    );
});

export default SNS;
