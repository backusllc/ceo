import React, { useContext, useEffect } from 'react'

import { pageWrap } from './Layout.css'
import { GatsbyContext } from '../../../context/context'

interface Props {
  children?: React.ReactNode;
}

const Layout = React.memo(({ children }: Props) => {
  const { hideSidebar } = useContext(GatsbyContext)

  useEffect(() => {
    hideSidebar();

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
