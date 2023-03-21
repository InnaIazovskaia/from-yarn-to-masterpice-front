import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Footer from "./Footer";

describe("Given a Footer component", () => {
  describe("When it's rendered", () => {
    it("Should show text 'Made by Inna Iazovskaia'", () => {
      const expectedText = "Made by Inna Iazovskaia";

      render(<Footer />);

      const text = screen.getByText(expectedText);

      expect(text).toBeInTheDocument();
    });

    it("Should show text 'All questions about the master classes and patterns you can send to email'", () => {
      const expectedText =
        "All questions about the master classes and patterns you can send to email";

      render(<Footer />);

      const text = screen.getByText(expectedText);

      expect(text).toBeInTheDocument();
    });

    it("Should show", () => {
      render(<Footer />);

      const link = screen.getByRole("link");

      expect(link).toBeInTheDocument();
    });
  });
});
