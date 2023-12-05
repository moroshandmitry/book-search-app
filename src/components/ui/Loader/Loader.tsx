import React from 'react'

import './styles/Loader.scss'

interface LoaderProps {
  loading?: boolean
}

const Loader: React.FC<LoaderProps> = (props) => {
  const { loading = false } = props

  return (
    <React.Fragment>
      {loading && (
        <div className="loader-container">
          <div className="loader-spinner"></div>
          <p className="loader-text">Loading...</p>
        </div>
      )}
    </React.Fragment>
  )
}

export default Loader
