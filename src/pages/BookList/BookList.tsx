import React from 'react'

import { useFetchDataBooks } from '../../lib/hooks'

import { Empty, Loader } from '../../components/ui'
import BookListInput from './parts/BookList.Input'
import BooksListContent from './parts/BookList.Content'

const BookList: React.FC = () => {
  const { books, storedValue, handleSearchBooks } = useFetchDataBooks()

  const loading = true
  return (
    <React.Fragment>
      <BookListInput value={storedValue || ''} onChange={handleSearchBooks} />
      <BooksListContent books={books} />
      <Loader loading={loading} />
      <Empty data={books} loading={loading} />
    </React.Fragment>
  )
}

export default BookList
