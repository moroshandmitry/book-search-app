import React from 'react'

import { useDefaultProps } from '../hooks'

import type { ButtonProps } from './Button.types'

const Button: React.FC<React.PropsWithChildren<ButtonProps>> = (props) => {
  const { children, className, customStyles, attrs } = useDefaultProps(props)

  const defaultStyles: React.CSSProperties = {
    border: 'none',
    outline: 'none',
    cursor: 'pointer',
  }

  const combinedStyles: React.CSSProperties = {
    ...defaultStyles,
    ...customStyles,
  }

  return (
    <button className={className} style={combinedStyles} {...(attrs as React.ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  )
}

export default Button
