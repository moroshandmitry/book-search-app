import React from 'react'

import Navbar from '../Navbar/Navbar'

const Header: React.FC<React.PropsWithChildren> = (props) => {
  const { children } = props

  return (
    <header>
      <Navbar />
      {children}
    </header>
  )
}

export default Header
