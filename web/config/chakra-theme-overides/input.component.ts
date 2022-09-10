import type { ComponentStyleConfig } from "@chakra-ui/theme";

// You can also use the more specific type for
// a single part component: ComponentSingleStyleConfig
const commonStyles = {
  borderRadius: 0,
  px: 2,
  py: 1,
  borderColor: "ice.300",
  borderSize: "1px",
  bg: "ice.800",
};

export const Input: ComponentStyleConfig = {
  parts: ["input", "element"],
  // Two sizes: sm and md
  baseStyle: {
    input: {
      borderColor: "ice.300",
      borderSize: "1px",
    },
  },
  sizes: {
    sm: {
      element: {
        ...commonStyles,
      },
      field: {
        ...commonStyles,
      },
    },
    md: {
      field: {
        ...commonStyles,
        fontSize: "0.875rem",
      },
    },
  },
};
