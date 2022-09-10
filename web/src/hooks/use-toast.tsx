import React from "react";

import { Box, useToast } from "@chakra-ui/react";

function UseToast() {
  const toast = useToast();
  const toastRender = (type: "success" | "error", message) => {
    const bg = {
      success: "forest",
      error: "rose",
    }[type];
    return (
      <Box color={bg + '.100'} py={2} px={3} bg={bg + '.800'} fontSize={"14px"} fontWeight={700}>
        {message}
      </Box>
    );
  };

  return {
    success: (message) =>
      toast({
        position: "bottom-left",
        render: () => toastRender("success", message),
      }),
    error: (message) =>
      toast({
        position: "bottom-left",
        render: () => toastRender("error", message),
      }),
  };
}

export default UseToast;
