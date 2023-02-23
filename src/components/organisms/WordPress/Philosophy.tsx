import React from 'react';
import { border, philosophyContainer, philosophy, multiColumnGrid, multiColumnTileLeft, multiColumnTileRight, container, concept, titleClass, description } from './Philosophy.css'
import { sprinkles, Sprinkles } from '../../../styles/sprinkles.css';

const Philosophy = React.memo(() => {

    const spGrid = sprinkles({
        flexDirection: {
            mobile: 'column',
            tablet: 'row',
            desktop: 'row',
        },
    });

    const spTitleClass = sprinkles({
        paddingLeft: {
            mobile: '0',
            desktop: '80'
        },
    })

    return (
        <>
            <div className="inner">
                <span className={border}></span>
                <div className={philosophyContainer}
                    data-aos="fade"
                    data-aos-duration="1000"
                    data-aos-easing="ease"
                >
                    <h3 className={philosophy} id="philosophy">私たちの理念</h3>
                </div>
                <div className={`${spGrid} ${multiColumnGrid}`}
                    data-aos="fade"
                    data-aos-duration="1000"
                    data-aos-easing="ease"
                >
                    <div className={multiColumnTileLeft} >
                        <div className={container}>
                            <p className={`${titleClass} ${spTitleClass}`}>MISSION</p>
                        </div>
                    </div>
                    <div className={multiColumnTileRight} >
                        <p className={concept}>誰でも社長になれる社会づくりに貢献する</p>
                    </div>
                </div>
                <div className={`${spGrid} ${multiColumnGrid}`}
                    data-aos="fade"
                    data-aos-duration="1000"
                    data-aos-easing="ease"
                >
                    <div className={multiColumnTileLeft} >
                        <div className={container}>
                            <p className={`${titleClass} ${spTitleClass}`}>VISION</p>
                        </div>
                    </div>
                    <div className={multiColumnTileRight} >
                        <p className={concept}>社会を継続可能にするために、<br />
                            あらゆる角度から社長、経営陣を創出する。</p>
                    </div>
                </div>
                <div className={`${spGrid} ${multiColumnGrid}`}
                    data-aos="fade"
                    data-aos-duration="1000"
                    data-aos-easing="ease"
                >
                    <div className={multiColumnTileLeft} >
                        <div className={container}>
                            <p className={`${titleClass} ${spTitleClass}`}>VALUE</p>
                        </div>
                    </div>
                    <div className={multiColumnTileRight} >
                        <p className={concept}>すべての人にチャレンジする機会を作り、<br />
                            社会が継続可能になる場を提供する。</p>
                    </div>
                </div>
            </div>

        </>
    );
});

export default Philosophy;
