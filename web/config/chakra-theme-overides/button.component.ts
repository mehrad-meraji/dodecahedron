import type { ComponentStyleConfig } from "@chakra-ui/theme";

// You can also use the more specific type for
// a single part component: ComponentSingleStyleConfig
export const Button: ComponentStyleConfig = {
  // The styles all button have in common
  baseStyle: {
    fontWeight: "semibold",
    textTransform: "uppercase",
    borderRadius: "none",
    height: "auto",
    lineHeight: "none",
  },
  // Two sizes: sm and md
  sizes: {
    base: {
      fontSize: "3xs",
      px: 2,
      py: 2,
    },
  },
  // Two variants: outline and solid
  variants: {
    outline: {
      border: "2px solid",
      borderColor: "royal.500",
      color: "royal.500",
    },
    primary: {
      bg: "royal.500",
      _hover: {
        bg: "royal.600",
      },
      color: "white",
    },
    secondary: {
      bg: "ice.500",
      _hover: {
        bg: "ice.600",
      },
      color: "white",
    },
  },
  // The default size and variant values
  defaultProps: {
    variant: "primary",
  },
};
