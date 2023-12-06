import React from 'react'

import { useDefaultProps } from '../hooks'

import type { BoxProps } from './Box.types'

const Box: React.FC<React.PropsWithChildren<BoxProps>> = (props) => {
  const { children, className, customStyles, attrs } = useDefaultProps(props)

  return (
    <div className={className} style={customStyles} {...(attrs as React.HTMLAttributes<HTMLDivElement>)}>
      {children}
    </div>
  )
}

export default Box
