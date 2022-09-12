import { useMemo } from "react";

import { Menu, MenuButton, MenuDivider, MenuItem, MenuList } from "@chakra-ui/react";

import { useAuth } from "@redwoodjs/auth";

import { PersonIcon } from "src/icons/person";

const UserButton = () => {
  const { currentUser, logOut } = useAuth();

  const userIdentifier = useMemo(() => {
    const { firstName, lastName, emailAddresses } = currentUser;
    const name = `${firstName ? firstName : ""} ${lastName ? lastName : ""}`;
    const email = `${
      emailAddresses.length ? emailAddresses[0].emailAddress : ""
    }`;
    return `${name.trim() !== "" ? name.trim() : email}`;
  }, [currentUser]);

  return (
    <Menu>
      <MenuButton>
        <div className={"flex items-center gap-2 uppercase text-ice-400"}>
          <PersonIcon h={2} w={2} color={"ice.400"} />
          {userIdentifier}
        </div>
      </MenuButton>
      <MenuList>
        <MenuItem>Account</MenuItem>
        <MenuDivider />
        <MenuItem onClick={logOut}>Logout</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default UserButton;
