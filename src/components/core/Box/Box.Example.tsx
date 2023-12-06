import React from 'react'
import Box from './Box'

const BoxExample: React.FC = () => {
  return (
    <Box
      p={10}
      // pt={1}
      // pr={1}
      // pb={1}
      // pl={1}
      m={10}
      // mt={1}
      // mr={1}
      // mb={1}
      // ml={1}
      w={250}
      h={250}
      br={50}
      bg="lightgreen"
      order={1}
      flexGrow={1}
      flexWrap="wrap"
      alignSelf="center"
      alignItems="center"
      alignContent="center"
      flexDirection="column"
      justifyContent="space-between"
    >
      <div>
        Hello <div>World</div>
      </div>

      <div>Hello</div>
      <p>World</p>
    </Box>
  )
}

export default BoxExample
