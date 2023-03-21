import { Flex, Heading, Link, VStack } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import LoginForm from "../../components/LoginForm/LoginForm";

const LoginPage = (): JSX.Element => (
  <>
    <Flex justify="center" pt={20}>
      <VStack spacing={10} align="center" w="full">
        <Heading as="h1" variant="pageHeading">
          LOGIN
        </Heading>
        <LoginForm />
        <Link as={NavLink} to="/account/register" variant="link">
          Create an account
        </Link>
      </VStack>
    </Flex>
  </>
);

export default LoginPage;
