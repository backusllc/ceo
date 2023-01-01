import React from 'react';
import { Link } from 'gatsby';
import { sprinkles } from '../../../styles/sprinkles.css';
import { footer, footerContainer, topContainer, link, ul, rights, rightsText } from './Footer.css'

import { useGetWordpressMenuSettings } from '../../../hooks/useGetWordpressMenuSettings';


const Footer = () => {
    const { loading: menuLoading, data: menuLists } = useGetWordpressMenuSettings("MAIN");

    const termDiv = sprinkles({
        display: {
            mobile: 'block',
            tablet: 'flex',
            desktop: 'flex',
        },
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '10',
    })
    const bottomContainer = sprinkles({
        flexDirection: {
            mobile: 'column',
            tablet: 'row',
            desktop: 'row',
        }
    })

    if (menuLoading) return <></>;

    const menus = menuLists.menuItems.edges

    return (
        <footer className={footer}>
            <div className={footerContainer}>
                <div className="inner">
                    <div className={termDiv}>
                        <div className={topContainer} style={{}}>
                            <Link to="/"><img src="/images/logo.png" alt="一般社団法人 日本CEO協会" /></Link>
                        </div>
                        <ul className={`${bottomContainer} ${ul}`}>
                            {menus.length > 0 &&
                                menus.map((menu) => (
                                    <li key={menu.node.id}>
                                        <Link to={menu.node.url} className={link}>{menu.node.label}</Link>
                                    </li>
                                ))}
                        </ul>
                    </div>
                </div>
            </div>
            <div className={`inner ${rights}`} >
                <div className={rightsText}>© 一般社団法人日本CEO協会 All Rights Reserved.</div>
            </div>
        </footer >
    );
};

export default Footer;
