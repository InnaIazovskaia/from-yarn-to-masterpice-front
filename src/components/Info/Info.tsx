import { Text } from "@chakra-ui/react";

interface InfoProps {
  message: string;
}

const Info = ({ message }: InfoProps): JSX.Element => (
  <Text
    display="flex"
    alignItems="center"
    justifyContent="center"
    color="brand.strong"
    fontWeight="600"
    style={{ marginTop: 0 }}
    w="100%"
    border={"1px"}
    mb={5}
    h={10}
  >
    {message}
  </Text>
);

export default Info;
