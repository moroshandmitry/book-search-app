import React from 'react'

import { useDefaultProps } from '../hooks'

import type { BoxProps } from './Box.types'

const Box: React.FC<React.PropsWithChildren<BoxProps>> = (props) => {
  const { children, customStyles, attrs } = useDefaultProps(props)

  return (
    <div style={customStyles} {...(attrs as React.HTMLAttributes<HTMLDivElement>)}>
      {children}
    </div>
  )
}

export default Box
