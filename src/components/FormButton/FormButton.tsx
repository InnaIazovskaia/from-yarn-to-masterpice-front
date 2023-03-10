import React from "react";
import { Button } from "@chakra-ui/react";

type FormButtonProps = {
  text: string;
  isdDisabled: boolean;
};

const FormButton = ({ text, isdDisabled }: FormButtonProps): JSX.Element => (
  <Button
    type="submit"
    size="lg"
    w="full"
    variant="formButton"
    isDisabled={isdDisabled}
  >
    {text}
  </Button>
);

export default FormButton;
