import { extendTheme, theme as base } from "@chakra-ui/react";
import { formButton, formInput } from "./components/formComponents";
import { colors } from "./globalStyles";

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
  },
});

export default theme;
