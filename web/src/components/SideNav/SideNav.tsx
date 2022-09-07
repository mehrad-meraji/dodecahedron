import { Box, Flex } from '@chakra-ui/react'

import items from './feature-nav'

const SideNav = () => {
  return (
    <Flex
      w={10}
      h="100%"
      p="1"
      borderRight="1px"
      borderRightColor="ice.700"
      gap="1"
      direction={'column'}
    >
      {items.map((item) => (
        <Flex
          align="center"
          justify="center"
          key={item.name}
          w={8}
          h={8}
          borderRadius="1"
        >
          <item.icon w={5} h={5} />
        </Flex>
      ))}
    </Flex>
  )
}

export default SideNav
