import React from 'react'

import { isEmpty } from '../../../lib/helpers'

import './styles/Empty.scss'

interface EmptyProps {
  data: unknown[]
  loading: boolean
}

const Empty: React.FC<EmptyProps> = (props) => {
  const { data, loading } = props

  if (isEmpty(data) && !loading) {
    return (
      <div className="empty-container">
        <p className="empty-text">Enter text in the input to search for books.</p>
      </div>
    )
  }

  return null
}

export default Empty
