import React from 'react'

import Box from './Box'

const BoxExample: React.FC = () => {
  return (
    <Box
      pt={1}
      pr={1}
      pb={1}
      pl={1}
      padding={1}
      mt={1}
      mr={1}
      mb={1}
      ml={1}
      margin={1}
      flexWrap="wrap"
      alignSelf="center"
      alignItems="center"
      alignContent="center"
      flexDirection="column"
      justifyContent="center"
    >
      EXAMPLE
    </Box>
  )
}

export default BoxExample
