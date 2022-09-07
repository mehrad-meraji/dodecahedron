import { Box, Flex } from '@chakra-ui/react'

import { Link, routes } from '@redwoodjs/router'

const RightTabs = () => {
  return (
    <Flex
      direction="column"
      justify="space-between"
      w={6}
      h={'100%'}
      borderLeft={'1px'}
      borderLeftColor={'ice.700'}
    >
      <Box />
      <Box as={Link} to={routes.settings()}>
        <Flex
          whiteSpace="nowrap"
          fontSize={10}
          textTransform={'uppercase'}
          alignItems={'center'}
          justify={'center'}
          px={2}
          w={'100%'}
          color={'ice.400'}
          style={{
            writingMode: 'vertical-lr',
          }}
        >
          Settings
        </Flex>
      </Box>
    </Flex>
  )
}

export default RightTabs
