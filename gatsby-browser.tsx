import React from 'react'

import type { GatsbyBrowser } from 'gatsby'
import { RecoilRoot } from 'recoil';
import { RootPrivider } from "./src/components/provider/RootProvider/index"

import { GatsbyProvider } from "./src/context/context"
import { ShopifyProvider } from "./src/context/shopifyContext"
import { OgMegaHeader } from "./src/components/organisms";
import Footer from './src/components/organisms/WordPress/Footer';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const wrapPageElement: GatsbyBrowser['wrapPageElement'] = ({
    element,
}) => {

    return (
        <>
            <OgMegaHeader />
            <main>
                {element}
            </main>
            <Footer />
        </>
    )
}

const wrapRootElement = ({ element }) => (
    <RecoilRoot>
        <RootPrivider>
            <GatsbyProvider>
                <ShopifyProvider>
                    <HelmetProvider>
                        <Helmet>
                            <link rel="preconnect" href="https://fonts.googleapis.com" />
                            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='anonymous' />
                            <link href="https://fonts.googleapis.com/css2?family=Roboto&family=Noto+Sans+JP&display=swap" rel="stylesheet" />
                            {/* <link
                                rel="preload"
                                href="/fonts/BebasNeue.woff2"
                                as="font"
                                crossOrigin="anonymous"
                                type="font/woff2"
                            /> */}
                            <meta name="robots" content="noindex"></meta>
                        </Helmet>
                    </HelmetProvider>
                    {element}
                </ShopifyProvider >
            </GatsbyProvider>
        </RootPrivider>
    </RecoilRoot>
)

export { wrapPageElement, wrapRootElement }

// const onRouteUpdate = ({ location }) => {
//     anchorScroll(location);
//     return true;
// };
// export { onRouteUpdate }

// const shouldUpdateScroll = ({
//     routerProps: { location },
//     getSavedScrollPosition
// }) => {
//     anchorScroll(location);
//     return true;
// }

// export { shouldUpdateScroll }

// function anchorScroll(location) {
//     // Check for location so build does not fail
//     if (location && location.hash) {
//         setTimeout(() => {
//             // document.querySelector(${location.hash}).scrollIntoView({ behavior: 'smooth', block: 'start' });
//             const item = document.querySelector(location.hash).offsetTop;
//             const mainNavHeight = document.querySelector('.nav').offsetHeight;
//             window.scrollTo({ top: item - mainNavHeight, left: 0, behavior: 'smooth' });
//         }, 0);
//     }
// }
// export { anchorScroll }

// const onRouteUpdate = ({ location }) => scrollToAnchor(location)

// export default { onRouteUpdate };

// function scrollToAnchor(location, mainNavHeight = 0) {
//     // Check for location so build does not fail
//     if (location && location.hash) {
//         const item = document.querySelector(`${location.hash}`).offsetTop

//         window.scrollTo({
//             top: item - mainNavHeight,
//             behavior: "smooth",
//         })
//     }

//     return true
// }
