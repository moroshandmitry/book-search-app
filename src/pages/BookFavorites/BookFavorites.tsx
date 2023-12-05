import React from 'react'

import { isEmpty } from '../../lib/helpers'
import { useNavigate } from 'react-router-dom'
import { useLocalStorage } from '../../lib/hooks'

import { IconStar } from '../../assets/icons'
import { BooksResponse } from '../../types/BooksResponse'

import { DEFAULT_THUMBNAIL } from '../../lib/constants'

import './styles/BookFavorites.scss'

const BookFavorites: React.FC = () => {
  const navigate = useNavigate()
  const { storedValue: favoriteBooks, setValue: setFavoriteBooks } = useLocalStorage<BooksResponse['items']>(
    'favoriteBooks',
    []
  )

  const handleRemoveFromFavorites = (bookId: string) => {
    const updatedFavorites =
      favoriteBooks?.filter((book) => {
        return book.id !== bookId
      }) || []

    setFavoriteBooks(updatedFavorites)
  }

  return (
    <React.Fragment>
      {!isEmpty(favoriteBooks) && (
        <div className="favorites-container">
          {favoriteBooks?.map((favoriteBook) => {
            const {
              id,
              volumeInfo: { title, subtitle, imageLinks },
            } = favoriteBook

            return (
              <div key={id} className="favorites">
                <div className="favorites-title">
                  <h3>{title}</h3>
                  <IconStar onClick={() => handleRemoveFromFavorites(id)} width={24} height={24} color="gold" />
                </div>
                <button type="button" onClick={() => navigate(`/${id}`)} className="favorites-book">
                  <img alt={`Cover of ${title} book`} src={imageLinks?.thumbnail ?? DEFAULT_THUMBNAIL} />
                  {subtitle && <p>{subtitle}</p>}
                </button>
              </div>
            )
          })}
        </div>
      )}
    </React.Fragment>
  )
}

export default BookFavorites
