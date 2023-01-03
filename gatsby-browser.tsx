import React, { useContext, useEffect } from 'react'
// import "normalize.css";

import type { GatsbyBrowser } from 'gatsby'
import { RecoilRoot } from 'recoil';
import { RootPrivider } from "./src/components/provider/RootProvider/index"

import { GatsbyContext, GatsbyProvider } from "./src/context/context"
import { ShopifyProvider } from "./src/context/shopifyContext"
import { OgMegaHeader } from "./src/components/organisms";
import Footer from './src/components/organisms/WordPress/Footer';
// import "@fontsource/noto-sans-jp"
// import "@fontsource/roboto";
import SEO from './src/utils/seo';
import { useWordPressPostSettings } from './src/hooks/useWordPressPostSettings'
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
                            <link
                                rel="preload"
                                href="/fonts/BebasNeue.woff2"
                                as="font"
                                crossOrigin="anonymous"
                                type="font/woff2"
                            />
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
