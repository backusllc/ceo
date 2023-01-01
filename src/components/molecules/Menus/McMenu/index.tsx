import React, { useState, useEffect } from 'react'
import { Link } from 'gatsby'
import { navLinks, li } from './index.css'

export const McMenu = () => {
    const [menu, setMenu] = useState([]);

    useEffect(() => {
        fetchMenu();
    }, []);

    async function fetchMenu() {
        const menu = [
            {
                index : '1',
                url: '',
                label: 'オンラインストア',
            },
            {
                index : '2',
                url: '/information',
                label: 'お知らせ',
            },
            {
                index : '3',
                url: '/recruit',
                label: '採用情報',
            },
            {
                index : '4',
                url: '/company',
                label: '会社概要',
            },
            {
                index : '5',
                url: '/faq',
                label: 'よくある質問',
            },
            {
                index : '6',
                url: '/contactus',
                label: 'お問合せ',
            },
        ]
        setMenu(menu);

    };

    return (
        <ul className={navLinks}>
            {menu.map((item, index) => {
                return <li className={li} key={index}><Link to={item?.url} >{item?.label}</Link></li>
            })
            }
        </ul>
    )
}
