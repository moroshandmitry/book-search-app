import React from 'react'

import { Box } from '../../core'

import './styles/Loader.scss'

interface LoaderProps {
  loading?: boolean
}

const Loader: React.FC<LoaderProps> = (props) => {
  const { loading = false } = props

  return (
    <React.Fragment>
      {loading && (
        <Box className="loader-container">
          <Box className="loader-spinner" />
          <p className="loader-text">Loading...</p>
        </Box>
      )}
    </React.Fragment>
  )
}

export default Loader
