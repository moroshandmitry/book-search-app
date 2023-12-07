import React from 'react'
import { Routes, Route } from 'react-router-dom'

import * as PAGES from '../index'

const CorePage: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<PAGES.BookList />} />
      <Route path="/:id" element={<PAGES.BookDetailed />} />
      <Route path="/favorites" element={<PAGES.BookFavorites />} />
      <Route path="*" element={<PAGES.NotFound />} />
    </Routes>
  )
}

export default CorePage
