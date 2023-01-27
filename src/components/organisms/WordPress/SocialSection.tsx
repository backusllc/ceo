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
        facebook.setAttribute("async", "true");
        facebook.setAttribute("defer", "true");
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
                    <div className={flexDiv}>
                        <div className={topDiv}>
                            <div className={topContentContainer}>
                                <div className={topTitleContainer}>
                                    <div className={topTitle}>FACEBOOK</div>
                                </div>
                                <div
                                    ref={ref}
                                    className="fb-page"
                                    data-href="https://www.facebook.com/jceoa2019/"
                                    data-show-posts="true"
                                    data-width="500"
                                    data-height="340"
                                    data-small-header="false"
                                    data-adapt-container-width="true"
                                    data-hide-cover="false"
                                    data-show-facepile="true">
                                    <blockquote cite="https://www.facebook.com/jceoa2019/" className="fb-xfbml-parse-ignore">
                                        <a href="https://www.facebook.com/jceoa2019/">一般社団法人 日本CEO協会</a></blockquote>
                                </div>

                            </div>
                        </div>
                        <div className={bottomDiv}>
                            <div className={bottomTitleContainer}>
                                <div className={bottomTitle}>TWITTER</div>
                            </div>
                            <div className={bottomContentContainer}>
                                <a
                                    className="twitter-timeline"
                                    data-chrome="nofooter"
                                    data-height="340"
                                    data-width="500"
                                    data-theme="light"
                                    href="https://twitter.com/CEO86364606"
                                >Tweets by @CEO86364606</a>
                            </div>
                        </div>
                    </div>
                </div >
            </section >
        </>
    );
};

export default SocialSection;

// export function Head() {
//     return (
//         <>
//             <script
//                 async
//                 defer
//                 crossOrigin="anonymous"
//                 src="https://connect.facebook.net/ja_JP/sdk.js#xfbml=1&version=v10.0"
//                 nonce="F5crYADj"
//             />
//         </>
//     )
// }
