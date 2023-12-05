import React from 'react'

import { isEmpty } from '../../lib/helpers'
import { useLocation } from 'react-router-dom'
import { useFetchDataBook, useLocalStorage } from '../../lib/hooks'

import NotFound from '../NotFound/NotFound'
import { Loader } from '../../components/ui'
import { IconStar, IconStartOutline } from '../../assets/icons'

import { DEFAULT_THUMBNAIL } from '../../lib/constants'

import type { BookResponse } from '../../types/BooksResponse'

import './styles/BookDetailed.scss'

const BookDetailed: React.FC = () => {
  const { pathname } = useLocation()
  const { book, error, loading } = useFetchDataBook({ id: pathname })
  const { storedValue: favoriteBooks, setValue: setFavoriteBooks } = useLocalStorage<BookResponse[]>(
    'favoriteBooks',
    []
  )!

  if (!isEmpty(error)) {
    return <NotFound />
  }

  const handleToggleFavorite = () => {
    if (book && favoriteBooks) {
      const isBookFavorite = favoriteBooks.some((favoriteBook) => {
        return favoriteBook.id === book.id
      })

      const updatedFavorites = isBookFavorite
        ? favoriteBooks.filter((favoriteBook) => {
            return favoriteBook.id !== book.id
          })
        : [...favoriteBooks, book]

      setFavoriteBooks(updatedFavorites)
    }
  }

  return (
    <div className="book-detailed-container">
      {loading && <Loader loading={loading} />}

      {!loading && book && (
        <>
          <div className="book-detailed-title">
            <h1>
              <i>{book?.volumeInfo?.title}</i>
            </h1>

            {favoriteBooks!.some((b) => b.id === book?.id) ? (
              <IconStar onClick={handleToggleFavorite} width={24} height={24} color="gold" />
            ) : (
              <IconStartOutline onClick={handleToggleFavorite} width={24} height={24} color="gold" />
            )}
          </div>

          {book.volumeInfo.subtitle && <h3>{book.volumeInfo.subtitle}</h3>}
          <img alt={book.volumeInfo.title} src={book.volumeInfo.imageLinks?.thumbnail ?? DEFAULT_THUMBNAIL} />

          {book.volumeInfo.authors && (
            <p>
              <b>Authors:</b> {book.volumeInfo.authors.join(', ')}
            </p>
          )}

          {book.volumeInfo.publisher && (
            <p>
              <b>Publisher:</b> {book.volumeInfo.publisher}
            </p>
          )}

          {book.volumeInfo.publishedDate && (
            <p>
              <b>Published Date:</b> {book.volumeInfo.publishedDate}
            </p>
          )}

          {book.volumeInfo.description && (
            <div className="description">
              <b>Description:</b>
              <div dangerouslySetInnerHTML={{ __html: book.volumeInfo.description }} />
            </div>
          )}
        </>
      )}
    </div>
  )
}

export default BookDetailed
