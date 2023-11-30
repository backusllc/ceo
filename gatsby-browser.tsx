import React from 'react';

import type { GatsbyBrowser } from 'gatsby';
import { RecoilRoot } from 'recoil';
import { RootPrivider } from './src/components/provider/RootProvider/index';

import { GatsbyProvider } from './src/context/context';
import { ShopifyProvider } from './src/context/shopifyContext';
import { OgMegaHeader } from './src/components/organisms';
import Footer from './src/components/organisms/WordPress/Footer';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const wrapPageElement: GatsbyBrowser['wrapPageElement'] = ({ element }) => {
  return (
    <>
      <OgMegaHeader />
      <main>{element}</main>
      <Footer />
    </>
  );
};

const wrapRootElement = ({ element }) => (
  <HelmetProvider>
    <RecoilRoot>
      <RootPrivider>
        <GatsbyProvider>
          <ShopifyProvider>
            <Helmet>
              <link rel="preconnect" href="https://fonts.googleapis.com" />
              <link
                rel="preconnect"
                href="https://fonts.gstatic.com"
                crossOrigin="anonymous"
              />
              <link
                href="https://fonts.googleapis.com/css2?family=Roboto&family=Noto+Sans+JP&display=swap"
                rel="stylesheet"
              />
              {/* <link
                                rel="preload"
                                href="/fonts/BebasNeue.woff2"
                                as="font"
                                crossOrigin="anonymous"
                                type="font/woff2"
                            /> */}
              <meta name="robots" content="noindex"></meta>
            </Helmet>
            {element}
          </ShopifyProvider>
        </GatsbyProvider>
      </RootPrivider>
    </RecoilRoot>
  </HelmetProvider>
);

export { wrapPageElement, wrapRootElement };
