import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import App from "./App";

describe("Given a App component", () => {
  describe("When it's rendered", () => {
    it("Should show navbar", () => {
      render(
        <BrowserRouter>
          <App />
        </BrowserRouter>
      );

      const navBar = screen.getByRole("navigation");

      expect(navBar).toBeInTheDocument();
    });

    it("Should show text 'Made by Inna Iazovskaia'", () => {
      const expectedText = "Made by Inna Iazovskaia";

      render(
        <BrowserRouter>
          <App />
        </BrowserRouter>
      );

      const text = screen.getByText(expectedText);

      expect(text).toBeInTheDocument();
    });

    it("Should show text 'from yarn to masterpiece'", () => {
      const expectedText = "from yarn to masterpiece";

      render(
        <BrowserRouter>
          <App />
        </BrowserRouter>
      );

      const text = screen.getByText(expectedText);

      expect(text).toBeInTheDocument();
    });
  });
});
