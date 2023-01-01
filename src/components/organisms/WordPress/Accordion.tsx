import { AnchorLink } from 'gatsby-plugin-anchor-links';
import React, { useState } from 'react'

import { titleWrapClose, titleWrapOpen, title, ul, li, link, accordionHeightActive, accordionHeightNotActive } from './Accordion.css'

interface Props {
  menu: any;
  hideSidebar: () => void;
}

const Accordion = React.memo(({ menu, hideSidebar }: Props) => {
  const [setActive, setActiveState] = useState(false);

  const toggleAccordion = (e: any) => {
    setActiveState(!setActive);
  };
  const accordionHeight = setActive ? accordionHeightActive : accordionHeightNotActive;

  const titleWrap = setActive ? titleWrapOpen : titleWrapClose;

  return (
    <>
      <div className={titleWrap}>
        <div className={`${title} sp`} onClick={toggleAccordion}>{menu.title}</div>
        <AnchorLink to={menu.link} className={`${title} pc`} onAnchorLinkClick={hideSidebar}>{menu.title}</AnchorLink>
      </div>
      <ul className={`${ul} ${accordionHeight}`} onClick={toggleAccordion}>
        {menu.listMenu.map((item) => (
          <li key={item.id} className={li} onClick={hideSidebar}><AnchorLink className={link} to={item.link} >{item.text}</AnchorLink></li>
        ))
        }
      </ul>

    </>
  )
});

export default Accordion;
