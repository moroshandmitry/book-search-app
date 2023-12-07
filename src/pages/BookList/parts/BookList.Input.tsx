import React from 'react'

import { useLocation } from 'react-router-dom'

import { Box, Button, Input } from '../../../components/core'

interface BookListInputProps {
  value: string
  onClear: () => void
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const BookListInput: React.FC<BookListInputProps> = (props) => {
  const { value, onChange, onClear } = props
  const { pathname } = useLocation()

  const shouldShowInput = pathname === '/'

  return (
    <React.Fragment>
      {shouldShowInput && (
        <Box h={50} alignItems="center" justifyContent="center" bg="#93c5fd">
          <Box flexDirection="row" position="relative">
            <Input type="text" placeholder="Search books..." value={value} onChange={onChange} />
            {value && (
              <Button
                w={20}
                top={0}
                right={0}
                bottom={0}
                type="button"
                cursor="pointer"
                onClick={onClear}
                position="absolute"
                alignItems="center"
                justifyContent="center"
                bg="rgb(244 73 54 / 54%)"
              >
                X
              </Button>
            )}
          </Box>
        </Box>
      )}
    </React.Fragment>
  )
}

export default BookListInput
