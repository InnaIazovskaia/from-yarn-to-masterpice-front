import { describe, expect, it } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import RegisterForm from "./RegisterForm";
import { BrowserRouter } from "react-router-dom";

describe("Given a RegisterForm component", () => {
  const labelTextForPasswordInput = "Password";
  const labelTextForUsernameInput = "Username";
  const labelTextForEmailInput = "Email";
  const message = "";

  describe("When it's rendered", () => {
    it("Then it should display button with text 'Login'", () => {
      const text = "Register";

      render(
        <BrowserRouter>
          <RegisterForm message={message} />
        </BrowserRouter>
      );

      const button = screen.getByRole("button", { name: text });

      expect(button).toBeInTheDocument();
    });

    it("Should display input with label 'Username'", () => {
      render(
        <BrowserRouter>
          <RegisterForm message={message} />
        </BrowserRouter>
      );

      const userInput = screen.getByLabelText(labelTextForUsernameInput);

      expect(userInput).toBeInTheDocument();
    });

    it("Should display input with label 'Password'", () => {
      render(
        <BrowserRouter>
          <RegisterForm message={message} />
        </BrowserRouter>
      );

      const passwordInput = screen.getByLabelText(labelTextForPasswordInput);

      expect(passwordInput).toBeInTheDocument();
    });

    it("Should display input with label 'Email'", () => {
      render(
        <BrowserRouter>
          <RegisterForm message={message} />
        </BrowserRouter>
      );

      const emailInput = screen.getByLabelText(labelTextForEmailInput);

      expect(emailInput).toBeInTheDocument();
    });
  });

  describe("When the user writes the text 'name' inside the Username input", () => {
    it("Then value of the input should be 'name'", async () => {
      const text = "name";

      render(
        <BrowserRouter>
          <RegisterForm message={message} />
        </BrowserRouter>
      );

      const usernameInput = screen.getByLabelText(labelTextForUsernameInput);
      await waitFor(async () => userEvent.type(usernameInput, text));

      expect(usernameInput).toHaveValue(text);
    });
  });

  describe("When the user writes the text 'password' inside the Password input", () => {
    it("Then value of the input should be 'password'", async () => {
      const text = "password";

      render(
        <BrowserRouter>
          <RegisterForm message={message} />
        </BrowserRouter>
      );

      const passwordInput = screen.getByLabelText(labelTextForPasswordInput);
      await waitFor(async () => userEvent.type(passwordInput, text));

      expect(passwordInput).toHaveValue(text);
    });
  });

  describe("When the user writes the text 'email@mail.com' inside the Email input", () => {
    it("Then value of the input should be 'email@mail.com'", async () => {
      const text = "email@mail.com";

      render(
        <BrowserRouter>
          <RegisterForm message={message} />
        </BrowserRouter>
      );

      const emailInput = screen.getByLabelText(labelTextForEmailInput);
      await waitFor(async () => userEvent.type(emailInput, text));

      expect(emailInput).toHaveValue(text);
    });
  });

  describe("When the user start to type in input for username, but doesn't enter anything", () => {
    it("Should show error message 'Username is required'", async () => {
      const expectedErroreMessage = "Username is required";

      render(
        <BrowserRouter>
          <RegisterForm message={message} />
        </BrowserRouter>
      );

      const usernameInput = screen.getByLabelText(labelTextForUsernameInput);

      await waitFor(async () => {
        usernameInput.focus();
        await userEvent.tab();
      });

      const errorMessage = screen.getByText(expectedErroreMessage);

      expect(errorMessage).toBeInTheDocument();
    });
  });

  describe("When the user start to type in input for password, but doesn't enter anything", () => {
    it("Should show error message 'Password is required'", async () => {
      const expectedErroreMessage = "Password is required";

      render(
        <BrowserRouter>
          <RegisterForm message={message} />
        </BrowserRouter>
      );

      const passwordInput = screen.getByLabelText(labelTextForPasswordInput);

      await waitFor(async () => {
        passwordInput.focus();
        await userEvent.tab();
      });

      const errorMessage = screen.getByText(expectedErroreMessage);

      expect(errorMessage).toBeInTheDocument();
    });
  });

  describe("When the user start to type in input for email, but doesn't enter anything", () => {
    it("Should show error message 'Email is required'", async () => {
      const expectedErroreMessage = "Email is required";

      render(
        <BrowserRouter>
          <RegisterForm message={message} />
        </BrowserRouter>
      );

      const emailInput = screen.getByLabelText(labelTextForEmailInput);

      await waitFor(async () => {
        emailInput.focus();
        await userEvent.tab();
      });

      const errorMessage = screen.getByText(expectedErroreMessage);

      expect(errorMessage).toBeInTheDocument();
    });
  });

  describe("When it's rendered and the user doesn't enter text in inputs", () => {
    it("Then the form button shoud be disabled", () => {
      render(
        <BrowserRouter>
          <RegisterForm message={message} />
        </BrowserRouter>
      );

      const button = screen.getByRole("button");

      expect(button).toBeDisabled();
    });
  });
});
