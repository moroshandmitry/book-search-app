import React from 'react'

const Layout: React.FC<React.PropsWithChildren> = (props) => {
  const { children } = props

  return <React.Fragment>{children}</React.Fragment>
}

export default Layout
