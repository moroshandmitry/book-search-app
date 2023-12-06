import React from 'react'

import { useLocation } from 'react-router-dom'

import { Box, Input } from '../../../components/core'

interface BookListInputProps {
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const BookListInput: React.FC<BookListInputProps> = (props) => {
  const { value, onChange } = props
  const { pathname } = useLocation()

  const shouldShowInput = pathname === '/'

  return (
    <React.Fragment>
      {shouldShowInput && (
        <Box h={50} alignItems="center" justifyContent="center" bg="#93c5fd">
          <Input type="text" placeholder="Search books..." value={value} onChange={onChange} />
        </Box>
      )}
    </React.Fragment>
  )
}

export default BookListInput
