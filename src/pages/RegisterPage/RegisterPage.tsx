import { Flex, Heading, Link, Text, VStack } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import RegisterForm from "../../components/RegisterForm/RegisterForm";

const RegisterPage = (): JSX.Element => (
  <>
    <Flex justify="center" pt={20}>
      <VStack spacing={10} align="center" w="full">
        <Heading as="h1" variant="pageHeading">
          REGISTER
        </Heading>
        <RegisterForm />
        <Text>
          Already a member?{" "}
          <Link as={NavLink} to="/account/login" variant="link">
            Log in
          </Link>
        </Text>
      </VStack>
    </Flex>
  </>
);

export default RegisterPage;
