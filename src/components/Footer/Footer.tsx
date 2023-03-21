import { VStack, Text, Link, Icon } from "@chakra-ui/react";
import { TfiEmail } from "react-icons/tfi";

const Footer = (): JSX.Element => (
  <VStack as="footer" justifyContent="center" mt={10}>
    <VStack bg="brand.100" h={130} w="100%" justifyContent="center">
      <Text align="center" fontSize="0.9rem" p={1}>
        All questions about the master classes and patterns you can send to
        email
      </Text>
      <Link href="mailto:inna.0961@mail.ru">
        <Icon as={TfiEmail} aria-label="Link mailto" boxSize={8} />
      </Link>
    </VStack>
    <Text
      display="flex"
      alignItems="center"
      justifyContent="center"
      bg="brand.900"
      color="brand.50"
      h={50}
      align="center"
      w="100%"
      fontSize="0.8rem"
      style={{ margin: 0 }}
    >
      Made by Inna Iazovskaia
    </Text>
  </VStack>
);

export default Footer;
