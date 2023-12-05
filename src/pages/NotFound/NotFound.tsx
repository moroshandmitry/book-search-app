import React from 'react'

import { useNavigate } from 'react-router-dom'

import './styles/NotFound.scss'

const NotFound: React.FC = () => {
  const navigate = useNavigate()

  return (
    <div className="not-found-container">
      <h1 className="not-found-title">404 Not Found</h1>
      <p className="not-found-description">Sorry, something went wrong.</p>
      <button onClick={() => navigate(-1)} className="not-found-link" type="button">
        Go back
      </button>
    </div>
  )
}

export default NotFound
