import React from 'react'

import { isEmpty } from '../../../lib/helpers'

import { Link } from 'react-router-dom'
import { Box, Typography } from '../../../components/core'

import { DEFAULT_THUMBNAIL } from '../../../lib/constants'

import type { BookResponse } from '../../../types/BooksResponse'

import '../styles/BookList.Content.scss'

interface BooksListContentProps {
  books: BookResponse[]
}

// TODO: <Grid className="books-container"> a instanceof <div className="books-container">

const BookListContent: React.FC<BooksListContentProps> = (props) => {
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
                <Typography variant="h3" component="h3">
                  {title}
                </Typography>
                <img alt={`Cover of ${title} book`} src={imageLinks?.thumbnail ?? DEFAULT_THUMBNAIL} />
                {subtitle && <Typography variant="p">{subtitle}</Typography>}
                {searchInfo?.textSnippet && (
                  <Box
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

export default BookListContent
