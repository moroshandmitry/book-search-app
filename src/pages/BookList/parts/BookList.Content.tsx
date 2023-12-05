import React from 'react'
import { Link } from 'react-router-dom'

import { isEmpty } from '../../../lib/helpers'
import { DEFAULT_THUMBNAIL } from '../../../lib/constants'

import type { BookResponse } from '../../../types/BooksResponse'

import '../styles/BookList.Content.scss'

interface BooksListContentProps {
  books: BookResponse[]
}

const BooksListContent: React.FC<BooksListContentProps> = (props) => {
  const { books } = props

  return (
    <React.Fragment>
      {!isEmpty(books) && (
        <div className="books-container">
          {books?.map((book) => {
            const {
              id,
              searchInfo,
              volumeInfo: { title, subtitle, imageLinks },
            } = book

            return (
              <Link key={id} to={id} className="book">
                <h3>{title}</h3>
                <img alt={`Cover of ${title} book`} src={imageLinks?.thumbnail ?? DEFAULT_THUMBNAIL} />
                {subtitle && <p>{subtitle}</p>}
                {searchInfo?.textSnippet && (
                  <div
                    style={{
                      textAlign: 'left',
                    }}
                    dangerouslySetInnerHTML={{
                      __html: searchInfo?.textSnippet,
                    }}
                  />
                )}
              </Link>
            )
          })}
        </div>
      )}
    </React.Fragment>
  )
}

export default BooksListContent
