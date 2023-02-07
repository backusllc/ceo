// import { AnchorLink } from 'gatsby-plugin-anchor-links';
import React, { useState } from 'react'
import { Link, navigate } from 'gatsby';

import { baseWrap, titleWrapClose, titleWrapOpen, title, ul, li, link, accordionHeightActive, accordionHeightNotActive } from './Accordion.css'

interface Props {
  menu: any;
  hideSidebar: () => void;
}

const Accordion = React.memo(({ menu, hideSidebar }: Props) => {
  const [setActive, setActiveState] = useState(false);

  const toggleAccordion = (e: any) => {
    setActiveState(!setActive);
  };

  const handleClick = (link: any) => {
    navigate(link);
  }

  const accordionHeight = setActive ? accordionHeightActive : accordionHeightNotActive;

  const titleWrap = setActive ? titleWrapOpen : titleWrapClose;

  return (
    <>
      <div className={menu.listMenu.length == 1 ? baseWrap : titleWrap}>
        <div className={`${title} sp`} onClick={menu.listMenu.length == 1 ? () => { handleClick(menu.link) } : toggleAccordion}>{menu.title}</div>
        <Link to={menu.link} className={`${title} pc`} >{menu.title}</Link>
      </div>
      <ul className={`${ul} ${accordionHeight}`} onClick={toggleAccordion}>
        {menu.listMenu.map((item) => (
          <li key={item.id} className={li} ><div className={link} onClick={() => { handleClick(item.link) }}>{item.text}</div></li>
        ))
        }
      </ul>

    </>
  )
});

export default Accordion;
