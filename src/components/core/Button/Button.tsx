import React from 'react'

import { useDefaultProps } from '../hooks'

import type { ButtonProps } from './Button.types'

const Button: React.FC<React.PropsWithChildren<ButtonProps>> = (props) => {
  const { children, className, customStyles, attrs } = useDefaultProps(props)

  const defaultStyles: React.CSSProperties = {
    border: 'none',
    outline: 'none',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  }

  const combinedStyles: React.CSSProperties = {
    ...defaultStyles,
    border: customStyles.border ? customStyles.border : defaultStyles.border,
    outline: customStyles.outline ?? defaultStyles.outline,
    cursor: customStyles.cursor ?? defaultStyles.cursor,
    transition: customStyles.transition ?? defaultStyles.transition,
    ...customStyles,
  }

  return (
    <button className={className} style={combinedStyles} {...(attrs as React.ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  )
}

export default Button
