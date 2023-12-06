import React from 'react'

import { useDefaultProps } from '../hooks'

import type { Styles } from '../hooks/types'

type TypographyVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span'

interface TypographyElementProps<T extends React.ElementType> extends React.HTMLAttributes<HTMLElement> {
  component?: T
  variant: TypographyVariant
  restProps?: React.HTMLAttributes<HTMLElement> & Styles
}

type TypographyProps =
  | (Styles & TypographyElementProps<'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'>)
  | (Styles & TypographyElementProps<'p'>)
  | (Styles & TypographyElementProps<'span'> & { font?: string })

const fontSizeMap: Record<TypographyVariant, string> = {
  h1: '32px',
  h2: '24px',
  h3: '24px',
  h4: '24px',
  h5: '24px',
  h6: '24px',
  p: '16px',
  span: '16px',
}

const Typography: React.FC<React.PropsWithChildren<TypographyProps>> = (props) => {
  const { variant = 'p', component: Element = 'p', color, ...restProps } = props

  const { children, customStyles, attrs } = useDefaultProps(restProps as React.HTMLAttributes<HTMLElement> & Styles)

  const defaultStyles: React.CSSProperties = {
    fontSize: customStyles.fontSize ?? fontSizeMap[variant],
    color: color || customStyles.color,
    fontFamily: customStyles.fontFamily,
  }

  const combinedStyles: React.CSSProperties = {
    ...defaultStyles,
    ...customStyles,
  }

  return (
    <Element style={combinedStyles} {...attrs}>
      {children}
    </Element>
  )
}

export default Typography
