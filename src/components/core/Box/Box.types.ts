type FlexProperties = Pick<
  React.CSSProperties,
  'flexDirection' | 'justifyContent' | 'alignItems' | 'flexWrap' | 'alignSelf' | 'alignContent'
>

export interface BoxProps extends FlexProperties, React.HTMLAttributes<HTMLDivElement> {
  style?: React.CSSProperties
  className?: string
  margin?: number
  mt?: number
  mr?: number
  mb?: number
  ml?: number

  padding?: number
  pt?: number
  pr?: number
  pb?: number
  pl?: number
}
