import { afterEach, describe, expect, it } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import FormButton from "./FormButton";

describe("Given a FormButton component", () => {
  afterEach(cleanup);

  const text = "Login";
  const isDisabled = true;

  describe("When it receives 'Login' as text", () => {
    it("Should render button with text 'Login'", () => {
      render(<FormButton text={text} isDisabled={isDisabled} />);

      const button = screen.getByRole("button", { name: text });

      expect(button).toBeInTheDocument();
    });
  });

  describe("When it receives true as isDisabled", () => {
    it("Should be disabled", () => {
      render(<FormButton text={text} isDisabled={isDisabled} />);

      const button = screen.getByRole("button");

      expect(button).toBeDisabled();
    });
  });

  describe("When it's rendered", () => {
    it("Should always match with snapshot", () => {
      const { container } = render(
        <FormButton text={text} isDisabled={isDisabled} />
      );

      expect(container).toMatchSnapshot();
    });
  });
});
