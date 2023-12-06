export type Styles = {
  className?: string
  style?: React.CSSProperties

  p?: number
  pt?: number
  pr?: number
  pb?: number
  pl?: number

  m?: number
  mt?: number
  mr?: number
  mb?: number
  ml?: number

  w?: number
  h?: number

  br?: number
  border?: React.CSSProperties['border']

  bg?: string

  zIndex?: number

  position?: React.CSSProperties['position']
  top?: React.CSSProperties['top']
  right?: React.CSSProperties['right']
  bottom?: React.CSSProperties['bottom']
  left?: React.CSSProperties['left']

  order?: React.CSSProperties['order']
  flexWrap?: React.CSSProperties['flexWrap']
  alignSelf?: React.CSSProperties['alignSelf']
  flexGrow?: React.CSSProperties['flexGrow']
  alignItems?: React.CSSProperties['alignItems']
  alignContent?: React.CSSProperties['alignContent']
  flexDirection?: React.CSSProperties['flexDirection']
  justifyContent?: React.CSSProperties['justifyContent']

  outline?: React.CSSProperties['outline']
  cursor?: React.CSSProperties['cursor']
  transition?: React.CSSProperties['transition']
}
