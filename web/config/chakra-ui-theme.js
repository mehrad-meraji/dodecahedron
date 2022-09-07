import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

import colors from './colors'

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

const styles = {
  global: (props) => ({
    'html, body': {
      color: mode('ice.900', 'ice.50')(props),
      backgroundColor: mode('ice.50', 'ice.900')(props),
    },
  }),
}

export const theme = extendTheme({ config, colors, styles })
