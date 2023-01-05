import React, { useContext, useEffect, useRef } from 'react'
import { AnchorLink } from "gatsby-plugin-anchor-links";
import menus from '../../../constants/navlink'

import { GatsbyContext } from '../../../context/context'
import { AtCloseButton } from '../../atoms'
import { wrap, menuWrap, menuContainer, img, logoDiv, logoLink, liMenu, aMenu, wrapMegaMenu, liMegaMenu, aMegaMenu, } from './Navigation.css'
import Accordion from './Accordion';
import { graphql, useStaticQuery } from 'gatsby';

export const Navigation = () => {
    const data = useStaticQuery(query);
    const { hideSidebar, isSidebarOpen, links } = useContext(GatsbyContext)

    const insideRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = insideRef.current;

        const hundleClickOutside = (e: MouseEvent) => {
            if (!el?.contains(e.target as Node) && isSidebarOpen) {
                hideSidebar();
            }
        };

        document.addEventListener("click", hundleClickOutside);

        return () => {
            document.removeEventListener("click", hundleClickOutside);
        };
    }, []);

    return (
        <>
            {isSidebarOpen &&
                <div className={wrap}>
                    <div className={logoDiv} >
                        <AnchorLink to="/" className={logoLink}>
                            <img src={data.file.publicURL} alt="一般社団法人 日本CEO協会" onClick={hideSidebar} />
                        </AnchorLink>
                        <AtCloseButton onClick={hideSidebar} />
                    </div>
                    <div className={`inner ${menuContainer}`}>
                        {menus.map((menu, index) => (
                            <div key={menu.id} className={menuWrap}
                                data-aos="fade"
                                data-aos-delay={`${index * 100}`}
                                data-aos-duration="1000"
                                data-aos-easing="ease"
                            >
                                <Accordion menu={menu} hideSidebar={hideSidebar} />
                            </div>
                        ))}
                    </div>
                </div>
            }
        </>
    )
}

const query = graphql`
query {
    file(relativePath: {eq: "logo.svg"}) {
      publicURL
    }
  }
`
