import { afterEach, describe, expect, it } from "vitest";
import { cleanup, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import LoginForm from "./LoginForm";

describe("Given a LoginForm component", () => {
  afterEach(cleanup);
  const labelTextForPasswordInput = "Password";
  const labelTextForUsernameInput = "Username";

  describe("When it's rendered", () => {
    it("Then it should display button with text 'Login'", () => {
      const text = "Login";

      render(<LoginForm />);

      const button = screen.getByRole("button", { name: text });

      expect(button).toBeInTheDocument();
    });

    it("Should display input with label 'Username'", () => {
      const labelText = "Username";

      render(<LoginForm />);

      const inputNode = screen.getByLabelText(labelText);

      expect(inputNode).toBeInTheDocument();
    });

    it("Should display input with label 'Password'", () => {
      const labelText = "Password";

      render(<LoginForm />);

      const inputNode = screen.getByLabelText(labelText);

      expect(inputNode).toBeInTheDocument();
    });
  });

  describe("When the user writes the text 'name' inside the Username input", () => {
    it("Then value of the input should be 'name'", async () => {
      const text = "name";

      render(<LoginForm />);

      const usernameInput = screen.getByLabelText(labelTextForUsernameInput);
      await userEvent.type(usernameInput, text);

      expect(usernameInput).toHaveValue(text);
    });
  });

  describe("When the user writes the text 'password' inside the Password input", () => {
    it("Then value of the input should be 'password'", async () => {
      const text = "password";

      render(<LoginForm />);

      const passwordInput = screen.getByLabelText(labelTextForPasswordInput);
      await userEvent.type(passwordInput, text);

      expect(passwordInput).toHaveValue(text);
    });
  });

  describe("When the user start to type in input for username, but doesn't enter anything", () => {
    it("Should show error message 'Username is required'", async () => {
      const expectedErroreMessage = "Username is required";

      render(<LoginForm />);

      const usernameInput = screen.getByLabelText(labelTextForUsernameInput);
      usernameInput.focus();
      await userEvent.tab();

      const errorMessage = screen.getByText(expectedErroreMessage);

      await waitFor(() => {
        expect(errorMessage).toBeInTheDocument();
      });
    });
  });

  describe("When the user start to type in input for password, but doesn't enter anything", () => {
    it("Should show error message 'Password is required'", async () => {
      const expectedErroreMessage = "Password is required";

      render(<LoginForm />);

      const passwordInput = screen.getByLabelText(labelTextForPasswordInput);
      passwordInput.focus();
      await userEvent.tab();

      const errorMessage = screen.getByText(expectedErroreMessage);

      await waitFor(() => {
        expect(errorMessage).toBeInTheDocument();
      });
    });
  });

  describe("When it's rendered and the user doesn't enter text in inputs", () => {
    it("Then the form button shoud be disabled", () => {
      render(<LoginForm />);

      const button = screen.getByRole("button");

      expect(button).toBeDisabled();
    });
  });
});
