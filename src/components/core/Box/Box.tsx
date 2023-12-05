import React from 'react'

import type { BoxProps } from './Box.types'

const Box: React.FC<React.PropsWithChildren<BoxProps>> = (props) => {
  const {
    children,
    padding,
    pt,
    pr,
    pb,
    pl,
    margin,
    mt,
    mr,
    mb,
    ml,
    flexWrap,
    alignSelf,
    alignItems,
    flexDirection = 'column',
    alignContent,
    justifyContent,
  } = props

  const boxStyles: React.CSSProperties = {
    padding,
    paddingTop: pt,
    paddingRight: pr,
    paddingBottom: pb,
    paddingLeft: pl,
    margin,
    marginTop: mt,
    marginRight: mr,
    marginBottom: mb,
    marginLeft: ml,
    display: 'flex',
    flexWrap,
    alignSelf,
    alignItems,
    flexDirection,
    alignContent,
    justifyContent,
  }

  return <div style={boxStyles}>{children}</div>
}

export default Box
