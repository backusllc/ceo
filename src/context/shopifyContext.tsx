import React, { Component, FC, useEffect, useState } from 'react';
// import Client, { Cart } from 'shopify-buy';
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  HttpLink,
  split,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { ApolloLink } from '@apollo/client/core';

interface Props {
  client: any;
  apolloClient: any;
  products: any;
  collections: any;
  blogs: any;
  product: any;
  checkout: any;
  isCartOpen: any;
  loading: Boolean;
  fetchAllProducts: () => void;
  fetchAllCollections: () => void;
  fetchAllBlogs: () => void;
  removeCheckoutItem: (checkoutId: any, productId: any) => void;
  fetchProductWithId: (id: string) => void;
  addItemToCheckout: (variantId: any, quantity: any) => void;
}

const httpLink = new HttpLink({ uri: `` });

const wordPressLink = new HttpLink({
  uri: `https://xs893709.xsrv.jp/index.php?graphql`,
});

const middlewareLink = setContext(() => ({
  headers: {
    'Content-Type': 'application/graphql',
    'X-Shopify-Storefront-Access-Token':
      process.env.GATSBY_SHOPIFY_STOREFRONT_ACCESS_TOKEN,
  },
}));

const apolloClient = new ApolloClient({
  link: ApolloLink.split(
    (operation) => operation.getContext().clientName === 'shopify',
    middlewareLink.concat(httpLink),
    wordPressLink,
  ),
  cache: new InMemoryCache(),
});

const ShopifyContext = React.createContext({} as Props);

const ShopifyProvider: FC = ({ children }) => {
  const [products, setProducts] = useState();
  const [loading, setLoading] = useState(true);
  const [collections, setCollections] = useState();
  const [product, setProduct] = useState({ product: {} });
  const [isCartOpen, setIsCartOpen] = useState({ isCartOpen: false });

  return (
    <ApolloProvider client={apolloClient}>
      <ShopifyContext.Provider
        value={{
          products,
          product,
          isCartOpen,
          collections,
          apolloClient,
          loading,
        }}
      >
        {children}
      </ShopifyContext.Provider>
    </ApolloProvider>
  );
};

const ShopifyConsumer = ShopifyContext.Consumer;

export { ShopifyConsumer, ShopifyContext, ShopifyProvider, apolloClient };
