import React, { useContext, useEffect } from 'react'

import { pageWrap } from './Layout.css'
import { useLocation } from "@reach/router"
import { GatsbyContext } from '../../../context/context'

interface Props {
  children?: React.ReactNode;
}

const Layout = React.memo(({ children }: Props) => {
  const { hideSidebar } = useContext(GatsbyContext)
  const location = useLocation();

  useEffect(() => {
    hideSidebar();

    window.scrollTo({ top: 0, behavior: "auto" });

    if (!location.hash) { return }
    const targetEl = document.querySelector(location.hash);
    targetEl?.scrollIntoView({ behavior: 'smooth' })
  }, [location.hash]);

  return (
    <>
      <div className={`${pageWrap} wrapper`}>
        {children}
      </div>
    </>
  )
});

export default Layout;
