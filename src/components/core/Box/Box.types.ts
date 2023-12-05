type FlexProperties = Pick<
  React.CSSProperties,
  'flexDirection' | 'justifyContent' | 'alignItems' | 'flexWrap' | 'alignSelf' | 'alignContent'
>

export interface BoxProps extends FlexProperties {
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
