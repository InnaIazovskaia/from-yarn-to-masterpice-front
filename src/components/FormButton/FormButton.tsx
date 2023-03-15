import { Button } from "@chakra-ui/react";

type FormButtonProps = {
  text: string;
  isDisabled: boolean;
};

const FormButton = ({ text, isDisabled }: FormButtonProps): JSX.Element => (
  <Button
    type="submit"
    size="lg"
    w="full"
    variant="formButton"
    isDisabled={isDisabled}
  >
    {text}
  </Button>
);

export default FormButton;
