import React, { useContext, useEffect } from 'react'
// import "normalize.css";

import type { GatsbySSR } from 'gatsby'
import { RecoilRoot } from 'recoil';
import { RootPrivider } from "./src/components/provider/RootProvider/index"

import { GatsbyContext, GatsbyProvider } from "./src/context/context"
import { ShopifyProvider } from "./src/context/shopifyContext"
import { OgMegaHeader } from "./src/components/organisms";
import Footer from './src/components/organisms/WordPress/Footer';
import SEO from './src/utils/seo';
import "@fontsource/noto-sans-jp"
import "@fontsource/roboto";
import { useWordPressPostSettings } from './src/hooks/useWordPressPostSettings'

// import { Helmet } from 'react-helmet-async';
// import { Helmet } from 'react-helmet';

const wrapPageElement: GatsbySSR['wrapPageElement'] = ({
    element,
}) => {

    return (
        <>
            {/* <RecoilRoot>
                <RootPrivider>
                    <GatsbyProvider>
                        <ShopifyProvider> */}
            {/* <SEO /> */}
            <OgMegaHeader />
            {/* <Helmet>
                            <script src="https://platform.twitter.com/widgets.js" />
                            <script
                                async
                                defer
                                crossOrigin="anonymous"
                                src="https://connect.facebook.net/ja_JP/sdk.js#xfbml=1&version=v10.0"
                                nonce="F5crYADj"
                            />
                            <link
                                rel="preload"
                                href="/fonts/BebasNeue.woff2"
                                as="font"
                                crossOrigin="anonymous"
                                type="font/woff2"
                            />
                            <meta name="robots" content="noindex"></meta>
                        </Helmet> */}
            <main>
                {element}
            </main>
            <Footer />
        </>
        //             </ShopifyProvider>
        //         </GatsbyProvider>
        //     </RootPrivider>
        // </RecoilRoot>

    )
}

const wrapRootElement = ({ element }) => (
    <RecoilRoot>
        <RootPrivider>
            <GatsbyProvider>
                <ShopifyProvider>
                    {element}
                </ShopifyProvider >
            </GatsbyProvider>
        </RootPrivider>
    </RecoilRoot>
)

export { wrapPageElement, wrapRootElement }

// export const onPreRenderHTML: GatsbySSR['onPreRenderHTML'] = ({
//     getHeadComponents,
//     replaceHeadComponents,
// }) => {
//     const headComponents = getHeadComponents();
//     headComponents.sort((a, b) => {
//         if (a.type === b.type || (a.type !== 'style' && b.type !== 'style')) {
//             return 0;
//         }

//         if (a.type === 'style') {
//             return 1;
//         } else if (b.type === 'style') {
//             return -1;
//         }

//         return 0;
//     });

//     replaceHeadComponents(headComponents);
// }

// export const onRenderBody: GatsbySSR['onRenderBody'] = (
//     { setHeadComponents,
//         setHtmlAttributes,
//         setBodyAttributes,
//     },
//     pluginOptions
// ) => {
//     const helmet = Helmet.renderStatic();
//     setHtmlAttributes(helmet.htmlAttributes.toComponent());
//     setHtmlAttributes({ lang: "ja" });
//     setBodyAttributes(helmet.bodyAttributes.toComponent());

//     // var components = [helmet.link.toComponent(), helmet.meta.toComponent(), helmet.noscript.toComponent(), helmet.script.toComponent(), helmet.style.toComponent(), helmet.base.toComponent()];
//     setHeadComponents([
//         helmet.title.toComponent(),
//         helmet.base.toComponent(),
//         helmet.link.toComponent(),
//         helmet.meta.toComponent(),
//         helmet.noscript.toComponent(),
//         helmet.script.toComponent(),
//         helmet.style.toComponent(),
//     ]);
// };

// export const onPreRenderHTML: GatsbySSR['onPreRenderHTML'] = ({
//     getHeadComponents,
//     replaceHeadComponents,
// }) => {

//     const headComponents = getHeadComponents();

//     headComponents.sort((a, b) => {
//         if (a.props && a.props["data-react-helmet"]) {
//             return 0;
//         }
//         return 1;
//     });
//     replaceHeadComponents(headComponents);

//     // const headComponents = getHeadComponents();
//     // headComponents.sort((a, b) => {
//     //     if (a.type === b.type || (a.type !== 'style' && b.type !== 'style')) {
//     //         return 0;
//     //     }

//     //     if (a.type === 'style') {
//     //         return 1;
//     //     } else if (b.type === 'style') {
//     //         return -1;
//     //     }

//     //     return 0;
//     // });

//     // replaceHeadComponents(headComponents);
// };


// exports.onRenderBody = ({ setHtmlAttributes }: any) => {
//     setHtmlAttributes({ lang: "ja" })
// }


// const facebookSdkOptions = {
//     appId: "[YOUR-FACEBOOK-APP-ID]",
//     autoLogAppEvents: true,
//     xfbml: true,
//     version: "v8.0",
//   };

//   exports.onRenderBody = ({ setPreBodyComponents }) => {
//     setPreBodyComponents([
//       <script
//         key="facebook-async-init"
//         dangerouslySetInnerHTML={{
//           __html: `window.fbAsyncInit = function() {FB.init(${JSON.stringify(facebookSdkOptions)})}`,
//         }}
//       />,
//       <script
//         key="facebook-sdk"
//         async={true}
//         defer={true}
//         crossOrigin="anonymous"
//         src="https://connect.facebook.net/en_US/sdk.js"
//       ></script>,
//     ]);
//   };
