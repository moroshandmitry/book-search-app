import React from 'react'

import { toPixelString, removeUndefinedStyles } from '../../../lib/helpers'

import type { Styles } from './types'

interface Props extends React.PropsWithChildren<Styles> {}

const useDefaultProps = (props: Props) => {
  const {
    p,
    pt,
    pr,
    pb,
    pl,
    m,
    mt,
    mr,
    mb,
    ml,
    w,
    h,
    br,
    bg,
    zIndex,
    border,
    position,
    top,
    right,
    bottom,
    left,
    order,
    flexGrow,
    flexWrap,
    alignSelf,
    alignItems,
    alignContent,
    flexDirection,
    justifyContent,
    outline,
    cursor,
    transition,
    color,
    fontSize,
    fontFamily,
    fontWeight,
    textAlign,
    lineHeight,
    children,
    ...attrs
  } = props

  const paddingStyles = {
    padding: toPixelString(p),
    paddingTop: toPixelString(pt),
    paddingRight: toPixelString(pr),
    paddingBottom: toPixelString(pb),
    paddingLeft: toPixelString(pl),
  }

  const marginStyles = {
    margin: toPixelString(m),
    marginTop: toPixelString(mt),
    marginRight: toPixelString(mr),
    marginBottom: toPixelString(mb),
    marginLeft: toPixelString(ml),
  }

  const sizeStyles = {
    width: toPixelString(w),
    height: toPixelString(h),
  }

  const borderStyles = {
    border,
    borderRadius: toPixelString(br),
  }

  const fontStyles = {
    color,
    textAlign,
    lineHeight,
    fontFamily,
    fontWeight,
    fontSize: toPixelString(fontSize),
  }

  const commonStyles = removeUndefinedStyles({
    ...marginStyles,
    ...paddingStyles,
    ...sizeStyles,
    ...borderStyles,
    ...fontStyles,
  })

  const positionStyles = {
    top,
    left,
    right,
    bottom,
    position,
  }

  const flexStyles = {
    order,
    flexGrow,
    flexWrap,
    alignSelf,
    alignItems,
    alignContent,
    flexDirection,
    justifyContent,
  }

  const expandable = {
    display: 'flex',
    flexDirection: flexDirection ?? 'column',
    zIndex,
    cursor,
    outline,
    transition,
    background: bg,
  }

  const customStyles: React.CSSProperties = removeUndefinedStyles({
    ...commonStyles,
    ...flexStyles,
    ...positionStyles,
    ...expandable,
  })

  return {
    attrs,
    children,
    customStyles,
  }
}

export default useDefaultProps
