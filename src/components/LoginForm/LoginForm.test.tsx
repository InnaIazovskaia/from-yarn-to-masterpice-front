import { render, screen, waitFor } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import userEvent from "@testing-library/user-event";
import LoginForm from "./LoginForm";
import { BrowserRouter } from "react-router-dom";

describe("Given a LoginForm component", () => {
  const labelTextForPasswordInput = "Password";
  const labelTextForUsernameInput = "Username";
  const message = "";

  describe("When it's rendered", () => {
    it("Then it should display button with text 'Login'", () => {
      const text = "Login";

      render(
        <BrowserRouter>
          <LoginForm message={message} />
        </BrowserRouter>
      );

      const button = screen.getByRole("button", { name: text });

      expect(button).toBeInTheDocument();
    });

    it("Should display input with label 'Username'", () => {
      const labelText = "Username";

      render(
        <BrowserRouter>
          <LoginForm message={message} />
        </BrowserRouter>
      );

      const inputNode = screen.getByLabelText(labelText);

      expect(inputNode).toBeInTheDocument();
    });

    it("Should display input with label 'Password'", () => {
      const labelText = "Password";

      render(
        <BrowserRouter>
          <LoginForm message={message} />
        </BrowserRouter>
      );

      const inputNode = screen.getByLabelText(labelText);

      expect(inputNode).toBeInTheDocument();
    });
  });

  describe("When the user writes the text 'name' inside the Username input", () => {
    it("Then value of the input should be 'name'", async () => {
      const text = "name";

      render(
        <BrowserRouter>
          <LoginForm message={message} />
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
          <LoginForm message={message} />
        </BrowserRouter>
      );

      const passwordInput = screen.getByLabelText(labelTextForPasswordInput);
      await waitFor(async () => userEvent.type(passwordInput, text));

      expect(passwordInput).toHaveValue(text);
    });
  });

  describe("When the user start to type in input for username, but doesn't enter anything", () => {
    it("Should show error message 'Username is required'", async () => {
      const expectedErroreMessage = "Username is required";

      render(
        <BrowserRouter>
          <LoginForm message={message} />
        </BrowserRouter>
      );

      const usernameInput = screen.getByLabelText(labelTextForUsernameInput);
      await waitFor(async () => {
        usernameInput.focus();
        await userEvent.tab();
      });

      const errorMessage = screen.getByText(expectedErroreMessage);

      await waitFor(() => {
        expect(errorMessage).toBeInTheDocument();
      });
    });
  });

  describe("When the user start to type in input for password, but doesn't enter anything", () => {
    it("Should show error message 'Password is required'", async () => {
      const expectedErroreMessage = "Password is required";

      render(
        <BrowserRouter>
          <LoginForm message={message} />
        </BrowserRouter>
      );

      const passwordInput = screen.getByLabelText(labelTextForPasswordInput);
      await waitFor(async () => {
        passwordInput.focus();
        await userEvent.tab();
      });

      const errorMessage = screen.getByText(expectedErroreMessage);

      await waitFor(() => {
        expect(errorMessage).toBeInTheDocument();
      });
    });
  });

  describe("When it's rendered and the user doesn't enter text in inputs", () => {
    it("Then the form button shoud be disabled", () => {
      render(
        <BrowserRouter>
          <LoginForm message={message} />
        </BrowserRouter>
      );

      const button = screen.getByRole("button");

      expect(button).toBeDisabled();
    });
  });
});
