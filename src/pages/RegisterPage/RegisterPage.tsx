import { Heading, Link, Text, VStack } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import RegisterForm from "../../components/RegisterForm/RegisterForm";
import useUiStore from "../../stores/useUiStore";

const RegisterPage = (): JSX.Element => {
  const feedback = useUiStore((state) => state.feedbackMessage);
  const { hideFeedbakcMessageAction } = useUiStore();

  return (
    <VStack spacing={10} align="center" w="full" pt={20}>
      <Heading as="h1" variant="pageHeading">
        REGISTER
      </Heading>
      <RegisterForm message={feedback} />
      <Text>
        Already a member?{" "}
        <Link
          as={NavLink}
          to="/account/login"
          variant="link"
          onClick={hideFeedbakcMessageAction}
        >
          Log in
        </Link>
      </Text>
    </VStack>
  );
};

export default RegisterPage;
