import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import Layout from "./Layout";

describe("Given a Layout component", () => {
  describe("When it's rendered", () => {
    it("Should show a header with logo with alt text 'Logo' and text 'from yarn to masterpiece'", () => {
      const expectedText = "from yarn to masterpiece";
      const logoAltText = "Logo";

      render(
        <BrowserRouter>
          <Layout />
        </BrowserRouter>
      );

      const text = screen.getByText(expectedText);
      const logo = screen.getByRole("img", { name: logoAltText });

      expect(text).toBeInTheDocument();
      expect(logo).toBeInTheDocument();
    });

    it("Should show nav bar", () => {
      render(
        <BrowserRouter>
          <Layout />
        </BrowserRouter>
      );

      const navBar = screen.getByRole("navigation");

      expect(navBar).toBeInTheDocument();
    });

    it("Should render main", () => {
      render(
        <BrowserRouter>
          <Layout />
        </BrowserRouter>
      );

      const main = screen.getByRole("main");

      expect(main).toBeInTheDocument();
    });

    it("Should show footer with text 'Made by Inna Iazovskaia'", () => {
      const expectedText = "Made by Inna Iazovskaia";

      render(
        <BrowserRouter>
          <Layout />
        </BrowserRouter>
      );

      const text = screen.getByText(expectedText);

      expect(text).toBeInTheDocument();
    });
  });
});
