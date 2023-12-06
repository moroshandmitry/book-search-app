import React from 'react'

import { useFetchDataBooks } from '../../lib/hooks'

import * as Book from './parts'
import { Empty, Loader } from '../../components/ui'

const BookList: React.FC = () => {
  const { books, loading, storedValue, handleSearchBooks } = useFetchDataBooks()

  return (
    <React.Fragment>
      <Book.ListInput value={storedValue || ''} onChange={handleSearchBooks} />
      <Book.ListContent books={books} />
      <Loader loading={loading} />
      <Empty title="Enter text in the input to search for books." data={books} loading={loading} />
    </React.Fragment>
  )
}

export default BookList
