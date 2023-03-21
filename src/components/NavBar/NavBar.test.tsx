import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import NavBar from "./NavBar";

describe("Given the NavBar component", () => {
  describe("When it's rendered", () => {
    it("THen it should display links with text 'HOME', 'SHOP', 'ABOUT' and ''CONTACT", () => {
      const linkTextHome = "HOME";
      const linkTextPatterns = "PATTERNS";
      const linkTextAbout = "ABOUT";
      const linkTextContact = "CONTACT";

      render(
        <BrowserRouter>
          <NavBar />
        </BrowserRouter>
      );

      const homeLink = screen.getByRole("link", { name: linkTextHome });
      const patternsLink = screen.getByRole("link", { name: linkTextPatterns });
      const aboutLink = screen.getByRole("link", { name: linkTextAbout });
      const contactLink = screen.getByRole("link", { name: linkTextContact });

      expect(homeLink).toBeInTheDocument();
      expect(patternsLink).toBeInTheDocument();
      expect(aboutLink).toBeInTheDocument();
      expect(contactLink).toBeInTheDocument();
    });

    it("Should render open menu button", () => {
      const buttonName = "Open Menu";

      render(
        <BrowserRouter>
          <NavBar />
        </BrowserRouter>
      );

      const openMenuButton = screen.getByRole("button", { name: buttonName });

      expect(openMenuButton).toBeInTheDocument();
    });
  });

  describe("When the user clicks the OpenMenu button", () => {
    it("Should render 4 mobile links", async () => {
      const buttonName = "Open Menu";
      const linksName = "mobile links";

      render(
        <BrowserRouter>
          <NavBar />
        </BrowserRouter>
      );

      const openMenuButton = screen.getByRole("button", { name: buttonName });
      await userEvent.click(openMenuButton);

      const mobileLinks = screen.getAllByRole("link", { name: linksName });

      expect(mobileLinks).toHaveLength(4);
    });
  });
});
