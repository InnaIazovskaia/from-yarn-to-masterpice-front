import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import LoginForm from "./LoginForm";

describe("Given a LoginForm component", () => {
  describe("Then it's rendered", () => {
    test("Then it should display heading 'Login'", () => {
      const headingText = "Login";

      render(<LoginForm />);

      const heading = screen.getByRole("heading", { name: headingText });

      expect(heading).toBeInTheDocument();
    });

    test("Then it should display button with text 'Login'", () => {
      const text = "Login";

      render(<LoginForm />);

      const button = screen.getByRole("button", { name: text });

      expect(button).toBeInTheDocument();
    });

    test("Then it should display input with label 'Username'", () => {
      const labelText = "Username";

      render(<LoginForm />);

      const inputNode = screen.getByLabelText(labelText);

      expect(inputNode).toBeInTheDocument();
    });

    test("Then it should display input with label 'Password'", () => {
      const labelText = "Password";

      render(<LoginForm />);

      const inputNode = screen.getByLabelText(labelText);

      expect(inputNode).toBeInTheDocument();
    });
  });

  describe("When the user writes the text 'name' inside the Username input", () => {
    test("Then value of the input should be 'name'", async () => {
      const text = "name";
      const labelText = "Username";

      render(<LoginForm />);

      const usernameInput = screen.getByLabelText(labelText);
      await userEvent.type(usernameInput, text);

      expect(usernameInput).toHaveValue(text);
    });
  });

  describe("When the user writes the text 'password' inside the Password input", () => {
    test("Then value of the input should be 'password'", async () => {
      const text = "password";
      const labelText = "Password";

      render(<LoginForm />);

      const usernameInput = screen.getByLabelText(labelText);
      await userEvent.type(usernameInput, text);

      expect(usernameInput).toHaveValue(text);
    });
  });

  describe("When it's rendered and user don't enter text in inputs", () => {
    test("Then the form button shoud be disabled", () => {
      render(<LoginForm />);

      const button = screen.getByRole("button");

      expect(button).toBeDisabled();
    });
  });

  describe("When the user enter username 'Marta' and valid password with minimum 8 characters '123456789'", () => {
    test("Then the form button should be enabled", async () => {
      const username = "Marta";
      const password = "123456789";
      const labelForUsername = "Username";
      const labelForPassword = "Password";

      render(<LoginForm />);

      const button = screen.getByRole("button");

      const usernameInput = screen.getByLabelText(labelForUsername);
      await userEvent.type(usernameInput, username);

      const passwordInput = screen.getByLabelText(labelForPassword);
      await userEvent.type(passwordInput, password);

      expect(button).not.toBeDisabled();
    });
  });
});
