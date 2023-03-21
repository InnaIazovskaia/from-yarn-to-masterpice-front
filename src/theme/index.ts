import { extendTheme, theme as base } from "@chakra-ui/react";
import { formButton, formInput } from "./components/formComponents";
import { colors } from "./globalStyles";
import { navLink, iconLink, link } from "./components/navComponents";
import { pageHeading } from "./components/headings";

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
        link,
        navLink,
      },
    },
    InputButton: {
      variants: {
        iconLink,
      },
    },
    Heading: {
      variants: {
        pageHeading,
      },
    },
  },
});

export default theme;
