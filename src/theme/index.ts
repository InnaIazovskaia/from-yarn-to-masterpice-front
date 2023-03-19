import { extendTheme, theme as base } from "@chakra-ui/react";
import { formButton, formInput } from "./components/formComponents";

import { colors } from "./globalStyles";
import { navLink, iconLink } from "./components/navComponents";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        color: "brand.900",
      },
    },
  },
  colors,
  fonts: {
    heading: `Playfair Display, ${base.fonts?.body}`,
    body: `Playfair Display, ${base.fonts?.body}`,
  },
  components: {
    Button: {
      variants: {
        formButton,
      },
    },
    Input: {
      variants: {
        formInput,
      },
    },
    Link: {
      variants: {
        navLink,
      },
    },
    InputButton: {
      variants: {
        iconLink,
      },
    },
  },
});

export default theme;
