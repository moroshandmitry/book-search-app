import { removeUndefinedStyles } from '../../../lib/helpers'

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
    display,
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
    style,
    children,
    className,
    ...attrs
  } = props

  const paddingStyles = {
    padding: p ? `${p}px` : undefined,
    paddingTop: pt ? `${pt}px` : undefined,
    paddingRight: `${pr}px`,
    paddingBottom: `${pb}px`,
    paddingLeft: `${pl}px`,
  }

  const marginStyles = {
    margin: `${m}px`,
    marginTop: `${mt}px`,
    marginRight: `${mr}px`,
    marginBottom: `${mb}px`,
    marginLeft: `${ml}px`,
  }

  const sizeStyles = {
    width: `${w}px`,
    height: `${h}px`,
  }

  const borderStyles = {
    border,
    borderRadius: `${br}px`,
  }

  const positionStyles = {
    top,
    left,
    right,
    bottom,
    position,
  }

  const flexStyles = {
    order,
    display,
    flexGrow,
    flexWrap,
    alignSelf,
    alignItems,
    alignContent,
    flexDirection,
    justifyContent,
  }

  const customStyles: React.CSSProperties = removeUndefinedStyles({
    ...marginStyles,
    ...paddingStyles,
    ...sizeStyles,
    ...borderStyles,
    ...flexStyles,
    ...positionStyles,
    display: 'flex',
    outline,
    cursor,
    transition,
    zIndex,
    background: bg,
    boxSizing: 'border-box',
    ...style,
  })

  return {
    attrs,
    children,
    className,
    customStyles,
  }
}

export default useDefaultProps
