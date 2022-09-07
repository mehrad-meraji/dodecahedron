import * as React from 'react'

import { ChakraProvider } from '@chakra-ui/react'
import { ClerkProvider } from '@clerk/clerk-react'
import { theme } from 'web/config/chakra-ui-theme'

const withChakra = (StoryFn) => {
  return (
    <ChakraProvider theme={theme}>
      <ClerkProvider>
        <StoryFn />
      </ClerkProvider>
    </ChakraProvider>
  )
}

export const decorators = [withChakra]
