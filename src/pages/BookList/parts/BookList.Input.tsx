import React from 'react'

import { useLocation } from 'react-router-dom'

import { Input } from '../../../components/ui'

import '../styles/BookList.Input.scss'

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
        <div className="search-books-container">
          <Input type="text" value={value} className="search-books" placeholder="Search books..." onChange={onChange} />
        </div>
      )}
    </React.Fragment>
  )
}

export default BookListInput
