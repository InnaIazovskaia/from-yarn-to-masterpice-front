import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import RegisterPage from "./RegisterPage";

describe("Given a RegisterPage component", () => {
  describe("When it's rendered", () => {
    it("Should show heading 'REGISTER'", () => {
      const headingText = "REGISTER";

      render(
        <BrowserRouter>
          <RegisterPage />
        </BrowserRouter>
      );

      const heading = screen.getByRole("heading", {
        level: 1,
        name: headingText,
      });

      expect(heading).toBeInTheDocument();
    });

    it("Should show link 'Create an account'", () => {
      const linkText = "Log in";

      render(
        <BrowserRouter>
          <RegisterPage />
        </BrowserRouter>
      );

      const link = screen.getByRole("link", { name: linkText });

      expect(link).toBeInTheDocument();
    });

    it("Should show text 'Already a member?'", () => {
      const expectedText = "Already a member?";

      render(
        <BrowserRouter>
          <RegisterPage />
        </BrowserRouter>
      );

      const text = screen.getByText(expectedText);

      expect(text).toBeInTheDocument();
    });
  });
});
