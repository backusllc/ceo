import React, { useContext, useEffect, useState } from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { GatsbyContext } from "../../../../context/context";
import { sprinkles } from '../../../../styles/sprinkles.css';
import { humburgerButton, span, header, divHeader, liMenu, aMenu, navHeader, ulMegaMenu, liMegaMenu, aMegaMenu, quantityDiv } from './index.css';
import { useGetWordpressMenuSettings } from '../../../../hooks/useGetWordpressMenuSettings';
import { Navigation } from '../../../../components/organisms/WordPress/Navigation';
import { GatsbyImage, getImage, IGatsbyImageData } from 'gatsby-plugin-image';

export const OgMegaHeader = ({ location }) => {
    const { isSidebarOpen, showSidebar } = useContext(GatsbyContext);
    const [isShowMegaMenu, setIsShowMegaMenu] = useState(false);
    const [urlPath, setUrlPath] = useState("");
    const { loading: menuLoading, data: menuLists } = useGetWordpressMenuSettings("MAIN");
    const data = useStaticQuery(query);

    useEffect(() => {
        setUrlPath(window.location.pathname);
    }, []);

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
        <header className={header}>
            <Navigation />
            {!isSidebarOpen &&
                <>
                    <div className={navHeader}>
                        {urlPath === "/" ?
                            <h1 style={{ marginLeft: '2rem' }}>
                                <Link to="/">
                                    <GatsbyImage
                                        image={getImage(data.allFile.edges[0].node.childrenImageSharp[0]) as IGatsbyImageData}
                                        alt={"一般社団法人 日本CEO協会"}
                                    />
                                </Link>
                            </h1>
                            :
                            <div style={{ marginLeft: '2rem' }}>
                                <Link to="/" onClick={() => setIsShowMegaMenu(false)}>
                                    <GatsbyImage
                                        image={getImage(data.allFile.edges[0].node.childrenImageSharp[0]) as IGatsbyImageData}
                                        alt={"一般社団法人 日本CEO協会"}
                                    />
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
  allFile (filter: {name:{eq:"logo"}}){
    edges {
      node {
        name
        childrenImageSharp {
          gatsbyImageData(placeholder: NONE)
        }
      }
    }
  }
}
`
