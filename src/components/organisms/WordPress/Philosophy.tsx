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
                        <p className={description}>技術革新やグローバリゼーションの進展、環境問題や少子高齢化社会の到来など、経営を取り巻く環境は、これまでとは比較にならないほど課題が山積しています。 これらの課題解決のためには、意欲ある人が立ち上がり、社会を引っ張り、自主的に動くことが求められています。 社会を牽引する意欲ある人に対し、起業、事業承継、プロ経営、どんな形であれ経営者として活躍する機会を提供し、社会に優秀な経営者を輩出していくことは、結果として社会の課題を解決することに繋がり、持続可能な社会の実現に貢献することになります。<br />
                            一般社団法人日本CEO協会のプラットフォームを活用し、ぜひ沢山の出会いや学びを得る機会を得て、意欲ある素晴らしい経営者になることを目指して欲しいと願っています。</p>
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
                        <p className={description}>技術革新やグローバリゼーションの進展、環境問題や少子高齢化社会の到来など、経営を取り巻く環境は、これまでとは比較にならないほど課題が山積しています。 これらの課題解決のためには、意欲ある人が立ち上がり、社会を引っ張り、自主的に動くことが求められています。 社会を牽引する意欲ある人に対し、起業、事業承継、プロ経営、どんな形であれ経営者として活躍する機会を提供し、社会に優秀な経営者を輩出していくことは、結果として社会の課題を解決することに繋がり、持続可能な社会の実現に貢献することになります。<br />
                            一般社団法人日本CEO協会のプラットフォームを活用し、ぜひ沢山の出会いや学びを得る機会を得て、意欲ある素晴らしい経営者になることを目指して欲しいと願っています。</p>
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
                        <p className={description}>技術革新やグローバリゼーションの進展、環境問題や少子高齢化社会の到来など、経営を取り巻く環境は、これまでとは比較にならないほど課題が山積しています。 これらの課題解決のためには、意欲ある人が立ち上がり、社会を引っ張り、自主的に動くことが求められています。 社会を牽引する意欲ある人に対し、起業、事業承継、プロ経営、どんな形であれ経営者として活躍する機会を提供し、社会に優秀な経営者を輩出していくことは、結果として社会の課題を解決することに繋がり、持続可能な社会の実現に貢献することになります。<br />
                            一般社団法人日本CEO協会のプラットフォームを活用し、ぜひ沢山の出会いや学びを得る機会を得て、意欲ある素晴らしい経営者になることを目指して欲しいと願っています。</p>
                    </div>
                </div>
            </div>

        </>
    );
});

export default Philosophy;
