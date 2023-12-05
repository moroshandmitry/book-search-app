import api from '../index'

import type { AxiosResponse } from 'axios'
import type { BookResponse, BooksResponse } from '../../types/BooksResponse'

const BooksApi = {
  async getBooks(query: string) {
    return await api.get(`?q=${query}`).then(({ data }: AxiosResponse<BooksResponse>) => {
      return data.items || []
    })
  },

  async getBook(id: string) {
    return await api.get(id).then(({ data }: AxiosResponse<BookResponse>) => {
      return data || null
    })
  },
}

export default BooksApi
