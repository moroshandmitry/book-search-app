import React from 'react'

import { isEmpty } from '../helpers'
import BooksApi from '../../api/books'
import useDebounce from './useDebounce'

import { DELAY } from '../constants'

import type { BookResponse } from '../../types/BooksResponse'
import useLocalStorage from './useLocalStorage'

const useFetchDataBooks = () => {
  const [loading, setLoading] = React.useState<boolean>(false)
  const { storedValue, setValue } = useLocalStorage<string>('inputValue', '')
  const debouncedSearchBooks = useDebounce(storedValue ?? '', DELAY)

  const [books, setBooks] = React.useState<BookResponse[] | never[]>([])

  const handleSearchBooks = (e: React.ChangeEvent<HTMLInputElement>) => {
    return setValue(e.target.value)
  }

  const fetchDataBooks = React.useCallback(() => {
    if (debouncedSearchBooks.trim() === '') {
      return setBooks([])
    }

    setLoading(true)

    return BooksApi.getBooks(debouncedSearchBooks)
      .then((data) => {
        if (isEmpty(data)) {
          return setBooks([])
        }

        return setBooks(data)
      })
      .catch((error) => {
        console.error('getBooks error', error)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [debouncedSearchBooks])

  React.useEffect(() => {
    fetchDataBooks()
  }, [debouncedSearchBooks, fetchDataBooks])

  return {
    books,
    loading,
    storedValue,
    setValue,
    fetchDataBooks,
    handleSearchBooks,
  }
}

export default useFetchDataBooks
