import {
  Box,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  VStack,
} from "@chakra-ui/react";
import { Formik, Field, Form } from "formik";
import useUser from "../../hooks/useUser/useUser";
import { UserRegisterCredentials } from "../../types/userTypes";
import {
  validateEmail,
  validatePassword,
  validateUsername,
} from "../../utils/formsValidations";
import FormButton from "../FormButton/FormButton";
import Info from "../Info/Info";

interface RegisterFormProps {
  message: string;
}

const RegisterForm = ({ message }: RegisterFormProps): JSX.Element => {
  const initialFormData: UserRegisterCredentials = {
    username: "",
    password: "",
    email: "",
  };

  const { userRegister } = useUser();

  return (
    <Box p={[5, 10, 15]} rounded="md" w={["full", "md", "lg"]} mx="auto">
      {message ? <Info message={message} /> : <></>}

      <Formik
        initialValues={{
          ...initialFormData,
        }}
        onSubmit={async (values, { resetForm }) => {
          await userRegister(values);
          resetForm();
        }}
      >
        {({ errors, touched, values }) => (
          <Form>
            <VStack spacing={5} align="flex-start" w="full">
              <FormControl
                isInvalid={errors.username !== "" && touched.username}
              >
                <FormLabel htmlFor="username">Username</FormLabel>
                <Field
                  as={Input}
                  id="username"
                  name="username"
                  validate={validateUsername}
                  variant="formInput"
                />
                <FormErrorMessage>{errors.username}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={Boolean(errors.email) && touched.email}>
                <FormLabel htmlFor="email">Email</FormLabel>
                <Field
                  as={Input}
                  id="email"
                  name="email"
                  validate={validateEmail}
                  variant="formInput"
                />
                <FormErrorMessage>{errors.email}</FormErrorMessage>
              </FormControl>
              <FormControl
                isInvalid={Boolean(errors.password) && touched.password}
              >
                <FormLabel htmlFor="password">Password</FormLabel>
                <Field
                  mb={5}
                  as={Input}
                  id="password"
                  name="password"
                  type="password"
                  validate={validatePassword}
                  variant="formInput"
                />
                <FormErrorMessage>{errors.password}</FormErrorMessage>
              </FormControl>
              <FormButton
                text="Register"
                isDisabled={
                  values.password === "" ||
                  values.username === "" ||
                  values.password.length < 8 ||
                  values.email === "" ||
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(
                    values.email
                  )
                }
              />
            </VStack>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default RegisterForm;
