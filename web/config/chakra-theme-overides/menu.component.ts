import type { ComponentStyleConfig } from "@chakra-ui/theme";

// You can also use the more specific type for
// a single part component: ComponentSingleStyleConfig
export const Menu: ComponentStyleConfig = {
  parts: ["list", "item", "button", "divider"],
  // The styles all button have in common
  baseStyle: {
    divider: {
      margin: 0,
    },
    list: {
      borderRadius: "none",
      padding: 0,
      bg: "ice.800",
    },
    item: {
      py: 1,
      px: 2,
      color: "ice.300",
      _hover: {
        color: "ice.50",
      },
    },
  },
  // The default size and variant values
  defaultProps: {
    variant: "primary",
  },
};
