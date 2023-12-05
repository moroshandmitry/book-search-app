import React from 'react'

import BooksApi from '../../api/books'
import { isEmpty } from '../helpers'
import { BookResponse } from '../../types/BooksResponse'

const useFetchDataBook = ({ id }: { id: string }) => {
  const [error, setError] = React.useState<boolean>(false)
  const [loading, setLoading] = React.useState<boolean>(false)
  const [book, setBook] = React.useState<BookResponse | null>(null)

  const fetchDataBook = React.useCallback(async () => {
    setLoading(true)

    return BooksApi.getBook(id)
      .then((data) => {
        if (isEmpty(data)) {
          return setBook(null)
        }

        return setBook(data)
      })
      .catch((error) => {
        setError(error)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [id])

  React.useEffect(() => {
    fetchDataBook()
  }, [fetchDataBook])

  return {
    book,
    error,
    loading,
  }
}

export default useFetchDataBook
