import React, { useEffect } from 'react'

import { pageWrap } from './Layout.css'

interface Props {
  children?: React.ReactNode;
}

const Layout = React.memo(({ children }: Props) => {

  return (
    <>
      <div className={`${pageWrap} wrapper`}>
        {children}
      </div>
    </>
  )
});

export default Layout;
