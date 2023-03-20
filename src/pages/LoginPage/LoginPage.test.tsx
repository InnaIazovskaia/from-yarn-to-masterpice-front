import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import LoginPage from "./LoginPage";
import { BrowserRouter } from "react-router-dom";

describe("Given a LoginPage component", () => {
  describe("When it's rendered", () => {
    it("Should show heading 'LOGIN'", () => {
      const headingText = "LOGIN";

      render(
        <BrowserRouter>
          <LoginPage />
        </BrowserRouter>
      );

      const heading = screen.getByRole("heading", {
        level: 1,
        name: headingText,
      });

      expect(heading).toBeInTheDocument();
    });

    it("Should show link 'Create an account'", () => {
      const linkText = "Create an account";

      render(
        <BrowserRouter>
          <LoginPage />
        </BrowserRouter>
      );

      const link = screen.getByRole("link", { name: linkText });

      expect(link).toBeInTheDocument();
    });
  });
});
