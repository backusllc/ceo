import React, { useContext, useState } from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { GatsbyContext } from "../../../../context/context";
import { sprinkles } from '../../../../styles/sprinkles.css';
import { useGetWordpressMenuSettings } from '../../../../hooks/useGetWordpressMenuSettings';
import { Navigation } from '../../../../components/organisms/WordPress/Navigation';
import { h1, humburgerButton, span, header, divHeader, liMenu, aMenu, navHeader, ulMegaMenu, liMegaMenu, aMegaMenu, quantityDiv } from './index.css';
import { Helmet } from 'react-helmet-async';
import { useLocation } from "@reach/router"

export const OgMegaHeader = () => {
    const location = useLocation();
    const [isShowMegaMenu, setIsShowMegaMenu] = useState(false);
    const { isSidebarOpen, showSidebar } = useContext(GatsbyContext);
    const { loading: menuLoading, data: menuLists } = useGetWordpressMenuSettings("MAIN");
    const data = useStaticQuery(query);

    const ulHeader = sprinkles({
        display: {
            mobile: 'none',
            tablet: 'none',
            desktop: 'flex',
        },
        gap: '57'
    })

    if (menuLoading) return <></>;

    const menus = menuLists.menuItems.edges

    return <>
        <Helmet>
            <link rel="preload" href={`${data.file.publicURL}`} as="image" />
        </Helmet>
        <header className={header}>
            <Navigation />
            {!isSidebarOpen &&
                <>
                    <div className={navHeader}>
                        {location.pathname === "/" ?
                            <h1 className={h1}>
                                <Link to="/">
                                    <img src={data.file.publicURL} alt="一般社団法人 日本CEO協会" />
                                </Link>
                            </h1>
                            :
                            <div className={h1}>
                                <Link to="/" onClick={() => setIsShowMegaMenu(false)}>
                                    <img src={data.file.publicURL} alt="一般社団法人 日本CEO協会" />
                                </Link>
                            </div>
                        }
                        <div className={divHeader}>
                            <ul className={ulHeader}>
                                {menus.length > 0 &&
                                    menus.map((menu) => (
                                        <li key={menu.node.id} className={liMenu}
                                            // onMouseEnter={() => setIsShowMegaMenu(menu?.megaMenus?.length > 0)}
                                            // onMouseLeave={() => setIsShowMegaMenu(false)}
                                            onClick={() => setIsShowMegaMenu(false)}
                                        >
                                            <Link to={menu.node.url} className={aMenu}>{menu.node.label}</Link>
                                        </li>
                                    ))}
                            </ul>
                        </div>
                    </div>
                    <div className={humburgerButton} onClick={showSidebar}>
                        <span className={span} />
                        <span className={span} />
                        <span className={span} />
                    </div>
                </>
            }
        </header >
    </>
};

const query = graphql`
query {
    file(relativePath: {eq: "logo.svg"}) {
      publicURL
    }
  }
`
