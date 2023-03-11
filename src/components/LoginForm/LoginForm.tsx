import React from "react";
import {
  Box,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  VStack,
} from "@chakra-ui/react";
import { Formik, Field, Form } from "formik";
import { type UserCredentials } from "../../types";
import {
  validatePassword,
  validateUsername,
} from "../../utils/formsValidations";
import FormButton from "../FormButton/FormButton";

const LoginForm = (): JSX.Element => {
  const initialFormData: UserCredentials = {
    username: "",
    password: "",
  };

  let isDisabled: boolean;

  return (
    <Box p={[5, 10, 15]} rounded="md" w={["full", "md", "lg"]} mx="auto">
      <Formik
        initialValues={{
          ...initialFormData,
        }}
        onSubmit={(values, { resetForm }) => {
          resetForm();
        }}
      >
        {({ errors, touched, values }) => (
          <Form>
            <VStack spacing={5} align="flex-start" w="full">
              <Heading w="full" textAlign="center">
                Login
              </Heading>
              <FormControl
                isInvalid={Boolean(errors.username) && touched.username}
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
              <FormControl
                isInvalid={Boolean(errors.password) && touched.password}
              >
                <FormLabel htmlFor="password">Password</FormLabel>
                <Field
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
                text="Login"
                isdDisabled={
                  (values.password === "" ||
                    values.username === "" ||
                    values.password.length < 8) &&
                  errors.password !== "" &&
                  errors.username !== ""
                }
              />
            </VStack>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default LoginForm;
