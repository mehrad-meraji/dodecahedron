import type { ComponentStyleConfig } from "@chakra-ui/theme";

// You can also use the more specific type for
// a single part component: ComponentSingleStyleConfig
export const Modal: ComponentStyleConfig = {
  parts: ["dialog", "header", "closeButton", "body"],
  baseStyle: {
    body: {
      pb: 3,
      px: 2,
    },
    dialog: {
      borderRadius: 0,
      bg: "ice.700",
    },
    header: {
      rounded: "none",
      textTransform: "uppercase",
      fontSize: "10px",
      flexDirection: "column",
      pl: 2,
      pr: "0.5",
      py: 2,
    },
    closeButton: {
      fontWeight: "medium",
      lineHeight: "normal",
      color: "ice.300",
      height: "20px",
      width: "20px",
      borderRadius: 0,
      p: 1,
    },
  },
};
