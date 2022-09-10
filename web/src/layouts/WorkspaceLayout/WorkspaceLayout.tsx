import { Flex } from "@chakra-ui/react";

import { useAuth } from "@redwoodjs/auth";

import RightTabs from "src/components/RightTabs/RightTabs";
import SideNav from "src/components/SideNav/SideNav";
import TopHeader from "src/components/TopHeader/TopHeader";

type WorkspaceLayoutProps = {
  children?: React.ReactNode;
};

const WorkspaceLayout = ({ children }: WorkspaceLayoutProps) => {
  const { isAuthenticated } = useAuth();
  if (isAuthenticated)
    return (
      <Flex h="100%" w="100%">
        <SideNav />
        <Flex direction={"column"} grow={1}>
          <TopHeader />
          <Flex h="100%">
            <Flex grow={1}>{children}</Flex>
            <RightTabs />
          </Flex>
        </Flex>
      </Flex>
    );
  return <>You need to sign in first</>;
};

export default WorkspaceLayout;
