import { Flex, VisuallyHidden } from "@chakra-ui/react";

import { NavLink } from "@redwoodjs/router";

import items from "./feature-nav";

const SideNav = () => {
  return (
    <Flex
      w={10}
      h="100%"
      p="1"
      borderRight="1px"
      borderRightColor="ice.700"
      gap="1"
      direction={"column"}
      alignItems={"center"}
    >
      {items.map((item) => (
        <NavLink
          className={
            "flex h-8 w-8 items-center justify-center rounded border border-transparent hover:border-ice-700"
          }
          key={item.name}
          activeClassName={"bg-ice-800"}
          to={item.to}
        >
          <item.icon w={5} h={5} />
          <VisuallyHidden>{item.name}</VisuallyHidden>
        </NavLink>
      ))}
    </Flex>
  );
};

export default SideNav;
