import React from 'react'

import { Box, Typography } from '../../core'

import './styles/Loader.scss'

interface LoaderProps {
  loading?: boolean
}

const Loader: React.FC<LoaderProps> = (props) => {
  const { loading = false } = props

  return (
    <React.Fragment>
      {loading && (
        <Box alignItems="center" justifyContent="center" flexWrap="wrap" flexGrow={1}>
          <Box className="loader-spinner" />
          <Typography component="p" variant="p" mt={10} fontWeight={700} color="red">
            Loading...
          </Typography>
        </Box>
      )}
    </React.Fragment>
  )
}

export default Loader
