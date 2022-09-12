import { Box, Flex } from "@chakra-ui/react";

import UserButton from "src/components/UserButton/UserButton";

const TopHeader = () => {
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
      <UserButton />
    </Flex>
  );
};

export default TopHeader;
