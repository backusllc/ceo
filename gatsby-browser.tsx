import React, { useContext, useEffect } from 'react'
// import "normalize.css";

import type { GatsbyBrowser } from 'gatsby'
import { RecoilRoot } from 'recoil';
import { RootPrivider } from "./src/components/provider/RootProvider/index"

import { GatsbyContext, GatsbyProvider } from "./src/context/context"
import { ShopifyProvider } from "./src/context/shopifyContext"
import { OgMegaHeader } from "./src/components/organisms";
import Footer from './src/components/organisms/WordPress/Footer';
import "@fontsource/noto-sans-jp"
import "@fontsource/roboto";
import SEO from './src/utils/seo';
import { useWordPressPostSettings } from './src/hooks/useWordPressPostSettings'
// import { Helmet } from 'react-helmet';

const wrapPageElement: GatsbyBrowser['wrapPageElement'] = ({
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

// export function Head() {
//     return (
//         <>
//             <script src="https://platform.twitter.com/widgets.js" />
//             <script
//                 async
//                 defer
//                 crossOrigin="anonymous"
//                 src="https://connect.facebook.net/ja_JP/sdk.js#xfbml=1&version=v10.0"
//                 nonce="F5crYADj"
//             />
//             <link
//                 rel="preload"
//                 href="/fonts/BebasNeue.woff2"
//                 as="font"
//                 crossOrigin="anonymous"
//                 type="font/woff2"
//             />
//             <meta name="robots" content="noindex"></meta>
//         </>
//     )
// }

// export const onRenderBody: GatsbyBrowser['onRender'] = (
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
//     setHeadComponents([
//         helmet.title.toComponent(),
//         helmet.link.toComponent(),
//         helmet.meta.toComponent(),
//         helmet.noscript.toComponent(),
//         helmet.script.toComponent(),
//         helmet.style.toComponent(),
//     ]);
// };
