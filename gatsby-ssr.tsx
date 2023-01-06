import React, { useContext, useEffect } from 'react'
// import "normalize.css";

import type { GatsbySSR } from 'gatsby'
import { RecoilRoot } from 'recoil';
import { RootPrivider } from "./src/components/provider/RootProvider/index"

import { GatsbyContext, GatsbyProvider } from "./src/context/context"
import { ShopifyProvider } from "./src/context/shopifyContext"
import { OgMegaHeader } from "./src/components/organisms";
import Footer from './src/components/organisms/WordPress/Footer';
import "@fontsource/noto-sans-jp"
import "@fontsource/roboto";

const wrapPageElement: GatsbySSR['wrapPageElement'] = ({
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
                    {element}
                </ShopifyProvider >
            </GatsbyProvider>
        </RootPrivider>
    </RecoilRoot>
)

export { wrapPageElement, wrapRootElement }
