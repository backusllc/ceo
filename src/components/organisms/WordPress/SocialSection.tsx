import React, { useContext, useEffect, useRef } from 'react';
import { flexDiv, title, topDiv, bottomDiv, topTitleContainer, bottomTitleContainer, topTitle, bottomTitle, topContentContainer, bottomContentContainer } from './SocialSection.css'

const SocialSection = () => {
    const ref = useRef(null)

    useEffect(() => {
        const twitter = document.createElement("script");
        twitter.setAttribute("src", "https://platform.twitter.com/widgets.js");
        twitter.setAttribute("loading", "lazy");
        document.head.appendChild(twitter);

        const facebook = document.createElement("script");
        facebook.setAttribute("src", "https://connect.facebook.net/ja_JP/sdk.js#xfbml=1&version=v10.0");
        facebook.setAttribute("nonce", "F5crYADj");
        facebook.setAttribute("async", "");
        facebook.setAttribute("defer", "");
        facebook.setAttribute("crossorigin", "anonymous");
        facebook.setAttribute("loading", "lazy");
        document.head.appendChild(facebook);

    }, []);

    return (
        <>
            <section
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-easing="ease">
                <div className="inner">
                    <div className={title} >最新の活動は<br className="sp" />SNSよりご確認ください</div>
                    <div className={flexDiv} >
                        <div className={topDiv}>
                            <div className={topTitleContainer}>
                                <div className={topTitle}>FACEBOOK</div>
                            </div>
                            <div className={topContentContainer}>
                                <div
                                    ref={ref}
                                    className="fb-page"
                                    data-href="https://www.facebook.com/jceoa2019/"
                                    data-tabs="timeline"
                                    data-width={ref?.current?.clientWidth ?? ''}
                                    data-height=""
                                    data-small-header="false"
                                    data-adapt-container-width="true"
                                    data-hide-cover="false"
                                    data-show-facepile="false"
                                />
                            </div>
                        </div>
                        <div className={bottomDiv}>
                            <div className={bottomTitleContainer}>
                                <div className={bottomTitle}>TWITTER</div>
                            </div>
                            <div className={bottomContentContainer}>
                                <a
                                    className="twitter-timeline"
                                    data-height="580"
                                    data-width="350"
                                    data-theme="light"
                                    data-chrome="noheadernofooter"
                                    href="https://twitter.com/CEO86364606"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default SocialSection;

// export function Head() {
//     return (
//         <>
//             <script src="https://platform.twitter.com/widgets.js" />
//             <script async defer crossOrigin="anonymous" src="https://connect.facebook.net/ja_JP/sdk.js#xfbml=1&version=v15.0" nonce="YsV1HiKb"></script>
//         </>
//     )
// }
