import { HStack, Image, Text, VStack } from "@chakra-ui/react";

const Header = (): JSX.Element => (
  <VStack as="header" minW="100%" p={0}>
    <HStack display={{ base: "none", md: "flex" }} gap="6">
      <Image alt="Logo" src="/images/logo.png" boxSize="80px" />
      <Text as="span" fontFamily="Dynalight" fontSize="50px">
        from yarn to masterpiece
      </Text>
    </HStack>
  </VStack>
);

export default Header;
