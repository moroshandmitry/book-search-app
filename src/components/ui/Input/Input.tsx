import React from 'react'

import './styles/Input.scss'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input: React.FC<InputProps> = (props) => {
  const { value, onChange, ...rest } = props

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(e)
  }

  return <input type="text" value={value} onChange={handleChange} {...rest} />
}

export default Input
