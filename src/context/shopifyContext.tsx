import React, { Component, FC, useEffect, useState } from 'react'
// import Client, { Cart } from 'shopify-buy';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from 'react-apollo';
import { ApolloLink } from "apollo-link";

interface Props {
    client: any,
    apolloClient: any,
    products: any,
    collections: any,
    blogs: any,
    product: any,
    checkout: any,
    isCartOpen: any,
    loading: Boolean,
    fetchAllProducts: () => void,
    fetchAllCollections: () => void,
    fetchAllBlogs: () => void,
    removeCheckoutItem: (checkoutId: any, productId: any) => void,
    fetchProductWithId: (id: string) => void,
    addItemToCheckout: (variantId: any, quantity: any) => void,
}

// const client = Client.buildClient({
//     domain: "",
//     storefrontAccessToken: ""
// });

const httpLink = createHttpLink({ uri: `` })

const wordPressLink = createHttpLink({ uri: `https://xs893709.xsrv.jp/index.php?graphql` })

const middlewareLink = setContext(() => ({
    headers: {
        "Content-Type": "application/graphql",
        'X-Shopify-Storefront-Access-Token': process.env.GATSBY_SHOPIFY_STOREFRONT_ACCESS_TOKEN
    }
}))

const apolloClient = new ApolloClient({
    link: ApolloLink.split(
        operation => operation.getContext().clientName === "shopify",
        middlewareLink.concat(httpLink),
        wordPressLink
    ),
    cache: new InMemoryCache(),
})

const ShopifyContext = React.createContext({} as Props)

const ShopifyProvider: FC = ({ children }) => {
    const [products, setProducts] = useState();
    const [loading, setLoading] = useState(true);
    const [collections, setCollections] = useState();
    const [blogs, setBlogs] = useState();
    const [product, setProduct] = useState({ product: {} });
    // const [checkout, setCheckout] = useState<Client.Cart>();
    const [isCartOpen, setIsCartOpen] = useState({ isCartOpen: false });

    // useEffect(() => {
    //     if (localStorage.checkout) {
    //         fetchCheckout(localStorage.checkout);
    //     } else {
    //         createCheckout();
    //     }
    // }, []);

    // const createCheckout = async () => {
    //     const _checkout = await client.checkout.create();
    //     localStorage.setItem("checkout", _checkout.id);
    //     setCheckout(_checkout);
    // }

    // const removeCheckoutItem = async (checkoutId: any, productId: any) => {
    //     client.checkout.
    //         removeLineItems(checkoutId, productId)
    //         .then((checkout) => {
    //             setCheckout(checkout);
    //         })
    // }

    // const fetchCheckout = async (checkoutId) => {
    //     client.checkout
    //         .fetch(checkoutId)
    //         .then((checkout) => {
    //             setCheckout(checkout);
    //         })
    //         .catch((err) => console.log(err));
    // };

    // const addItemToCheckout = async (variantId: any, quantity: any) => {
    //     const lineItemsToAdd = [{
    //         variantId,
    //         quantity: parseInt(quantity, 10)
    //     }]
    //     const _checkout = await client.checkout.addLineItems(checkout.id, lineItemsToAdd)
    //     setCheckout(_checkout)
    // }

    // const fetchAllProducts = async () => {
    //     const products = await client.product.fetchAll();
    //     setProducts(products)
    // }

    // const fetchProductWithId = async (id: string) => {
    //     setProduct({});

    //     await client.product.fetch(id).then(
    //         (product) => {
    //             setProduct(product);
    //         });

    // }

    // const fetchAllCollections = async () => {
    //     const collections = await client.collection.fetchAll();
    //     setCollections(collections)
    // }

    return (
        <ApolloProvider client={apolloClient}>
            <ShopifyContext.Provider value={{
                products, product, isCartOpen, collections, apolloClient,
                loading,
            }}
            >
                {children}
            </ShopifyContext.Provider >
        </ApolloProvider>
    )
}

const ShopifyConsumer = ShopifyContext.Consumer

export { ShopifyConsumer, ShopifyContext, ShopifyProvider, apolloClient }

