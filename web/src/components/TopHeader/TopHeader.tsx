import { Box, Flex } from "@chakra-ui/react";

import { useAuth } from "@redwoodjs/auth";

import { PersonIcon } from "src/icons/person";

const TopHeader = () => {
  const { currentUser } = useAuth();

  return (
    <Flex
      h={6}
      px={2}
      fontSize={10}
      alignItems={"center"}
      justifyContent={"space-between"}
      borderBottom={"1px"}
      borderBottomColor={"ice.700"}
    >
      <Box as={"h2"} textTransform={"uppercase"} color={"ice.400"}>
        PadLinker
      </Box>
      <Flex textTransform={"uppercase"} color={"ice.400"} gap={1} alignItems={'center'}>
        <PersonIcon h={2} w={2} color={"ice.400"} />
        {currentUser.emailAddresses[0].emailAddress}
      </Flex>
    </Flex>
  );
};

export default TopHeader;
