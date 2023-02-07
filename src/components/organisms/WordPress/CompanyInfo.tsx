import React from 'react';
import { border, borderBottom, philosophyContainer, philosophy, multiColumnGrid, multiColumnTileLeft, multiColumnTileRight, container, titleClass, description, ul, gridLayout, gridLeft, gridText, gridMap, map } from './CompanyInfo.css'

const CompanyInfo = React.memo(() => {

    return (
        <>
            <div className="inner" id="overview"
                data-aos="fade"
                data-aos-duration="1000"
                data-aos-easing="ease"
            >
                <span className={border}></span>
                <div className={philosophyContainer}>
                    <h3 className={philosophy}>一般社団法人日本CEO協会</h3>
                </div>
                <div className={multiColumnGrid} >
                    <div className={multiColumnTileLeft} >
                        <div className={container}>
                            <p className={titleClass}>法人名</p>
                        </div>
                    </div>
                    <div className={multiColumnTileRight} >
                        <p className={description}>一般社団法人日本CEO協会</p>
                    </div>
                    <span className={borderBottom} ></span>
                </div>
                <div className={multiColumnGrid} >
                    <div className={multiColumnTileLeft} >
                        <div className={container}>
                            <p className={titleClass}>設立年月日</p>
                        </div>
                    </div>
                    <div className={multiColumnTileRight} >
                        <p className={description}>2019年3月1日</p>
                    </div>
                    <span className={borderBottom} ></span>
                </div>
                <div className={multiColumnGrid} >
                    <div className={multiColumnTileLeft} >
                        <div className={container}>
                            <p className={titleClass}>サービス内容</p>
                        </div>
                    </div>
                    <div className={multiColumnTileRight} >
                        <ul className={ul}>
                            <li className={description}>プロ経営者の育成</li>
                            <li className={description}>大学生に対するビジネスサークル</li>
                            <li className={description}>ビジネスモデルコンテスト</li>
                            <li className={description}>メンタリング</li>
                        </ul>
                    </div>
                    <span className={borderBottom} ></span>
                </div>
                <div className={gridLayout} >
                    <div className={gridLeft} >
                        <div className={container}>
                            <p className={titleClass}>所在地</p>
                        </div>
                    </div>
                    <div className={gridText} >
                        <p className={description}>京都オフィス<br />
                            〒600-8090 京都市下京区綾小路通烏丸東入る竹屋之町251番地2 ナカムラビル2F</p>
                    </div>
                    <div className={gridMap}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3268.173666181502!2d135.75847691552585!3d35.00235757450939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60010899ebddf5db%3A0x50f18308bb8b5d88!2z44CSNjAwLTgwOTAg5Lqs6YO95bqc5Lqs6YO95biC5LiL5Lqs5Yy657a-5bCP6Lev6YCa54OP5Li45p2x5YWl56u55bGL5LmL55S677yS77yV77yR4oiS77yS!5e0!3m2!1sja!2sjp!4v1675734504708!5m2!1sja!2sjp"
                            // width="600"
                            // height="450"
                            className={map}
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade" />
                    </div>
                </div>
            </div>
        </>
    );
});

export default CompanyInfo;
