import React from "react";
import { render, screen } from "@testing-library/react";
import FormButton from "./FormButton";

describe("Given a FormButton component", () => {
  const text = "Login";
  const isDisabled = true;

  describe("When it receives 'Login' as text", () => {
    test("Then it should render button with text 'Login'", () => {
      render(<FormButton text={text} isdDisabled={isDisabled} />);

      const button = screen.getByRole("button", { name: text });

      expect(button).toBeInTheDocument();
    });
  });

  describe("When it receives true as isDisabled", () => {
    test("Then it should be disabled", () => {
      render(<FormButton text={text} isdDisabled={isDisabled} />);

      const button = screen.getByRole("button");

      expect(button).toBeDisabled();
    });
  });

  describe("When it's rendered'", () => {
    test("Then it should always match this snapshot", () => {
      const { container } = render(
        <FormButton text={text} isdDisabled={isDisabled} />
      );
      expect(container).toMatchSnapshot();
    });
  });
});
