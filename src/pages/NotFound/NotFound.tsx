import React from 'react'

import { useNavigate } from 'react-router-dom'

import { Box, Button, Typography } from '../../components/core'

import './styles/NotFound.scss'

const NotFound: React.FC = () => {
  const navigate = useNavigate()

  return (
    <Box p={50} alignItems="center" flexDirection="column">
      <Typography variant="h1" component="h1" mb={20} color="#333">
        404 Not Found
      </Typography>
      <Typography variant="p">Sorry, something went wrong.</Typography>
      <Button
        br={8}
        mt={20}
        pt={10}
        pr={20}
        pb={10}
        pl={20}
        type="button"
        color=" #fff"
        className="btn-hover"
        bg="rgb(146, 195, 252)"
        onClick={() => navigate(-1)}
      >
        Go back
      </Button>
    </Box>
  )
}

export default NotFound
