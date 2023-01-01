import React, { useContext, useEffect, useRef } from 'react';
import { Link } from 'gatsby';

import { flexDiv, title, topDiv, bottomDiv, topTitleContainer, bottomTitleContainer, topTitle, bottomTitle, topContentContainer, bottomContentContainer } from './SocialSection.css'
// import { Helmet } from 'react-helmet';

const SocialSection = () => {

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
                                <div className="fb-page" data-href="https://www.facebook.com/jceoa2019/" data-tabs="timeline" data-width="350" data-height="580" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="false"><blockquote cite="https://www.facebook.com/jceoa2019/" className="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/jceoa2019/">一般社団法人 日本CEO協会</a></blockquote></div>
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
