import React from 'react'

import { useDefaultProps } from '../hooks'

import type { Styles } from '../hooks/types'

import './styles/Input.scss'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input: React.FC<InputProps & Styles> = (props) => {
  const { value, onChange, ...rest } = props

  const { customStyles, attrs } = useDefaultProps(rest)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(e)
  }

  return <input type="text" style={customStyles} value={value} onChange={handleChange} {...(attrs as InputProps)} />
}

export default Input
