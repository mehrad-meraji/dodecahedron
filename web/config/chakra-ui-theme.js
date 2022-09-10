import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

import { Button } from "./chakra-theme-overides/button.component";
import { Input } from "./chakra-theme-overides/input.component";
import { Modal } from "./chakra-theme-overides/modal.component";
import colors from "./colors";

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const components = {
  Button,
  Modal,
  Input,
};

const fontSizes = {
  "3xs": "10px",
};

const styles = {
  global: (props) => ({
    "html, body": {
      color: mode("ice.900", "ice.50")(props),
      backgroundColor: mode("ice.50", "ice.900")(props),
    },
  }),
};

export const theme = extendTheme({
  config,
  colors,
  styles,
  fontSizes,
  components,
});
