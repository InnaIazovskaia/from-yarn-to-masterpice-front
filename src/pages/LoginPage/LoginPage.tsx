import { Heading, Link, VStack } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import LoginForm from "../../components/LoginForm/LoginForm";
import useUiStore from "../../stores/useUiStore";

const LoginPage = (): JSX.Element => {
  const feedback = useUiStore((state) => state.feedbackMessage);
  const { hideFeedbakcMessageAction } = useUiStore();

  return (
    <>
      <VStack spacing={10} align="center" w="full" pt={20}>
        <Heading as="h1" variant="pageHeading">
          LOGIN
        </Heading>
        <LoginForm message={feedback} />
        <Link
          as={NavLink}
          to="/account/register"
          variant="link"
          onClick={hideFeedbakcMessageAction}
        >
          Create an account
        </Link>
      </VStack>
    </>
  );
};

export default LoginPage;
